// ignore_for_file: avoid_print

import 'dart:io';

import 'package:blockchain_utils/utils/string/string.dart';
import 'package:on_chain_bridge/platform_interface.dart';

class Logg {
  static bool get isDebug => true;

  static void log(Object? text) {
    // print(text);
    print('\x1B[33m$text\x1B[0m');
  }

  static void error(String text) {
    print('\x1B[31m$text\x1B[0m');
  }

  static void webview(String text) {
    print(text);
  }

  static T def<T>(T Function() n, String text) {
    final stopWatch = Stopwatch()..start();
    final r = n();
    stopWatch.stop();
    log("$text: ${stopWatch.elapsedMilliseconds}");
    return r;
  }

  static Future<T> defAsync<T>(Future<T> Function() n, String text) async {
    final stopWatch = Stopwatch()..start();
    final r = await n();
    stopWatch.stop();
    log("$text: ${stopWatch.elapsedMilliseconds}");
    return r;
  }

  static void writeToTemp(Object data, String name,
      {String extension = "json"}) {
    final fName = PlatformInterface.appPlatform == AppPlatform.linux
        ? "/media/mohsen/50F3C99F3D3180AF/onchain/test/temp/${name.toLowerCase().split(" ").join("_")}.$extension"
        : "/media/mohsen/50F3C99F3D3180AF/onchain/test/temp/${name.toLowerCase().split(" ").join("_")}.$extension";
    final str = data is String
        ? data
        : StringUtils.fromJson(data, toStringEncodable: true);
    final f = File(fName)..createSync();
    if (extension == "dart") {
      f.writeAsStringSync("const data = $str;");
    } else {
      f.writeAsStringSync(str);
    }
  }
}
