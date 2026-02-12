import React, { useEffect, useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold tracking-widest uppercase bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          PORTFOLIO
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-widest">
          {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-gray-300 hover:text-white transition-colors"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/10 flex flex-col items-center py-6 space-y-4">
          {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-semibold uppercase tracking-widest hover:text-indigo-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar