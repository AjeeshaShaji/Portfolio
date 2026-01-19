import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#2b2b2b] border-b border-gray-700">
      <div className="max-w-7xl mx-auto h-[70px] px-6 md:px-14
        flex items-center justify-between">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-white">
          Portfolio
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2b2b2b] border-t border-gray-700">
          <ul className="flex flex-col items-center gap-5 py-5">
            {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
