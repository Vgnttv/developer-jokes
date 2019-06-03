import React from "react";
import { Animated } from "react-animated-css";
import "./JokesContainer.css";

export default props => {
  return (
    <div>
      <h2>{props.joke.setup}</h2>
      <Animated
        animationIn="bounceInRight"
        animationOut="fadeOut"
        animationInDelay={1500}
        isVisible={true}
      >
        <div className="Jokes" key={props.joke.punchline}>
          <h2>{props.joke.punchline}</h2>
        </div>
      </Animated>
      <Animated
        animationIn="bounceInUp"
        animationOut="fadeOut"
        animationInDelay={2500}
        isVisible={true}
      >
        <div className="Jokes" key={props.joke.punchline}>
          <img
            src="https://media.giphy.com/media/wWue0rCDOphOE/giphy.gif"
            alt="LOLOL"
          />
        </div>
      </Animated>
    </div>
  );
};
