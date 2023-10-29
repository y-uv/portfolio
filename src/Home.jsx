import React from "react";
import { FaLinkedinIn, FaSoundcloud } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import Transition from "./Transition";
import { Gradient } from "whatamesh";

import "./App.css";

const Home = () => {
  const linkedInUrl = "https://www.linkedin.com/in/yuval-smith/";
  const githubUrl = "https://github.com/y-uv";
  const soundCloudUrl = "https://soundcloud.com/yuveee";

  return (
    <>
      {/* <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-600 to-fuchsia-600"> */}
      <div className="flex items-center justify-center">
        <div>
          <h1 className="fade-in top-1/3 left-1/2">Yuval Smith</h1>
        </div>
        <div className="fade-in text-white flex space-x-3 absolute top-1/3 mt-6 md:mt-12">
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size="2rem" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <TbBrandGithubFilled size="2rem" />
          </a>
          <a href={soundCloudUrl} target="_blank" rel="noopener noreferrer">
            <FaSoundcloud size="2rem" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
