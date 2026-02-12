import React, { useRef, useState } from 'react';

export default function Skills() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const sectionRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    const skills = [
        { name: 'React', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', category: 'Frontend' },
        { name: 'Node.js', icon: 'M13 10V3L4 14h7v7l9-11h-7z', category: 'Backend' },
        { name: 'Python', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', category: 'Backend' },
        { name: 'Tailwind', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01', category: 'Frontend' },
        { name: 'MongoDB', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4', category: 'Database' },
        { name: 'AWS', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', category: 'DevOps' },
        { name: 'Docker', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', category: 'DevOps' },
        { name: 'Figma', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', category: 'Design' },
        { name: 'Git', icon: 'M8 7v8a2 2 0 00-2 2h12 2v-8', category: 'Tools' },
        { name: 'JavaScript', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', category: 'Frontend' },
    ];

    return (
        <section id="skills" className="min-h-screen py-20 relative z-20 flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
                    Technical <span className="text-indigo-400">Stack</span>
                </h2>

                {/* Spotlight Container */}
                <div
                    ref={sectionRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
                >
                    {/* Spotlight Overlay */}
                    <div
                        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-30"
                        style={{
                            opacity,
                            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                        }}
                    />

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="relative p-8 h-40 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors duration-300"
                        >
                            {/* Individual Card Glow Effect on Hover */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div className="relative z-10 p-3 bg-black/20 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={skill.icon} />
                                </svg>
                            </div>

                            <div className="relative z-10 flex flex-col items-center">
                                <span className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                </span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-indigo-300 transition-colors duration-300">
                                    {skill.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
