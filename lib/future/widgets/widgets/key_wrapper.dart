import 'package:flutter/material.dart';

class KeyWrapper extends StatelessWidget {
  final Widget child;

  const KeyWrapper({required super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return child;
  }
}
