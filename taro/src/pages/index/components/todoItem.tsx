import { Component } from 'react'

type TodoItemType = {
  name: string,
  checked: boolean,
}

interface PropsType {
  item: TodoItemType;
  removeItem: ()=>void;
  editItem: (checked: boolean) => void;
  onSwitchItem: (value: string) => void;
}

class TodoItem extends Component<PropsType> {
  constructor(props) {
    super(props);
  }

  render() {
    const { removeItem, editItem, onSwitchItem, item } = this.props
    return (
      <li>
        <input type='checkbox' checked={item.checked} onChange={(e: any) => onSwitchItem(e.target.checked)} />
        {item.name}
        <button onClick={() => removeItem()}>移除</button>
        <input type='text' value={item.name} onChange={(e: any) => editItem(e.target.value)} />
      </li>
    );
  }
}

export default TodoItem;
