import 'package:flutter/material.dart';
import 'tooltip.dart';

class TappedTooltipView extends StatefulWidget {
  const TappedTooltipView({
    required this.tooltipWidget,
    this.ignore = true,
    this.triggerOnHover = false,
    super.key,
  });
  final ToolTipView tooltipWidget;
  final bool ignore;
  final bool triggerOnHover;

  @override
  State<TappedTooltipView> createState() => _TappedTooltipViewState();
}

class _TappedTooltipViewState extends State<TappedTooltipView> {
  final GlobalKey<TooltipState> tooltipKey = GlobalKey();

  void ensureVisible() {
    tooltipKey.currentState?.ensureTooltipVisible();
  }

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: ensureVisible,
      onHover: widget.triggerOnHover
          ? (e) {
              if (e) ensureVisible();
            }
          : null,
      child: IgnorePointer(
          ignoring: widget.ignore,
          child: widget.tooltipWidget.setKey(tooltipKey)),
    );
  }
}
