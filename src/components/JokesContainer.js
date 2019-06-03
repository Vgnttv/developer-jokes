import React, { Component } from "react";
import { connect } from "react-redux";
import { getJokes } from "../actions/jokes";
import { Animated } from "react-animated-css";

class JokesContainer extends Component {
  componentDidMount() {
    this.props.getJokes();
  }
  render() {
    const { jokes } = this.props;
    console.log("this.props.jokes", this.props);

    return (
      <div className="EventDetailsContainer">
        <div className="EventDetails">
          {jokes && (
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h1>{jokes[0].setup}</h1>
              <h2>{jokes[0].punchline}</h2>
            </Animated>
          )}
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
