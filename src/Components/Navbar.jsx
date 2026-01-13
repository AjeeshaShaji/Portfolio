import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-50 shadow-md">
      <div className="max-w-7xl mx-auto h-[70px] px-6 md:px-14 flex items-center justify-between font-sans">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold text-gray-900">
          Portfolio
        </h2>

        {/* Links */}
        <ul className="flex gap-4 md:gap-8">
          <li>
            <a
              href="#about"
              className="text-gray-800 font-medium px-3 py-1.5 rounded-md transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-gray-800 font-medium px-3 py-1.5 rounded-md transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="text-gray-800 font-medium px-3 py-1.5 rounded-md transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-gray-800 font-medium px-3 py-1.5 rounded-md transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
