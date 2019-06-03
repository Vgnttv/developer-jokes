import React, { Component } from "react";
import { connect } from "react-redux";
import { getJokes } from "../actions/jokes";
import { Animated } from "react-animated-css";
import "./JokesContainer.css";
class JokesContainer extends Component {
  componentDidMount() {
    this.props.getJokes();
  }
  renderJoke = joke => {
    return (
      <div className="Jokes" key={joke.id}>
        <h1>{joke.setup}</h1>
      </div>
    );
  };

  renderPunchline = joke => {
    return (
      <div className="Jokes" key={joke.punchline}>
        <h2>{joke.punchline}</h2>
      </div>
    );
  };
  onSubmit = () => {
    window.location.reload();
  };
  
  render() {
    const { jokes } = this.props;
    console.log("this.props", this.props);

    return (
      <div className="JokesContainer">
        <div className="Joke">
          {jokes && (
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div>{jokes && jokes.map(joke => this.renderJoke(joke))}</div>
            </Animated>
          )}
        </div>
        <div className="Punchline">
          {jokes && (
            <Animated
              animationIn="bounceInRight"
              animationOut="fadeOut"
              animationInDelay="2000"
              isVisible={true}
            >
              <div>
                {jokes && jokes.map(joke => this.renderPunchline(joke))}
              </div>
            </Animated>
          )}
          <button value="refresh" onClick={this.onSubmit}>
            LOL
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  jokes:
    state.jokes === null
      ? null
      : Object.values(state.jokes).sort((a, b) => b.id - a.id)
});

export default connect(
  mapStateToProps,
  {
    getJokes
  }
)(JokesContainer);
