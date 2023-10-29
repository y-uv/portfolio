import React from "react";
import "./App.css";
import Transition from "./Transition";

const Testimonials = () => {
  return (
    <>
      <canvas id="gradient-canvas"></canvas>

      <div className="flex items-center justify-center">
        <h1 className="text-white top-1/3 left-1/2 ">Testimonials</h1>
      </div>
    </>
  );
};

export default Transition(Testimonials);
