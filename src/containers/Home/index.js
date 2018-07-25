import React, { Component } from "react";
import PropTypes from "prop-types";

import "./style.css";

class Home extends Component {
  render() {
    document.title = "Crossfit Affiliates";

    return (
      <div className="home text-center">
        <h1 className="home-welcome mb-4">Welcome to Home</h1>
        <h5 className="text-muted">Bringing Everyone Together</h5>
      </div>
    );
  }
}

Home.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
  ApiModel: PropTypes.object
};

export default Home;
