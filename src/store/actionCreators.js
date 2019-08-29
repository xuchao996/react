import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

export const ADD_ITEM_ACTION = value => {
  return {
    type: ADD_ITEM,
    value
  };
};
export const CHANGE_INPUT_ACTION = value => {
  return {
    type: CHANGE_INPUT,
    value
  };
};
export const DELETE_ITEM_ACTION = value => {
  return {
    type: DELETE_ITEM,
    value
  };
};
