import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo y nombre o solo el logo, ajusta según necesites */}
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6 mr-1 text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
              </svg>
              <span className="font-bold">albertoherm.dev</span>
            </a>
          </div>
          {/* Links de navegación */}
          <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">Inicio</Link>
            <Link to="/about" className="py-5 px-3 text-gray-700 hover:text-gray-900">Sobre mí</Link>
            <Link to="/projects" className="py-5 px-3 text-gray-700 hover:text-gray-900">Proyectos</Link>
            <Link to="/contact" className="py-5 px-3 text-gray-700 hover:text-gray-900">Contacto</Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Inicio</Link>
        <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">Sobre mí</Link>
        <Link to="/projects" className="block py-2 px-4 text-sm hover:bg-gray-200">Proyectos</Link>
        <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
