"use client";

import React from 'react';
import {
    MdLanguage,
    MdPublic,
    MdVerified,
    MdTrendingUp,
    MdLocationOn,
    MdAdd,
    MdRemove,
    MdMyLocation,
    MdHub
} from "react-icons/md";
import { motion, Variants } from "framer-motion";

const AreaSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="bg-white text-slate-900 antialiased overflow-x-hidden">
            <main className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-20">

                {/* Header & Search */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0b50da] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100"
                        >
                            Coverage Area
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-900 text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4"
                        >
                            Jangkauan <span className="text-[#0b50da]">Global</span> Kami
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-slate-600 text-lg leading-relaxed"
                        >
                            Rasakan konektivitas tanpa batas dengan infrastruktur jaringan kelas enterprise. Kami telah membangun tulang punggung yang tangguh di seluruh benua untuk memastikan data Anda tetap bergerak.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="w-full lg:w-96"
                    >
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-bold text-slate-700 px-1">Cari node terdekat</span>
                            <div className="relative flex items-center">
                                <MdLocationOn className="absolute left-4 text-[#0b50da] text-xl" />
                                <input
                                    className="w-full h-14 rounded-2xl border-slate-200 bg-slate-50 pl-12 pr-4 text-base focus:border-[#0b50da] focus:ring-1 focus:ring-[#0b50da] shadow-sm transition-all"
                                    placeholder="Cari Lokasi (cth. Jakarta, Tokyo)"
                                    type="text"
                                />
                            </div>
                        </label>
                    </motion.div>
                </div>

                {/* Interactive Map Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl mb-12 group"
                >
                    {/* Background Map Simulation */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>

                    {/* Map Nodes */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full p-12">

                            {/* Node: San Francisco */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="absolute top-1/4 left-1/4 group-hover:scale-110 transition-transform duration-500"
                            >
                                <div className="relative flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0b50da] border-2 border-white"></span>
                                </div>
                                <div className="absolute top-6 left-0 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-xl text-[10px] font-bold whitespace-nowrap border border-white">
                                    San Francisco PoP
                                </div>
                            </motion.div>

                            {/* Node: London */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="absolute top-1/3 left-[52%] group-hover:scale-110 transition-transform duration-500"
                            >
                                <div className="relative flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#10b981] border-2 border-white"></span>
                                </div>
                                <div className="absolute top-6 left-0 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-xl text-[10px] font-bold whitespace-nowrap border border-white">
                                    London Hub
                                </div>
                            </motion.div>

                            {/* Node: Singapore */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 }}
                                className="absolute bottom-1/3 right-1/4 group-hover:scale-110 transition-transform duration-500"
                            >
                                <div className="relative flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0b50da] border-2 border-white"></span>
                                </div>
                                <div className="absolute top-6 left-0 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-xl text-[10px] font-bold whitespace-nowrap border border-white">
                                    Singapore Edge
                                </div>
                            </motion.div>

                        </div>
                    </div>

                    {/* Map Controls */}
                    <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                        <button className="flex size-10 items-center justify-center rounded-xl bg-white shadow-lg text-slate-600 hover:text-[#0b50da] transition-all active:scale-90">
                            <MdAdd size={20} />
                        </button>
                        <button className="flex size-10 items-center justify-center rounded-xl bg-white shadow-lg text-slate-600 hover:text-[#0b50da] transition-all active:scale-90">
                            <MdRemove size={20} />
                        </button>
                        <button className="flex size-10 items-center justify-center rounded-xl bg-[#0b50da] shadow-lg text-white hover:bg-blue-700 transition-all mt-2 active:scale-90">
                            <MdMyLocation size={20} />
                        </button>
                    </div>

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-6 left-6 hidden sm:block"
                    >
                        <div className="bg-slate-800/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl max-w-xs">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="size-2 rounded-full bg-[#10b981] animate-pulse"></div>
                                <span className="text-xs font-bold text-white uppercase tracking-wider">Status Sistem: Optimal</span>
                            </div>
                            <p className="text-[11px] text-slate-300 leading-relaxed">Visualisasi real-time dari node aktif dan aliran trafik kami di seluruh tulang punggung Global.</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {/* Card 1 */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="flex flex-col gap-3 rounded-3xl p-8 bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
                    >
                        <div className="size-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#0b50da] mb-2">
                            <MdLanguage size={28} />
                        </div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Global PoPs</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-slate-900 text-4xl font-black leading-tight">200+</p>
                            <span className="text-[#10b981] text-sm font-bold flex items-center gap-1">
                                <MdTrendingUp /> 15%
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm">Berlokasi strategis untuk latensi rendah.</p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="flex flex-col gap-3 rounded-3xl p-8 bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300"
                    >
                        <div className="size-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-[#10b981] mb-2">
                            <MdPublic size={28} />
                        </div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Negara</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-slate-900 text-4xl font-black leading-tight">50+</p>
                            <span className="text-[#10b981] text-sm font-bold flex items-center gap-1">
                                <MdTrendingUp /> 5%
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm">Menghubungkan hub bisnis utama dunia.</p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="flex flex-col gap-3 rounded-3xl p-8 bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
                    >
                        <div className="size-12 rounded-2xl bg-blue-100 flex items-center justify-center text-[#0b50da] mb-2">
                            <MdVerified size={28} />
                        </div>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Network Uptime</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-slate-900 text-4xl font-black leading-tight">99.9%</p>
                            <span className="text-[#10b981] text-sm font-bold flex items-center">
                                stable
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm">Keandalan terjamin dengan Enterprise SLA.</p>
                    </motion.div>
                </motion.div>


            </main>
        </section>
    );
};

export default AreaSection;
