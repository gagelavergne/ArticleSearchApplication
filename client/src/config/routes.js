import React from "react";

import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Search from "../components/Search";
import Saved from "../components/Saved";

export default (

  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Search" component={Search} />
      <Route path="Saved" component={Saved} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Search} />

    </Route>
  </Router>
);
