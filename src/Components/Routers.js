import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import Feed from "../Routes/Feed";
import LoginAuth from "../Routes/LoginAuth";

const LogInRoute = () => (
  <>
    <Route exact path="/" component={Feed}></Route>
  </>
);
const LogOutRoute = () => (
  <>
    <Route exact path="/" component={LoginAuth}></Route>
  </>
);

function Routers({ isLogin }) {
  return (
    <Router>
      <Switch>{isLogin ? <LogInRoute /> : <LogOutRoute />}</Switch>
    </Router>
  );
}

Routers.prototype = {
  isLogin: PropTypes.bool.isRequired,
};

export default Routers;
