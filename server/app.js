import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { apiRoutes } from "./apiRoutes";

const app = express();
const development = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 9000;

app.use(morgan('dev'));
app.use(bodyParser.json());
apiRoutes(app);

if (development) {
  const webpack = require("webpack");
  const config = require("../config/webpack.config");
  const devMiddleware = require("webpack-dev-middleware");
  const historyApiFallback = require("connect-history-api-fallback");
  const compiler = webpack(config);
  app.use(historyApiFallback());
  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
} else {
  app.use(express.static("web"));
  app.get("*", (req, res) => {
    res.sendFile("web/index.html");
  });
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}, open http://0.0.0.0:${PORT} in the browser.`) // eslint-disable-line
});
