import 'package:blockchain_utils/bip/bip/conf/core/coins.dart';
import 'package:blockchain_utils/cbor/cbor.dart';
import 'package:blockchain_utils/utils/utils.dart';
import 'package:on_chain_wallet/app/serialization/cbor/cbor.dart';
import 'package:on_chain_wallet/crypto/coins/coins.dart';
import 'package:on_chain_wallet/crypto/keys/access/crypto_keys/crypto_keys.dart';
import 'package:on_chain_wallet/crypto/requets/argruments/argruments.dart';
import 'package:on_chain_wallet/crypto/requets/messages/core/message.dart';
import 'package:on_chain_wallet/crypto/utils/ton/ton.dart';

class TonMnemonicToPrivateKeyMessage
    extends CryptoRequest<ImportCustomKeys, MessageArgsOneBytes> {
  final String mnemonic;
  final String? password;
  final bool validateTonMnemonic;
  final CryptoCoins coin;
  const TonMnemonicToPrivateKeyMessage._({
    required this.mnemonic,
    required this.password,
    required this.validateTonMnemonic,
    required this.coin,
  });

  factory TonMnemonicToPrivateKeyMessage(
      {required String mnemonic,
      String? password,
      required bool validateTonMnemonic,
      required CryptoCoins coin}) {
    return TonMnemonicToPrivateKeyMessage._(
        mnemonic: mnemonic,
        password: password,
        validateTonMnemonic: validateTonMnemonic,
        coin: coin);
  }
  factory TonMnemonicToPrivateKeyMessage.deserialize(
      {List<int>? bytes, CborTagValue? object}) {
    final CborListValue values = CborSerializable.cborTagValue(
        cborBytes: bytes,
        object: object,
        tags: CryptoRequestMethod.tonMnemonicToPrivateKey.tag);
    return TonMnemonicToPrivateKeyMessage(
        mnemonic: values.elementAs(0),
        password: values.elementAs(1),
        validateTonMnemonic: values.elementAs(2),
        coin: CustomCoins.getSerializationCoin(values.elementAs(3)));
  }

  @override
  CborTagValue toCbor() {
    return CborTagValue(
        CborSerializable.fromDynamic([
          mnemonic,
          password ?? const CborNullValue(),
          validateTonMnemonic,
          coin.toCbor()
        ]),
        method.tag);
  }

  @override
  MessageArgsOneBytes getResult() {
    final importedKey = CryptoKeyUtils.tonMnemonicToPrivateKey(
        coin: coin,
        mnemonic: mnemonic,
        password: password,
        validateTonMnemonic: validateTonMnemonic);
    return MessageArgsOneBytes(keyOne: importedKey.toCbor().encode());
  }

  @override
  ImportCustomKeys parsResult(MessageArgsOneBytes result) {
    return ImportCustomKeys.deserialize(bytes: result.keyOne);
  }

  @override
  CryptoRequestMethod get method => CryptoRequestMethod.tonMnemonicToPrivateKey;

  @override
  ImportCustomKeys result() {
    return CryptoKeyUtils.tonMnemonicToPrivateKey(
        coin: coin,
        mnemonic: mnemonic,
        password: password,
        validateTonMnemonic: validateTonMnemonic);
  }
}

class TonMenmonicGenerateMessage
    extends CryptoRequest<String, MessageArgsOneBytes> {
  final String? password;
  final int wordsNum;
  const TonMenmonicGenerateMessage(
      {required this.password, required this.wordsNum});
  factory TonMenmonicGenerateMessage.deserialize(
      {List<int>? bytes, CborTagValue? object}) {
    final CborListValue values = CborSerializable.cborTagValue(
        cborBytes: bytes,
        object: object,
        tags: CryptoRequestMethod.generateMnemonic.tag);
    return TonMenmonicGenerateMessage(
        password: values.elementAs(0), wordsNum: values.elementAs(1));
  }

  @override
  CborTagValue toCbor() {
    return CborTagValue(
        CborSerializable.fromDynamic(
            [password ?? const CborNullValue(), wordsNum]),
        method.tag);
  }

  @override
  CryptoRequestMethod get method => CryptoRequestMethod.generateMnemonic;

  @override
  MessageArgsOneBytes getResult() {
    final mnemonic =
        TonUtils.generateTonMnemonic(wordsNum: wordsNum, password: password);

    return MessageArgsOneBytes(keyOne: StringUtils.encode(mnemonic));
  }

  @override
  String parsResult(MessageArgsOneBytes result) {
    return StringUtils.decode(result.keyOne);
  }

  @override
  String result() {
    return TonUtils.generateTonMnemonic(wordsNum: wordsNum, password: password);
  }
}
