import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsx = <div>11111</div>;

console.log(JSON.stringify(jsx, null, 2));

root.render(jsx);

var lengthOfLongestSubstring = function (s) {
  let arr = [],
    max = 0;
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(s.charAt(i));
    max = Math.max(arr.length, max);
  }
  return max;
};

console.log(lengthOfLongestSubstring("dvdf"));

// 写一个快速排序 javascript

/*
https://codegeex.cn
*/

// 写一个快速排序
