import React from "react";
import { FaLinkedinIn, FaSoundcloud } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Link } from "react-scroll";

import "./App.css";

const Header = () => {
  const linkedInUrl = "https://www.linkedin.com/in/yuval-smith/";
  const githubUrl = "https://github.com/y-uv";
  const soundCloudUrl = "https://soundcloud.com/yuveee";

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <header className="bg-black text-white text-center lg:min-h-16 md:min-h-20">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-center lg:flex-shrink-0">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex space-x-1">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size="25px" />
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <TbBrandGithubFilled size="25px" />
              </a>
              <a href={soundCloudUrl} target="_blank" rel="noopener noreferrer">
                <FaSoundcloud size="25px" />
              </a>
            </div>
            <h1 className="text-5xl font-bold mb-4 lg:mb-2 mt-4 lg:mt-2 transition duration-100 hover:text-black hover:bg-white hover:cursor-default">
              Yuval Smith
            </h1>
            <Link
              to="projects"
              smooth={true}
              duration={300}
              className="text-2xl flex justify-center lg:justify-start transition duration-100 hover:text-black hover:bg-white hover:cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={300}
              className="text-2xl flex justify-center lg:justify-start transition duration-100 hover:text-black hover:bg-white hover:cursor-pointer"
            >
              Testimonials
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={300}
              className="text-2xl flex justify-center lg:justify-start transition duration-100 hover:text-black hover:bg-white hover:cursor-pointer"
            >
              Experience
            </Link>
          </div>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tracking-widest text-4xl font-bold transition duration-400 ease-in-out hover:text-yuvhover active:text-yuvactive mb-2 lg:mb-0 whitespace-nowrap"
          >
            {/* LinkedIn icon */}
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
