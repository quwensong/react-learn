// 对es6内置api进行兼容性处理
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React, { useState, useRef, forwardRef, useEffect } from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";

// import "@/index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter(props, inputRef) {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const f = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );
      setData(result.data);
    };

    f();
  });

  return (
    <>
      <p>{number}</p>
      <button ref={inputRef} onClick={() => setNumber(number + 1)}>
        增加
      </button>

      {data.hits.map((d, i) => (
        <div key={i}>{d.created_at}</div>
      ))}

      <div></div>
    </>
  );
}

// no-func-assign
Counter = forwardRef(Counter);

function LayoutEffect() {
  const [color, setColor] = useState("red");
  const inputRef = useRef(); //{current:''}

  function demo() {
    console.log("input", inputRef);
  }

  return (
    <>
      <Counter ref={inputRef} />

      <div id="myDiv" style={{ background: color }}>
        颜色
      </div>
      <button onClick={demo}>测试测试测试</button>
    </>
  );
}

root.render(<LayoutEffect />);

// function createStore(reducer) {
//   let state;
//   let listeners = [];
//   const getState = () => state;
//   //subscribe 每次调用，都会返回一个取消订阅的方法
//   const subscribe = (ln) => {
//     listeners.push(ln);
//     //订阅之后，也要允许取消订阅。
//     //难道我订了某本杂志之后，就不允许我退订吗？可怕~
//     const unsubscribe = () => {
//       listeners = listeners.filter((listener) => ln !== listener);
//     };
//     return unsubscribe;
//   };
//   const dispatch = (action) => {
//     //reducer 接收老状态和action，返回一个新状态
//     state = reducer(state, action);
//     listeners.forEach((ln) => ln());
//   };
//   dispatch({ type: `@@redux/__INIT__${Math.random()}` });
//   return {
//     getState,
//     dispatch,
//     subscribe,
//   };
// }

// const initialState = {
//   color: "blue",
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "CHANGE_COLOR":
//       return {
//         ...state,
//         color: action.color,
//       };
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);

// //渲染应用
// function renderApp(state) {
//   renderHeader(state);
//   renderContent(state);
// }
// //渲染 title 部分
// function renderHeader(state) {
//   const header = document.getElementById("header");
//   header.style.color = state.color;
// }
// //渲染内容部分
// function renderContent(state) {
//   const content = document.getElementById("content");
//   content.style.color = state.color;
// }

// //点击按钮，更改字体颜色
// document.getElementById("to-blue").onclick = function () {
//   store.dispatch({
//     type: "CHANGE_COLOR",
//     color: "rgb(0, 51, 254)",
//   });
// };
// document.getElementById("to-pink").onclick = function () {
//   store.dispatch({
//     type: "CHANGE_COLOR",
//     color: "rgb(247, 109, 132)",
//   });
// };

// renderApp(store.getState());
// store.subscribe(() => renderApp(store.getState()));


// Vue3项目，使用echarts画一个饼状图






