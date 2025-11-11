class RippleClientUtils {
  static const String xrplMetaUrl = "https://s1.xrplmeta.org/token/#token";

  static String buildXrplMetaUrl(String code, String issuer) {
    return xrplMetaUrl.replaceFirst("#token", "$code:$issuer");
  }
}
