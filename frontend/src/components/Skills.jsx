import React, { useRef, useState } from 'react';
import {
    SiReact, SiNodedotjs, SiPython, SiTailwindcss,
    SiMongodb, SiAmazonwebservices, SiDocker, SiFigma,
    SiGit, SiJavascript
} from "react-icons/si";

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
        { name: 'React', icon: <SiReact className="w-full h-full text-blue-400 group-hover:text-blue-300 transition-colors" />, category: 'Frontend' },
        { name: 'Node.js', icon: <SiNodedotjs className="w-full h-full text-green-500 group-hover:text-green-400 transition-colors" />, category: 'Backend' },
        { name: 'Python', icon: <SiPython className="w-full h-full text-yellow-400 group-hover:text-yellow-300 transition-colors" />, category: 'Backend' },
        { name: 'Tailwind', icon: <SiTailwindcss className="w-full h-full text-cyan-400 group-hover:text-cyan-300 transition-colors" />, category: 'Frontend' },
        { name: 'MongoDB', icon: <SiMongodb className="w-full h-full text-green-500 group-hover:text-green-400 transition-colors" />, category: 'Database' },
        { name: 'AWS', icon: <SiAmazonwebservices className="w-full h-full text-orange-500 group-hover:text-orange-400 transition-colors" />, category: 'DevOps' },
        { name: 'Docker', icon: <SiDocker className="w-full h-full text-blue-500 group-hover:text-blue-400 transition-colors" />, category: 'DevOps' },
        { name: 'Figma', icon: <SiFigma className="w-full h-full text-pink-500 group-hover:text-pink-400 transition-colors" />, category: 'Design' },
        { name: 'Git', icon: <SiGit className="w-full h-full text-orange-600 group-hover:text-orange-500 transition-colors" />, category: 'Tools' },
        { name: 'JavaScript', icon: <SiJavascript className="w-full h-full text-yellow-400 group-hover:text-yellow-300 transition-colors" />, category: 'Frontend' },
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
                                className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            ></div>

                            <div className="relative z-10 p-3 bg-black/20 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                                <div className="h-8 w-8">
                                    {skill.icon}
                                </div>
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
