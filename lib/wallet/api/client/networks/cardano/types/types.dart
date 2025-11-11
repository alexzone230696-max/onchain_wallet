import 'package:on_chain/ada/src/models/transaction/input/input.dart';
import 'package:on_chain/ada/src/models/transaction/output/models/transaction_output.dart';

class ADATransactionWithTxId {
  final TransactionInput txInput;
  final DateTime blockTime;
  final TransactionOutput output;
  const ADATransactionWithTxId(
      {required this.txInput, required this.blockTime, required this.output});
}
