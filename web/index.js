import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";

import "./styles/app.scss";

const appElement = document.getElementById("app");
if (appElement !== null) {
  ReactDOM.render(AppRouter, appElement);
}
