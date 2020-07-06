import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "../page/home/home.js";
import Articles from "../page/article/article.js";

class RouteMap extends React.Component {
  render() {
    return (
      <HashRouter>
        <main>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/article" exact component={Articles}></Route>
          </Switch>
        </main>
      </HashRouter>
    )
  }
}

export default RouteMap;