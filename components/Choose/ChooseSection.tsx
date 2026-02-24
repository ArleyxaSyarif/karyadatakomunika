"use client";

import React from 'react';
import Image from 'next/image';
import {
    MdTrendingUp,
    MdVerifiedUser,
    MdHandshake,
    MdSupportAgent,
    MdArrowRightAlt
} from "react-icons/md";

const ChooseSection = () => {
    return (
        <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-neutral-100">
            {/* Background Accents - Subtle Grey Strip */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT SIDE: Content & Image */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-[2px] bg-[#0b50da]"></div>
                                <span className="text-[#0b50da] font-bold tracking-widest uppercase text-xs">Excellence Guaranteed</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                                Mengapa Bermitra <br />
                                <span className="text-[#0b50da]">Dengan Kami?</span>
                            </h2>
                            <p className="text-slate-500 text-lg max-w-lg leading-relaxed">
                                Temukan bagaimana nilai-nilai inti kami mendorong kesuksesan jangka panjang dan pertumbuhan terukur untuk bisnis Anda melalui kolaborasi strategis.
                            </p>
                        </div>

                        {/* Secondary Visual Asset */}
                        <div className="relative group mt-4">
                            <div className="absolute -inset-2 bg-blue-600/5 rounded-2xl blur-xl group-hover:bg-blue-600/10 transition duration-500"></div>
                            <div className="relative overflow-hidden rounded-2xl border border-slate-100 shadow-2xl aspect-video sm:aspect-auto bg-slate-100">
                                <div className="relative w-full h-80">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCedq_9bWA9dvWW6kHe2ALWwA464MX3UCWKI83ffxRmseJHiXgwK6JnBEOtxqvrDfwXS-8b_9A1quj4lRSpfzWdySu-QPJHFMjNeUb8mnN7_YICXDe1Iw8ytG-4tFuu3C1TEBRQvBea2CcVzqM1iOsJx3C1oK_SOjuyxD9n9Nmcyg_K6ehKTkwfvV6fReEFyB1QXUUzc2wx81qdiFjxJm36m9LJ-ReVTeDalV6y0oqSfHJJ7Xn8hSchEfm3NnRBYGBpgY74_JVFHHc"
                                        alt="Modern professional team collaboration"
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                                        <p className="text-white font-medium text-lg italic border-l-4 border-[#10b981] pl-4">
                                            "Berorientasi pada hasil, didefinisikan oleh kemitraan."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Value Cards Grid */}

                    <div className="w-full lg:w-1/2 mb-10">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {/* Card 1: Scalability */}
                            <div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 flex flex-col gap-5">
                                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0b50da] transition-colors duration-300">
                                    <MdTrendingUp className="text-3xl text-[#0b50da] group-hover:text-white transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-900">Scalability</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Solusi yang tumbuh mulus seiring perkembangan bisnis Anda tanpa kompromi pada performa.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Reliability */}
                            <div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 flex flex-col gap-5">
                                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-[#0b50da] transition-colors duration-300">
                                    <MdVerifiedUser className="text-3xl text-[#0b50da] group-hover:text-white transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-900">Reliability</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Performa konsisten dan sistem ketersediaan tinggi yang dapat Anda percayai sepenuhnya.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Strategic Partnership */}
                            <div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 flex flex-col gap-5">
                                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-[#10b981] transition-colors duration-300">
                                    <MdHandshake className="text-3xl text-[#10b981] group-hover:text-white transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-900">Partnership</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Kolaborasi mendalam yang berfokus pada pencapaian tujuan bisnis jangka panjang dan ROI Anda.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4: 24/7 Support */}
                            <div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 flex flex-col gap-5">
                                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-[#10b981] transition-colors duration-300">
                                    <MdSupportAgent className="text-3xl text-[#10b981] group-hover:text-white transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-900">24/7 Support</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        Bantuan ahli sepanjang waktu memastikan operasional Anda tidak pernah terhenti.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Subtle CTA link */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseSection;