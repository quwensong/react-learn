const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/jian", {
      target: "/",
      changeOrigin: true,
      ws: true,
      pathRewrite: { "^/jian": "" },
    })
  );

  app.use(
    createProxyMiddleware("/zhihu", {
      target: "/config",
      changeOrigin: true,
      ws: true,
      pathRewrite: { "^/zhihu": "" },
    })
  );
};
