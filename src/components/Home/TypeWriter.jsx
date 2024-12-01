import React from "react";
import { Typewriter } from "react-simple-typewriter";

function TypewriterComponent() {
  return (
    <Typewriter
      words={["Web Developer", "AI/ML Enthusiast", "Open Source Contributor", "Creating amazing things!"]}
      loop={Infinity} // Infinite loop
      cursor
      cursorStyle="|"
      typeSpeed={100}
      deleteSpeed={60}
      delaySpeed={1000}
    />
  );
}

export default TypewriterComponent;
