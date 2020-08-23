import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Login/Auth";
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";

const LogInRoute = () => (
  <Switch>
    <Route exact path="/" component={Feed}></Route>
    <Route path="/:name" component={Profile}></Route>
    <Route path="/Search" component={Search}></Route>
  </Switch>
);
const LogOutRoute = () => (
  <>
    <Route exact path="/" component={Auth}></Route>
  </>
);

function Routers({ isLogin }) {
  return <Router>{isLogin ? <LogInRoute /> : <LogOutRoute />}</Router>;
}

Routers.prototype = {
  isLogin: PropTypes.bool.isRequired,
};

export default Routers;
