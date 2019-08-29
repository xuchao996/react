import React, { Component } from "react";

import Input from "./components/input";
import List from "./components/list";

import store from "./store/index";
import axios from "axios";

import {
  ADD_ITEM_ACTION,
  CHANGE_INPUT_ACTION,
  DELETE_ITEM_ACTION,
  getListAction
} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    var { inputValue, todoList } = store.getState();
    this.state = {
      inputValue,
      list: todoList
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.sub = store.subscribe(this.storeChange);
  }
  componentWillMount() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList"
      )
      .then(res => {
        store.dispatch(getListAction(res.data.data.list));
      });
  }
  componentWillUnmount() {
    this.sub();
  }
  render() {
    return (
      <div>
        <Input
          inputValue={this.state.inputValue}
          changeInput={this.changeInput}
          changeHandler={this.changeHandler}
        />
        <List list={this.state.list} deleteItem={this.deleteItem} />
      </div>
    );
  }
  changeInput(e) {
    store.dispatch(CHANGE_INPUT_ACTION(e.target.value));
  }
  changeHandler() {
    store.dispatch(ADD_ITEM_ACTION(this.state.inputValue));
  }
  storeChange() {
    // 命名不一致
    var { inputValue, todoList } = store.getState();
    this.setState({
      inputValue,
      list: todoList
    });
  }
  deleteItem(index) {
    store.dispatch(DELETE_ITEM_ACTION(index));
  }
}

export default TodoList;
