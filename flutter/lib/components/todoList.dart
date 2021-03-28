import 'package:flutter/material.dart';
import './todoItem.dart';

class TodoList extends StatelessWidget {
  final List list = [];

  TodoList() {
    this.list.addAll([1, 2, 3, 4]);
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: this.list.length,
      itemBuilder: (context, index) {
        return new TodoItem(this.list[index]);
      },
    );
  }
}
