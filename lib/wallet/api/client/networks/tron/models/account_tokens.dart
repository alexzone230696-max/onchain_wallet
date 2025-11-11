import 'package:blockchain_utils/helper/helper.dart';
import 'package:blockchain_utils/utils/numbers/utils/bigint_utils.dart';

class TronScanAccountTokens {
  final int lastUpdateSeconds;
  final int total;
  final int code;
  final List<TronScanAccountTokenInfo> tokens;
  TronScanAccountTokens(
      {required this.lastUpdateSeconds,
      required List<TronScanAccountTokenInfo> tokens,
      required this.code,
      required this.total})
      : tokens = tokens.immutable;
  factory TronScanAccountTokens.fromJson(Map<String, dynamic> json) {
    return TronScanAccountTokens(
        lastUpdateSeconds: json["lastUpdateSeconds"],
        tokens: (json["data"] as List?)
                ?.map((e) => TronScanAccountTokenInfo.fromJson(e))
                .toList() ??
            [],
        code: json["code"],
        total: json["total"]);
  }
}

class TronScanAccountTokenInfo {
  final String tokenId;
  final BigInt balance;
  final String tokenName;
  final String tokenAbbr;
  final int tokenDecimal;
  final int? tokenCanShow;
  final String tokenType;
  final String? tokenLogo;
  final String? level;
  final bool? vip;
  final String? tokenPriceInTrx;
  final String? tokenPriceInUsd;
  final String? quantity;
  final String? amount;
  final String? amountInUsd;
  final int? nrOfTokenHolders;
  final int? transferCount;
  final String? project;

  TronScanAccountTokenInfo({
    required this.tokenId,
    required this.balance,
    required this.tokenName,
    required this.tokenAbbr,
    required this.tokenDecimal,
    required this.tokenCanShow,
    required this.tokenType,
    required this.tokenLogo,
    required this.level,
    required this.vip,
    required this.tokenPriceInTrx,
    required this.tokenPriceInUsd,
    required this.quantity,
    required this.amount,
    required this.amountInUsd,
    required this.nrOfTokenHolders,
    required this.transferCount,
    required this.project,
  });

  factory TronScanAccountTokenInfo.fromJson(Map<String, dynamic> json) {
    return TronScanAccountTokenInfo(
        tokenId: json['tokenId'],
        balance: BigintUtils.parse(json['balance']),
        tokenName: json['tokenName'],
        tokenAbbr: json['tokenAbbr'],
        tokenDecimal: json['tokenDecimal'],
        tokenCanShow: json['tokenCanShow'],
        tokenType: json['tokenType'],
        tokenLogo: json['tokenLogo'],
        level: json['level'],
        vip: json['vip'],
        tokenPriceInTrx: json['tokenPriceInTrx']?.toString(),
        tokenPriceInUsd: json['tokenPriceInUsd']?.toString(),
        quantity: json['quantity']?.toString(),
        amount: json['amount']?.toString(),
        amountInUsd: json['amountInUsd']?.toString(),
        nrOfTokenHolders: json['nrOfTokenHolders'],
        transferCount: json['transferCount'],
        project: json['project']);
  }
}
