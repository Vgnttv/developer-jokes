import React, { Component } from "react";
import { connect } from "react-redux";
import { getJokes } from "../actions/jokes";
import { Link } from "react-router-dom";
import Jokes from "./Jokes";
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
                  <div key={joke.id} className="Punchline">
                    <Jokes joke={joke} />
                  </div>
                );
              })}
            {jokes && jokes.length && (
              <div>
                <button value="refresh" onClick={this.onSubmit}>
                  More LOLs?
                </button>
                <Link to={`/randomjokes`}>
                  <button>Random LOLs</button>
                </Link>
              </div>
            )}
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
