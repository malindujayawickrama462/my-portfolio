import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center text-white z-50 backdrop-blur-sm bg-black/20">
      <div className="text-xl font-bold tracking-widest uppercase">PORTFOLIO</div>
      <div className="flex gap-8 text-sm font-semibold uppercase tracking-widest">
        {['Projects', 'About', 'Skills', 'Contact','Education'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-300 transition-colors">
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar