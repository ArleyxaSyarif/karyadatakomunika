"use client";

import React from 'react';
import {
    MdLocationOn,
    MdAdd,
    MdRemove,
    MdMyLocation,
} from "react-icons/md";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./RealMap'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-slate-800 animate-pulse" />
});

// Definisi Tipe untuk Lokasi agar konsisten
export interface LocationData {
    id: number;
    nama: string;
    posisi: [number, number];
    info: string;
}

export const dataLokasi: LocationData[] = [
    { id: 1, nama: "Jakarta PoP", posisi: [-6.2088, 106.8456], info: "Pusat Jaringan Utama" },
    { id: 2, nama: "Singapore Edge", posisi: [1.3521, 103.8198], info: "Gerbang Internasional" },
    { id: 3, nama: "Surabaya Node", posisi: [-7.2575, 112.7521], info: "Hub Jawa Timur" },
    { id: 5, nama: "Makassar PoP", posisi: [-5.1476, 119.4327], info: "Gerbang Indonesia Timur" },
];



const AreaSection = () => {
    const isMobile = useIsMobile();

    const [searchQuery, setSearchQuery] = React.useState("");
    const [filteredLocations, setFilteredLocations] = React.useState<LocationData[]>(dataLokasi);
    const [selectedLocation, setSelectedLocation] = React.useState<LocationData | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    // Fungsi pencarian/filter
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() === "") {
            setFilteredLocations(dataLokasi);
            setIsDropdownOpen(false);
        } else {
            const lowQuery = query.toLowerCase();
            const filtered = dataLokasi.filter(loc =>
                loc.nama.toLowerCase().includes(lowQuery) ||
                loc.info.toLowerCase().includes(lowQuery)
            );
            setFilteredLocations(filtered);
            setIsDropdownOpen(true);
        }
    };

    // Fungsi saat lokasi dipilih dari dropdown
    const handleSelectLocation = (loc: LocationData) => {
        setSearchQuery(loc.nama);
        setSelectedLocation(loc);
        setFilteredLocations([loc]);
        setIsDropdownOpen(false);
    };


    return (
        <section className="bg-white text-slate-900 antialiased overflow-x-hidden">
            <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-10 lg:py-20">

                {/* Header & Search */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={isMobile ? false : { opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0b50da] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 border border-blue-100"
                        >
                            Coverage Area
                        </motion.span>
                        <motion.h2
                            initial={isMobile ? false : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={isMobile ? { duration: 0 } : { delay: 0.2 }}
                            className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4"
                        >
                            Jangkauan <span className="text-[#0b50da]">Global</span> Kami
                        </motion.h2>
                        <motion.p
                            initial={isMobile ? false : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={isMobile ? { duration: 0 } : { delay: 0.3 }}
                            className="text-slate-600 text-base sm:text-lg leading-relaxed"
                        >
                            Rasakan konektivitas tanpa batas dengan infrastruktur jaringan kelas enterprise. Kami telah membangun tulang punggung yang tangguh di seluruh benua.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={isMobile ? false : { opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={isMobile ? { duration: 0 } : { delay: 0.4 }}
                        className="w-full lg:w-96 relative z-50"
                    >
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-bold text-slate-700 px-1">Cari node terdekat</span>
                            <div className="relative flex items-center">
                                <MdLocationOn className="absolute left-4 text-[#0b50da] text-xl" />
                                <input
                                    className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl border-slate-200 bg-slate-50 pl-12 pr-4 text-sm sm:text-base focus:border-[#0b50da] focus:ring-1 focus:ring-[#0b50da] shadow-sm transition-all outline-none"
                                    placeholder="Cari Lokasi (cth. Jakarta, Medan)"
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    onFocus={() => searchQuery && setIsDropdownOpen(true)}
                                />
                            </div>
                        </label>

                        {/* Dropdown Hasil Pencarian - Perbaikan tap target di mobile */}
                        {isDropdownOpen && filteredLocations.length > 0 && (
                            <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-2xl py-1.5 sm:py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                {filteredLocations.map((loc) => (
                                    <button
                                        key={loc.id}
                                        onClick={() => handleSelectLocation(loc)}
                                        className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-3.5 hover:bg-blue-50 transition-colors text-left group"
                                    >
                                        <div className="size-10 sm:size-11 rounded-lg sm:rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-[#0b50da] transition-all shrink-0">
                                            <MdLocationOn size={20} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm sm:text-base font-bold text-slate-900 truncate">{loc.nama}</p>
                                            <p className="text-[11px] sm:text-xs text-slate-500 italic truncate">{loc.info}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Interactive Map Visual */}
                <motion.div
                    initial={isMobile ? false : { opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={isMobile ? { duration: 0 } : { duration: 0.8 }}
                    className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl lg:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl mb-12 group z-0"
                >
                    {/* Real Leaflet Map */}
                    <div className="absolute inset-0 z-0 h-full w-full">
                        <Map
                            nodes={filteredLocations}
                            focusLocation={selectedLocation?.posisi}
                        />
                    </div>
                </motion.div>




            </main>
        </section>
    );
};

export default AreaSection;
