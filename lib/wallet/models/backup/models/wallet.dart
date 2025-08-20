import 'package:blockchain_utils/blockchain_utils.dart';
import 'package:on_chain_wallet/app/core.dart';
import 'package:on_chain_wallet/crypto/keys/access/crypto_keys/crypto_keys.dart';
import 'package:on_chain_wallet/wallet/constant/constant.dart';
import 'package:on_chain_wallet/wallet/models/chain/chain/chain.dart';
import 'package:on_chain_wallet/wallet/models/wallet/hd_wallet.dart';
import 'package:on_chain_wallet/wallet/web3/core/permission/models/authenticated.dart';

enum WalletBackupTypes {
  wallet(CborTagsConst.walletBackupWallet, "wallets"),
  walletV2(CborTagsConst.walletBackupWalletV2, "walletsV2"),
  walletV3(CborTagsConst.walletBackupWalletV3, "walletsV3"),
  mnemonic(CborTagsConst.walletBackupMnemonic, "mnemonic"),
  privatekey(CborTagsConst.walletBackupPrivateKey, "private_key"),
  wif(CborTagsConst.walletBackupWif, "wif"),
  keystore([], "keystore"),
  extendedKey(CborTagsConst.walletBackupExtendedKey, "extended_private_key");

  bool get isWalletBackup =>
      this == wallet || this == walletV2 || this == walletV3;
  final List<int> tag;
  final String value;
  const WalletBackupTypes(this.tag, this.value);

  static WalletBackupTypes fromValue(List<int> tag) {
    return values.firstWhere((e) => BytesUtils.bytesEqual(e.tag, tag));
  }

  SecretWalletEncoding get encoding {
    switch (this) {
      case WalletBackupTypes.keystore:
        return SecretWalletEncoding.json;
      default:
        return SecretWalletEncoding.cbor;
    }
  }

  bool get isPrivateKey =>
      this == WalletBackupTypes.privatekey ||
      this == WalletBackupTypes.keystore;

  List<int> toEncryptionBytes(String data) {
    switch (this) {
      case WalletBackupTypes.mnemonic:
        return StringUtils.encode(data);
      case WalletBackupTypes.keystore:
      case WalletBackupTypes.privatekey:
      case WalletBackupTypes.wallet:
      case WalletBackupTypes.walletV2:
      case WalletBackupTypes.walletV3:
        return BytesUtils.fromHexString(data);
      default:
        return Base58Decoder.checkDecode(data);
    }
  }

  String fromDecyrptBytes(List<int> decryptedKeyBytes) {
    switch (this) {
      case WalletBackupTypes.mnemonic:
        return StringUtils.decode(decryptedKeyBytes);
      case WalletBackupTypes.privatekey:
      case WalletBackupTypes.wallet:
      case WalletBackupTypes.walletV2:
      case WalletBackupTypes.walletV3:
      case WalletBackupTypes.keystore:
        return BytesUtils.toHexString(decryptedKeyBytes);

      default:
        return Base58Encoder.checkEncode(decryptedKeyBytes);
    }
  }
}

abstract final class WalletBackupCore {
  abstract final WalletBackupTypes type;
  abstract final DateTime created;
  abstract final String key;
  abstract final bool isEncrypted;
  factory WalletBackupCore.deserialize(
      {List<int>? bytes, CborObject? obj, String? hex}) {
    final CborTagValue tag =
        CborSerializable.decode(cborBytes: bytes, object: obj, hex: hex);
    final type = WalletBackupTypes.fromValue(tag.tags);
    switch (type) {
      case WalletBackupTypes.wallet:
      case WalletBackupTypes.walletV2:
        throw WalletExceptionConst.unsuportedBackupVersion;
      case WalletBackupTypes.walletV3:
        return WalletBackup.deserialize(obj: tag);
      default:
        return WalletKeyBackup.deserialize(obj: tag);
    }
  }
  WalletBackupCore decrypt(List<int> decryptedKey);
}

final class WalletBackupNetworkRepository with CborSerializable {
  final List<int> value;
  final int storageID;
  final int networkID;
  final int? createdAt;
  final String? identifier;
  final String? identifier2;

  const WalletBackupNetworkRepository._(
      {required this.storageID,
      required this.identifier,
      required this.value,
      required this.networkID,
      required this.identifier2,
      required this.createdAt});
  factory WalletBackupNetworkRepository(
      {required int storageID,
      required String? identifier,
      required String? identifier2,
      required List<int> value,
      required int networkID,
      required int? createdAt}) {
    return WalletBackupNetworkRepository._(
        storageID: storageID,
        identifier: identifier,
        value: value,
        networkID: networkID,
        identifier2: identifier2,
        createdAt: createdAt);
  }
  factory WalletBackupNetworkRepository.deserialize(
      {List<int>? bytes, CborObject? obj, String? hex}) {
    final CborListValue values = CborSerializable.cborTagValue(
        cborBytes: bytes,
        hex: hex,
        object: obj,
        tags: CborTagsConst.walletBackupNetworkStorageIds);

    return WalletBackupNetworkRepository(
        value: values.valueAs(0),
        storageID: values.valueAs(1),
        identifier: values.valueAs(2),
        identifier2: values.valueAs(3),
        networkID: values.valueAs(4),
        createdAt: values.valueAs(5));
  }

