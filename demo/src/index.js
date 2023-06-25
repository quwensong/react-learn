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

// 写一个简单的Vuex

// this.addressList = res.data.map((fj) => {
//   zjList = fj.evaAddressZjList.map((zj) => {
//     pcsList = zj.evaAddressPcsList.map((pcs) => {
//       sqList = pcs.evaAddressAddList.map((sq) => {
//         return {
//           label: sq.addr,
//           value: sq.dzbm,
//           J,
//         };
//       });
//       return {
//         children: sqList,
//         label: pcs.pcs,
//       };
//     });
//     return {
//       children: pcsList,
//       label: zj.zj,
//     };
//   });
//   return {
//     children: zjList,
//     label: fj.fj,
//   };
// });

// function getAddressList(data) {
//   return data.map((item) => {
//     let children = null;
//     if (item.evaAddressZjList) {
//       children = getAddressList(item.evaAddressZjList);
//     } else {
//       children = item.evaAddressPcsList
//         ? item.evaAddressPcsList.map((pcs) => ({
//             children: pcs.evaAddressAddList.map((sq) => ({
//               label: sq.addr,
//               value: sq.dzbm,
//               J,
//             })),
//             label: pcs.pcs,
//           }))
//         : [];
//     }

//     return {
//       children,
//       label: item.evaAddressZjList ? item.zj : item.fj,
//     };
//   });
// }
// this.addressList = getAddressList(res.data);

