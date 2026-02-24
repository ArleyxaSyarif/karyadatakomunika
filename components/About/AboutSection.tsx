"use client";

import React from "react";
import Image from "next/image";
import {
    MdBusinessCenter,
    MdPublic,
    MdStars,
    MdArrowForward
} from "react-icons/md";

const AboutSection = () => {
    return (
        <section className="relative py-15 px-6 overflow-hidden bg-white" id="about-us">
            {/* Background Accents (Glows) */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT COLUMN: Content */}
                    <div className="space-y-8">
                        {/* Overline */}
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-blue-500"></span>
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">
                                Our Story
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-900 tracking-tight">
                            Membangun Masa Depan <span className="text-blue-500">Digital</span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                            Kami adalah tim inovator yang berdedikasi untuk memberikan solusi modern yang mendorong dampak global. Misi kami adalah menjembatani kesenjangan antara teknologi kompleks dan pengalaman pengguna yang intuitif.
                        </p>

                        {/* Key Benefits List */}
                        <div className="grid grid-cols-1 gap-6">

                            {/* Benefit 1: Industry Experts */}
                            <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-sm border border-transparent hover:border-slate-100">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                                    <MdBusinessCenter className="text-blue-600 text-2xl group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Industry Leading Experts</h3>
                                    <p className="text-sm text-slate-500">Berpengalaman dalam menangani infrastruktur data skala besar.</p>
                                </div>
                            </div>

                            {/* Benefit 2: Global Reach */}
                            <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-sm border border-transparent hover:border-slate-100">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-emerald-50 rounded-xl group-hover:bg-emerald-500 transition-colors duration-300">
                                    <MdPublic className="text-emerald-600 text-2xl group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Global Reach & Impact</h3>
                                    <p className="text-sm text-slate-500">Solusi kami dirancang untuk skalabilitas lintas benua.</p>
                                </div>
                            </div>

                            {/* Benefit 3: Award Winning */}
                            <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:shadow-sm border border-transparent hover:border-slate-100">
                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                                    <MdStars className="text-blue-600 text-2xl group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Award-Winning Solutions</h3>
                                    <p className="text-sm text-slate-500">Diakui secara internasional atas inovasi dan kualitas teknis.</p>
                                </div>
                            </div>

                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-[#0b50da] text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group">
                                Pelajari Lebih Lanjut
                                <MdArrowForward className="ml-2 text-xl transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Visual */}
                    <div className="relative">
                        {/* Main Image Container */}
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 border-8 border-white">
                            <img
                                alt="Karya Data Komunika Team Collaboration"
                                className="w-full h-auto object-cover min-h-[450px]"
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
                            />
                        </div>

                        {/* Decorative Floating Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 opacity-20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 opacity-20 rounded-full blur-3xl -z-10"></div>

                        {/* Abstract Card Overlay */}
                        <div className="absolute -bottom-6 right-6 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden sm:block border border-slate-100 transition-transform hover:scale-105 duration-300">
                            <div className="flex items-center gap-4">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </div>
                                <span className="text-slate-800 font-bold">99.9% Uptime Guaranteed</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;