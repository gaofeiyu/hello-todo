import 'package:flutter/material.dart';

class TodoItem extends StatelessWidget {
  final int itemName;

  TodoItem(this.itemName);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        child: Text(
            '${this.itemName} TodoItem a long text.TodoItem a long text.TodoItem a long text.TodoItem a long text.TodoItem a long text.TodoItem a long text.TodoItem a long text.',
            textAlign: TextAlign.center,
            overflow: TextOverflow.ellipsis,
            maxLines: 2,
            style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Color.fromARGB(255, 10, 10, 10))),
        height: 30.0,
        width: 300.0,
        decoration: BoxDecoration(
            color: Colors.yellow,
            border: Border.all(color: Colors.blue, width: 3.5)),
      ),
    );
  }
}
