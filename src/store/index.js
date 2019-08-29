import { createStore } from "redux";

import reducer from "./reducers/index";

// store 必须是唯一的
const store = createStore(reducer);

export default store;
