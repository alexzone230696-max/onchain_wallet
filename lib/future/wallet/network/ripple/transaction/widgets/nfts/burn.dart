import 'package:flutter/material.dart';
import 'package:on_chain_wallet/future/widgets/custom_widgets.dart';
import 'package:on_chain_wallet/future/state_managment/state_managment.dart';
import 'package:on_chain_wallet/future/wallet/network/ripple/transaction/operations/nfts/burn_token.dart';
import 'package:on_chain_wallet/future/wallet/network/ripple/transaction/widgets/memo/memo.dart';
import 'package:on_chain_wallet/future/wallet/transaction/transaction.dart';
import 'package:on_chain_wallet/wallet/constant/networks/ripple.dart';

class RippleTransactionNFTokenBurnWidget extends StatelessWidget {
  final RippleTransactionNFTokenBurnOperation form;
  const RippleTransactionNFTokenBurnWidget({required this.form, super.key});

  @override
  Widget build(BuildContext context) {
    return MultiSliver(children: [
      LiveFormWidgetString(
          maxLength: RippleConst.rippleTranactionHashLength,
          minLength: RippleConst.rippleTranactionHashLength,
          onUpdateValue: form.onUpdateNFTokenId,
          field: form.nftokenId,
          fieldName: "ripple_nftoken_burn_fields".tr),
      WidgetConstant.height20,
      LiveFormWidgetReceiverAddress(
          field: form.owner,
          account: form.account,
          removable: true,
          onUpdateAddress: form.onUpdateOwner),
      WidgetConstant.height20,
      RippleTransactionMemoWidget(controller: form),
      WidgetConstant.height20,
      TransactionFeeView(
          controller: form, onRetryFeeEstimate: form.estimateFee),
      TransactionStateSendTransaction(controller: form)
    ]);
  }
}
