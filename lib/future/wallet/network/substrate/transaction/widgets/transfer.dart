import 'package:flutter/material.dart';
import 'package:on_chain_wallet/future/state_managment/extension/extension.dart';
import 'package:on_chain_wallet/future/wallet/network/substrate/transaction/operations/transfer.dart';
import 'package:on_chain_wallet/future/wallet/network/substrate/transaction/types/types.dart';
import 'package:on_chain_wallet/future/wallet/transaction/transaction.dart';
import 'package:on_chain_wallet/future/widgets/custom_widgets.dart';
import 'package:on_chain_wallet/wallet/models/networks/substrate/substrate.dart';
import 'package:polkadot_dart/polkadot_dart.dart';

class SubstrateTransactionTransferWidget extends StatelessWidget {
  final SubstrateTransactionTransferOperation form;
  const SubstrateTransactionTransferWidget({required this.form, super.key});

  @override
  Widget build(BuildContext context) {
    return MultiSliver(children: [
      LiveFormWidget(
        field: form.transferMethod,
        builder: (context, field, value) {
          return AppDropDownBottom(items: {
            for (final i in SubstrateTransferType.values)
              i: Text(i.methodName.camelCase)
          }, value: value, onChanged: form.onUpdateTransferMethod);
        },
      ),
      WidgetConstant.height20,
      LiveFormWidgetList(
        field: form.recipients,
        onCreate: (context, field) {
          if (!form.allowAddTransfer) return null;
          return LiveWidgetAddNewTransferDetails<BaseSubstrateAddress>(
              onUpdateAddresses: form.onUpdateRecipients,
              account: form.account,
              isReady: field.hasValue,
              onFilterAccount: form.filterAccount,
              multipleSelect: true);
        },
        builder: (context, field, value) =>
            LiveWidgetTransferDetails<SubstrateTransferDetails>(
                transfer: value,
                onRemove: form.onRemoveRecipients,
                onUpdateAmount: form.onUpdateAmount,
                onUpdateAmountMax: form.getMaxInput),
      ),
      ConditionalWidget(
          enable: form.supportBatch,
          onActive: (context) =>
              Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                WidgetConstant.height20,
                LiveFormWidgetList(
                    field: form.memos,
                    builder: (context, field, value) => ContainerWithBorder(
                        onRemove: () {
                          form.onRemoveMemo(value);
                        },
                        onRemoveIcon: Icon(Icons.remove_circle,
                            color: context.onPrimaryContainer),
                        child: Text(value,
                            style: context.onPrimaryTextTheme.bodyMedium)),
                    onCreate: (context, field) {
                      return ContainerWithBorder(
                          onRemoveIcon: Icon(Icons.add_box,
                              color: context.onPrimaryContainer),
                          onRemove: () {
                            context
                                .openSliverBottomSheet<String>(
                                  "transaction_memo".tr,
                                  child: StringWriterView(
                                      title: PageTitleSubtitle(
                                          title: "setup_memo".tr,
                                          body: Column(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              Text("memo_desc1".tr),
                                              WidgetConstant.height8,
                                              Text("empty_desc".tr),
                                            ],
                                          )),
                                      buttonText: "setup_memo".tr,
                                      label: "memo".tr),
                                )
                                .then(form.onUpdateMemo);
                          },
                          child: Text("tap_to_add_memo".tr,
                              style: context.onPrimaryTextTheme.bodyMedium));
                    }),
              ])),
      WidgetConstant.height20,
      TransactionFeeView(controller: form),
      TransactionStateSendTransaction(controller: form)
    ]);
  }
}
