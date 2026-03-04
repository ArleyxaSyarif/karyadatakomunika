export default function CaseStudyPorto() {
    return (
        <section className="py-24 px-6 lg:px-20 bg-blue-950 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-800/20 blur-[100px]"></div>
                <div className="absolute bottom-[0%] -left-[10%] w-[40%] h-[40%] rounded-full bg-green-500/10 blur-[100px]"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-black text-white mb-4">Case Study: The Vertical Garden Skyway</h2>
                    <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">Solving the urban congestion problem with elevated greenery.</p>
                </div>

                <div className="relative border-l-4 border-blue-800/50 ml-4 lg:ml-8 pl-10 space-y-20">
                    <div className="relative group">
                        <div className="absolute -left-[54px] top-1 w-7 h-7 bg-blue-500 rounded-full border-4 border-blue-950 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="bg-blue-900/40 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-blue-800/50 hover:bg-blue-900/60 transition-colors duration-300">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">Phase 01: The Challenge</div>
                            <h3 className="text-2xl font-extrabold text-white mb-4">Congested Urban Density</h3>
                            <p className="text-blue-100 leading-relaxed mb-8 text-lg">
                                The downtown core suffered from extreme traffic congestion and zero green space. Traditional expansion was impossible due to heritage sites at ground level.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-blue-950/80 text-blue-300 px-4 py-2 rounded-lg text-xs font-bold border border-blue-800">#TrafficAnalysis</span>
                                <span className="bg-blue-950/80 text-blue-300 px-4 py-2 rounded-lg text-xs font-bold border border-blue-800">#UrbanPlanning</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -left-[54px] top-1 w-7 h-7 bg-green-400 rounded-full border-4 border-blue-950 shadow-[0_0_15px_rgba(74,222,128,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="bg-blue-900/40 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-blue-800/50 hover:bg-blue-900/60 transition-colors duration-300">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-4 border border-green-500/30">Phase 02: Our Solution</div>
                            <h3 className="text-2xl font-extrabold text-white mb-4">Multi-Tiered Elevated Parks</h3>
                            <p className="text-blue-100 leading-relaxed mb-8 text-lg">
                                We engineered a self-supporting modular skyway system that uses existing skyscraper anchors. Integrated hydroponic systems provide natural cooling.
                            </p>
                            <div className="w-full bg-blue-950 h-3 rounded-full mb-3 overflow-hidden border border-blue-800">
                                <div className="bg-gradient-to-r from-green-500 to-green-300 h-full w-[100%] rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                            </div>
                            <p className="text-[11px] text-green-400 font-bold uppercase tracking-wider">Success Rate: 100% Structural Integrity</p>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -left-[54px] top-1 w-7 h-7 bg-white rounded-full border-4 border-blue-950 shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl shadow-2xl border border-blue-500 relative overflow-hidden hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-shadow duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/30 backdrop-blur-sm">Phase 03: The Result</div>
                            <h3 className="text-2xl font-extrabold text-white mb-4">Award-Winning Urban Oasis</h3>
                            <p className="text-blue-100 leading-relaxed mb-8 text-lg">
                                Completed in 14 months. The project reduced downtown temperatures by 2°C and provides a pedestrian path for 50,000 daily commuters.
                            </p>
                            <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-md">
                                <div className="bg-yellow-400 p-3 rounded-xl shadow-lg">
                                    <span className="material-symbols-outlined text-3xl text-blue-950">emoji_events</span>
                                </div>
                                <div>
                                    <p className="text-white font-black text-lg">2024 Global Infrastructure</p>
                                    <p className="text-blue-200 text-sm font-bold uppercase tracking-wider">Award Winner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
