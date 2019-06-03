import React from "react";
import { Animated } from "react-animated-css";
import "./JokesContainer.css";

export default props => {
   
    return(
        
        <Animated
          animationIn="bounceInRight"
          animationOut="fadeOut"
          animationInDelay={2000}
          isVisible={true}
        >
          <div className="Jokes" key={props.joke.punchline}>
        <h2>{props.joke.punchline}</h2>
      </div>

          </Animated>
        )
  };


