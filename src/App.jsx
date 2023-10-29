import React, { useEffect } from "react";

import "./App.css";
import Navbar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Experience from "./Experience";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Gradient } from "whatamesh";

function App() {
  const location = useLocation();

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  });
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
