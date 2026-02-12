import React from 'react';

export default function About() {
    const skills = [
        { name: 'Frontend', level: '90%', width: 'w-[90%]' },
        { name: 'Backend', level: '85%', width: 'w-[85%]' },
        { name: 'UI/UX Design', level: '95%', width: 'w-[95%]' },
    ];

    const stats = [
        { value: '5+', label: 'Years Experience' },
        { value: '50+', label: 'Projects Completed' },
        { value: '20+', label: 'Happy Clients' },
    ];

    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center py-20 text-white z-20">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left Column - Image/Visuals */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-indigo-500/10 rounded-2xl blur-2xl"></div>
                    <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:border-indigo-500/30 hover:shadow-indigo-500/20 hover:shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">My Journey</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            I started coding with a simple curiosity that turned into a full-blown passion.
                            From building small scripts to architecting complex web applications,
                            my journey has been defined by constant learning and innovation.
                        </p>
                        <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-200">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div>
                    <h2 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">About Me</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">
                        Solving problems with <span className="text-white">code</span> and <span className="text-white">design</span>.
                    </h1>

                    <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                        I am a full-stack developer with a keen eye for detail. I believe in creating user interfaces
                        that are not only functional but also intuitive and delightful to use.
                    </p>

                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold tracking-wide">{skill.name}</span>
                                    <span className="text-gray-400">{skill.level}</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className={`h-full bg-gradient-to-r from-gray-500 to-white rounded-full ${skill.width}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-10 px-8 py-3 border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-widest transition-all rounded transition-colors hover:border-white/40">
                        Download CV
                    </button>
                </div>

            </div>
        </section>
    );
}
