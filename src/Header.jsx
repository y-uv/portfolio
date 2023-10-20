import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const linkedInUrl = "https://www.linkedin.com/in/yuval-smith-b92114241/";

  return (
    <header className="bg-black text-white py-4 text-center">
      <div className="container mx-auto flex flex-row justify-center items-center lg:flex-row lg:justify-between lg:items-center">
        <a
          href={linkedInUrl} // Use 'href' for external links
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-widest text-3xl font-bold transition duration-400 ease-in-out hover:text-yuvhover active:text-yuvactive mx-auto lg:mx-20 mb-2 lg:mb-0"
          style={{
            background: "-webkit-linear-gradient(left, #a75cf6, #ffcc29)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Yuval Smith
        </a>
        <div className="flex justify-between">
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link tracking-tighter text-1xl font-bold transition duration-400 ease-in-out hover:text-yuvhover cursor-pointer active:text-yuvactive mx-5"
          >
            About me
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link tracking-tighter text-1xl font-bold transition duration-400 ease-in-out hover:text-yuvhover cursor-pointer active:text-yuvactive mx-5"
          >
            Testimonials
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-link tracking-tighter text-1xl font-bold transition duration-400 ease-in-out hover:text-yuvhover cursor-pointer active:text-yuvactive mx-5"
          >
            Projects
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
