import React from "react";
import { FaLinkedinIn, FaSoundcloud } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import transition from "./Transition";

import "./App.css";

const Home = () => {
  const linkedInUrl = "https://www.linkedin.com/in/yuval-smith/";
  const githubUrl = "https://github.com/y-uv";
  const soundCloudUrl = "https://soundcloud.com/yuveee";

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-600 to-fuchsia-600">
      <div>
        <h1 className="top-1/4 left-1/2">Yuval Smith</h1>
      </div>
      <div className=" text-white flex space-x-1 absolute top-1/4 mt-10 ">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size="3vw" />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <TbBrandGithubFilled size="3vw" />
        </a>
        <a href={soundCloudUrl} target="_blank" rel="noopener noreferrer">
          <FaSoundcloud size="3vw" />
        </a>
      </div>
    </div>
  );
};

export default transition(Home);
