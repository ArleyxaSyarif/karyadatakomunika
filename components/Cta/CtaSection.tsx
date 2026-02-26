"use client";

import React from 'react';
import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const CtaSection = () => {
    const isMobile = useIsMobile();

    return (
        <section className="relative w-full py-20 overflow-visible bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={isMobile ? false : { opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={isMobile ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
                    className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(11,80,218,0.12)] border border-slate-100 p-8 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative"
                >

                    {/* Background Accents - Soft Glows & Grid */}
                    <div
                        className="absolute inset-0 opacity-40 pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(circle, rgba(11, 80, 218, 0.05) 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }}
                    ></div>
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-[#0b50da]/10 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 bg-[#10b981]/10 rounded-full blur-[80px] pointer-events-none"></div>

                    <div className="flex flex-col gap-5 text-center md:text-left relative z-10">
                        {/* Trust Badge */}
                        <motion.div
                            initial={isMobile ? false : { opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={isMobile ? { duration: 0 } : { delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-2 w-fit mx-auto md:mx-0"
                        >
                            <div className="flex -space-x-1.5">
                                <div className="w-5 h-5 rounded-full bg-[#0b50da] flex items-center justify-center text-[8px] text-white font-bold ring-2 ring-white">C1</div>
                                <div className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center text-[8px] text-white font-bold ring-2 ring-white">C2</div>
                                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[8px] text-white font-bold ring-2 ring-white">C3</div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Dipercaya 200+ Global</span>
                        </motion.div>

                        <motion.h2
                            initial={isMobile ? false : { opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={isMobile ? { duration: 0 } : { delay: 0.2 }}
                            className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]"
                        >
                            Siap mengoptimalkan <br className="hidden md:block" />
                            <span className="text-[#0b50da]">Infrastruktur Anda?</span>
                        </motion.h2>

                        <motion.p
                            initial={isMobile ? false : { opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={isMobile ? { duration: 0 } : { delay: 0.3 }}
                            className="text-lg text-slate-600 max-w-md leading-relaxed"
                        >
                            Bergabunglah dengan ratusan perusahaan global yang telah mentransformasi operasional digital mereka bersama kami.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={isMobile ? false : { opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={isMobile ? { duration: 0 } : { delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10"
                    >
                        <button className="bg-[#0b50da] hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group cursor-pointer active:scale-95">
                            Mulai Sekarang
                            <MdArrowForward className="text-2xl transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="bg-white hover:bg-slate-50 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-slate-200 cursor-pointer active:scale-95 shadow-sm">
                            Konsultasi Gratis
                        </button>
                    </motion.div>

                    {/* Decorative Dot Elements */}
                    <div className="absolute bottom-6 right-10 hidden lg:flex items-center gap-1.5 opacity-20">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                        <div className="w-10 h-1 rounded-full bg-[#0b50da]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaSection;