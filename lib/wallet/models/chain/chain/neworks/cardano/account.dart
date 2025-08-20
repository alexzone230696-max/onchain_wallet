part of 'package:on_chain_wallet/wallet/models/chain/chain/chain.dart';

class ADANetworkStorageId extends DefaultNetworkStorageId {
  static const ADANetworkStorageId utxos = ADANetworkStorageId(11);
  // static const ADANetworkStorageId utxosOutput = ADANetworkStorageId(12);
  const ADANetworkStorageId(super.storageId);
  static const List<DefaultNetworkStorageId> values = [
    ...DefaultNetworkStorageId.values,
    utxos,
  ];
  // @override
  // bool get isSharedStorage => false;
}

class ADANetworkConfig extends DefaultNetworkConfig<ADANetworkStorageId> {
  ADANetworkConfig(
      {super.supportToken = false,
      super.supportNft = false,
      super.supportWeb3 = true});

  @override
  List<DefaultNetworkStorageId> get storageKeys => ADANetworkStorageId.values;

  @override
  CborTagValue toCbor() {
    return CborTagValue(
        CborSerializable.fromDynamic([]), CborTagsConst.cardanoChainConfig);
  }
}

final class ADAChain extends Chain<
    CardanoAPIProvider,
    CardanoNetworkParams,
    ADAAddress,
    TokenCore,
    NFTCore,
    ICardanoAddress,
    WalletCardanoNetwork,
    ADAClient,
    ADANetworkConfig,
    ADAWalletTransaction,
    CardanoContact,
    BaseCardanoNewAddressParams> with ADAChainRepository, ADAChainController {
  ADAChain._({
    required super.network,
    required super.addressIndex,
    required super.id,
    required super.config,
    required super.client,
    required super.addresses,
  }) : super._();
  @override
  ADAChain copyWith({
    WalletCardanoNetwork? network,
    List<ChainAccount>? addresses,
    int? addressIndex,
    ADAClient? client,
    String? id,
    ADANetworkConfig? config,
  }) {
    return ADAChain._(
        network: network ?? this.network,
        addressIndex: addressIndex ?? _addressIndex,
        addresses: addresses?.cast<ICardanoAddress>() ?? _addresses,
        client: client ?? _client,
        id: id ?? this.id,
        config: config ?? this.config);
  }

  factory ADAChain.setup(
      {required WalletCardanoNetwork network,
      required String id,
      ADAClient? client}) {
    return ADAChain._(
        network: network,
        addressIndex: 0,
        id: id,
        client: client,
        addresses: [],
        config: ADANetworkConfig());
  }

  factory ADAChain.deserialize(
      {required WalletCardanoNetwork network,
      required CborListValue cbor,
      ADAClient? client}) {
    final int networkId = cbor.elementAs(0);
    if (networkId != network.value) {
      throw WalletExceptionConst.incorrectNetwork;
    }
    final String id = cbor.elementAs<String>(2);
    final List<ICardanoAddress> accounts = cbor
        .elementAsListOf<CborTagValue>(3)
        .map((e) => ICardanoAddress.deserialize(network, obj: e))
        .toList();
    final int addressIndex = cbor.elementAs(4);
    return ADAChain._(
        network: network,
        addresses: accounts,
        addressIndex: addressIndex,
        client: client,
        id: id,
        config: ADANetworkConfig());
  }

  @override
  Future<void> updateTokenBalance(
      {required ICardanoAddress address,
      required List<TokenCore<BalanceCore<dynamic, APPToken>, APPToken>>
          tokens}) async {
    throw UnimplementedError();
  }

  @override
  Future<void> _initAddress(ICardanoAddress? address) async {
    if (address == null || !address._status.isInit) return;
    await super._initAddress(address);
    final utxos = await _getAddressUtxos(address);
    address._setAddressUtxos(utxos);
  }
}
