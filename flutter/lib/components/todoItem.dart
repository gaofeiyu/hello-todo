import 'package:flutter/material.dart';

class TodoItem extends StatelessWidget {
  final Map item;

  TodoItem(this.item);

  @override
  Widget build(BuildContext context) {
    return CheckboxListTile(
      title: Text('${this.item['name']}'),
      controlAffinity: ListTileControlAffinity.leading,
      onChanged: (bool value) {
        this.item['checked'] = value;
      },
      value: this.item['checked'],
    );
  }
}
