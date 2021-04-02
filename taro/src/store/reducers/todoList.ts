import { ADD, REMOVE } from '../constants/todoList'

type TodoItemType = {
  name: string;
  checked: boolean;
};

const INIT_STATE: TodoItemType[] = [];

export default function todo (state = INIT_STATE, action) {
  const newList = state.slice();
  switch (action.type) {
    case ADD:
      newList.push({
        name: "新增" + new Date().getTime(),
        checked: false,
      });
      break;
     case REMOVE:
        newList.splice(action.index, 1);
        break;
     default:
       // no code
  }
  console.log(action.type, newList);
  return newList;
}
