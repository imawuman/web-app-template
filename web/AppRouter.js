import React from "react";
import { createHistory } from "history";
import { Route, Router, useRouterHistory } from "react-router";

import App from "./components/App";
import List from "./components/List";
import Show from "./components/Show";

const baseTag = document.getElementsByTagName("base")[0];
const history = useRouterHistory(createHistory)({
  basename: baseTag ? baseTag.getAttribute("href") : "/",
});

export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="list" component={List} />
      <Route path="show/:id" component={Show} />
    </Route>
  </Router>
);
