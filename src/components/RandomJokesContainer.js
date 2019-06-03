import React, { Component } from "react";
import { connect } from "react-redux";
import { getRandomJokes } from "../actions/jokes";
import { Link } from "react-router-dom";
import LoadingModal from "./LoadingModal";
import "./RandomJokesContainer.css";

class RandomJokesContainer extends Component {
  componentDidMount() {
    this.props.getRandomJokes();
  }

  onSubmit = () => {
    this.props.getRandomJokes();
  };
  render() {
    const { jokes } = this.props;

    return (
      <div>
        {this.props.loading ? (
          <LoadingModal />
        ) : (
          <div className="RandomJokesContainer">
            <h1>A bunch</h1>

            {jokes &&
              jokes.length &&
              jokes.map(joke => {
                return (
                  <div key={joke.id} className="RandomJokes">
                    <h3>
                      {joke.setup} {joke.punchline}
                    </h3>
                  </div>
                );
              })}
        <button value="refresh" onClick={this.onSubmit}>
          More?
        </button>
        <Link to={`/`}>
          <button>Back</button>
        </Link>
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
    getRandomJokes
  }
)(RandomJokesContainer);
