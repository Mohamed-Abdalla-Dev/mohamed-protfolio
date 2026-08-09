import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, personalInfo } from "../data/portfolioData";
import { Link, useLocation } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800 overflow-x-hidden">
      <div className="max-w-6xl mx-auto max-md:px-4  py-4 flex justify-between items-center">
        <a href="/#home" className="text-2xl font-bold whitespace-nowrap">
          <span className="text-white">Moh</span>
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            amed
          </span>
          <span className="text-gray-400 text-sm font-normal">.Dev</span>
        </a>
        {isHomePage && (
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition text-sm whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold hover:scale-105 transition whitespace-nowrap"
            >
              Hire Me
            </a>
          </div>
        )}

        {isHomePage ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-300 hover:text-white transition p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-1 text-sm bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25  transition  px-3 py-1.5 rounded-full "
          >
            <FiArrowLeft className="text-lg animate-bounce" />
            <span> Home</span>
          </Link>
        )}
      </div>

      <div
        className={`md:hidden bg-gray-800/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-125 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-4 max-w-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-blue-400 transition py-2 border-b border-gray-700/50 text-center w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-full text-center font-semibold w-full"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
