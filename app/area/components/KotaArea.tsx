"use client"

import React from 'react';
import { dataLokasi } from '@/components/Area/AreaSection';

export default function KotaArea() {
    return (
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24 font-display">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-[#135bec] text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#135bec] animate-pulse"></span>
                    Jaringan Nasional
                </div>
                <h2 className="text-slate-900 text-4xl md:text-5xl font-extrabold tracking-tight">
                    Detail Layanan <span className="text-[#135bec] relative inline-block">Per Wilayah<span className="absolute -bottom-2 left-0 w-full h-1 bg-[#10b981] rounded-full"></span></span>
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
                    Temukan mitra bisnis terpercaya kami yang siap membantu Anda di berbagai lokasi strategis dengan standar kualitas internasional.
                </p>
            </div>

            {/* Area Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {dataLokasi.map((item, index) => (
                    <AreaCard
                        key={item.id}
                        title={item.nama}
                        desc={item.info}
                        icon="location_city"
                        // Alternate gradients for visual variety
                        gradient={index % 2 === 0 ? "from-[#135bec] to-blue-400" : "from-[#10b981] to-teal-400"}
                        shadowColor={index % 2 === 0 ? "shadow-blue-500/20" : "shadow-emerald-500/20"}
                    />
                ))}
            </div>


        </div>
    );
}

// Sub-komponen untuk card wilayah agar kode lebih bersih
function AreaCard({ title, desc, icon, gradient, shadowColor }: { title: string, desc: string, icon: string, gradient: string, shadowColor: string }) {
    return (
        <div className="group relative flex flex-col p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_20px_50px_-12px_rgba(19,91,236,0.08)] hover:shadow-[0_30px_60px_-12px_rgba(19,91,236,0.15)] transition-all duration-300 hover:-translate-y-2">
            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg ${shadowColor}`}>
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
                {title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {desc}
            </p>

            <div className="mt-auto flex items-center text-[#135bec] font-bold text-sm group-hover:gap-1 transition-all">
                <span>Lihat titik lokasi</span>
                <span className="material-symbols-outlined ml-2 transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </div>

            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/20 rounded-3xl pointer-events-none transition-colors"></div>
        </div>
    );
}
