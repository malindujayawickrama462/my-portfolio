import React from 'react';

export default function Hero() {
  return (
    <div className="flex-1 flex flex-col md:flex-row items-center justify-between w-full text-white z-20">
      {/* Text Content */}
      <div className="flex flex-col items-start space-y-6 md:w-1/2">
        <div className="relative">
          <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <h2 className="relative text-sm font-bold tracking-[0.2em] text-indigo-300 uppercase mb-2">
            SOFTWARE ENGINEER-INTERN
          </h2>
        </div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] drop-shadow-2xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">MALINDU</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-gray-600">MALSHAN.</span>
        </h1>

        <p className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-4 border-indigo-500 pl-6 my-6">
          I am an Information Technology undergraduate with strong interest in learning and applying software development concepts in real-world projects. I have hands-on experience with Java, JavaScript, Spring Boot, Node.js, and database systems.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#projects" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-gray-200 transition-all transform hover:scale-105">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 bg-white/10 text-white font-bold uppercase tracking-widest rounded-full backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
            Contact Me
          </a>
          <div className="flex gap-4 items-center ml-2">
            <a href="https://github.com/malindujayawickrama462" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/malindu-malshan-4473ab371" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Image/Visual Content */}
      <div className="md:w-1/2 flex justify-center relative mt-12 md:mt-0">
        <div className="relative w-80 h-96 md:w-96 md:h-[30rem]">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-full h-full border-2 border-white/20 transform translate-x-6 translate-y-6 rounded-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl z-10 pointer-events-none"></div>

          <img
            src="/profile-img.png"
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl z-0 grayscale hover:grayscale-0 transition-all duration-700"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl z-20">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Status</p>
            <p className="text-xl font-bold text-white">Undergraduate</p>
          </div>
        </div>
      </div>
    </div>
  );
}