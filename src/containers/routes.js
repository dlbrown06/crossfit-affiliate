// src/routes.js
// import React from "react";
// import { Route } from "react-router-dom";

import Home from "../containers/Home";
import NotFound from "../components/NotFound";
/*
const Routes = props => (
  <Route exact path="/" component={App}>
    <Route component={Home}/>
    <Route path="*" component={NotFound}/>
  </Route>
);*/
//
// export default Routes;

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "*",
    component: NotFound
  }
];
