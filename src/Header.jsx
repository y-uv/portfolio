import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const linkedInUrl = "https://www.linkedin.com/in/yuval-smith-b92114241/";

  return (
    <header className="bg-black text-white py-0.5 text-center lg:min-h-16 md:min-h-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-center lg:flex-shrink-0">
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-widest text-4xl font-bold transition duration-400 ease-in-out hover:text-yuvhover active:text-yuvactive mb-2 lg:mb-0 whitespace-nowrap"
          style={{
            background: "-webkit-linear-gradient(left, #a75cf6, #ffcc29)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Yuval Smith
        </a>
        <div className="flex justify-between w-full lg:w-auto lg:mt-0">
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link tracking-tighter text-lg lg:text-xl font-bold transition duration-400 ease-in-out hover:text-yuvhover cursor-pointer mx-2 my-1 lg:my-0"
          >
            About me
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link tracking-tighter text-lg lg:text-xl font-bold transition duration-400 ease-in-out hover:text-yuvhover cursor-pointer mx-2 my-1 lg:my-0"
          >
            Testimonials
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link tracking-tighter text-lg lg:text-xl font-bold transition duration-400 ease-in-out hover:text-yuvhover cursor-pointer mx-2 my-1 lg:my-0"
          >
            Projects
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
