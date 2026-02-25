"use client"

import React from 'react';

export default function KotaArea() {
    return (
        <div className="max-w-[1280px] mx-auto w-full px-4 md:px-10 py-12 font-display">
            {/* Area Details Grid */}
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Detail Layanan Per Wilayah</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AreaCard
                        title="Pulau Jawa"
                        desc="Cakupan penuh Fiber Optic di seluruh kota utama dan kabupaten."
                        icon="location_city"
                        accent="blue"
                    />
                    <AreaCard
                        title="Sumatera"
                        desc="85% Wilayah terjangkau Broadband & Fiber di Medan, Palembang."
                        icon="terrain"
                        accent="green"
                    />
                    <AreaCard
                        title="Kalimantan & Sulawesi"
                        desc="Peningkatan infrastruktur di area IKN dan pusat bisnis Makassar."
                        icon="water"
                        accent="blue"
                    />
                    <AreaCard
                        title="Indonesia Timur"
                        desc="Koneksi Satelit & Broadband tersedia di area terpencil."
                        icon="satellite_alt"
                        accent="green"
                    />
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
