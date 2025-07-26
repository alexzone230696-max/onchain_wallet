extension QuickNum on BigInt {
  String get toRadix16 => "0x${toRadixString(16)}";
}

extension QuickListNum on Iterable<BigInt> {
  BigInt get sum => fold(BigInt.zero, (p, c) => p + c);
}

extension QuickIntListNum on Iterable<int> {
  BigInt get sumBig => fold(BigInt.zero, (p, c) => p + BigInt.from(c));
}

extension QuicIntkNum on int {
  String get toRadix16 => "0x${toRadixString(16)}";
}
