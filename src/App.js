import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import routers from "./router/router.js";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "./component/layout/layout.js";
const App = () => {
  return (
    <HashRouter>
      <main>
        {/* <Suspense fallback={'加载中'}> */}
          <Switch>
            <Layout>
              {routers.map((item, index) => {
                return (
                  <Route
                    path={item.path}
                    exact={item.exact}
                    component={item.component}
                    key={index}
                  />
                );
              })}
            </Layout>
          </Switch>
        {/* </Suspense> */}
      </main>
    </HashRouter>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default App;
