import { CloseOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

export default function Widget({ id, onRemoveItem, component: Item }) {
  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flexGrow: 1,
        }}
      />
      <span style={{ float: "right" }} onClick={() => onRemoveItem(id)}>
        <CloseOutlined />
      </span>
      <div
        style={{
          padding: "0.5rem",
          flexGrow: 1,
        }}
      >
        <Item />
      </div>
    </Card>
  );
}
