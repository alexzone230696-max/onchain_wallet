import 'package:blockchain_utils/helper/extensions/extensions.dart';
import 'package:on_chain_wallet/app/live_listener/live.dart';
import 'package:on_chain_wallet/crypto/requets/messages/models/models/signing.dart';
import 'package:on_chain_wallet/future/wallet/controller/controller.dart';
import 'package:on_chain_wallet/wallet/wallet.dart';
import 'package:stellar_dart/stellar_dart.dart';

mixin StellarTransactionSignerController on DisposableMixin {
  WalletStellarNetwork get network;
  WalletProvider get walletProvider;
  Future<TransactionV1Envelope> signTransactionInternal(
      {required IStellarAddress address,
      required StellarTransactionV1 transaction}) async {
    final payload = TransactionSignaturePayload(
        taggedTransaction: transaction,
        networkId: network.coinParam.stellarChainType.passphraseHash);
    final List<int> digest = payload.txHash().asImmutableBytes;
    final request = WalletSigningRequest(
        addresses: [address],
        network: network,
        sign: (sign) async {
          final request = GlobalSignRequest.stellar(
              digest: digest, index: address.keyIndex.cast());
          final signature = await sign(request);
          final signerPubkey = signature.signerPubKey.keyBytes();
          final keyHint = signerPubkey.sublist(
              signerPubkey.length - StellarConst.stellarPubkeyHintLength);
          return [
            DecoratedSignature(hint: keyHint, signature: signature.signature)
          ];
        });
    final result =
        await walletProvider.wallet.signTransaction(request: request);
    return TransactionV1Envelope(tx: transaction, signatures: result.result);
  }
}
