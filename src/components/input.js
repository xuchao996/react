/**
 * @change 函数式的写法要优于 class 的写法，性能上。引入React是为了去做 jsx 语法的支持
 * @change 使用props作为参数，该组件作为一个无状态组件
 */

import React from "react";

import "antd/dist/antd.css";

import { Input, Button } from "antd";

function InputView(props) {
  return (
    <div>
      <Input
        placeholder={props.inputValue}
        style={{ width: "250px" }}
        onChange={props.changeInput}
      />
      <Button type="primary" onClick={props.changeHandler}>
        增加
      </Button>
    </div>
  );
}

export default InputView;
