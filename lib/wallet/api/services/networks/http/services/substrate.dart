import 'package:blockchain_utils/service/models/params.dart';
import 'package:on_chain_wallet/app/isolate/types.dart';
import 'package:on_chain_wallet/wallet/api/provider/networks/substrate.dart';
import 'package:on_chain_wallet/wallet/api/services/impl/http/http.dart';

class SubstrateHTTPService extends HTTPService<SubstrateAPIProvider>
    with MultichainServiceProvider {
  SubstrateHTTPService({required this.provider, required this.isolate});
  @override
  final APPIsolate isolate;
  @override
  final SubstrateAPIProvider provider;

  @override
  Future<BaseServiceResponse<T>> doRequest<T>(BaseServiceRequestParams params,
      {Duration? timeout}) async {
    return await serviceRequest<T>(params,
        uri: params.toUri(provider.callUrl),
        allowStatus: [200],
        timeout: timeout);
  }
}
