import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import Feed from "../Routes/Feed/Feed";
import Auth from "../Routes/Login/Auth";

import Header from "./Header";
import Search from "../Routes/Search/Search";
import Profile from "../Routes/Profile/Profile";

const LogInRoute = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route exact path="/:name" component={Profile} />
    <Route path="/Search" component={Search} />
  </Switch>
);
const LogOutRoute = () => (
  <>
    <Route exact path="/" component={Auth}></Route>
  </>
);

function Routers({ isLogin }) {
  return (
    <Router>
      {isLogin ? (
        <>
          <Header />
          <LogInRoute />
        </>
      ) : (
        <LogOutRoute />
      )}
    </Router>
  );
}

Routers.prototype = {
  isLogin: PropTypes.bool.isRequired,
};

export default Routers;
