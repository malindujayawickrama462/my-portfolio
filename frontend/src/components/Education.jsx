import React from 'react';

export default function Education() {
    const education = [
        {
            id: 1,
            degree: 'B.Sc. Computer Science',
            institution: 'University of Technology',
            period: '2019 - 2023',
            description: 'Graduated with First Class Honors. Specialized in Software Engineering and Artificial Intelligence.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            )
        },
        {
            id: 2,
            degree: 'Full Stack Development',
            institution: 'Code Academy Online',
            period: '2018 - 2019',
            description: 'Intensive bootcamp covering modern web stack: React, Node.js, Express, and MongoDB.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            id: 3,
            degree: 'High School Diploma',
            institution: 'Central City College',
            period: '2016 - 2018',
            description: 'Majored in Mathematics and Physics. President of the Computer Club.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        }
    ];

    return (
        <section id="education" className="min-h-screen py-20 relative z-20 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 w-full">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
                    Education <span className="text-indigo-400">Journey</span>
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-white/10"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <div key={item.id} className={`relative flex items-center justify-between md:justify-normal md:${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>

                                {/* Connecting Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-black z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                                {/* Content Spacer for Alignment */}
                                <div className="hidden md:block w-5/12"></div>

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ml-8 md:ml-0 pl-4 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300 hover:border-indigo-500/30 group">
                                        <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                            <div className="p-2 bg-indigo-500/20 rounded-lg">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <span className="block text-sm text-indigo-300 font-bold uppercase tracking-wider">{item.period}</span>
                                                <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">{item.degree}</h3>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-sm mb-1">{item.institution}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
