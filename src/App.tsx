import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Loadable from "react-loadable";

const Loading = () => <div>...</div>;

const routes = [
  {
    path: "/page-one",
    Component: Loadable({
      loader: () => import("./pages/PageOne"),
      loading: Loading
    })
  },
  {
    path: "/page-two",
    Component: Loadable({
      loader: () => import("./pages/PageTwo"),
      loading: Loading
    })
  }
];

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header>
          <ul>
            <li>
              <Link to="/page-one">Page One</Link>
            </li>
            <li>
              <Link to="/page-two">Page Two</Link>
            </li>
            <li>
              <Link to="/page-two/alt">Page Two Alternate</Link>
            </li>
          </ul>
        </header>
        <main>
          <div>This is the body content</div>
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
