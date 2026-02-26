"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

import { lane1Partners, lane2Partners } from '@/data/partner';

const PartnerSection = () => {
    const isMobile = useIsMobile();


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-16 bg-blue-50 overflow-hidden border-y border-slate-50">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center">
                {/* Badge Kecil yang Halus */}
                <motion.div
                    initial={isMobile ? false : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-4 flex items-center gap-2"
                >
                    <span className="h-[1px] w-6 bg-blue-200"></span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-500">
                        Strategic Alliance
                    </span>
                    <span className="h-[1px] w-6 bg-blue-200"></span>
                </motion.div>

                {/* Judul yang Lebih Proporsional */}
                <motion.h2
                    initial={isMobile ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={isMobile ? { duration: 0 } : { delay: 0.2 }}
                    className="text-2xl md:text-4xl font-bold text-slate-800 tracking-tight text-center"
                >
                    Dipercaya oleh  <span className="text-[#0b50da]">70+ perusahaan</span>
                </motion.h2>
            </div>

            {/* Container Marquee */}
            <motion.div
                initial={isMobile ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={isMobile ? { duration: 0 } : { duration: 1 }}
                className="space-y-6 relative"
            >
                {/* Fade Mask Overlay - Lebih halus */}

                {/* Lane 1 */}
                <div className="flex w-full overflow-hidden group">
                    <div className="flex animate-scroll-left whitespace-nowrap gap-16 md:gap-28 items-center py-2">
                        {[...lane1Partners, ...lane1Partners, ...lane1Partners].map((url, idx) => (
                            <div key={`lane1-${idx}`} className="w-24 md:w-32 h-10 flex items-center justify-center hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                <div className="relative w-full h-full">
                                    <Image src={url} alt="Partner Logo" fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lane 2 */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex animate-scroll-right whitespace-nowrap gap-16 md:gap-28 items-center py-2">
                        {[...lane2Partners, ...lane2Partners, ...lane2Partners].map((url, idx) => (
                            <div key={`lane2-${idx}`} className="w-24 md:w-32 h-10 flex items-center justify-center hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                <div className="relative w-full h-full">
                                    <Image src={url} alt="Partner Logo" fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Footer Kecil */}
            <motion.div
                initial={isMobile ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={isMobile ? { duration: 0 } : { delay: 0.5 }}
                className="mt-12 text-center"
            >
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-300">
                    & More than 500+ worldwide partners
                </p>
            </motion.div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-33.33%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scroll-left 50s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 50s linear infinite;
                }
                /* Pause on hover biar user bisa lihat logonya */
                .animate-scroll-left:hover, .animate-scroll-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default PartnerSection;