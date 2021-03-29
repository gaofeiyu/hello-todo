import 'package:flutter/material.dart';

class TodoItem extends StatelessWidget {
  final Map item;

  TodoItem(this.item);

  @override
  Widget build(BuildContext context) {
    return ListTile(title: Text('${this.item['name']}'));
  }
}
