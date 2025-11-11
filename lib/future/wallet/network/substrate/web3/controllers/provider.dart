import 'package:on_chain_wallet/app/live_listener/live.dart';
import 'package:on_chain_wallet/wallet/wallet.dart';

mixin SubstrateWeb3TransactionApiController on DisposableMixin {
  SubstrateClient get client;
}