  @override
  CborTagValue toCbor() {
    return CborTagValue(
        CborSerializable.fromDynamic([
          CborBytesValue(value),
          storageID,
          identifier,
          identifier2,
          networkID,
          createdAt,
        ]),
        CborTagsConst.walletBackupNetworkStorageIds);
  }
}

final class WalletNetworkBackup with CborSerializable {
  final Chain chain;
  final List<WalletBackupNetworkRepository> repositories;
  WalletNetworkBackup._(
      {required this.chain,
      List<WalletBackupNetworkRepository> repositories = const []})
      : repositories = repositories.immutable;
  factory WalletNetworkBackup(
      {required Chain chain,
      required List<WalletBackupNetworkRepository> repositories}) {
    return WalletNetworkBackup._(chain: chain, repositories: repositories);
  }
  factory WalletNetworkBackup.deserialize(
      {List<int>? bytes, CborObject? obj, String? hex}) {
    final CborListValue values = CborSerializable.cborTagValue(
        cborBytes: bytes,
        hex: hex,
        object: obj,
        tags: CborTagsConst.walletBackupChains);

    return WalletNetworkBackup(
        chain: Chain.deserialize(obj: values.elementAsCborTag(0)),
        repositories: values
            .elementAsListOf<CborTagValue>(1)
            .map((e) => WalletBackupNetworkRepository.deserialize(obj: e))
            .toList());
  }

  @override
  CborTagValue toCbor() {
    return CborTagValue(
        CborSerializable.fromDynamic([
          chain.toCbor(),
          CborSerializable.fromDynamic(
              repositories.map((e) => e.toCbor()).toList())
        ]),
        CborTagsConst.walletBackupChains);
  }
}

final class WalletBackupChainRepository with CborSerializable {
  final List<int> value;
  final int storageID;
  final int chainID;
  final int? createdAt;
  final String? identifier;
  final String? identifier2;

  const WalletBackupChainRepository._(
      {required this.storageID,
      required this.identifier,
      required this.value,
      required this.chainID,
      required this.identifier2,
      required this.createdAt});
  factory WalletBackupChainRepository(
      {required int storageID,
      required String? identifier,
      required String? identifier2,
      required List<int> value,
      required int chainID,
      required int? createdAt}) {
    return WalletBackupChainRepository._(
        storageID: storageID,
        identifier: identifier,
        value: value,
        chainID: chainID,
        identifier2: identifier2,
        createdAt: createdAt);
  }
  factory WalletBackupChainRepository.deserialize(
      {List<int>? bytes, CborObject? obj, String? hex}) {
    final CborListValue values = CborSerializable.cborTagValue(
        cborBytes: bytes,
        hex: hex,
        object: obj,
        tags: CborTagsConst.walletBackupChainStorageIds);

    return WalletBackupChainRepository(
        value: values.valueAs(0),
        storageID: values.valueAs(1),
        identifier: values.valueAs(2),
        identifier2: values.valueAs(3),
        chainID: values.valueAs(4),
        createdAt: values.valueAs(5));
  }

  @override
  CborTagValue toCbor() {
    return CborTagValue(
        CborSerializable.fromDynamic([
          CborBytesValue(value),
          storageID,
          identifier,
          identifier2,
          chainID,
          createdAt,
        ]),
        CborTagsConst.walletBackupChainStorageIds);
  }
}

final class WalletBackup implements WalletBackupCore {
  final List<WalletNetworkBackup> networks;
  final List<Web3ApplicationAuthentication> dapps;
  final List<WalletBackupChainRepository> chains;
  WalletBackup._(
      {required this.key,
      required List<WalletNetworkBackup> networks,
      required List<WalletBackupChainRepository> chains,
      List<Web3ApplicationAuthentication> dapps = const [],
      DateTime? created,
      this.isEncrypted = true})
      : networks = networks.immutable,
        created = created ?? DateTime.now(),
        dapps = dapps.immutable,
        chains = chains.immutable;
  factory WalletBackup(
      {required String key,
      required List<WalletNetworkBackup> networks,
      required List<WalletBackupChainRepository> chains,
      List<Web3ApplicationAuthentication> dapps = const [],
      DateTime? created}) {
    return WalletBackup._(
        key: key,
        networks: networks,
        created: created,
        dapps: dapps,
        chains: chains);
  }
  factory WalletBackup.deserialize({List<int>? bytes, CborObject? obj}) {
    final CborListValue values = CborSerializable.cborTagValue(
        cborBytes: bytes, object: obj, tags: WalletBackupTypes.walletV3.tag);

    /// id: "backup"
    return WalletBackup(
        key: values.elementAs(0),
        networks: values
            .elementAsListOf<CborTagValue>(1)
            .map((e) => WalletNetworkBackup.deserialize(obj: e))
            .toList(),
        created: values.elementAs(2),
        dapps: values
            .elementAsListOf<CborTagValue>(3, emyptyOnNull: true)
            .map((e) => Web3ApplicationAuthentication.deserialize(object: e))
            .toList(),
        chains: values
            .elementAsListOf<CborTagValue>(4, emyptyOnNull: true)
            .map((e) => WalletBackupChainRepository.deserialize(obj: e))
            .toList());
  }

