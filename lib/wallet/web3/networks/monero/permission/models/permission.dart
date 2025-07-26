import 'package:blockchain_utils/blockchain_utils.dart';
import 'package:monero_dart/monero_dart.dart';
import 'package:on_chain_wallet/app/core.dart';
import 'package:on_chain_wallet/wallet/models/chain/account.dart';
import 'package:on_chain_wallet/wallet/models/network/core/network/network.dart';
import 'package:on_chain_wallet/wallet/web3/core/permission/types/account.dart';
import 'package:on_chain_wallet/wallet/web3/core/permission/types/chain.dart';
import 'package:on_chain_wallet/crypto/models/networks.dart';
import 'package:on_chain_wallet/wallet/web3/models/models/network.dart';
import 'account.dart';

class Web3MoneroChain extends Web3Chain<MoneroAddress, MoneroChain,
    IMoneroAddress, Web3MoneroChainAccount, WalletMoneroNetwork> {
  Web3MoneroChain._({
    required super.accounts,
    required super.id,
  }) : super(network: NetworkType.monero);
  @override
  Web3MoneroChain clone() {
    return Web3MoneroChain._(
        accounts: activeAccounts.map((e) => e.clone()).toList(),
        id: currentChain);
  }

  factory Web3MoneroChain.create({int? id}) {
    return Web3MoneroChain._(
        accounts: const [], id: id ?? NetworkType.monero.mainNetworkId);
  }

  factory Web3MoneroChain.deserialize(
      {List<int>? bytes, CborObject? object, String? hex}) {
    final CborListValue values = CborSerializable.cborTagValue(
        cborBytes: bytes,
        hex: hex,
        object: object,
        tags: NetworkType.monero.tag);
    return Web3MoneroChain._(
        accounts: values
            .elementAt<List<dynamic>>(0)
            .map((e) => Web3MoneroChainAccount.deserialize(object: e))
            .toList(),
        id: values.elementAt(1));
  }

  @override
  Web3MoneroChain disconnect() {
    return Web3MoneroChain._(
      accounts: const [],
      id: NetworkType.monero.mainNetworkId,
    );
  }

  @override
  Web3ChainAuthenticated createAuthenticated(
      List<Web3ChainNetworkData<WalletMoneroNetwork>> networks) {
    final currentNetwork =
        getCurrentPermissionNetwork(networks.map((e) => e.network).toList());
    final web3Networks = networks
        .map((e) => Web3MoneroChainIdnetifier(
            id: e.network.value,
            wsIdentifier: e.network.wsIdentifier,
            caip2: e.network.caip,
            network: e.network.coinParam.network))
        .toList();
    final currentWeb3Network = Web3MoneroChainIdnetifier(
        id: currentNetwork.value,
        wsIdentifier: currentNetwork.wsIdentifier,
        caip2: currentNetwork.caip,
        network: currentNetwork.coinParam.network);
    return Web3MoneroChainAuthenticated(
        accounts: activeAccounts,
        networks: web3Networks,
        currentNetwork: currentWeb3Network);
  }
}
