import React from "react";

import "./App.css";
import Transition from "./Transition";

const Projects = () => {
  return (
    <>
      <div className=" bg-black w-full h-screen flex items-center justify-center">
        <h1 className="top-1/4 left-1/2 text-white">Projects</h1>
      </div>
    </>
  );
};

export default Transition(Projects);
