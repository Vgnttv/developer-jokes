import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./JokesContainer.css";

export default class JokesContainer extends Component {
  render() {
    return (
      <div className="JokesContainer">
        <h1>Developers will get it...</h1>
        <Link to={`/jokes`}>
          <button> Wanna laugh?</button>
        </Link>
      </div>
    );
  }
}
