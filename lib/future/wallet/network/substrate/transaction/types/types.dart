import 'package:blockchain_utils/helper/extensions/extensions.dart';
import 'package:blockchain_utils/utils/utils.dart';
import 'package:on_chain_wallet/app/utils/method/utiils.dart';
import 'package:on_chain_wallet/future/wallet/transaction/transaction.dart';
import 'package:on_chain_wallet/wallet/wallet.dart';
import 'package:polkadot_dart/polkadot_dart.dart';

enum SubstrateKnownCallMethodsType {
  transfer,
  remark,
  unknown;
}

abstract class SubstrateKnownCallMethods {
  final SubstrateKnownCallMethodsType type;
  const SubstrateKnownCallMethods(this.type);
  BigInt get value => BigInt.zero;
  String get name => type.name;
  static SubstrateKnownCallMethods _parseRemark(Map<String, dynamic> data) {
    try {
      return SubstrateRemarkMethod.fromJson(data);
    } catch (e) {
      final Map<String, dynamic>? methodData =
          StringUtils.tryToJson(data[APPSubstrateConst.systemPalletName]);
      return SubstrateUnknownMethod(
          methodName: methodData?.keys.firstOrNull, content: data);
    }
  }

  static SubstrateKnownCallMethods _parseTransafer(
      {required Map<String, dynamic> data,
      required WalletSubstrateNetwork network}) {
    try {
      return SubstrateTransferMethod.fromJson(data, network);
    } catch (e) {
      final Map<String, dynamic>? methodData =
          StringUtils.tryToJson(data[APPSubstrateConst.balancePalletName]);
      return SubstrateUnknownMethod(
          methodName: methodData?.keys.firstOrNull, content: data);
    }
  }

  static List<SubstrateKnownCallMethods> _parseUtility(
      {required Map<String, dynamic> data,
      required WalletSubstrateNetwork network}) {
    try {
      if (data.containsKey(APPSubstrateConst.utilityPalletName)) {
        final List<Map<String, dynamic>>? r = StringUtils.tryToJson(
            MethodUtils.nullOnException(() =>
                data[APPSubstrateConst.utilityPalletName]
                    ?[APPSubstrateConst.utilityBatchVariantName]));
        if (r != null) {
          return r
              .map((e) => parseTxMethod(data: e, network: network))
              .expand((e) => e)
              .toList();
        }
      }
    } catch (_) {}
    final Map<String, dynamic>? methodData =
        StringUtils.tryToJson(data[APPSubstrateConst.utilityPalletName]);
    return [
      SubstrateUnknownMethod(
          methodName: methodData?.keys.firstOrNull, content: data)
    ];
  }

  static List<SubstrateKnownCallMethods> parseTxMethod(
      {required Map<String, dynamic> data,
      required WalletSubstrateNetwork network}) {
    List<SubstrateKnownCallMethods> knownMethods = [];
    if (data.containsKey(APPSubstrateConst.utilityPalletName)) {
      final method = _parseUtility(data: data, network: network);
      knownMethods.addAll(method);
    } else if (data.containsKey(APPSubstrateConst.systemPalletName)) {
      final method = _parseRemark(data);
      knownMethods.add(method);
    } else if (data.containsKey(APPSubstrateConst.balancePalletName)) {
      final method = _parseTransafer(data: data, network: network);
      knownMethods.add(method);
    } else {
      final Map<String, dynamic>? methodData =
          StringUtils.tryToJson(data.values.first);
      final method = SubstrateUnknownMethod(
          methodName: methodData?.keys.firstOrNull,
          content: methodData ?? data);
      knownMethods.add(method);
    }
    return knownMethods;
  }
}

