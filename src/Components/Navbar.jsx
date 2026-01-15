import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full 
      bg-[#2b2b2b]/90 backdrop-blur-md 
      border-b border-gray-700"
    >
      <div className="max-w-7xl mx-auto h-[70px] px-6 md:px-14 
        flex items-center justify-between font-sans">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Portfolio
        </h2>

        {/* Links */}
        <ul className="flex gap-4 md:gap-8">
          {["About", "Projects", "Education", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 font-medium 
                transition-colors duration-300 
                group-hover:text-white"
              >
                {item}
              </a>

              {/* Underline animation */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] 
                bg-white transition-all duration-300 
                group-hover:w-full"
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
