import 'package:flutter/material.dart';
import 'package:monero_dart/monero_dart.dart';
import 'package:on_chain_wallet/crypto/models/networks.dart';
import 'package:on_chain_wallet/future/future.dart';
import 'package:on_chain_wallet/future/state_managment/state_managment.dart';
import 'package:on_chain_wallet/wallet/models/chain/account.dart';
import 'package:on_chain_wallet/wallet/web3/core/permission/models/authenticated.dart';
import 'package:on_chain_wallet/wallet/web3/networks/monero/permission/models/account.dart';
import 'package:on_chain_wallet/wallet/web3/networks/monero/permission/models/permission.dart';

class MoneroWeb3PermissionView extends StatefulWidget {
  const MoneroWeb3PermissionView({required this.application, super.key});
  final Web3APPAuthentication application;

  @override
  State<MoneroWeb3PermissionView> createState() =>
      _MoneroWeb3PermissionViewState();
}

class _MoneroWeb3PermissionViewState extends State<MoneroWeb3PermissionView>
    with
        SafeState,
        Web3PermissionState<
            MoneroWeb3PermissionView,
            MoneroAddress,
            MoneroChain,
            IMoneroAddress,
            Web3MoneroChainAccount,
            Web3MoneroChain> {
  @override
  Web3APPAuthentication get application => widget.application;
  @override
  Web3MoneroChainAccount createNewAccountPermission(
      IMoneroAddress address, bool isDefault) {
    return Web3MoneroChainAccount.fromChainAccount(
        address: address, id: chain.network.value, isDefault: isDefault);
  }

  @override
  Web3MoneroChain createNewChainPermission() {
    return Web3MoneroChain.create(id: chain.network.value);
  }

  @override
  NetworkType get type => NetworkType.monero;

  @override
  Widget build(BuildContext context) {
    return UpdateChainPermissionWidget<MoneroAddress, MoneroChain,
            IMoneroAddress, Web3MoneroChainAccount>(
        chain: chain,
        chains: chains,
        onUpdateState: updateState,
        hasPermission: hasPermission,
        addAccount: addAccount,
        onChangeChain: onChangeChain,
        onChangeDefaultAccount: onChangeDefaultPermission,
        activities: activities,
        menuItems: menuItems);
  }
}
