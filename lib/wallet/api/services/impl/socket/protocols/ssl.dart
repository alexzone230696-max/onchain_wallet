import 'package:on_chain_wallet/wallet/api/provider/core/provider.dart';
import 'package:on_chain_wallet/wallet/api/services/impl/socket/protocols/tcp.dart';
import 'package:on_chain_wallet/wallet/api/services/models/models/protocols.dart';

class SSLService<T extends APIProvider> extends TCPService<T> {
  SSLService({required super.provider});

  @override
  ServiceProtocol get protocol => ServiceProtocol.ssl;
}
