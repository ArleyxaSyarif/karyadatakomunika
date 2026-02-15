"use client";

const HeroSection = () => {
    return (
        <>
            <main className="relative flex min-h-screen flex-col justify-center pt-5 bg-background-dark overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        className="w-full h-full object-cover opacity-40"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE8a0uIHCa60FisvN7OvXnA8jihmy7VKCyoMqoOcUaChQKlVGkZHW66xmOE3--cHeSsvNNmpQcKRD09C48xicn3pmvJSr27bnXP4u8VqifonyWcB3-5nWZLN4KAXWTxormMByeX8Qp5gHu4oYRQY_PY54NKe81uJ2npqaTOpZq_ZEIkFuD-K2h9394zslMNiog1MWmbQ7LgMRcq1-Qabb5_iKudyeFo-z_ZLtWewDuwPjMimMoDEn1XEFLMgatJ81_h6vsLYfXoH0"
                        alt="Modern high-tech logistics automated warehouse interior"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center w-full">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest font-display">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Next-Gen Logistics Solutions
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight font-display">
                            Powering Global Trade with <span className="text-primary">Precision</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-display">
                            Innovative supply chain solutions designed for modern industry. Reliable, scalable, and built for the future of global commerce.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="bg-primary text-background-dark px-8 py-4 rounded-lg font-extrabold text-base flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20 group font-display">
                                Get a Quote
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </button>
                            <button className="bg-white/5 border border-white/10 text-white backdrop-blur-sm px-8 py-4 rounded-lg font-extrabold text-base flex items-center justify-center gap-2 hover:bg-white/10 transition-all font-display">
                                View Infrastructure
                            </button>
                        </div>
                        {/* Trust Signals - Logos */}

                    </div>
                    {/* Stats Cards Display */}
                    <div className="hidden lg:grid grid-cols-2 gap-4">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl space-y-3 hover:bg-white/10 transition-colors">
                            <div className="text-primary">
                                <span className="material-symbols-outlined text-4xl">history</span>
                            </div>
                            <div className="text-4xl font-black text-white font-display">15+</div>
                            <p className="text-slate-400 font-medium font-display">
                                Years Experience
                            </p>
                            <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold font-display">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                +5% Reliability
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl space-y-3 mt-12 hover:bg-white/10 transition-colors">
                            <div className="text-primary">
                                <span className="material-symbols-outlined text-4xl">hub</span>
                            </div>
                            <div className="text-4xl font-black text-white font-display">200+</div>
                            <p className="text-slate-400 font-medium font-display">Global Hubs</p>
                            <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold font-display">
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                +12% Capacity
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl space-y-3 hover:bg-white/10 transition-colors">
                            <div className="text-primary">
                                <span className="material-symbols-outlined text-4xl">
                                    monitoring
                                </span>
                            </div>
                            <div className="text-4xl font-black text-white font-display">24/7</div>
                            <p className="text-slate-400 font-medium font-display">Monitoring</p>
                            <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold font-display">
                                <span className="material-symbols-outlined text-sm">verified</span>
                                100% Uptime
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl space-y-3 mt-12 hover:bg-white/10 transition-colors">
                            <div className="text-primary">
                                <span className="material-symbols-outlined text-4xl">public</span>
                            </div>
                            <div className="text-4xl font-black text-white font-display">45+</div>
                            <p className="text-slate-400 font-medium font-display">
                                Countries Served
                            </p>
                            <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold font-display">
                                <span className="material-symbols-outlined text-sm">public</span>
                                Worldwide
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Stats Bar (Mobile/Tablet and Secondary Visibility) */}
            <section className="lg:hidden bg-background-dark border-t border-white/10 py-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">history</span>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-white leading-none font-display">
                                15+
                            </p>
                            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider font-display">
                                Years Experience
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">hub</span>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-white leading-none font-display">
                                200+
                            </p>
                            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider font-display">
                                Global Hubs
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">monitoring</span>
                        </div>
                        <div>
                            <p className="text-2xl font-black text-white leading-none font-display">
                                24/7
                            </p>
                            <p className="text-slate-500 text-sm font-bold uppercase tracking-wider font-display">
                                Monitoring
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
