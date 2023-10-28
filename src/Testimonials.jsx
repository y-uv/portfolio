import React from "react";
import "./App.css";
import Transition from "./Transition";

const Testimonials = () => {
  return (
    <>
      <div className="bg-black w-full h-screen flex items-center justify-center">
        <h1 className="text-white top-1/4 left-1/2 ">Testimonials</h1>
      </div>
    </>
  );
};

export default Transition(Testimonials);
