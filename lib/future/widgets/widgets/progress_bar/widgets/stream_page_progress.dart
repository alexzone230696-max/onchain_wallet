import 'dart:async';
import 'package:flutter/material.dart';
import 'package:on_chain_wallet/app/core.dart';
import 'package:on_chain_wallet/future/state_managment/state_managment.dart';
import 'package:on_chain_wallet/future/widgets/custom_widgets.dart';

class StreamPageProgressController extends StreamValue<PageProgressStatus> {
  final PageProgressStatus initialStatus;
  StreamPageProgressController(
      {this.initialStatus = PageProgressStatus.idle,
      this.idleTimeout = APPConst.oneSecoundDuration})
      : super(initialStatus);
  final Duration idleTimeout;

  PageProgressStatus? get status => value;
  bool get isSuccess => value == PageProgressStatus.success;
  bool get hasError => value == PageProgressStatus.error;
  bool get inProgress => value == PageProgressStatus.progress;

  Widget? _current;

  Widget? getWidget() {
    try {
      return _current;
    } finally {
      _current = null;
    }
  }

  void _listen(PageProgressStatus status) async {
    if (status == PageProgressStatus.progress ||
        status == PageProgressStatus.idle) {
      return;
    }
    await Future.delayed(idleTimeout);
    _updateStream(PageProgressStatus.idle, progressWidget: null);
  }

  void _updateStream(PageProgressStatus status,
      {Widget? progressWidget, bool backToIdle = true}) {
    if (isClosed) return;
    silent = status;
    _current = progressWidget;
    notify();
    if (backToIdle) {
      _listen(status);
    }
  }

  void setInitialState() {
    _current = null;
    silent = initialStatus;
  }

  void progress([Widget? progressWidget]) {
    _updateStream(StreamWidgetStatus.progress, progressWidget: progressWidget);
  }

  void progressText(String text, {Widget? bottomWidget, Widget? icon}) {
    _updateStream(StreamWidgetStatus.progress,
        progressWidget: ProgressWithTextView(
          text: text,
          bottomWidget: bottomWidget,
          icon: icon,
        ));
  }

  void error([Widget? progressWidget]) {
    _updateStream(StreamWidgetStatus.error, progressWidget: progressWidget);
  }

  void backToIdle([Widget? progressWidget]) {
    _updateStream(StreamWidgetStatus.idle);
  }

  void errorText(String text,
      {bool backToIdle = true,
      bool showBackButton = false,
      DynamicVoid? onTapBackButton}) {
    _updateStream(StreamWidgetStatus.error,
        progressWidget: StreamPageProgressErrorView(
          text: text,
          controller: showBackButton ? this : null,
          onTapBackButton: onTapBackButton,
        ),
        backToIdle: backToIdle);
  }

  void success({Widget? progressWidget, bool backToIdle = true}) {
    _updateStream(StreamWidgetStatus.success,
        progressWidget: progressWidget, backToIdle: backToIdle);
  }

  void successProgress({Widget? progressWidget, bool backToIdle = true}) {
    _updateStream(StreamWidgetStatus.success,
        progressWidget: progressWidget ?? const CircularProgressIndicator(),
        backToIdle: backToIdle);
  }

  void successText(String text, {bool backToIdle = true}) {
    _updateStream(StreamWidgetStatus.success,
        progressWidget: SuccessWithTextView(
          text: text,
        ),
        backToIdle: backToIdle);
  }
}

class StreamPageProgress extends StatefulWidget {
  final StreamPageProgressController controller;
  final FuncWidgetContext builder;

  final Widget? initialWidget;
  const StreamPageProgress(
      {required this.controller,
      required this.builder,
      this.initialWidget,
      super.key});
  @override
  State<StreamPageProgress> createState() => _StreamPageProgressState();
}

class _StreamPageProgressState extends State<StreamPageProgress>
    with SafeState<StreamPageProgress> {
  StreamPageProgressController get controller => widget.controller;
  StreamSubscription<StreamWidgetStatus>? _listener;
  StreamWidgetStatus status = StreamWidgetStatus.idle;
  Widget? child;
  Widget? currentWidget;

  void onChangeStatus(StreamWidgetStatus status) {
    this.status = status;
    currentWidget = controller.getWidget();
    updateState();
  }

  @override
  void onInitOnce() {
    super.onInitOnce();
    status = controller.value;
    _listener = controller.stream.listen(onChangeStatus);
    if (status.inProgress) {
      currentWidget = widget.initialWidget;
    } else {
      currentWidget = controller.getWidget();
    }
  }

  @override
  void safeDispose() {
    super.safeDispose();
    controller.setInitialState();
    currentWidget = null;
    child = null;
    _listener?.cancel();
    _listener = null;
  }

  @override
  Widget build(BuildContext context) {
    return APPAnimatedSwitcher(
      duration: APPConst.animationDuraion,
      enable: status,
      widgets: {
        PageProgressStatus.idle: (c) => widget.builder(c),
        PageProgressStatus.success: (c) => PageProgressChildWidget(
            currentWidget ?? WidgetConstant.checkCircleLarge),
        PageProgressStatus.error: (c) => PageProgressChildWidget(
            currentWidget ?? WidgetConstant.errorIconLarge),
        PageProgressStatus.progress: (c) => PageProgressChildWidget(
            currentWidget ?? const CircularProgressIndicator()),
      },
    );
  }
}
