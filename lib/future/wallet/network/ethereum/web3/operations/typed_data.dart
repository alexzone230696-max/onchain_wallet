import 'package:flutter/material.dart';
import 'package:on_chain_wallet/crypto/requets/messages/wallet/requests/typed_data.dart';
import 'package:on_chain_wallet/future/wallet/network/ethereum/web3/pages/typed_data.dart';
import 'package:on_chain_wallet/future/wallet/network/ethereum/web3/types/types.dart';
import 'package:on_chain_wallet/future/wallet/web3/core/state.dart';
import 'package:on_chain_wallet/wallet/api/api.dart';
import 'package:on_chain_wallet/wallet/web3/networks/ethereum/params/models/sign_typed_data.dart';

class Web3EthereumSignTypedDataStateController
    extends Web3EthereumStateController<String, EthereumClient?,
        Web3EthreumTypdedData> {
  Web3EthereumSignTypedDataStateController(
      {required super.walletProvider, required super.request});

  @override
  Future<Web3RequestResponseData<String>> getResponse() async {
    final account = defaultAccount;
    final sign = await walletProvider.wallet
        .walletRequest(WalletRequestEthereumTypedDataSign(
      message: params.typedData,
      index: account.keyIndex.cast(),
    ));
    return Web3RequestResponseData(response: sign.result);
  }

  @override
  Widget widgetBuilder(BuildContext context) {
    return Web3EthereumSignTypedDataStateView(controller: this);
  }
}
