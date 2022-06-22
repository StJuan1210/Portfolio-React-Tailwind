import React from "react";
import Typewriter from "typewriter-effect";

function Typeeff() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "IoT Developer",
          "Deep Learning Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Typeeff;