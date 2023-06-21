import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";

// {1}
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// {2}
const actions = {
  increase: () => ({ type: "INCREASE" }),
  decrease: () => ({ type: "DECREASE" }),
};

// {3}
const store = createStore(reducer);





function App() {
  const { getState, dispatch, subscribe } = store; // {4}
  const [count, setCount] = useState(getState().count); // {5}
  // {6}
  const onIncrement = () => {
    dispatch(actions.increase());
  };
  // {7}
  const onDecrement = () => {
    dispatch(actions.decrease());
  };
  // {8}
  subscribe(() => {
    setCount(getState().count);
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
