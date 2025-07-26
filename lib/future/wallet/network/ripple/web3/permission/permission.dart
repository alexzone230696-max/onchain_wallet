import 'package:flutter/material.dart';
import 'package:on_chain_wallet/crypto/models/networks.dart';
import 'package:on_chain_wallet/future/future.dart';
import 'package:on_chain_wallet/future/state_managment/state_managment.dart';
import 'package:on_chain_wallet/wallet/models/chain/account.dart';
import 'package:on_chain_wallet/wallet/web3/core/permission/models/authenticated.dart';
import 'package:on_chain_wallet/wallet/web3/networks/ripple/ripple.dart';
import 'package:xrpl_dart/xrpl_dart.dart';

class RippleWeb3PermissionView extends StatefulWidget {
  const RippleWeb3PermissionView({required this.application, super.key});
  final Web3APPAuthentication application;

  @override
  State<RippleWeb3PermissionView> createState() =>
      _RippleWeb3PermissionViewState();
}

class _RippleWeb3PermissionViewState extends State<RippleWeb3PermissionView>
    with
        SafeState,
        Web3PermissionState<RippleWeb3PermissionView, XRPAddress, XRPChain,
            IXRPAddress, Web3XRPChainAccount, Web3XRPChain> {
  @override
  Web3APPAuthentication get application => widget.application;
  @override
  Web3XRPChainAccount createNewAccountPermission(
      IXRPAddress address, bool isDefault) {
    return Web3XRPChainAccount.fromChainAccount(
        address: address, id: chain.network.value, isDefault: isDefault);
  }

  @override
  Web3XRPChain createNewChainPermission() {
    return Web3XRPChain.create(id: chain.network.value);
  }

  @override
  NetworkType get type => NetworkType.xrpl;

  @override
  Widget build(BuildContext context) {
    return UpdateChainPermissionWidget<XRPAddress, XRPChain, IXRPAddress,
            Web3XRPChainAccount>(
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
