"use client";

import React from 'react';
import {
    MdRocketLaunch,
    MdLanguage,
    MdShare,
    MdChat,
    MdMail,
    MdCall,
    MdAlternateEmail,
    MdLocationOn,
    MdSchedule
} from "react-icons/md";

const Footer = () => {
    return (
        <footer className="relative w-full border-t border-slate-100 bg-white pt-20 pb-10 antialiased font-sans">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Top Section: Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-50">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-11 h-11 bg-[#0b50da] rounded-xl flex items-center justify-center text-white shadow-xl shadow-blue-200 transition-transform group-hover:scale-105">
                                <MdRocketLaunch className="text-2xl" />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-slate-900">
                                Lumina<span className="text-[#0b50da]">.</span>
                            </span>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-base max-w-sm">
                            Membangun masa depan pengalaman digital dengan presisi, gairah, dan komitmen terhadap keunggulan infrastruktur teknologi.
                        </p>
                        <div className="flex gap-3">
                            {[MdLanguage, MdShare, MdChat].map((Icon, idx) => (
                                <a key={idx} className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-[#0b50da] hover:text-white text-slate-400 flex items-center justify-center transition-all duration-300 border border-slate-100" href="#">
                                    <Icon className="text-xl" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Perusahaan</h4>
                        <ul className="flex flex-col gap-4">
                            {['Tentang Kami', 'Karir', 'Berita', 'Kontak'].map((item) => (
                                <li key={item}><a className="text-slate-500 hover:text-[#0b50da] transition-colors text-sm font-medium" href="#">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Sumber Daya</h4>
                        <ul className="flex flex-col gap-4">
                            {['Dokumentasi', 'Pusat Bantuan', 'Privasi', 'Ketentuan Layanan'].map((item) => (
                                <li key={item}><a className="text-slate-500 hover:text-[#0b50da] transition-colors text-sm font-medium" href="#">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative overflow-hidden group">
                            {/* Decorative glow */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl group-hover:bg-blue-200/50 transition-all duration-500"></div>

                            <h4 className="text-sm font-bold text-slate-900 mb-2 italic">Tetap Terhubung</h4>
                            <p className="text-slate-500 text-sm mb-6">Dapatkan pembaruan teknologi mingguan langsung di inbox Anda.</p>

                            <form className="flex flex-col gap-3 relative z-10">
                                <div className="relative">
                                    <MdMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                                    <input
                                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-[#0b50da]/20 focus:border-[#0b50da] outline-none transition-all"
                                        placeholder="Email Anda"
                                        type="email"
                                    />
                                </div>
                                <button className="w-full bg-[#0b50da] hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98]" type="button">
                                    Berlangganan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Contact Details */}
                <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-slate-50">
                    {[
                        { icon: MdCall, label: 'Telepon', value: '+62 (21) 000-0000' },
                        { icon: MdAlternateEmail, label: 'Email', value: 'hello@lumina.id' },
                        { icon: MdLocationOn, label: 'Lokasi', value: 'Jakarta, Indonesia' },
                        { icon: MdSchedule, label: 'Jam Kerja', value: 'Sen - Jum, 9am - 6pm' },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center text-[#0b50da] bg-blue-50 rounded-xl">
                                <item.icon className="text-xl" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{item.label}</p>
                                <p className="text-sm font-bold text-slate-900">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section: Sub-footer */}
                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
                    <p>© 2024 Lumina Digital. Seluruh hak cipta dilindungi.</p>
                    <div className="flex items-center gap-8">
                        <a className="hover:text-[#0b50da] transition-colors" href="#">Privasi</a>
                        <a className="hover:text-[#0b50da] transition-colors" href="#">Syarat</a>
                        <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                            <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></span>
                            <span className="text-[#10b981] text-xs font-bold tracking-tight">System Operational</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Decorative Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/40 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-[140px] pointer-events-none"></div>
        </footer>
    );
};

export default Footer;