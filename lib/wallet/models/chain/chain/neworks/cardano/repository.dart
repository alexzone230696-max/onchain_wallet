part of 'package:on_chain_wallet/wallet/models/chain/chain/chain.dart';

base mixin ADAChainRepository on Chain<
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
    BaseCardanoNewAddressParams> {
  Future<ADAAddressUtxos> _getAddressUtxos(ICardanoAddress address) async {
    assert(address.network == network.value, "address does not exists");
    final storagekey = ADANetworkStorageId.utxos;
    final data = await _storage.queryNetworkStorage(
        address: address, storage: storagekey);
    if (data == null) return ADAAddressUtxos();
    final accountInfo = MethodUtils.nullOnException(
        () => ADAAddressUtxos.deserialize(bytes: data));
    assert(accountInfo != null, 'tron account info deserialization failed.');
    return accountInfo ?? ADAAddressUtxos();
  }

  Future<void> _saveAddressUtxo(ICardanoAddress address) async {
    assert(address.network == network.value, "address does not exists");
    final storagekey = ADANetworkStorageId.utxos;
    await _storage.insertNetworkStorage(
        address: address, storage: storagekey, value: address._utxos);
  }
}
