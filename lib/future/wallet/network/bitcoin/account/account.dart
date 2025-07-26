import 'package:flutter/material.dart';
import 'package:on_chain_wallet/future/state_managment/extension/extension.dart';
import 'package:on_chain_wallet/future/router/page_router.dart';
import 'package:on_chain_wallet/future/wallet/global/pages/select_provider.dart';
import 'package:on_chain_wallet/future/wallet/global/pages/transaction_activity.dart';
import 'package:on_chain_wallet/future/widgets/custom_widgets.dart';
import 'package:on_chain_wallet/wallet/models/chain/chain/chain.dart';

class BitcoinAccountPageView extends StatelessWidget {
  const BitcoinAccountPageView({super.key, required this.chainAccount});
  final BitcoinChain chainAccount;
  @override
  Widget build(BuildContext context) {
    return TabBarView(physics: WidgetConstant.noScrollPhysics, children: [
      _Services(chainAccount),
      AccountTransactionActivityView(chainAccount)
    ]);
  }
}

class _Services extends StatelessWidget {
  const _Services(this.account);
  final BitcoinChain account;
  @override
  Widget build(BuildContext context) {
    return AccountTabbarScrollWidget(
      slivers: [
        AccountManageProviderIcon(service: account.service),
        SliverToBoxAdapter(
          child: Column(
            children: [
              AppListTile(
                title: Text("multi_signature".tr),
                subtitle: Text("establishing_multi_sig_addr".tr),
                trailing: const Icon(Icons.arrow_forward),
                onTap: () {
                  context.to(PageRouter.setupBitcoinMultsig,
                      argruments: account);
                },
              )
            ],
          ),
        )
      ],
    );
  }
}
