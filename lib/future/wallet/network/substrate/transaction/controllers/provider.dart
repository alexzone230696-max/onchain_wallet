import 'package:on_chain_wallet/app/live_listener/live.dart';
import 'package:on_chain_wallet/wallet/wallet.dart';
import 'package:polkadot_dart/polkadot_dart.dart';

mixin SubstrateTransactionApiController on DisposableMixin {
  SubstrateClient get client;
  final CachedObject<SubstrateBlockWithEra> _blockWithEra =
      CachedObject(interval: const Duration(seconds: 30));

  Future<SubstrateBlockWithEra> finalizeBlockWithEra() async {
    return await _blockWithEra.get(
        onFetch: () async => await client.finalizeBlockWithEra());
  }

  Future<int> getAccountNonce(BaseSubstrateAddress address) async {
    final storage =
        await client.api.getAccount(address: address, rpc: client.provider);
    return storage.nonce;
  }
}
