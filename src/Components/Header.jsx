import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github } = socialMediaUrl;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4 max-w-6xl flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 group" onClick={() => setIsOpen(false)}>
          <img src={logos.logogradient} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Liliana Vaciu</span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-lg font-medium">
          <li><NavLink to="/" className="nav-link text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-950/50">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-950/50">About</NavLink></li>
          <li><NavLink to="/projects" className="nav-link text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-950/50">Projects</NavLink></li>
          <li><NavLink to="/contact" className="nav-link text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-950/50">Contact</NavLink></li>
        </ul>

        {/* Social & Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Social Icons */}
          <div className="hidden md:flex space-x-3">
            {linkdein && (
              <a href={linkdein} target="_blank" rel="noopener noreferrer" className="w-10 h-10 p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg">
                <svg className="w-full h-full fill-slate-700 dark:fill-slate-300 hover:fill-blue-600" viewBox="0 0 30 30">
                  <path d="M15 0.6C7 0.6 0.6 7 0.6 15s6.4 14.4 14.4 14.4S29.4 22 29.4 15 22 0.6 15 0.6ZM11.5 21H8.6V11.6h2.9v10.4ZM10 10.4c-.9 0-1.6-.8-1.6-1.5 0-1.1.8-1.5 1.6-1.5s1.6.7 1.6 1.5c0 .8-.7 1.5-1.6 1.5Z"/>
                </svg>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg">
                <svg className="w-full h-full fill-slate-700 dark:fill-slate-300 hover:fill-slate-900 dark:hover:fill-white" viewBox="0 0 30 30">
                  <path d="M15 0C6.7 0 0 6.7 0 15c0 6.6 4.5 12.2 10.5 14.2.8.1 1.1-.3 1.1-.7 0-.3-.1-.9-.3-1.7-3.7 1.1-5.1-1.6-5.1-1.6-.6-1.6-1.4-2-2.2-2.4-.7-.5-.2-1.7.2-1.7 1.6 0 2.6 1.7 2.9 2.4 1.7 2.9 4.5 2.1 5.6 1.6.2-.9.7-2.1 1.3-2.7-4.5-.5-9.2-2.3-9.2-10.3 0-2.3 1-4.1 2.6-5.4-.3-.6-.9-2.8.2-5.9 0 0 2.3-.7 5 0 1.4 3.1.5 5.3.5 5.9 1.7 1.3 2.6 3.1 2.6 5.3 0 8.1-4.7 9.8-9.2 10.3.7.6 1.4 1.7 1.4 3.4 0 2.5-.3 4.5-.3 5.1 0 .5.3 1 .9 1 1 0 1.8-1.3 1.9-2.1 1.3-2.7 3.1-4.4 5.2-6.3z"/>
                </svg>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <ul className="container mx-auto px-6 py-6 flex flex-col space-y-4 text-lg font-medium">
            <li><NavLink to="/" className="py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 transition-all" onClick={toggleMenu}>Home</NavLink></li>
            <li><NavLink to="/about" className="py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 transition-all" onClick={toggleMenu}>About</NavLink></li>
            <li><NavLink to="/projects" className="py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 transition-all" onClick={toggleMenu}>Projects</NavLink></li>
            <li><NavLink to="/contact" className="py-2 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 transition-all" onClick={toggleMenu}>Contact</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
