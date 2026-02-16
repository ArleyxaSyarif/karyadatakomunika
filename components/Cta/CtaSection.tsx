import React from 'react';

const CtaSection = () => {
    return (
        <section className="relative w-full py-20 overflow-visible bg-background-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200/60 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
                    {/* Subtle background accent */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="flex flex-col gap-4 text-center md:text-left relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-display">
                            Ready to transform <br className="hidden md:block" /> your workflow?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-sm leading-relaxed">
                            Join over 10,000+ professionals and teams scaling their operations today.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
                        <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group cursor-pointer active:scale-95">
                            Get Started Now
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                        <button className="bg-slate-50 hover:bg-slate-100 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all border border-slate-200 cursor-pointer active:scale-95">
                            View Pricing
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
