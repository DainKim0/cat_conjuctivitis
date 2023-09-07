const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/uploader"], {
      target: "https://azfunctions-hanium.azurewebsites.net",
      changeOrigin: true,
    })
  );
};
