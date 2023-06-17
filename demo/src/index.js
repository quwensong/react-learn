// 对es6内置api进行兼容性处理
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom/client";

// import "@/index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsx = <div> 11111 </div>;

console.log(JSON.stringify(jsx, null, 2));

root.render(jsx);
