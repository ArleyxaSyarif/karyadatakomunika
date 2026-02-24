"use client";

import React from 'react';
import { MdArrowForward } from "react-icons/md";

const CtaSection = () => {
    return (
        <section className="relative w-full py-20 overflow-visible bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(11,80,218,0.12)] border border-slate-100 p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">

                    {/* Background Accents - Soft Blue Glows */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-[#0b50da]/5 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-[#10b981]/5 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="flex flex-col gap-5 text-center md:text-left relative z-10">

                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
                            Siap mengoptimalkan <br className="hidden md:block" />
                            <span className="text-[#0b50da]">Infrastruktur Anda?</span>
                        </h2>
                        <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                            Bergabunglah dengan ratusan perusahaan global yang telah mentransformasi operasional digital mereka bersama kami.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
                        <button className="bg-[#0b50da] hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-95">
                            Mulai Sekarang
                            <MdArrowForward className="text-2xl transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="bg-white hover:bg-slate-50 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-slate-200 cursor-pointer active:scale-95 shadow-sm">
                            Konsultasi Gratis
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;