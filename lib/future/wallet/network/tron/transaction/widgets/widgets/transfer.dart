import 'package:flutter/material.dart';
import 'package:on_chain_wallet/future/widgets/custom_widgets.dart';
import 'package:on_chain_wallet/future/wallet/network/tron/transaction/operations/transfer/transfer.dart';
import 'package:on_chain_wallet/future/wallet/transaction/transaction.dart';
import 'package:on_chain_wallet/wallet/models/models.dart';
import 'fee.dart';

class TronTransactionTransferWidget extends StatelessWidget {
  final TronTransactionBaseTransferOperation form;
  final TronToken? token;
  const TronTransactionTransferWidget(
      {required this.form, this.token, super.key});

  @override
  Widget build(BuildContext context) {
    return MultiSliver(children: [
      LiveFormWidgetReceiverAddress(
          onUpdateAddress: form.onUpdateAddress,
          field: form.receipt,
          onFilterAccount: form.filterAccount,
          account: form.account),
      WidgetConstant.height20,
      LiveFormWidgetAmount(
          field: form.amount,
          onUpdateAmount: form.onUpdateAmount,
          onUpdateAmountMax: () => form.getMaxInput()),
      WidgetConstant.height20,
      LiveFormWidgetMemo(
          field: form.memo,
          onUpdateMemo: form.onUpdateMemo,
          onRemoveMemo: form.onRemoveMemo),
      WidgetConstant.height20,
      TronTransactionFeeDataView(controller: form),
      ConditionalWidget(
        enable: form.isTrc20Transfer,
        onActive: (context) {
          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              WidgetConstant.height20,
              LiveFormWidgetAmount(
                field: form.feeLimit,
                onUpdateAmount: (amount, max) => form.onUpdateFeeLimit(amount),
                onUpdateAmountMax: form.getMaxFeeInput,
              ),
            ],
          );
        },
      ),
      TransactionStateSendTransaction(controller: form)
    ]);
  }
}
