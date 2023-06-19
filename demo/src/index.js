// 对es6内置api进行兼容性处理
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// import "@/index.less";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>计数器</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsx = (
  <div>
    <Counter />
  </div>
);

console.log(JSON.stringify(jsx, null, 2));

root.render(jsx);



