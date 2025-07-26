import 'package:flutter/material.dart';

class ReadOnlyTabbar extends StatelessWidget implements PreferredSizeWidget {
  const ReadOnlyTabbar(
      {required this.child, required this.isEnabled, super.key});
  final bool isEnabled;
  final PreferredSizeWidget child;
  @override
  Size get preferredSize => child.preferredSize;

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      ignoring: !isEnabled,
      child: child,
    );
  }
}
