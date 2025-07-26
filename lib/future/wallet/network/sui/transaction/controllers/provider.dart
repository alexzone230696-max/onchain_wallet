import 'package:on_chain/sui/src/address/address/address.dart';
import 'package:on_chain/sui/src/rpc/models/types/types.dart';
import 'package:on_chain_wallet/app/live_listener/live.dart';
import 'package:on_chain_wallet/wallet/api/client/networks/sui/client/client.dart';
import 'package:on_chain_wallet/wallet/models/others/models/cached_object.dart';

mixin SuiTransactionApiController on DisposableMixin {
  SuiClient get client;
  final CachedObject<BigInt> _cachedGasPrice =
      CachedObject<BigInt>(interval: const Duration(minutes: 2));
  final Map<SuiAddress, CachedObject<List<SuiApiCoinResponse>>> _accountsCoins =
      {};
  Future<List<SuiApiCoinResponse>> getAccountCoins(SuiAddress address,
      {Duration? cachedTimeout}) async {
    final cached = _accountsCoins[address] ??=
        CachedObject<List<SuiApiCoinResponse>>(
            interval: const Duration(minutes: 2));
    return cached.get(
        onFetch: () async => await client.getAccountCoins(address),
        cachedTimeout: cachedTimeout);
  }

  Future<BigInt> getGasPrice() async {
    return _cachedGasPrice.get(onFetch: () async => await client.getGasPrice());
  }

  @override
  void dispose() {
    super.dispose();
    _accountsCoins.clear();
  }
}
