import 'package:flutter/material.dart';

class TodoItem extends StatelessWidget {
  final int itemName;

  TodoItem(this.itemName);

  @override
  Widget build(BuildContext context) {
    return ListTile(
        title: Text(
            '${this.itemName} TodoItem a long text.TodoItem a long text.TodoItem a long text.TodoItem a long text.TodoItem a long text.TodoItem a long text.TodoItem a long text.'));
  }
}