  @override
  final String key;

  @override
  final DateTime created;

  CborTagValue toCbor() {
    return CborTagValue(
        CborListValue<CborObject>.definite([
          CborStringValue(key),
          CborListValue.definite(networks.map((e) => e.toCbor()).toList()),
          CborEpochIntValue(created),
          CborListValue.definite(dapps.map((e) => e.toCbor()).toList()),
          CborListValue.definite(chains.map((e) => e.toCbor()).toList()),
        ]),
        type.tag);
  }

  @override
  WalletBackupTypes get type => WalletBackupTypes.walletV3;

  @override
  final bool isEncrypted;

  @override
  WalletBackupCore decrypt(List<int> decryptedKeyBytes) {
    return WalletBackup._(
        key: type.fromDecyrptBytes(decryptedKeyBytes),
        created: created,
        isEncrypted: false,
        networks: networks,
        dapps: dapps,
        chains: chains);
  }
}

final class WalletKeyBackup implements WalletBackupCore {
  WalletKeyBackup._(
      {required this.key,
      required this.type,
      required this.created,
      this.isEncrypted = true});
  factory WalletKeyBackup(
      {required String key,
      required WalletBackupTypes type,
      DateTime? created}) {
    if (type == WalletBackupTypes.wallet) {
      throw WalletExceptionConst.dataVerificationFailed;
    }
    switch (type) {
      case WalletBackupTypes.wallet:
      case WalletBackupTypes.walletV2:
      case WalletBackupTypes.walletV3:
        throw WalletExceptionConst.dataVerificationFailed;
      default:
        break;
    }
    return WalletKeyBackup._(
        key: key, type: type, created: created ?? DateTime.now());
  }
  factory WalletKeyBackup.deserialize(
      {List<int>? bytes, CborObject? obj, String? hex}) {
    final CborTagValue tag =
        CborSerializable.decode(cborBytes: bytes, object: obj, hex: hex);
    final CborListValue values = CborSerializable.cborTagValue(object: tag);
    return WalletKeyBackup(
        key: values.elementAs(0),
        created: values.elementAs(1),
        type: WalletBackupTypes.fromValue(tag.tags));
  }

  @override
  final String key;
  @override
  final DateTime created;

  CborTagValue toCbor() {
    return CborTagValue(
        CborSerializable.fromDynamic(
            [CborStringValue(key), CborEpochIntValue(created)]),
        type.tag);
  }

  @override
  final WalletBackupTypes type;

  @override
  final bool isEncrypted;

  @override
  WalletBackupCore decrypt(List<int> decryptedKeyBytes) {
    return WalletKeyBackup._(
        key: type.fromDecyrptBytes(decryptedKeyBytes),
        type: type,
        created: created,
        isEncrypted: false);
  }
}

final class WalletRestoreV2 {
  WalletRestoreV2._({
    required this.masterKeys,
    required List<WalletNetworkBackup> networks,
    required List<ChainAccount> invalidAddresses,
    required List<Web3ApplicationAuthentication> dapps,
    required List<WalletBackupChainRepository> chains,
    required this.wallet,
    this.verifiedChecksum,
  })  : networks = networks.immutable,
        invalidAddresses = invalidAddresses.immutable,
        totalAccounts =
            networks.fold(0, (p, c) => p + c.chain.addresses.length) +
                invalidAddresses.length,
        dapps = dapps.immutable,
        chains = chains.immutable;
  factory WalletRestoreV2(
      {required WalletMasterKeys masterKeys,
      required List<WalletNetworkBackup> networks,
      required List<ChainAccount> invalidAddresses,
      required MainWallet wallet,
      required bool verifiedChecksum,
      required List<Web3ApplicationAuthentication> dapps,
      required List<WalletBackupChainRepository> chains}) {
    return WalletRestoreV2._(
        masterKeys: masterKeys,
        chains: chains,
        networks: networks,
        invalidAddresses: invalidAddresses,
        wallet: wallet,
        verifiedChecksum: verifiedChecksum,
        dapps: dapps);
  }
  final WalletMasterKeys masterKeys;
  final List<WalletNetworkBackup> networks;
  final List<ChainAccount> invalidAddresses;
  final List<Web3ApplicationAuthentication> dapps;
  final List<WalletBackupChainRepository> chains;

  final MainWallet wallet;
  final bool? verifiedChecksum;
  final int totalAccounts;
  bool get hasFailedAccount => invalidAddresses.isNotEmpty;
}

final class GenerateWalletBackupOptions {
  final List<Chain> chains;
  final bool backupDapps;
  final String? passphrase;
  final String? newPassword;
  GenerateWalletBackupOptions(
      {required List<Chain> chains,
      required this.backupDapps,
      required this.passphrase,
      required this.newPassword})
      : chains = chains.immutable;
}
