import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav z-20 fade-in flex-row-reverse text-white ">
      <div className="logo">
        <Link className="nav-link hover:text-zinc-300" to="/">
          Something
        </Link>
      </div>

      <div className="nav-links flex">
        <div className="nav-item ">
          <Link className="nav-link  hover:text-zinc-300" to="/">
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link hover:text-zinc-300" to="/projects">
            Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link hover:text-zinc-300" to="/testimonials">
            Testimonials
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link hover:text-zinc-300 " to="/experience">
            Experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
