import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

const listDefault = ["早上...", "晚上..."];

export default (state = listDefault, action) => {
  const { type, value } = action;
  console.log(state, action);
  switch (type) {
    case ADD_ITEM:
      var newList = [...state, value];
      return newList;
    case DELETE_ITEM:
      var newList = [...state];
      newList.splice(value, 1);
      // redux immuutable
      return newList;
    default:
      break;
  }
  return state;
};
// redux immuutable
