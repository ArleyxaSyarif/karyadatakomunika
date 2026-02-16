import React from 'react';
import Image from 'next/image';

const ServiceSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-3xl">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Services</span>
                    <h1 className="text-neutral-grey text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter">
                        Comprehensive Solutions. <br />
                        <span className="text-primary">Tailored Results.</span>
                    </h1>
                </div>
                <div className="max-w-xs">
                    <p className="text-muted-grey text-lg font-medium leading-relaxed mb-6">
                        We build digital excellence with a focus on strategic growth and architectural design precision.
                    </p>
                    <button className="group flex items-center gap-2 text-neutral-grey font-bold text-sm uppercase tracking-wider cursor-pointer">
                        Explore all services
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </button>
                </div>
            </div>

            {/* Services Grid (Asymmetrical) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature Card 1: Large */}
                <div className="md:col-span-2 group relative overflow-hidden bg-white rounded-xl border border-primary/5 p-10 flex flex-col justify-between min-h-[450px] shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative z-10 max-w-md">
                        <span className="p-3 bg-primary/10 rounded-lg inline-flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">strategy</span>
                        </span>
                        <h3 className="text-3xl font-extrabold mb-4 text-neutral-grey">Strategic Consulting</h3>
                        <p className="text-muted-grey text-lg leading-relaxed">
                            High-level business mapping and structural optimization. We analyze your core mechanics to deliver sustainable market dominance.
                        </p>
                        <ul className="mt-8 space-y-3">
                            <li className="flex items-center gap-2 font-semibold text-sm text-neutral-grey">
                                <span className="material-symbols-outlined text-primary scale-75">check_circle</span>
                                Market Analysis
                            </li>
                            <li className="flex items-center gap-2 font-semibold text-sm text-neutral-grey">
                                <span className="material-symbols-outlined text-primary scale-75">check_circle</span>
                                Operational Scaling
                            </li>
                        </ul>
                        <button className="mt-8 bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-lg flex items-center gap-2 w-fit cursor-pointer hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95">
                            View Details
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="w-full h-full relative rounded-bl-[100px] overflow-hidden">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhTIH5Yzfth57lh2zNigbyGdbKY-zhXyyQumBg74FPdQ7gdoVEGU6YNSHrJ3o1yuuV3bhRfWDRH978gfn-Jr6H2C8hw35ih5HCxMjIPNr5uBzq5eZbWxdkuUt9zEynXF-zUKLbkUsSlvz3dOO_WO_BK_HdAxNQ82Yce_OeHGsOXR_Px-BowyCK30jAoVLFK_8Z4jD5VhbBR7rfSgJqo4Zc0jKzf5A4vssNX03tAvF8ophAcJuqrvJnqjQojLaWjt1G3ad1UcdoZnY"
                                alt="Modern office interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                </div>

                {/* Feature Card 2: Small */}
                <div className="group relative overflow-hidden bg-neutral-grey text-white rounded-xl p-8 flex flex-col justify-end min-h-[450px] transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 mix-blend-overlay opacity-40 group-hover:scale-110 transition-transform duration-700">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeSfYWtAmxF59U8F4nIusA6tkPX66fKMmi50VJ-i917o5JoqbvrlWaJRfQ4_DzaIZS_ydSbF3WhVjVNlpB0d00fLwSdfesC51bh2zuB-OCrVU6fzVG-daEA0NKPo5K8bUftbdueRw3qDt5B6uYOEJRtp18qHiu5naCKHeunZ75rgjfRpXaD3lFoji29OFVqSrB8owMF-UtyJn1e3NgFNz25zUjWKjeHpWFfD3YQ2QlDajZHXvfQ7RlU1KQNVHqWnHqiMuvO1HsMXE"
                            alt="Brand design abstract background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative z-10">
                        <span className="p-3 bg-white/10 rounded-lg inline-flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">brush</span>
                        </span>
                        <h3 className="text-2xl font-extrabold mb-3">Brand Design</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Visual identities that resonate with global audiences through precision and emotion.
                        </p>
                        <button className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-lg flex items-center gap-2 w-fit cursor-pointer hover:bg-primary/90 transition-colors">
                            View Case Studies
                        </button>
                    </div>
                </div>

                {/* Feature Card 3: Small */}
                <div className="group relative overflow-hidden bg-[#fffdfb] rounded-xl border border-primary/10 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 hover:border-primary/20">
                    <div className="relative z-10">
                        <span className="p-3 bg-primary/10 rounded-lg inline-flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                            <span className="material-symbols-outlined text-3xl">trending_up</span>
                        </span>
                        <h3 className="text-2xl font-extrabold mb-3 text-neutral-grey">Digital Growth</h3>
                        <p className="text-muted-grey text-sm leading-relaxed">
                            Data-driven marketing and performance optimization to scale your brand reach exponentially.
                        </p>
                        <button className="mt-6 text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1 group/btn cursor-pointer">
                            View Details
                            <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                        </button>
                    </div>
                    <div className="mt-8 rounded-lg overflow-hidden h-32 w-full relative">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0nYxWyoEGn-_hCUUBh9QeM6x-1aSdxqtwm6g2YbZ-a5iS_QD-jrIPNdZ9fZWbG2rB14LVu8dtu2WDfJk4IX26N5PvM14oCI5bYp2Nj3kFq09zJfotfJorz-Ycl5lJrkIL5QUZxQoI6k5dTkIuKagDE-JzS1hXGiEEbPojWbVgi8i1kW2mVdkMqwejMJ4G4oia91tKr1EnA8xwjr3AqwWRz_jIRyIrhw0JmrfIbrcTv3dpTuuL4d0L-jbiTVDIcDLCNYCRDi1iL6o"
                            alt="Data analytics dashboard"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Feature Card 4: Small */}
                <div className="group relative overflow-hidden bg-[#fffdfb] rounded-xl border border-primary/10 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 hover:border-primary/20">
                    <div className="relative z-10">
                        <span className="p-3 bg-primary/10 rounded-lg inline-flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                            <span className="material-symbols-outlined text-3xl">code</span>
                        </span>
                        <h3 className="text-2xl font-extrabold mb-3 text-neutral-grey">Tech Stacks</h3>
                        <p className="text-muted-grey text-sm leading-relaxed">
                            Custom development using the latest frameworks to ensure speed, security, and limitless scalability.
                        </p>
                        <button className="mt-6 text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1 group/btn cursor-pointer">
                            View Details
                            <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                        </button>
                    </div>
                    <div className="mt-8 flex gap-2">
                        <div className="flex-1 h-12 bg-white border border-primary/5 rounded flex items-center justify-center group-hover:border-primary/20 transition-colors">
                            <span className="text-primary font-bold text-[10px] uppercase tracking-tighter">Scalable</span>
                        </div>
                        <div className="flex-1 h-12 bg-white border border-primary/5 rounded flex items-center justify-center group-hover:border-primary/20 transition-colors">
                            <span className="text-primary font-bold text-[10px] uppercase tracking-tighter">Secure</span>
                        </div>
                        <div className="flex-1 h-12 bg-white border border-primary/5 rounded flex items-center justify-center group-hover:border-primary/20 transition-colors">
                            <span className="text-primary font-bold text-[10px] uppercase tracking-tighter">Fast</span>
                        </div>
                    </div>
                </div>

                {/* Feature Card 5: Small */}
                <div className="group relative overflow-hidden bg-primary rounded-xl p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40">
                    <div className="flex justify-between items-start">
                        <span className="p-3 bg-white/20 rounded-lg inline-flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                        </span>
                        <span className="material-symbols-outlined text-white/40 text-4xl">north_east</span>
                    </div>
                    <div className="text-white">
                        <h3 className="text-2xl font-extrabold mb-2">Ready to Start?</h3>
                        <p className="text-white/80 text-sm leading-relaxed mb-6">
                            Join 200+ global brands scaling with our expertise.
                        </p>
                        <button className="bg-white text-primary font-bold px-6 py-3 rounded-lg text-sm w-full transition-transform active:scale-95 cursor-pointer">
                            Book a Discovery Call
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
