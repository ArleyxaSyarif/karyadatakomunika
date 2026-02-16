import React from 'react';

const ExperienceSection = () => {
    return (
        <section className="relative min-h-screen w-full py-20 px-4 md:px-10 lg:px-20 overflow-hidden bg-background-light">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 flow-path opacity-20 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex items-center gap-2">
                    <div className="w-12 h-[2px] bg-primary"></div>
                    <span className="text-primary font-bold tracking-widest uppercase text-xs">Experience & Education</span>
                </div>
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-neutral-dark text-5xl font-extrabold tracking-tight mb-4 font-display">
                            Career <span className="text-primary">Trajectory</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            A visual narrative of strategic growth, leadership milestones, and technical evolution across the digital landscape.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-px w-24 bg-gray-300 hidden lg:block"></div>
                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Chronological Flow</span>
                    </div>
                </div>

                {/* Flow-Based Experience Design */}
                <div className="relative">
                    {/* SVG Connecting Path (Visual Guide) */}
                    <svg className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 pointer-events-none hidden lg:block" fill="none" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M50 200C200 200 300 50 500 200C700 350 800 200 950 200"
                            stroke="#e5e7eb"
                            strokeDasharray="8 8"
                            strokeWidth="2"
                        />
                    </svg>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
                        {/* Milestone 1: Junior Period */}
                        <div className="flex flex-col items-center lg:items-start group">
                            <div className="relative mb-8 transition-transform duration-500 group-hover:scale-110">
                                {/* Radial Progress Ring */}
                                <svg className="w-32 h-32 radial-progress">
                                    <circle className="text-gray-200" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="4"></circle>
                                    <circle className="text-primary/40" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="273.3" strokeWidth="4"></circle>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-gray-400 text-3xl group-hover:text-primary transition-colors">rocket_launch</span>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/5 transition-all w-full">
                                <span className="text-xs font-bold text-primary uppercase tracking-tighter mb-2 block font-display">2015 — 2017</span>
                                <h3 className="text-xl font-bold text-neutral-dark mb-1 font-display">Junior Designer</h3>
                                <p className="text-sm font-medium text-gray-500 mb-4">StartUpHub</p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Established core design principles and contributed to mobile-first layouts for rapid-growth fintech startups.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 2: Mid-Level (Offset) */}
                        <div className="flex flex-col items-center lg:items-start group lg:mt-24">
                            <div className="relative mb-8 transition-transform duration-500 group-hover:scale-110">
                                <svg className="w-32 h-32 radial-progress">
                                    <circle className="text-gray-200" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="4"></circle>
                                    <circle className="text-primary/60" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="182.2" strokeWidth="4"></circle>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-gray-400 text-3xl group-hover:text-primary transition-colors">language</span>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/5 transition-all w-full">
                                <span className="text-xs font-bold text-primary uppercase tracking-tighter mb-2 block font-display">2017 — 2019</span>
                                <h3 className="text-xl font-bold text-neutral-dark mb-1 font-display">Interface Designer</h3>
                                <p className="text-sm font-medium text-gray-500 mb-4">GlobalSolutions</p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Specialized in high-fidelity prototyping and bridging the gap between design systems and engineering teams.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 3: Strategy (Offset) */}
                        <div className="flex flex-col items-center lg:items-start group lg:-mt-12">
                            <div className="relative mb-8 transition-transform duration-500 group-hover:scale-110">
                                <svg className="w-32 h-32 radial-progress">
                                    <circle className="text-gray-200" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="4"></circle>
                                    <circle className="text-primary/80" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="91.1" strokeWidth="4"></circle>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-gray-400 text-3xl group-hover:text-primary transition-colors">insights</span>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/5 transition-all w-full">
                                <span className="text-xs font-bold text-primary uppercase tracking-tighter mb-2 block font-display">2019 — 2022</span>
                                <h3 className="text-xl font-bold text-neutral-dark mb-1 font-display">UX Strategist</h3>
                                <p className="text-sm font-medium text-gray-500 mb-4">CreativePulse</p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Directed cross-functional teams to deliver enterprise-grade web applications focusing on user-centric conversion.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 4: Current (Lead) */}
                        <div className="flex flex-col items-center lg:items-start group lg:mt-16">
                            <div className="relative mb-8 transition-transform duration-500 group-hover:scale-110">
                                <svg className="w-32 h-32 radial-progress">
                                    <circle className="text-gray-200" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="4"></circle>
                                    <circle className="text-primary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="0" strokeWidth="6"></circle>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">star</span>
                                </div>
                            </div>
                            <div className="bg-primary p-6 rounded-xl shadow-2xl shadow-primary/20 group-hover:scale-[1.02] transition-all w-full">
                                <span className="text-xs font-bold text-white/80 uppercase tracking-tighter mb-2 block font-display">2022 — Present</span>
                                <h3 className="text-xl font-bold text-white mb-1 font-display">Senior Product Designer</h3>
                                <p className="text-sm font-medium text-white/70 mb-4">TechFlow</p>
                                <p className="text-sm text-white/90 leading-relaxed">
                                    Leading end-to-end product design, implementing global design systems, and mentoring junior design talent.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Metrics Summary */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-5 p-8 bg-white border border-gray-100 rounded-2xl transition-all hover:shadow-lg">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 font-display">Total Tenure</p>
                            <p className="text-2xl font-black text-neutral-dark font-display">8+ Years</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-8 bg-white border border-gray-100 rounded-2xl transition-all hover:shadow-lg">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">task_alt</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 font-display">Major Projects</p>
                            <p className="text-2xl font-black text-neutral-dark font-display">120+ Completed</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-8 bg-white border border-gray-100 rounded-2xl transition-all hover:shadow-lg">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">groups</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 font-display">Teams Led</p>
                            <p className="text-2xl font-black text-neutral-dark font-display">12+ Global Teams</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ExperienceSection;
