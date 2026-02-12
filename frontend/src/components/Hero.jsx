export default function Hero() {
  return (
    <div className="flex-1 flex flex-col md:flex-row items-center justify-between w-full text-white z-20">
      {/* Text Content */}
      <div className="flex flex-col items-start space-y-6 md:w-1/2">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <h2 className="relative text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-2">
            Welcome to my world
          </h2>
        </div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8]">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">JOHN</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">DOE.</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-lg leading-relaxed border-l-4 border-blue-500 pl-6 my-6">
          I craft digital experiences that merge <span className="text-white font-bold">art</span> with <span className="text-white font-bold">technology</span>.
          Let's build something extraordinary together.
        </p>

        <div className="flex gap-6 pt-4">
          <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-all transform hover:scale-105">
            View Work
          </button>
          <button className="px-8 py-3 border border-white/20 backdrop-blur-sm hover:bg-white/10 text-white font-bold uppercase tracking-widest transition-all">
            Contact Me
          </button>
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
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Experience</p>
            <p className="text-2xl font-bold">5+ Years</p>
          </div>
        </div>
      </div>
    </div>
  );
}