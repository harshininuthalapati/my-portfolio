// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white px-6 py-4 shadow-md fixed w-full z-10 top-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Harshini Portfolio</h1>
        <div className="space-x-6 text-sm md:text-base">
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#projects" className="hover:text-yellow-300">Projects</a>
          <a href="#research" className="hover:text-yellow-300">Research</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
