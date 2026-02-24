"use client";

import React from 'react';
import { FaHandshake } from 'react-icons/fa';
import { IoRocketOutline } from "react-icons/io5";
import { motion, Variants } from "framer-motion";

const StatistikSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-white text-slate-900 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* Header Section */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#0b50da] font-bold tracking-widest text-xs uppercase mb-3 block"
                    >
                        Enterprise Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-900 text-4xl md:text-5xl font-black mb-4 tracking-tight"
                    >
                        Metrik Performa <span className="text-[#0b50da]">High-Tech</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-500 text-lg leading-relaxed"
                    >
                        Mendorong transformasi digital dengan keandalan yang tak tertandingi dan satu dekade keahlian industri.
                    </motion.p>
                </div>

                {/* Statistics Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
                >

                    {/* Circular Metric 1: Experience */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
                    >
                        <div className="relative size-32 mb-6">
                            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                <circle className="stroke-slate-200" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                                <motion.circle
                                    initial={{ strokeDasharray: "0, 100" }}
                                    whileInView={{ strokeDasharray: "85, 100" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                    className="stroke-[#0b50da]"
                                    cx="18" cy="18" fill="none" r="16"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                ></motion.circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-black text-slate-900">10+</span>
                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">Tahun</span>
                            </div>
                        </div>
                        <h3 className="text-slate-900 font-bold text-lg mb-2">Pengalaman Industri</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Satu dekade pengetahuan khusus dalam komunikasi data.</p>
                    </motion.div>

                    {/* Circular Metric 2: Uptime */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300"
                    >
                        <div className="relative size-32 mb-6">
                            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                <circle className="stroke-slate-200" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                                <motion.circle
                                    initial={{ strokeDasharray: "0, 100" }}
                                    whileInView={{ strokeDasharray: "99.9, 100" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
                                    className="stroke-[#10b981]"
                                    cx="18" cy="18" fill="none" r="16"
                                    strokeLinecap="round"
                                    strokeWidth="3"
                                ></motion.circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-black text-slate-900">99.9%</span>
                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">Uptime</span>
                            </div>
                        </div>
                        <h3 className="text-slate-900 font-bold text-lg mb-2">Reliabilitas Jaringan</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Menjamin operasional bisnis Anda tetap stabil tanpa hambatan.</p>
                    </motion.div>

                    {/* Linear Metric 1: Projects */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between group hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="bg-blue-100 p-3 rounded-2xl text-[#0b50da]">
                                    <IoRocketOutline size={24} />
                                </div>
                                <span className="text-3xl font-black text-slate-900">500+</span>
                            </div>
                            <h3 className="text-slate-900 font-bold text-lg mb-2">Proyek Sukses</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">Memberikan solusi kompleks di berbagai sektor korporasi.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <span>Growth Rate</span>
                                <span className="text-[#0b50da]">+15% Yearly</span>
                            </div>
                            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "88%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
                                    className="bg-gradient-to-r from-[#0b50da] to-blue-400 h-full rounded-full"
                                ></motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Linear Metric 2: Partners */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between group hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="bg-emerald-100 p-3 rounded-2xl text-[#10b981]">
                                    <FaHandshake size={24} />
                                </div>
                                <span className="text-3xl font-black text-slate-900">100+</span>
                            </div>
                            <h3 className="text-slate-900 font-bold text-lg mb-2">Partner Global</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">Dipercaya oleh penyedia teknologi terkemuka dunia.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                                <span>Expansion</span>
                                <span className="text-[#10b981]">High</span>
                            </div>
                            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "75%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
                                    className="bg-gradient-to-r from-[#10b981] to-teal-400 h-full rounded-full"
                                ></motion.div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default StatistikSection;
