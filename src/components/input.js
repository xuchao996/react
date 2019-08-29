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
