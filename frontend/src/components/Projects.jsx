import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'GreenCoco (Supply Chain)',
      description: 'Inventory and supply chain management system backend. Implemented JWT auth, role-based access, and efficient CRUD APIs using Express.js and MongoDB.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      image: 'bg-gradient-to-br from-green-900 to-emerald-800',
      link: 'https://github.com/malindujayawickrama462/GreenCoco'
    },
    {
      id: 2,
      title: 'Maddrass Company',
      description: 'Microservices-based e-commerce backend built with Spring Boot and Spring Cloud. Demonstrates real-world best practices for scalable architecture.',
      tech: ['Spring Boot', 'Microservices', 'Spring Cloud', 'Java'],
      image: 'bg-gradient-to-br from-indigo-900 to-blue-800',
      link: 'https://github.com/malindujayawickrama462/Maddrass_Company'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Minimalist Spring Boot application detecting location via IP geolocation to display real-time weather without user input.',
      tech: ['Spring Boot', 'Java', 'External APIs', 'Thymeleaf'],
      image: 'bg-gradient-to-br from-blue-900 to-cyan-800',
      link: 'https://github.com/malindujayawickrama462/weather-app'
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 text-white z-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured <span className="text-indigo-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
              {/* Image Placeholder */}
              <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-white/10 rounded-full text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <button className="w-full py-2 bg-white text-black rounded-lg font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}