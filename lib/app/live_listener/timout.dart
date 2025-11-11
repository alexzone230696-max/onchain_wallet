import 'dart:async';

abstract mixin class TimerEvent {
  Timer? _timer;
  Duration get timeoutDuration;
  void onTimerEvent() {}

  void cancelTimer() {
    _timer?.cancel();
    _timer = null;
  }

  void startTimer() {
    _timer?.cancel();
    _timer = null;
    _timer = Timer(timeoutDuration, onTimerEvent);
  }
}
