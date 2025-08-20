part of 'package:on_chain_wallet/wallet/models/chain/chain/chain.dart';

class XRPChainConfig extends DefaultNetworkConfig {
  XRPChainConfig()
      : super(supportToken: true, supportNft: true, supportWeb3: true);
}

final class XRPChain extends Chain<
    RippleAPIProvider,
    RippleNetworkParams,
    XRPAddress,
    RippleIssueToken,
    RippleNFToken,
    IXRPAddress,
    WalletXRPNetwork,
    XRPClient,
    XRPChainConfig,
    XRPWalletTransaction,
    RippleContact,
    RippleNewAddressParams> {
  XRPChain._({
    required super.network,
    required super.addressIndex,
    required super.id,
    XRPChainConfig? config,
    required super.client,
    required super.addresses,
  }) : super._(config: config ?? XRPChainConfig());
  @override
  XRPChain copyWith({
    WalletXRPNetwork? network,
    List<ChainAccount>? addresses,
    List<ContactCore<XRPAddress>>? contacts,
    int? addressIndex,
    XRPClient? client,
    String? id,
    XRPChainConfig? config,
  }) {
    return XRPChain._(
        network: network ?? this.network,
        addressIndex: addressIndex ?? _addressIndex,
        addresses: addresses?.cast<IXRPAddress>() ?? _addresses,
        client: client ?? _client,
        id: id ?? this.id,
        config: config ?? this.config);
  }

  factory XRPChain.setup(
      {required WalletXRPNetwork network,
      required String id,
      XRPClient? client}) {
    return XRPChain._(
        network: network,
        id: id,
        addressIndex: 0,
        client: client,
        addresses: []);
  }

  factory XRPChain.deserialize(
      {required WalletXRPNetwork network,
      required CborListValue cbor,
      XRPClient? client}) {
    final int networkId = cbor.elementAs(0);
    if (networkId != network.value) {
      throw WalletExceptionConst.incorrectNetwork;
    }
    final String id = cbor.elementAs<String>(2);
    final List<IXRPAddress> accounts = cbor
        .elementAsListOf<CborTagValue>(3)
        .map((e) => IXRPAddress.deserialize(network, obj: e))
        .toList();
    final int addressIndex = cbor.elementAs(4);
    return XRPChain._(
        network: network,
        addresses: accounts,
        addressIndex: addressIndex < 0 ? 0 : addressIndex,
        client: client,
        id: id);
  }

  @override
  IXRPAddress? getAddress(String address) {
    return super.getAddress(address) ??
        _addresses
            .firstWhereOrNull((element) => element.baseAddress == address);
  }

  @override
  Future<void> _updateAddressBalanceInternal(IXRPAddress address,
      {bool tokens = true}) async {
    await onClient(onConnect: (client) async {
      final balance = await client.getAccountBalance(address.networkAddress);
      address.address._updateAddressBalance(balance);
      if (tokens) {
        final tokens = address.tokens;
        if (tokens.isEmpty) return;
        final balances = await client.getAccountTokens(address.networkAddress);
        for (final i in tokens) {
          final currentUpdate = balances.firstWhereOrNull((element) =>
              element.issuer.address == i.issuer &&
              element.currency == i.assetCode);
          _updateTokenBalanceInternal(
              address: address,
              token: i,
              save: i._updateBalance(
                  BigRational.parseDecimal(currentUpdate?.balance ?? "0")));
        }
      }
    });
  }

  @override
  Future<void> updateTokenBalance(
      {required IXRPAddress address,
      required List<RippleIssueToken> tokens}) async {
    _isAccountAddress(address);
    await onClient(onConnect: (client) async {
      if (tokens.isEmpty) return;
      final balances = await client.getAccountTokens(address.networkAddress);
      for (final i in tokens) {
        final currentUpdate = balances.firstWhereOrNull((element) =>
            element.issuer.address == i.issuer &&
            element.currency == i.assetCode);
        _updateTokenBalanceInternal(
            address: address,
            token: i,
            save: i._updateBalance(
                BigRational.parseDecimal(currentUpdate?.balance ?? "0")));
      }
    });
  }
}
