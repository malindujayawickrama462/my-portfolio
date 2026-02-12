import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart functionality, user authentication, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'bg-gradient-to-br from-gray-700 to-gray-600',
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Real-time analytics dashboard for tracking social media engagement and metrics across multiple platforms.',
      tech: ['Vue.js', 'D3.js', 'Firebase'],
      image: 'bg-gradient-to-br from-gray-800 to-gray-500',
    },
    {
      id: 3,
      title: 'AI Task Manager',
      description: 'Smart task management application that uses AI to prioritize and categorize your daily workflow.',
      tech: ['React Native', 'Python', 'OpenAI API'],
      image: 'bg-gradient-to-br from-gray-600 to-gray-400',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with glassmorphism design and smooth animations.',
      tech: ['React', 'Tailwind', 'Vite'],
      image: 'bg-gradient-to-br from-gray-900 to-gray-700',
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 text-white z-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured <span className="text-white">Projects</span>
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

                <button className="w-full py-2 bg-white text-black rounded-lg font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}