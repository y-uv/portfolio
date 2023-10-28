import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav text-white">
      <div className="logo">
        <Link className="nav-link" to="/">
          Yuval Smith
        </Link>
      </div>

      <div className="nav-links flex">
        <div className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/testimonials">
            Testimonials
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/experience">
            Experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
