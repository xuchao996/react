import inputValue from "./inputValue";
import todoList from "./todoList";
// import { CHANGE_INPUT } from "../actionTypes";
// import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

import { combineReducers } from "redux";

// redux immuutable

const reducer = combineReducers({
  todoList,
  inputValue
});

export default reducer;
