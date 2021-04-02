import { combineReducers } from 'redux'
import todoList from './todoList'
const reducer = combineReducers({
  todoList
})
// combineReducers把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数
export default reducer;
