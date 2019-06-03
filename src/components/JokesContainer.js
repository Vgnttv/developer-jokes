import React, { Component } from "react";
import { connect } from "react-redux";
import { getJokes } from "../actions/jokes";
import Jokes from "./Jokes";
import Punchlines from "./Punchlines";
import LoadingModal from "./LoadingModal";
import "./JokesContainer.css";

class JokesContainer extends Component {
  componentDidMount() {
    this.props.getJokes();
  }

  onSubmit = () => {
    this.props.getJokes();
  };
  render() {
    console.log("jokes", this.props.jokes);
    const { jokes } = this.props;

    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div className="JokesContainer">
            <h1>Developers will get it...</h1>

            {jokes &&
              jokes.length &&
              jokes.map(joke => {
                return (
                  <div key={joke.id} className="Joke">
                    <Jokes jokes={joke} />
                  </div>
                );
              })}

            {jokes &&
              jokes.length &&
              jokes.map(joke => {
                return (
                  <div key={joke.id} className="Punchline">
                    <Punchlines joke={joke} />
                  </div>
                );
              })}
            {/* <img
              src="https://media.giphy.com/media/wWue0rCDOphOE/giphy.gif"
              alt="LOLOL"
            /> */}
            <button value="refresh" onClick={this.onSubmit}>
              More LOLs?
            </button>
          </div>
        )}
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
