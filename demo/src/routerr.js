// 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件，处理默认hash
window.addEventListener("DOMContentLoaded", onLoad);
// 监听路由变化
window.addEventListener("hashchange", onHashChange);
// 路由变化时，根据路由渲染对应 UI
function onHashChange() {
  switch (location.hash) {
    case "#/home":
      routerView.innerHTML = "This is Home";
      return;
    case "#/about":
      routerView.innerHTML = "This is About";
      return;
    case "#/list":
      routerView.innerHTML = "This is List";
      return;
    default:
      routerView.innerHTML = "Not Found";
      return;
  }
}
