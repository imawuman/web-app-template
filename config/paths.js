const path = require("path");
const fs = require("fs");

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
var appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => {
  return path.resolve(appDirectory, relativePath);
};

module.exports = {
  build: resolveApp("build"),
  nodeModules: resolveApp("node_modules"),
  serverSrc: resolveApp("server"),
  appJs: resolveApp("server/app.js"),
  webSrc: resolveApp("web"),
  indexJs: resolveApp("web/index.js"),
  indexHtml: resolveApp("assets/index.html"),
  favicon: resolveApp("assets/favicon.ico"),
};
