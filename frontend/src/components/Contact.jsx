import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen py-20 relative z-20 flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
                    Get in <span className="text-indigo-400">Touch</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-indigo-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span>malinduJayawickrama462@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-indigo-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                </div>
                                <span>139/2, Thalgasmote, Vetangoda</span>
                            </div>
                        </div>

                        {/* Social LinksPlaceholder */}
                        <div className="flex gap-4 pt-8">
                            <a href="https://github.com/malindujayawickrama462" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 uppercase text-xs font-bold tracking-wider">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/malindu-malshan-4473ab371" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 uppercase text-xs font-bold tracking-wider">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