class SubstrateRemarkMethod extends SubstrateKnownCallMethods {
  final String? content;
  final String data;
  const SubstrateRemarkMethod({required this.data, required this.content})
      : super(SubstrateKnownCallMethodsType.remark);
  factory SubstrateRemarkMethod.fromJson(Map<String, dynamic> json) {
    if (json.containsKey(APPSubstrateConst.systemPalletName)) {
      json = json[APPSubstrateConst.systemPalletName];
    }
    final String data = json[APPSubstrateConst.systemRemarkVariantName];
    return SubstrateRemarkMethod(
        data: data,
        content: StringUtils.tryDecode(BytesUtils.fromHexString(data)));
  }
}

class SubstrateTransferMethod extends SubstrateKnownCallMethods {
  final ReceiptAddress<BaseSubstrateAddress> receiver;
  final IntegerBalance amount;
  final SubstrateTransferType transferType;
  SubstrateTransferMethod copyWith({
    ReceiptAddress<BaseSubstrateAddress>? receiver,
    IntegerBalance? amount,
    SubstrateTransferType? transferType,
  }) {
    return SubstrateTransferMethod(
        receiver: receiver ?? this.receiver,
        amount: amount ?? this.amount,
        transferType: transferType ?? this.transferType);
  }

  @override
  BigInt get value => amount.balance;
  const SubstrateTransferMethod(
      {required this.receiver,
      required this.amount,
      required this.transferType})
      : super(SubstrateKnownCallMethodsType.transfer);
  factory SubstrateTransferMethod.fromJson(
      Map<String, dynamic> json, WalletSubstrateNetwork network) {
    Map<String, dynamic> data = json;
    if (data.containsKey(APPSubstrateConst.balancePalletName)) {
      data = json[APPSubstrateConst.balancePalletName];
    }
    BaseSubstrateAddress receiver;
    SubstrateTransferType type = SubstrateTransferType.transferAllowDeath;
    if (data.containsKey(SubstrateTransferType.transferAllowDeath.methodName)) {
      data = data[SubstrateTransferType.transferAllowDeath.methodName];
    } else {
      data = data[SubstrateTransferType.transferKeepAlive.methodName];
      type = SubstrateTransferType.transferKeepAlive;
    }
    if (network.coinParam.substrateChainType.isEthereum) {
      receiver = SubstrateEthereumAddress.fromBytes(
          BytesUtils.fromHexString(data["dest"]));
    } else {
      receiver = SubstrateAddress.fromBytes(
          BytesUtils.fromHexString(data["dest"]!["Id"]),
          ss58Format: network.coinParam.ss58Format);
    }
    return SubstrateTransferMethod(
        receiver:
            ReceiptAddress(view: receiver.address, networkAddress: receiver),
        amount: IntegerBalance.token(
            BigintUtils.parse(data["value"]), network.token,
            allowNegative: false, immutable: true),
        transferType: type);
  }
}

class SubstrateUnknownMethod extends SubstrateKnownCallMethods {
  final Map<String, dynamic> content;
  final String? methodName;
  const SubstrateUnknownMethod(
      {required this.content, required this.methodName})
      : super(SubstrateKnownCallMethodsType.unknown);
  @override
  String get name => methodName ?? type.name;
}

class SubstrateTransferDetails
    extends TransferOutputDetails<BaseSubstrateAddress> {
  SubstrateTransferDetails({
    required super.recipient,
    required Token token,
  }) : super(amount: IntegerBalance.zero(token, allowNegative: false));

  @override
  List get variabels => [recipient];
}

enum SubstrateTransactionOperations implements TransactionOperations {
  transfer("transfer"),
  extrinsic("extrinsic");

  @override
  final String value;
  const SubstrateTransactionOperations(this.value);
}

