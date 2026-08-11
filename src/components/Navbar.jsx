import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/portfolioData";
import { Link, useLocation } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-slate-800/80 overflow-x-hidden">
      <div className="max-w-6xl mx-auto max-md:px-4 py-4 flex justify-between items-center">
        <a
          href="/#home"
          className="text-xl font-semibold tracking-tight whitespace-nowrap"
        >
          <span className="text-white">Mohamed</span>
          <span className="text-cyan-400">.Dev</span>
        </a>
        {isHomePage && (
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 hover:text-cyan-300 transition whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-sm font-medium text-cyan-300 hover:bg-cyan-500/20 transition whitespace-nowrap"
            >
              Let's Talk
            </a>
          </div>
        )}

        {isHomePage ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-slate-300 hover:text-white transition p-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        ) : (
          <Link
            to="/"
            className="flex items-center gap-2 text-sm border border-slate-700 bg-slate-900/70 text-slate-200 px-3 py-1.5 rounded-full transition hover:border-cyan-500/40"
          >
            <FiArrowLeft className="text-base" />
            <span>Home</span>
          </Link>
        )}
      </div>

      <div
        className={`md:hidden bg-slate-900/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-125 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-4 max-w-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-cyan-300 transition py-2 border-b border-slate-800/80 text-center w-full"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-center font-medium text-cyan-300 w-full"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
