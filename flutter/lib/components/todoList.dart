import 'package:flutter/material.dart';
import './todoItem.dart';

class TodoList extends StatelessWidget {
  final List list;

  TodoList(this.list);

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
