import React from "react";
import { List } from "antd";

function ListView(props) {
  return (
    <div style={{ width: "300px", margin: "10px" }}>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>
        )}
      />
    </div>
  );
}

export default ListView;
