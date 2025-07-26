import 'package:on_chain_wallet/app/live_listener/live.dart';
import 'package:on_chain_wallet/wallet/wallet.dart';

mixin MoneroWeb3TransactionApiController on DisposableMixin {
  MoneroClient get client;
  WalletMoneroNetwork get network;
}
