"use client"

import React from 'react';
import { dataLokasi } from '@/components/Area/AreaSection';

export default function KotaArea() {


    return (
        <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10 py-12 font-display">
            {/* Area Details Grid */}
            <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">Detail Layanan Per Wilayah</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {dataLokasi.map((item) => (
                        <AreaCard
                            key={item.id}
                            title={item.nama}
                            desc={item.info}
                            icon="location_city"
                            accent="blue"
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}

// Sub-komponen untuk card wilayah agar kode lebih bersih
function AreaCard({ title, desc, icon, accent }: { title: string, desc: string, icon: string, accent: 'blue' | 'green' }) {
    // Logika warna aksen tetap dipertahankan agar dinamis
    const accentStyles = accent === 'blue'
        ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
        : "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-400 group-hover:text-slate-900";

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-600 transition-all duration-300 group cursor-default shadow-sm hover:shadow-md">
            {/* Icon Container */}
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${accentStyles}`}>
                <span className="material-symbols-outlined text-2xl">{icon}</span>
            </div>

            {/* Content */}
            <h4 className="font-bold text-lg mb-2 text-slate-900">
                {title}
            </h4>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {desc}
            </p>

            {/* Link/Action */}
            <div className="flex items-center text-blue-600 font-bold text-sm cursor-pointer hover:gap-2 transition-all">
                Lihat titik lokasi
                <span className="material-symbols-outlined text-xs ml-1 font-bold">arrow_forward</span>
            </div>
        </div>
    );
}
