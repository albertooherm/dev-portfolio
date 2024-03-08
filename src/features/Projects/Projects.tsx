import React from 'react';

const Projects = () => {
  // Asumiendo que tienes una lista de proyectos
  const projectList = [
    {
      id: 1,
      name: 'Proyecto 1',
      description: 'Descripción corta del proyecto 1.',
      imageUrl: '/path/to/image.jpg',
      demoUrl: '#',
      repoUrl: '#', // URL del repositorio
    },
    {
      id: 2,
      name: 'Proyecto 2',
      description: 'Descripción corta del proyecto 2.',
      imageUrl: '/path/to/image.jpg',
      demoUrl: '#',
      repoUrl: '#',
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800">Mis Proyectos</h1>
          <p className="text-xl text-gray-600 mt-4">Aquí hay una selección de algunos proyectos recientes en los que he trabajado.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h2 className="font-bold text-xl mb-2">{project.name}</h2>
                <p className="text-gray-700 text-base">{project.description}</p>
                <div className="mt-4 flex justify-between">
                  <a href={project.demoUrl} className="text-blue-500 hover:text-blue-700">Demo</a>
                  <a href={project.repoUrl} className="text-blue-500 hover:text-blue-700">Código</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
