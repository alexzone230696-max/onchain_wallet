import 'package:flutter/material.dart';
import 'package:on_chain_wallet/future/widgets/widgets/json/json/interactive_json_preview/interactive_json_preview.dart';

class JsonView extends StatefulWidget {
  final Object text;
  final String title;
  final bool selectable;

  const JsonView({
    super.key,
    required this.text,
    required this.title,
    this.selectable = false,
  });

  @override
  State<JsonView> createState() => _JsonViewState();
}

class _JsonViewState extends State<JsonView> {
  bool selectable = false;

  @override
  void initState() {
    super.initState();
    selectable = widget.selectable;
  }

  void toggleSelectable() {
    setState(() => selectable = !selectable);
  }

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      shrinkWrap: true,
      slivers: [
        SliverAppBar(title: Text(widget.title)),
        InteractiveJsonPreview(data: widget.text)
      ],
    );
  }
}
