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
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  const addPeriod = (word) => {
    return word + ".";
  };

  return (
    <div className="flex typing-component-container h-20 lg:h-32 mt-8 md:mt-5">
      <h1 className=" font-consolas m-0 text-6xl">
        i'm a{" "}
        <span className="font-consolas font-medium text-white">
          {text !== "" ? addPeriod(text) : ""}
        </span>
        <Cursor cursorStyle="<" cursorColor="#ffffff" />
      </h1>
    </div>
  );
};

export default TypingComponent;
