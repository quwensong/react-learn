import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsx = <div>11111</div>;

console.log(JSON.stringify(jsx, null, 2));

root.render(jsx);
