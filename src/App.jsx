import React from "react";

import "./App.css";
import SoundCloudCard from "./SoundCloudCard";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import TypingComponent from "./TypingComponent";
import Experience from "./Experience";

import { Element } from "react-scroll";

function App() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden scrollbar-hidden">
        <Element name="header" className="element snap-start">
          <Header />
        </Element>
        <Element name="projects" className="element snap-start">
          <Projects />
        </Element>
        <Element name="testimonials" className="element snap-start">
          <Testimonials />
        </Element>
        <Element name="experience" className="element snap-start">
          <Experience />
        </Element>
      </div>
    </>
  );
}

export default App;
