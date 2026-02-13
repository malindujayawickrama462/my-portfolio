import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs,
  SiTailwindcss, SiSpringboot, SiSpring,
  SiHibernate, SiMysql, SiPostgresql,
  SiDocker, SiKubernetes, SiAwslambda,
  SiFramer, SiVite, SiHtml5, SiCss3, SiJavascript
} from "react-icons/si";
import { FaJava, FaCloud } from "react-icons/fa";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const techIcons = {
    "Node.js": { icon: <SiNodedotjs />, color: "text-green-500" },
    "Express.js": { icon: <SiExpress />, color: "text-gray-400" },
    "MongoDB": { icon: <SiMongodb />, color: "text-green-500" },
    "JWT": { icon: <div className="font-bold text-[10px]">JWT</div>, color: "text-white" },
    "Spring Boot": { icon: <SiSpringboot />, color: "text-green-400" },
    "Microservices": { icon: <FaCloud />, color: "text-blue-400" },
    "Spring Cloud": { icon: <SiSpring />, color: "text-green-400" },
    "Java": { icon: <FaJava />, color: "text-orange-400" },
    "External APIs": { icon: <div className="font-bold text-[10px]">API</div>, color: "text-yellow-400" },
    "Thymeleaf": { icon: <SiHtml5 />, color: "text-green-600" }, // Using HTML icon as fallback/proxy
    "React": { icon: <SiReact />, color: "text-blue-400" },
    "Tailwind": { icon: <SiTailwindcss />, color: "text-cyan-400" },
    "Framer Motion": { icon: <SiFramer />, color: "text-pink-500" },
    "Vite": { icon: <SiVite />, color: "text-purple-400" }
  };

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
    {
      id: 4,
      title: 'Employee Management System',
      description: 'Comprehensive HR platform with employee tracking, payroll, and RBAC security. Built with scalable RESTful APIs, JWT authentication, and optimized MongoDB schemas.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      image: 'bg-gradient-to-br from-violet-900 to-purple-900',
      link: 'https://github.com/malindujayawickrama462/Employee_management_system'
    },
    {
      id: 5,
      title: 'My Portfolio',
      description: 'Personal portfolio website featuring a modern, responsive design with glassmorphism effects, interactive animations, and a seamless user experience. Built with React and Tailwind CSS.',
      tech: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
      image: 'bg-gradient-to-br from-slate-900 to-gray-800',
      link: 'https://github.com/malindujayawickrama462/my-portfolio'
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 text-white z-20 overflow-hidden relative">
      {/* Background Creative Elements */}
      <div className="absolute top-20 right-0 -mr-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 -ml-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-indigo-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 flex flex-col"
            >
              {/* Spotlight Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer z-0 pointer-events-none"
                style={{ backgroundSize: '200% 100%' }}
              ></div>

              {/* Image Placeholder */}
              <div className={`h-40 w-full ${project.image} relative overflow-hidden z-10`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-500"></div>
                {/* Optional: Add a pattern or slight texture overlay here if desired */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/70 text-white px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</span>
                </div>
              </div>

              <div className="p-5 flex flex-col h-full z-10">
                <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-400 transition-colors duration-300">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto"> {/* Pushes content to bottom */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`flex items-center gap-1.5 px-3 py-1 text-[10px] font-medium bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 cursor-default ${techIcons[tech]?.color || 'text-gray-300'}`}>
                        {techIcons[tech]?.icon}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <button className="flex items-center justify-center gap-2 w-full py-2 bg-white/5 hover:bg-indigo-600 text-white rounded-xl font-semibold text-xs transition-all duration-300 border border-white/10 hover:border-indigo-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}