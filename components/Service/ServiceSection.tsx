"use client";

import React from "react";
import {
    MdOutlineWebhook,
    MdOutlineCloudQueue,
    MdOutlineSecurity,
    MdOutlineDevices,
    MdOutlineAutoGraph,
    MdOutlineDns,
    MdArrowForward,
    MdOutlineInsights,
    MdOutlineBrush,
    MdOutlineTrendingUp,
    MdOutlineCode,
    MdOutlineRocketLaunch,
    MdCheckCircle
} from "react-icons/md";
import { motion, Variants } from "framer-motion";

const ServiceSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full" id="services">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="flex items-center gap-2 mb-4"
                    >
                        <div className="w-12 h-[2px] bg-[#0b50da]"></div>
                        <span className="text-[#0b50da] font-bold tracking-widest uppercase text-xs">Our Services</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-900 text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter"
                    >
                        Solusi Menyeluruh. <br />
                        <span className="text-[#0b50da]">Hasil yang Terukur.</span>
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-xs"
                >
                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-6">
                        Kami membangun ekselensi digital dengan fokus pada pertumbuhan strategis dan desain arsitektur yang presisi.
                    </p>
                    <button className="group flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wider cursor-pointer hover:text-[#0b50da] transition-colors">
                        Lihat Semua Layanan
                        <MdArrowForward className="transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>
            </div>

            {/* Services Grid (Asymmetrical) */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >

                {/* Feature Card 1: Large (Strategic) */}
                <motion.div
                    variants={cardVariants}
                    className="md:col-span-2 group relative overflow-hidden bg-slate-50 rounded-2xl border border-slate-100 p-10 flex flex-col justify-between min-h-[450px] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100"
                >
                    <div className="relative z-10 max-w-md">
                        <span className="p-3 bg-blue-100 rounded-xl inline-flex items-center justify-center mb-6 transition-colors group-hover:bg-[#0b50da] group-hover:text-white">
                            <MdOutlineInsights className="text-3xl" />
                        </span>
                        <h3 className="text-3xl font-bold mb-4 text-slate-900">Strategic Consulting</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Pemetaan bisnis tingkat tinggi dan optimasi struktural. Kami menganalisis mekanik inti untuk memberikan dominasi pasar yang berkelanjutan.
                        </p>
                        <ul className="mt-8 space-y-3">
                            <li className="flex items-center gap-2 font-semibold text-sm text-slate-700">
                                <MdCheckCircle className="text-[#10b981] text-xl" />
                                Market Analysis
                            </li>
                            <li className="flex items-center gap-2 font-semibold text-sm text-slate-700">
                                <MdCheckCircle className="text-[#10b981] text-xl" />
                                Operational Scaling
                            </li>
                        </ul>
                        <button className="mt-8 bg-[#0b50da] text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-xl flex items-center gap-2 w-fit cursor-pointer hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 active:scale-95">
                            Lihat Detail
                        </button>
                    </div>

                    {/* Background Deco Image */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 group-hover:opacity-40 transition-opacity duration-700 hidden lg:block">
                        <div className="w-full h-full relative rounded-bl-[100px] overflow-hidden grayscale">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
                                alt="Modern Office"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Feature Card 2: Brand Design (Green Focus) */}
                <motion.div
                    variants={cardVariants}
                    className="group relative overflow-hidden bg-slate-900 text-white rounded-2xl p-8 flex flex-col justify-end min-h-[450px] transition-all duration-500 hover:-translate-y-2"
                >
                    <div className="absolute inset-0 mix-blend-overlay opacity-30 group-hover:scale-110 transition-transform duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964"
                            alt="Design abstract"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="relative z-10">
                        <span className="p-3 bg-[#10b981]/20 rounded-xl inline-flex items-center justify-center mb-6 border border-[#10b981]/30">
                            <MdOutlineBrush className="text-[#10b981] text-3xl" />
                        </span>
                        <h3 className="text-2xl font-bold mb-3">Brand Design</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            Identitas visual yang beresonansi melalui presisi estetika dan emosi brand.
                        </p>
                        <button className="bg-[#10b981] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-lg flex items-center gap-2 w-fit cursor-pointer hover:bg-emerald-600 transition-colors">
                            Case Studies
                        </button>
                    </div>
                </motion.div>

                {/* Feature Card 3: Digital Growth */}
                <motion.div
                    variants={cardVariants}
                    className="group relative overflow-hidden bg-white rounded-2xl border border-slate-100 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-100 hover:-translate-y-2 hover:border-[#10b981]/20"
                >
                    <div className="relative z-10">
                        <span className="p-3 bg-emerald-50 rounded-xl inline-flex items-center justify-center mb-6 group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-500">
                            <MdOutlineTrendingUp className="text-3xl text-[#10b981] group-hover:text-white" />
                        </span>
                        <h3 className="text-2xl font-bold mb-3 text-slate-900">Digital Growth</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Pemasaran berbasis data dan optimasi performa untuk skala jangkauan brand secara eksponensial.
                        </p>
                        <button className="mt-6 text-[#10b981] font-bold text-xs uppercase tracking-widest flex items-center gap-1 group/btn cursor-pointer">
                            View Details
                            <MdArrowForward className="text-sm transition-transform group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </motion.div>

                {/* Feature Card 4: Tech Stacks */}
                <motion.div
                    variants={cardVariants}
                    className="group relative overflow-hidden bg-white rounded-2xl border border-slate-100 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 hover:border-[#0b50da]/20"
                >
                    <div className="relative z-10">
                        <span className="p-3 bg-blue-50 rounded-xl inline-flex items-center justify-center mb-6 group-hover:bg-[#0b50da] group-hover:text-white transition-colors duration-500">
                            <MdOutlineCode className="text-3xl text-[#0b50da] group-hover:text-white" />
                        </span>
                        <h3 className="text-2xl font-bold mb-3 text-slate-900">Tech Stacks</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Pengembangan kustom menggunakan framework terbaru untuk kecepatan, keamanan, dan skalabilitas tanpa batas.
                        </p>
                        <button className="mt-6 text-[#0b50da] font-bold text-xs uppercase tracking-widest flex items-center gap-1 group/btn cursor-pointer">
                            View Details
                            <MdArrowForward className="text-sm transition-transform group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                    <div className="mt-8 flex gap-2">
                        {["Scalable", "Secure", "Fast"].map((label) => (
                            <div key={label} className="flex-1 h-10 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center group-hover:border-blue-200 transition-colors">
                                <span className="text-[#0b50da] font-bold text-[10px] uppercase tracking-tighter">{label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Feature Card 5: Rocket/CTA (Blue Background) */}
                <motion.div
                    variants={cardVariants}
                    className="group relative overflow-hidden bg-[#0b50da] rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400"
                >
                    <div className="flex justify-between items-start relative z-10">
                        <span className="p-3 bg-white/20 rounded-xl inline-flex items-center justify-center text-white border border-white/20">
                            <MdOutlineRocketLaunch className="text-3xl" />
                        </span>
                    </div>
                    <div className="text-white relative z-10">
                        <h3 className="text-2xl font-bold mb-2">Siap Memulai?</h3>
                        <p className="text-blue-100 text-sm leading-relaxed mb-6">
                            Bergabunglah dengan 200+ brand global yang berkembang bersama keahlian kami.
                        </p>
                        <button className="bg-white text-[#0b50da] font-bold px-6 py-4 rounded-xl text-sm w-full transition-all hover:bg-blue-50 active:scale-95 shadow-xl cursor-pointer">
                            Jadwalkan Konsultasi
                        </button>
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default ServiceSection;