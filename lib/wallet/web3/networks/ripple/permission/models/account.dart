import 'package:blockchain_utils/blockchain_utils.dart';
import 'package:on_chain_wallet/app/serialization/cbor/cbor.dart';
import 'package:on_chain_wallet/crypto/models/networks.dart';
import 'package:on_chain_wallet/wallet/constant/tags/constant.dart';
import 'package:on_chain_wallet/wallet/models/chain/account.dart';
import 'package:on_chain_wallet/wallet/web3/core/permission/types/account.dart';
import 'package:on_chain_wallet/crypto/keys/access/crypto_keys/crypto_keys.dart';
import 'package:xrpl_dart/xrpl_dart.dart';

class Web3XRPChainAccount extends Web3ChainAccount<XRPAddress> {
  @override
  final int id;
  final List<int>? publicKey;
  Web3XRPChainAccount(
      {required super.keyIndex,
      required super.address,
      required super.defaultAddress,
      required this.id,
      this.publicKey});
  @override
  Web3XRPChainAccount clone({
    AddressDerivationIndex? keyIndex,
    XRPAddress? address,
    bool? defaultAddress,
    int? id,
    List<int>? publicKey,
  }) {
    return Web3XRPChainAccount(
        keyIndex: keyIndex ?? this.keyIndex,
        address: address ?? this.address,
        defaultAddress: defaultAddress ?? this.defaultAddress,
        id: id ?? this.id,
        publicKey: publicKey ?? this.publicKey);
  }

  factory Web3XRPChainAccount.fromChainAccount(
      {required IXRPAddress address,
      required int id,
      required bool isDefault}) {
    return Web3XRPChainAccount(
        keyIndex: address.keyIndex,
        address: address.networkAddress,
        id: id,
        defaultAddress: isDefault,
        publicKey: address.multiSigAccount
            ? null
            : address.toXRPPublicKey().toBytes());
  }

  factory Web3XRPChainAccount.deserialize(
      {List<int>? bytes, CborObject? object, String? hex}) {
    final CborListValue values = CborSerializable.cborTagValue(
        object: object,
        cborBytes: bytes,
        hex: hex,
        tags: CborTagsConst.web3XRPAccount);
    return Web3XRPChainAccount(
        keyIndex: AddressDerivationIndex.deserialize(obj: values.getCborTag(0)),
        address: XRPAddress(values.elementAt(1)),
        id: values.elementAt(2),
        defaultAddress: values.elementAt(3),
        publicKey: values.elementAs(4));
  }

  @override
  CborTagValue toCbor() {
    return CborTagValue(
        CborListValue.fixedLength([
          keyIndex.toCbor(),
          address.address,
          id,
          defaultAddress,
          publicKey
        ]),
        CborTagsConst.web3XRPAccount);
  }

  @override
  String get addressStr => address.address;
}

class Web3XRPChainAuthenticated
    extends Web3ChainAuthenticated<Web3XRPChainAccount> {
  @override
  final List<Web3ChainDefaultIdnetifier> networks;
  @override
  final Web3ChainDefaultIdnetifier currentNetwork;
  Web3XRPChainAuthenticated({
    required super.accounts,
    required this.currentNetwork,
    required List<Web3ChainDefaultIdnetifier> networks,
  })  : networks = networks.immutable,
        super(networkType: NetworkType.xrpl);

  factory Web3XRPChainAuthenticated.deserialize(
      {List<int>? bytes, CborObject? object, String? hex}) {
    final CborListValue values = CborSerializable.cborTagValue(
        object: object, cborBytes: bytes, hex: hex, tags: NetworkType.xrpl.tag);
    return Web3XRPChainAuthenticated(
      accounts: values
          .elementAsListOf<CborTagValue>(0)
          .map((e) => Web3XRPChainAccount.deserialize(object: e))
          .toList(),
      networks: values
          .elementAsListOf<CborTagValue>(1)
          .map((e) => Web3ChainDefaultIdnetifier.deserialize(object: e))
          .toList(),
      currentNetwork: Web3ChainDefaultIdnetifier.deserialize(
          object: values.elementAs<CborTagValue>(2)),
    );
  }
}
