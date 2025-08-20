part of 'package:on_chain_wallet/wallet/models/chain/chain/chain.dart';

final class MoneroChain extends Chain<
    MoneroAPIProvider,
    MoneroNetworkParams,
    MoneroAddress,
    TokenCore,
    NFTCore,
    IMoneroAddress,
    WalletMoneroNetwork,
    MoneroClient,
    MoneroNetworkConfig,
    MoneroWalletTransaction,
    MoneroContact,
    MoneroNewAddressParams> with MoneroChainRepository, MoneroChainController {
  MoneroChain._(
      {required super.network,
      required super.addressIndex,
      required super.id,
      required super.config,
      required super.client,
      required super.addresses})
      : super._();
  @override
  MoneroChain copyWith({
    WalletMoneroNetwork? network,
    InternalStreamValue<IntegerBalance>? totalBalance,
    List<ChainAccount>? addresses,
    int? addressIndex,
    MoneroClient? client,
    String? id,
    MoneroNetworkConfig? config,
  }) {
    return MoneroChain._(
      network: network ?? this.network,
      addressIndex: addressIndex ?? _addressIndex,
      addresses: addresses?.cast<IMoneroAddress>() ?? _addresses,
      client: client ?? _client,
      id: id ?? this.id,
      config: config ?? this.config,
    );
  }

  factory MoneroChain.setup({
    required WalletMoneroNetwork network,
    required String id,
    MoneroClient? client,
  }) {
    return MoneroChain._(
        network: network,
        addressIndex: 0,
        id: id,
        client: client,
        config: MoneroNetworkConfig(),
        addresses: []);
  }

  factory MoneroChain.deserialize(
      {required WalletMoneroNetwork network,
      required CborListValue cbor,
      MoneroClient? client}) {
    final int networkId = cbor.elementAs(0);
    if (networkId != network.value) {
      throw WalletExceptionConst.incorrectNetwork;
    }
    final String id = cbor.elementAs<String>(2);
    final List<IMoneroAddress> accounts = cbor
        .elementAsListOf<CborTagValue>(3)
        .map((e) => IMoneroAddress.deserialize(network, obj: e))
        .toList();
    final int addressIndex = cbor.elementAs(4);
    final config = MoneroNetworkConfig.deserialize(
        object: cbor.elementAs<CborTagValue>(5));
    return MoneroChain._(
      network: network,
      addresses: accounts,
      addressIndex: addressIndex,
      client: client,
      id: id,
      config: config,
    );
  }

  @override
  Future<void> updateTokenBalance(
      {required IMoneroAddress address,
      required List<TokenCore<BalanceCore<dynamic, APPToken>, APPToken>>
          tokens}) {
    throw UnimplementedError();
  }
}
