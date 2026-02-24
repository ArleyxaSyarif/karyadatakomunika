"use client";

import React from 'react';
import { MdRocketLaunch, MdArrowForward, MdPlayCircle } from "react-icons/md";
import { motion } from "framer-motion";

export default function TaglineSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto px-6 py-12"
        >
            {/* Headline Utama - Mix Biru & Hijau */}
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
                Next-Generation Data <br />
                <span className="text-[#0b50da]">Architecture</span>{" "}
                <span className="text-[#10b981]">Solutions</span>
            </h1>

            {/* Sub-tagline */}
            <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Accelerating Future Infrastructure with premium high-tech data solutions
                and professional-grade digital ecosystems tailored for your growth.
            </p>

            {/* Tombol Aksi */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full"
            >
                {/* Button Primary - Biru Tetap Solid sebagai warna utama */}
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0b50da] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-blue-200 transition-all group active:scale-95">
                    Mulai Sekarang
                    <MdArrowForward className="text-xl group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Button Secondary - Ikon pakai warna Hijau */}
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-bold text-base border border-slate-200 shadow-sm transition-all active:scale-95">
                    <MdPlayCircle className="text-2xl text-[#10b981]" />
                    Lihat Demo
                </button>
            </motion.div>
        </motion.div>
    );
}