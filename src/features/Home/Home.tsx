import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-6xl text-white font-bold text-center">
        Bienvenido a Mi Portafolio
      </h1>
      <p className="text-xl text-white mt-4">Descubre mis proyectos y más sobre mí.</p>
      <Link to="/projects" className="mt-8 bg-white text-gray-800 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100">
        Ver Proyectos
      </Link>
    </div>
  );
};

export default Home;
