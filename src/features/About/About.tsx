import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaPhp, FaVuejs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiDotnet, SiLaravel, SiCakephp, SiReact as SiReactIcon, SiFlutter, SiFirebase, SiMysql, SiMongodb, SiSqlite, SiDart } from 'react-icons/si';

const About = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-center flex-col items-center">
            <img className="h-32 w-32 rounded-full object-cover" src="https://avatars.githubusercontent.com/u/159101294?v=4" alt="Tu Nombre"/>
            <h1 className="text-3xl font-bold leading-tight text-gray-900 mt-4">Sobre Mí</h1>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Habilidades</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <h2 className="text-lg font-semibold">Lenguajes</h2>
                  <div className="flex flex-wrap gap-4 my-2">
                    {/* Lenguajes */}
                    <div className="flex items-center gap-2"><FaHtml5 className="text-3xl text-orange-500"/><span>HTML</span></div>
                    <div className="flex items-center gap-2"><FaCss3Alt className="text-3xl text-blue-500"/><span>CSS</span></div>
                    <div className="flex items-center gap-2"><FaJsSquare className="text-3xl text-yellow-500"/><span>JavaScript</span></div>
                    <div className="flex items-center gap-2"><SiTypescript className="text-3xl text-blue-600"/><span>Typescript</span></div>
                    <div className="flex items-center gap-2"><FaPhp className="text-3xl text-purple-600"/><span>PHP</span></div>
                    <div className="flex items-center gap-2"><SiDart className="text-3xl text-blue-500"/><span>Dart</span></div>
                    <div className="flex items-center gap-2"><FaPython className="text-3xl text-blue-500"/><span>Python</span></div>
                  </div>

                  <h2 className="text-lg font-semibold">Frameworks y Librerías</h2>
                  <div className="flex flex-wrap gap-4 my-2">
                    {/* Frameworks y Librerías */}
                    <div className="flex items-center gap-2"><SiDotnet className="text-3xl text-purple-700"/><span>.NET Core</span></div>
                    <div className="flex items-center gap-2"><SiLaravel className="text-3xl text-red-600"/><span>Laravel</span></div>
                    <div className="flex items-center gap-2"><SiCakephp className="text-3xl text-pink-600"/><span>CakePHP</span></div>
                    <div className="flex items-center gap-2"><FaVuejs className="text-3xl text-green-600"/><span>Vue.js</span></div>
                    <div className="flex items-center gap-2"><FaReact className="text-3xl text-sky-500 animate-spin-slow"/><span>React.js</span></div>
                    <div className="flex items-center gap-2"><SiReactIcon className="text-3xl text-sky-500"/><span>React Native</span></div>
                    <div className="flex items-center gap-2"><SiFlutter className="text-3xl text-blue-600"/><span>Flutter</span></div>
                  </div>

                  <h2 className="text-lg font-semibold">Bases de Datos</h2>
                  <div className="flex flex-wrap gap-4 my-2">
                    {/* Bases de Datos */}
                    <div className="flex items-center gap-2"><FaDatabase className="text-3xl text-green-700"/><span>SQL</span></div>
                    <div className="flex items-center gap-2"><SiSqlite className="text-3xl text-blue-700"/><span>SQLite</span></div>
                    <div className="flex items-center gap-2"><SiMysql className="text-3xl text-blue-500"/><span>MySQL</span></div>
                    <div className="flex items-center gap-2"><SiMongodb className="text-3xl text-green-500"/><span>MongoDB</span></div>
                    <div className="flex items-center gap-2"><SiFirebase className="text-3xl text-yellow-600"/><span>Firebase</span></div>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
