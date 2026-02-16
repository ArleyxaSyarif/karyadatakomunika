import React from 'react';
import Image from 'next/image';

const ChooseSection = () => {
    return (
        <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-background-light">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-soft-grey -z-10 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Side: Content & Image */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-[2px] bg-primary"></div>
                                <span className="text-primary font-bold tracking-widest uppercase text-xs">Excellence Guaranteed</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-neutral-dark leading-tight font-display">
                                Why Partner <br /><span className="text-primary">With Us?</span>
                            </h2>
                            <p className="text-neutral-grey text-lg max-w-lg leading-relaxed">
                                Discover how our core values drive long-term success and scalable growth for your business through strategic collaboration and technical excellence.
                            </p>
                        </div>

                        {/* Secondary Visual Asset */}
                        <div className="relative group mt-4">
                            <div className="absolute -inset-2 bg-primary/10 rounded-xl blur-lg group-hover:bg-primary/20 transition duration-500"></div>
                            <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-2xl aspect-video sm:aspect-auto">
                                <div className="relative w-full h-80">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCedq_9bWA9dvWW6kHe2ALWwA464MX3UCWKI83ffxRmseJHiXgwK6JnBEOtxqvrDfwXS-8b_9A1quj4lRSpfzWdySu-QPJHFMjNeUb8mnN7_YICXDe1Iw8ytG-4tFuu3C1TEBRQvBea2CcVzqM1iOsJx3C1oK_SOjuyxD9n9Nmcyg_K6ehKTkwfvV6fReEFyB1QXUUzc2wx81qdiFjxJm36m9LJ-ReVTeDalV6y0oqSfHJJ7Xn8hSchEfm3NnRBYGBpgY74_JVFHHc"
                                        alt="Modern professional team collaborating in an office setting"
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                        <p className="text-white font-medium text-sm italic">"Driven by results, defined by partnership."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Value Cards Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Card 1: Scalability */}
                            <div className="group p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col gap-5">
                                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                    <span className="material-symbols-outlined text-3xl group-hover:text-white transition-colors group-hover:[font-variation-settings:'FILL'_1]">trending_up</span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-neutral-dark font-display">Scalability</h3>
                                    <p className="text-neutral-grey text-sm leading-relaxed">
                                        Solutions that grow seamlessly with your evolving business needs without compromise on performance or speed.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Reliability */}
                            <div className="group p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col gap-5">
                                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                    <span className="material-symbols-outlined text-3xl group-hover:text-white transition-colors group-hover:[font-variation-settings:'FILL'_1]">verified_user</span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-neutral-dark font-display">Reliability</h3>
                                    <p className="text-neutral-grey text-sm leading-relaxed">
                                        Consistent performance and high-availability systems you can trust implicitly for your critical operations.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Strategic Partnership */}
                            <div className="group p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col gap-5">
                                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                    <span className="material-symbols-outlined text-3xl group-hover:text-white transition-colors group-hover:[font-variation-settings:'FILL'_1]">handshake</span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-neutral-dark font-display">Strategic Partnership</h3>
                                    <p className="text-neutral-grey text-sm leading-relaxed">
                                        Deeply integrated collaboration focused on achieving your specific long-term business goals and ROI.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4: 24/7 Support */}
                            <div className="group p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col gap-5">
                                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                    <span className="material-symbols-outlined text-3xl group-hover:text-white transition-colors group-hover:[font-variation-settings:'FILL'_1]">support_agent</span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-neutral-dark font-display">24/7 Support</h3>
                                    <p className="text-neutral-grey text-sm leading-relaxed">
                                        Round-the-clock expert assistance ensuring your operations never skip a beat, regardless of timezone.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Subtle CTA link */}
                        <div className="mt-10 flex justify-center lg:justify-start">
                            <a className="group flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-widest hover:gap-5 transition-all" href="#">
                                Learn more about our process
                                <span className="material-symbols-outlined !text-primary text-xl">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseSection;
