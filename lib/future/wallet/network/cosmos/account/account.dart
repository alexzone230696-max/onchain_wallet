import 'package:flutter/material.dart';
import 'package:on_chain_wallet/future/router/page_router.dart';
import 'package:on_chain_wallet/future/state_managment/state_managment.dart';
import 'package:on_chain_wallet/future/wallet/global/global.dart';
import 'package:on_chain_wallet/future/wallet/network/cosmos/transaction/operations/ibc.dart';
import 'package:on_chain_wallet/future/wallet/network/cosmos/transaction/operations/transfer.dart';
import 'package:on_chain_wallet/future/widgets/custom_widgets.dart';
import 'package:on_chain_wallet/wallet/wallet.dart';

class CosmosAccountPageView extends StatelessWidget {
  const CosmosAccountPageView({required this.chainAccount, super.key});
  final CosmosChain chainAccount;
  @override
  Widget build(BuildContext context) {
    return TabBarView(physics: WidgetConstant.noScrollPhysics, children: [
      _CosmosAccountPageView(chainAccount),
      AccountTokensView(
          account: chainAccount,
          transferBuilder: (p0) {
            return CosmosTransactionTransferOperation(
                walletProvider: context.wallet,
                account: chainAccount,
                address: chainAccount.address);
          }),
      AccountTransactionActivityView(chainAccount)
    ]);
  }
}

class _CosmosAccountPageView extends StatelessWidget {
  const _CosmosAccountPageView(this.chainAccount);
  final CosmosChain chainAccount;

  @override
  Widget build(BuildContext context) {
    return AccountTabbarScrollWidget(slivers: [
      AccountManageProviderIcon(service: chainAccount.service),
      SliverToBoxAdapter(
        child: Column(children: [
          AppListTile(
            title: Text("ibc_transfer".tr),
            subtitle: Text("ibc_desc".tr),
            trailing: const Icon(Icons.arrow_forward),
            onTap: () {
              final operation = CosmosTransactionIbcTransferOperation(
                  walletProvider: context.wallet,
                  account: chainAccount,
                  address: chainAccount.address);
              context.to(PageRouter.transaction, argruments: operation);
            },
          )
        ]),
      )
    ]);
  }
}
