import React from "react";

import "./App.css";
import Transition from "./Transition";

const Projects = () => {
  return (
    <>
      <canvas id="gradient-canvas"></canvas>

      <div className="flex items-center justify-center">
        <h1 className="top-1/3 left-1/2 text-white">Projects</h1>
      </div>
    </>
  );
};

export default Transition(Projects);
