import 'dart:async';
import 'package:blockchain_utils/helper/extensions/extensions.dart';
import 'package:on_chain/on_chain.dart';
import 'package:on_chain_wallet/app/error/exception/wallet_ex.dart';
import 'package:on_chain_wallet/crypto/requets/messages/models/models/signing.dart';
import 'package:on_chain_wallet/future/wallet/network/cardano/transaction/controllers/memo.dart';
import 'package:on_chain_wallet/future/wallet/network/cardano/transaction/types/types.dart';
import 'package:on_chain_wallet/wallet/wallet.dart';
import 'package:on_chain_wallet/future/wallet/transaction/transaction.dart';
import 'certificate.dart';
import 'fee.dart';
import 'provider.dart';
import 'utxos.dart';

abstract class ADATransactionStateController
    extends BaseADATransactionController
    with
        ADATransactionApiController,
        ADATransactionFeeController,
        ADATransactionUtxosController,
        ADATransactionMemoController,
        ADATransactionCertificateController {
  Token get transferToken;
  late final ADAEpochParametersResponse _latestEpochParams;
  @override
  ADAEpochParametersResponse get latestEpochParams => _latestEpochParams;

  ADATransactionStateController(
      {required super.walletProvider,
      required super.account,
      required super.address});

  @override
  Future<IADASignedTransaction> signTransaction(IADATransaction transaction,
      {bool fakeSignature = false}) async {
    final signersAddresses = transaction.transaction.signers.immutable;
    final utxosOwner = transaction.transactionData.utxos
        .map((e) => e.address)
        .toSet()
        .toList();
    final signers = List.generate(signersAddresses.length, (i) {
      final signer = signersAddresses[i];
      return utxosOwner.firstWhere((e) {
        return e.networkAddress == signer || e.rewardAddress == signer;
      }, orElse: () => throw WalletExceptionConst.signerAccountNotFound);
    });
    final signerKeyIndexes = List.generate(signersAddresses.length, (i) {
      final address = signers[i];
      final signeraddress = signersAddresses[i];
      if (signeraddress.isRewardAddress) {
        if (!address.isRewardAddress && address.rewardKeyIndex == null) {
          throw WalletExceptionConst.signerAccountNotFound;
        }
        return address.rewardKeyIndex ?? address.keyIndex;
      }
      return address.keyIndex;
    });
    List<List<int>> signatures = [];
    final adaTransaction = await walletProvider.wallet.signTransaction(
        request: WalletSigningRequest(
      addresses: signers,
      network: network,
      sign: (generateSignature) {
        int index = 0;
        return transaction.transaction.signAndBuildTransactionAsync(
          ({required address, required digest}) async {
            final int addressIndex = index++;
            final keyIndex = signerKeyIndexes.elementAt(addressIndex);
            final signRequest = GlobalSignRequest.cardano(
                digest: digest, index: keyIndex.cast());
            final sig = await generateSignature(signRequest);
            signatures.add(sig.signature);
            final pubkey = AdaPublicKey.fromBytes(sig.signerPubKey.keyBytes());
            final ed25519Signature = Ed25519Signature(sig.signature);
            if (address.isByron) {
              return BootstrapWitness(
                  vkey: Vkey(pubkey.toBytes(false)),
                  signature: ed25519Signature,
                  chainCode: sig.signerPubKey.chainCodeBytes()!,
                  attributes:
                      address.cast<ADAByronAddress>().attributeSerialize());
            }
            return Vkeywitness(
                vKey: pubkey.toVerificationKey(), signature: ed25519Signature);
          },
        );
      },
    ));
    return IADASignedTransaction(
        transaction: transaction,
        signatures: signatures,
        finalTransactionData: adaTransaction.result);
  }

  @override
  Future<SubmitTransactionResult> submitTransaction(
      {required IADASignedTransaction signedTransaction}) async {
    final ser = signedTransaction.finalTransactionData.serialize();
    final txId = await client.broadcastTransaction(ser);
    return SubmitTransactionSuccess(
        txId: txId, signedTransaction: signedTransaction);
  }

  @override
  Future<void> initForm(CardanoClient client,
      {bool updateAccount = true}) async {
    await super.initForm(client, updateAccount: updateAccount);
    _latestEpochParams = await latestEpochProtocolParameters();
    getAccountsUtxos();
  }
}
