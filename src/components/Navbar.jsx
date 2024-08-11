import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed z-10 opacity-100 text-white bg-cyan-950 flex items-center justify-between px-5 px-md-10 py-4">
      <div>
        <p className="text-xl font-semibold">Mahnoor</p>
      </div>
      <div className="hidden md:flex space-x-7">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#certifications">Certifications</a>
        <a href="#project">Projects</a>
      </div>
      <div className="hidden md:flex">
        <a href="#contact" onClick={toggleMenu}>
          <button className="bg-white text-slate-600 font-bold py-2 px-5 rounded-full max-w-max">
            Get in Touch
          </button>
        </a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <FaTimes size={23} /> : <FaBars size={23} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-cyan-950 text-white flex flex-col space-y-8 py-8 px-6 md:hidden text-xl ">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#experience" onClick={toggleMenu}>
            Experience
          </a>
          <a href="#certifications" onClick={toggleMenu}>
            Certifications
          </a>
          <a href="#project" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" onClick={toggleMenu}>
            <button className="bg-white text-slate-600 font-bold py-2 px-5 rounded-full max-w-max">
              Get in Touch
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
