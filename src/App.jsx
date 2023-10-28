import React from "react";

import "./App.css";
import Navbar from "./NavBar";
import Home from "./Home";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Experience from "./Experience";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
