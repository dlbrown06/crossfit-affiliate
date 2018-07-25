import React, { Component } from "react";
import { Route } from "react-router-dom";

import routes from "../routes";

import "./style.css";

class App extends Component {
  render() {

    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {})
    );

    return (
      <div className="app">
        {/*<NavigationBar />*/}
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </div>
    );
  }
}

export default App;
