import { ADD, REMOVE } from '../constants/todoList'

export const add = () => {
  return {
    type: ADD
  }
}
export const remove = (index: number) => {
  return {
    type: REMOVE,
    index
  }
}

// 异步的action
export function asyncAdd () {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
