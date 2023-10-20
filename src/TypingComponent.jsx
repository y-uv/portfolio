import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingComponent = () => {
  const [text] = useTypewriter({
    words: [
      "Student",
      "Developer",
      "Music Producer",
      "Team Captain",
      "Creative",
      "Problem Solver",
      "Curious Mind",
      "Friend",
      "Proactive Learner",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  const addPeriod = (word) => {
    return word + ".";
  };

  return (
    <h1 className="m-20 text-6xl">
      I'm a{" "}
      <span className="font-bold text-white">
        {text !== "" ? addPeriod(text) : ""}
      </span>
      <Cursor cursorStyle="<" cursorColor="#ffffff" />
    </h1>
  );
};

export default TypingComponent;
