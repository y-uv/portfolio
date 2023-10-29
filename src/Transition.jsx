import React from "react";
import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />

      <motion.div
        className="slide-out"
        inital={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.2, 0, 0.58, 1] }}
      />
    </>
  );
};

export default Transition;
