import 'dart:js_interop';

import 'package:on_chain_bridge/web/web.dart';
import 'package:on_chain_wallet/app/core.dart';

import 'js_wallet/constant/constant.dart';
import 'js_wallet/js_wallet.dart';

void main(List<String> args) async {
  Logg.error("is new build BBB");
  final pageController = JSPageController.setup();
  onChain = OnChainWallet(JSObject());
  bool inited = false;
  void onActivation(CustomEvent data) {
    if (inited) return;
    final event = (data.detail as WalletMessage).data as WalletMessageResponse;
    if (event.statusType == JSWalletResponseType.failed) {
      pageController.disable(event.data as JSWalletError);
      return;
    }
    inited = true;
    jsWindow.addEventListener(
        JSWalletConstant.activationEventName, onActivation.toJS);
    pageController.initClients(event.asString());
  }

  jsWindow.addEventListener(
      JSWalletConstant.activationEventName, onActivation.toJS);
}