class SubstrateTransactionFee extends DefaultTransactionFee {
  final IntegerBalance baseFee;
  final IntegerBalance lenFee;
  final IntegerBalance adjustedWeightFee;
  final IntegerBalance tip;
  final bool isSimulate;
  const SubstrateTransactionFee(
      {required this.baseFee,
      required this.lenFee,
      required this.adjustedWeightFee,
      required this.tip,
      required super.fee,
      required this.isSimulate,
      super.error});
  factory SubstrateTransactionFee.init(WalletSubstrateNetwork network,
      {String? error}) {
    return SubstrateTransactionFee(
        baseFee: IntegerBalance.zero(network.token),
        lenFee: IntegerBalance.zero(network.token),
        adjustedWeightFee: IntegerBalance.zero(network.token),
        tip: IntegerBalance.zero(network.token),
        fee: IntegerBalance.zero(network.token),
        isSimulate: false,
        error: error);
  }
  factory SubstrateTransactionFee.fromFeeDetails(
      {required QueryFeeInfoFrame fee,
      required WalletSubstrateNetwork network}) {
    if (fee.inclusionFee == null) return SubstrateTransactionFee.init(network);
    final inclusionFee = fee.inclusionFee!;
    final BigRational totalFee = BigRational(inclusionFee.adjustedWeightFee +
        inclusionFee.baseFee +
        inclusionFee.lenFee +
        fee.tip);

    return SubstrateTransactionFee(
        baseFee: IntegerBalance.token(inclusionFee.baseFee, network.token),
        lenFee: IntegerBalance.token(inclusionFee.lenFee, network.token),
        adjustedWeightFee:
            IntegerBalance.token(inclusionFee.adjustedWeightFee, network.token),
        tip: IntegerBalance.token(fee.tip, network.token),
        fee: IntegerBalance.token(
            (totalFee * APPSubstrateConst.feeRate).toBigInt(), network.token),
        isSimulate: true);
  }

  @override
  List get variabels =>
      [...super.variabels, baseFee, lenFee, adjustedWeightFee, tip, isSimulate];
}

class SubstrateTransactionFeeData
    extends TransactionDefaultFeeData<SubstrateTransactionFee> {
  SubstrateTransactionFeeData({required super.select, required super.feeToken});
}

abstract class BaseSubstrateTransactionController
    extends TransactionStateController<
        ISubstrateAddress,
        SubstrateClient,
        WalletSubstrateNetwork,
        SubstrateChain,
        ISubstrateTransactionData,
        ISubstrateTransaction,
        ISubstrateSignedTransaction,
        SubstrateWalletTransaction,
        SubmitTransactionSuccess<ISubstrateSignedTransaction>> {
  BaseSubstrateTransactionController(
      {required super.walletProvider,
      required super.account,
      required super.address});
}

class ISubstrateTransactionData extends ITransactionData {
  final SubstrateTransactionFee fee;
  final List<ISubstrateTransactionDataTokenTransfer>? payment;
  ISubstrateTransactionData(
      {required this.fee,
      List<ISubstrateTransactionDataTokenTransfer>? payment})
      : payment = payment?.immutable;
}

class ISubstrateTransactionDataTokenTransfer {
  final BaseSubstrateAddress recipient;
  final BigInt amount;
  const ISubstrateTransactionDataTokenTransfer(
      {required this.recipient, required this.amount});
}

class ISubstrateTransaction
    extends ITransaction<ISubstrateTransactionData, ISubstrateAddress> {
  final ExtrinsicPayloadInfo payload;
  const ISubstrateTransaction(
      {required super.account,
      required super.transactionData,
      required this.payload});
}

class ISubstrateSignedTransaction
    extends ISignedTransaction<ISubstrateTransaction, ExtrinsicInfo> {
  ISubstrateSignedTransaction(
      {required super.transaction,
      required super.signatures,
      required super.finalTransactionData});
}

class SubstrateSignedTransaction {
  final List<List<int>> signatures;
  final List<int> payload;
  SubstrateSignedTransaction(
      {required List<List<int>> signatures, required List<int> payload})
      : signatures = signatures.map((e) => e.asImmutableBytes).toImutableList,
        payload = payload.asImmutableBytes;
}
