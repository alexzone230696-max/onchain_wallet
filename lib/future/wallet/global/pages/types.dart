import 'package:on_chain_wallet/wallet/wallet.dart';

typedef APPCHAINNETWORK<NETWORKADDRESS> = Chain<
    APIProvider,
    NetworkCoinParams,
    NETWORKADDRESS,
    TokenCore,
    NFTCore,
    ChainAccount<NETWORKADDRESS, TokenCore, NFTCore, ChainTransaction>,
    WalletNetwork,
    NetworkClient,
    DefaultNetworkConfig,
    ChainTransaction,
    ContactCore,
    NewAccountParams>;

typedef APPCHAINACCOUNT<CHAINACCOUNT extends ChainAccount> = Chain<
    APIProvider,
    NetworkCoinParams,
    dynamic,
    TokenCore,
    NFTCore,
    CHAINACCOUNT,
    WalletNetwork,
    NetworkClient,
    DefaultNetworkConfig,
    ChainTransaction,
    ContactCore,
    NewAccountParams>;

typedef APPCHAINACCOUNTTX<CHAINACCOUNT extends ChainAccount,
        TRANSACTION extends ChainTransaction>
    = Chain<
        APIProvider,
        NetworkCoinParams,
        dynamic,
        TokenCore,
        NFTCore,
        CHAINACCOUNT,
        WalletNetwork,
        NetworkClient,
        DefaultNetworkConfig,
        TRANSACTION,
        ContactCore,
        NewAccountParams>;

typedef APPCHAINCLIENT<CL extends NetworkClient> = Chain<
    APIProvider,
    NetworkCoinParams,
    dynamic,
    TokenCore,
    NFTCore,
    ChainAccount,
    WalletNetwork,
    CL,
    DefaultNetworkConfig,
    ChainTransaction,
    ContactCore,
    NewAccountParams>;

typedef APPCHAINACCOUNTCLIENT<CHAINACCOUNT extends ChainAccount,
        CL extends NetworkClient>
    = Chain<
        APIProvider,
        NetworkCoinParams,
        dynamic,
        TokenCore,
        NFTCore,
        CHAINACCOUNT,
        WalletNetwork,
        CL,
        DefaultNetworkConfig,
        ChainTransaction,
        ContactCore,
        NewAccountParams>;

typedef APPCHAINACCOUNTCLIENTNETWORK<CHAINACCOUNT extends ChainAccount,
        CL extends NetworkClient, NETWORK extends WalletNetwork>
    = Chain<
        APIProvider,
        NetworkCoinParams,
        dynamic,
        TokenCore,
        NFTCore,
        CHAINACCOUNT,
        NETWORK,
        CL,
        DefaultNetworkConfig,
        ChainTransaction,
        ContactCore,
        NewAccountParams>;
typedef APPCHAINACCOUNTNETWORK<CHAINACCOUNT extends ChainAccount,
        NETWORK extends WalletNetwork>
    = Chain<
        APIProvider,
        NetworkCoinParams,
        dynamic,
        TokenCore,
        NFTCore,
        CHAINACCOUNT,
        NETWORK,
        NetworkClient,
        DefaultNetworkConfig,
        ChainTransaction,
        ContactCore,
        NewAccountParams>;
typedef APPCHAINADDRESSACCOUNTCLIENTNETWORK<
        NETWORKADDRESS,
        CHAINACCOUNT extends NETWORKCHAINACCOUNT<NETWORKADDRESS>,
        CL extends NetworkClient,
        NETWORK extends WalletNetwork>
    = Chain<
        APIProvider,
        NetworkCoinParams,
        NETWORKADDRESS,
        TokenCore,
        NFTCore,
        CHAINACCOUNT,
        NETWORK,
        CL,
        DefaultNetworkConfig,
        ChainTransaction,
        ContactCore,
        NewAccountParams>;
