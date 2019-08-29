import inputValue from "./inputValue";
import todoList from "./todoList";

//
// import { CHANGE_INPUT } from "../actionTypes";
// import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

import { combineReducers } from "redux";

// redux immuutable
// reducer 只是做了一层返回，并没有更改store里的数据。store拿到了 Reducer 的数据，自己对自己做了更新。
// Reducer 必须是个纯函数，他只是支持在操作state时深拷贝一个数据，做更新，返回一个新的数据

const reducer = combineReducers({
  todoList,
  inputValue
});

export default reducer;
