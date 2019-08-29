import { CHANGE_INPUT } from "../actionTypes";

const inputValueDefalut = "write something";

export default (state = inputValueDefalut, action) => {
  const { type, value } = action;
  switch (type) {
    case CHANGE_INPUT:
      return value;
    default:
      return state;
  }
};
