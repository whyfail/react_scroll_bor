## 基于 React 的文字循环滚动效果组件

## 使用方式

```
import React from "react";
import ReactScrollBor from "./ReactScrollBor";

const mostSpan = new Array(100).fill("测试数据");

export default function App() {
  return (
    <ReactScrollBor>
      {mostSpan.map((item, index) => {
        return (
          <span style={{ marginLeft: "100px" }} key={index}>
            {item}
          </span>
        );
      })}
    </ReactScrollBor>
  );
}

```
