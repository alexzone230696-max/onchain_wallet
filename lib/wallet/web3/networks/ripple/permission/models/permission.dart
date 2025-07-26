import 'package:blockchain_utils/blockchain_utils.dart';
import 'package:on_chain_wallet/app/core.dart';
import 'package:on_chain_wallet/wallet/models/chain/account.dart';
import 'package:on_chain_wallet/wallet/models/network/core/network/network.dart';
import 'package:on_chain_wallet/wallet/web3/core/permission/types/account.dart';
import 'package:on_chain_wallet/wallet/web3/core/permission/types/chain.dart';
import 'package:on_chain_wallet/crypto/models/networks.dart';
import 'package:on_chain_wallet/wallet/web3/models/models/network.dart';
import 'package:xrpl_dart/xrpl_dart.dart';
import 'account.dart';

class Web3XRPChain extends Web3Chain<XRPAddress, XRPChain, IXRPAddress,
    Web3XRPChainAccount, WalletXRPNetwork> {
  Web3XRPChain._({
    required super.accounts,
    required super.id,
  }) : super(network: NetworkType.xrpl);
  @override
  Web3XRPChain clone() {
    return Web3XRPChain._(
        accounts: activeAccounts.map((e) => e.clone()).toList(),
        id: currentChain);
  }

  factory Web3XRPChain.create({int? id}) {
    return Web3XRPChain._(
        accounts: const [], id: id ?? NetworkType.xrpl.mainNetworkId);
  }

  factory Web3XRPChain.deserialize(
      {List<int>? bytes, CborObject? object, String? hex}) {
    final CborListValue values = CborSerializable.cborTagValue(
        cborBytes: bytes, hex: hex, object: object, tags: NetworkType.xrpl.tag);
    return Web3XRPChain._(
        accounts: values
            .elementAt<List<dynamic>>(0)
            .map((e) => Web3XRPChainAccount.deserialize(object: e))
            .toList(),
        id: values.elementAt(1));
  }

  @override
  Web3XRPChain disconnect() {
    return Web3XRPChain._(
      accounts: const [],
      id: NetworkType.xrpl.mainNetworkId,
    );
  }

  @override
  Web3ChainAuthenticated createAuthenticated(
      List<Web3ChainNetworkData<WalletXRPNetwork>> networks) {
    final currentNetwork =
        getCurrentPermissionNetwork(networks.map((e) => e.network).toList());
    final web3Networks = networks
        .map((e) => Web3ChainDefaultIdnetifier(
              id: e.network.value,
              wsIdentifier: e.network.wsIdentifier,
              caip2: e.network.caip,
            ))
        .toList();
    final currentWeb3Network = Web3ChainDefaultIdnetifier(
      id: currentNetwork.value,
      wsIdentifier: currentNetwork.wsIdentifier,
      caip2: currentNetwork.caip,
    );
    return Web3XRPChainAuthenticated(
        accounts: activeAccounts,
        networks: web3Networks,
        currentNetwork: currentWeb3Network);
  }
}
