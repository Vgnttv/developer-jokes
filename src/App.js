import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import JokesContainer from "./components/JokesContainer";
import RandomJokesContainer from "./components/RandomJokesContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <main>
            <Route exact path="/" component={JokesContainer} />
            <Route exact path="/randomjokes" component={RandomJokesContainer} />
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
