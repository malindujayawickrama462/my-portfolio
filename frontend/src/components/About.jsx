import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaFileDownload } from 'react-icons/fa';

export default function About() {
    const skills = [
        { name: 'Frontend', level: '90%', width: '90%', color: 'from-blue-500 to-cyan-500' },
        { name: 'Backend', level: '85%', width: '85%', color: 'from-emerald-500 to-green-500' },
        { name: 'UI/UX Design', level: '95%', width: '95%', color: 'from-pink-500 to-rose-500' },
    ];

    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center py-20 text-white z-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-4">

                {/* Left Column - Image/Visuals */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-70"></div>
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 group">
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                                <span className="text-2xl">👨‍💻</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-indigo-300 transition-colors">My Journey</h3>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            Driven and technically skilled Information Technology undergraduate currently pursuing a General IT degree at
                            <span className="text-indigo-400 font-semibold"> Sri Lanka Institute of Information Technology (SLIIT)</span>.
                        </p>

                        <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                            <div className="text-center group/item">
                                <div className="w-10 h-10 mx-auto bg-white/5 rounded-lg flex items-center justify-center mb-3 group-hover/item:bg-indigo-500/20 transition-colors">
                                    <FaRocket className="text-indigo-400 group-hover/item:scale-110 transition-transform" />
                                </div>
                                <div className="text-sm font-bold text-gray-200">Fast</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Learner</div>
                            </div>
                            <div className="text-center group/item">
                                <div className="w-10 h-10 mx-auto bg-white/5 rounded-lg flex items-center justify-center mb-3 group-hover/item:bg-purple-500/20 transition-colors">
                                    <FaUsers className="text-purple-400 group-hover/item:scale-110 transition-transform" />
                                </div>
                                <div className="text-sm font-bold text-gray-200">Team</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Player</div>
                            </div>
                            <div className="text-center group/item">
                                <div className="w-10 h-10 mx-auto bg-white/5 rounded-lg flex items-center justify-center mb-3 group-hover/item:bg-pink-500/20 transition-colors">
                                    <FaLightbulb className="text-pink-400 group-hover/item:scale-110 transition-transform" />
                                </div>
                                <div className="text-sm font-bold text-gray-200">Problem</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Solver</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase mb-3">About Me</h2>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Solving problems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">code</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">design</span>.
                    </h1>

                    <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
                        Demonstrates strong competency in <span className="text-white font-medium">full-stack development</span>, microservices architecture, and enterprise application design.
                        Proficient in Java, Spring Boot, Node.js, and modern web technologies with hands-on experience building scalable
                        RESTful APIs, implementing secure authentication systems, and optimizing database performance.
                        <br /><br />
                        Adept at writing clean, maintainable code and collaborating within Agile development environments.
                        Seeking internship opportunities as a QA Intern, Software Engineer Intern, IT Support Intern,
                        Full-Stack Web Developer Intern, or General IT Intern to apply academic knowledge in real-world software development and IT operations.
                    </p>

                    <div className="space-y-6 mb-10">
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold tracking-wide text-sm">{skill.name}</span>
                                    <span className="text-gray-400 text-sm font-mono">{skill.level}</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.width }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest transition-all duration-300 rounded-lg border border-white/10 hover:border-indigo-500/50 overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10 flex items-center gap-2">
                            Download CV <FaFileDownload className="group-hover:translate-y-1 transition-transform" />
                        </span>
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
}
