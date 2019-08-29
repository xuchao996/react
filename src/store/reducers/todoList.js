import { ADD_ITEM, DELETE_ITEM, GET_LIST } from "../actionTypes";

const listDefault = ["早上...", "晚上..."];

export default (state = listDefault, action) => {
  const { type, value } = action;
  // console.log(action);
  var newList = [];
  switch (type) {
    case ADD_ITEM:
      newList = [...state, value];
      return newList;
    case DELETE_ITEM:
      newList = [...state];
      newList.splice(value, 1);
      // redux immuutable
      return newList;
    case GET_LIST:
      newList = [...value];
      return newList;
    default:
      break;
  }
  return state;
};
// redux immuutable
