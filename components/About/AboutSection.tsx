"use client";

import { MdVerified, MdVerifiedUser, MdPublic, MdEmojiEvents, MdArrowForward } from "react-icons/md";

const AboutSection = () => {
    return (
        <section className="bg-white text-neutral-900 antialiased">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Professional Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
                        <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                            <img
                                alt="A diverse professional team collaborating in a modern glass-walled office space"
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMY0ieDJSbCVMc7uRA048qEqBCeT9g-7c1ab735j5QMSrErrmNLk2HKRNV-rSC0dIffTNFIYC_qyvrDWWif3WSuALNcpSXOpDG9vohM5Vny9VIz2di_Bae4Z1V-gyDgmvP48hggypAo0rMubR5RxxqE0LMu20N4VmdgDy7yZNN7_v4r4WEX_xrKBBxCFNzy8DYlrWF5K-eDWwWyJFY35-ufj1LtHNREmHmTTXrd-bR8Ho7Jtv6U5I9Hoi_vLO7CczSzuJ7gbZ-SQM"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-light/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-white/90 backdrop-blur-md p-4 rounded-lg inline-flex items-center gap-3 shadow-lg">
                                    <MdVerified className="text-primary font-bold" />
                                    <p className="text-primary text-sm font-extrabold uppercase tracking-widest font-display">
                                        Est. 2012
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Side: Content Stack */}
                    <div className="flex flex-col space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-primary"></span>
                                <span className="text-primary text-xs font-extrabold uppercase tracking-[0.2em] font-display">
                                    Our Story
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black text-neutral-900 leading-[1.1] tracking-tight font-display">
                                Who We Are
                            </h1>
                            <p className="text-neutral-600 text-lg leading-relaxed max-w-xl font-display">
                                We are a dedicated team of innovators committed to delivering professional excellence and modern solutions that drive global impact. Our mission is to bridge the gap between complex technology and intuitive user experiences.
                            </p>
                            <p className="text-neutral-600 text-lg leading-relaxed max-w-xl font-display">
                                Through collaborative design and strategic engineering, we help industry leaders navigate the digital landscape with confidence and clarity.
                            </p>
                        </div>
                        {/* Benefits List */}
                        <div className="grid gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200 group">
                                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <MdVerifiedUser className="text-primary text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-neutral-900 font-bold text-lg font-display">
                                        Industry Leading Experts
                                    </h4>
                                    <p className="text-neutral-500 text-sm font-display">
                                        Decades of combined experience in high-growth markets.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200 group">
                                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <MdPublic className="text-primary text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-neutral-900 font-bold text-lg font-display">
                                        Global Reach & Impact
                                    </h4>
                                    <p className="text-neutral-500 text-sm font-display">
                                        Managing large-scale operations across six continents.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200 group">
                                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <MdEmojiEvents className="text-primary text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-neutral-900 font-bold text-lg font-display">
                                        Award-Winning Solutions
                                    </h4>
                                    <p className="text-neutral-500 text-sm font-display">
                                        Recognized for innovation in user experience and efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* CTA */}
                        <div className="pt-4">
                            <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-extrabold transition-all group font-display shadow-lg shadow-primary/20">
                                <span>Learn More About Our Team</span>
                                <MdArrowForward className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
