"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden hero-gradient"
            id="hero"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-blue-50 border border-blue-100 mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-brand-blue animate-pulse"></span>
                            <span className="text-brand-blue text-xs font-bold uppercase tracking-widest">
                                Innovative Connectivity
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8">
                            Solusi <span className="text-brand-blue">Konektivitas</span> <br />
                            &{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                                Teknologi Terdepan
                            </span>
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-500 mb-10 leading-relaxed font-medium">
                            Menghadirkan layanan internet dan infrastruktur digital berkualitas
                            tinggi untuk mendukung pertumbuhan bisnis Anda di era digital yang
                            dinamis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a
                                className="px-10 py-5 bg-brand-blue text-white rounded-2xl font-bold text-center hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 active:scale-95 flex items-center justify-center group"
                                href="#services"
                            >
                                Lihat Layanan
                                <svg
                                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                className="px-10 py-5 bg-white text-brand-blue border border-gray-100 rounded-2xl font-bold text-center hover:bg-gray-50 transition-all shadow-sm active:scale-95"
                                href="#"
                            >
                                Konsultasi Gratis
                            </a>
                        </div>
                    </div>
                    <div className="relative lg:ml-10">
                        {/* Abstract Modern Graphic */}
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-[12px] border-white rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-700">
                            <Image
                                alt="Modern Technology"
                                className="w-full h-[500px] object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5PKSi7akYeDGzpT3Xgs1A5hpyKkPfd1BlTwty2Iuo6XnPi543q5x2FEtJ8GEH2IEF3YUEt-2IjNA2CTS_bfYpzl-4f8UhTCXG_swBjYD2nNwltoVZvSSCkAmLRf4BQTSb1LIchOty7VjJuQxQHa_XypNAy3KFVjP3BhSr2rf5bSfPMWAxkECqA8bLnlIt7iAXgWkcVp84lLgo9HZA9tYJKicy1qOeKNzjhi8DCY2QE-cR7mh8xglpcZFkGIKalXQqMBdg1qOh35F_"
                                width={800}
                                height={500}
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        {/* Floating Status Badge */}
                        <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-[2rem] shadow-2xl z-20 flex items-center space-x-4 animate-bounce">
                            <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-brand-green"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                                    SLA Guarantee
                                </p>
                                <p className="text-xl font-extrabold text-gray-900">
                                    99.9% Reliability
                                </p>
                            </div>
                        </div>
                        {/* Background Decorative circles */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
