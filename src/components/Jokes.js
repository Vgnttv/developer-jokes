import React from "react";
import { Animated } from "react-animated-css";
import "./JokesContainer.css";

export default props => {
   
    return(
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
          <h2>{props.jokes.setup}</h2>
          </Animated>
           
        )}

