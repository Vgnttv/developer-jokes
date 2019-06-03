import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import JokesContainer from "./components/JokesContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <main>
            <Route exact path="/" component={JokesContainer} />
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
