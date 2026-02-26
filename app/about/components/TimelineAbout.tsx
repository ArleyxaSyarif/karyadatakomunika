"use client";

import React from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

export default function TimelineAbout() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{
        __html: `
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.05);
        }
        .timeline-line {
          background: linear-gradient(180deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.2) 15%, rgba(37,99,235,0.2) 85%, rgba(37,99,235,0) 100%);
        }
      `}} />

      <div className={`bg-white text-slate-900 ${manrope.className} antialiased`}>
        <section className="flex flex-col items-center w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-3xl"></div>
          </div>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 border border-blue-100">
              Our Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Evolusi & <span className="text-blue-600 bg-clip-text">Pencapaian Kami</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Menelusuri jejak inovasi dan pertumbuhan kami. Setiap tonggak sejarah mewakili lompatan besar dalam misi kami untuk memberikan solusi terbaik bagi mitra.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            {/* Center line (Desktop) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] timeline-line hidden md:block"></div>

            {/* Timeline Item 1: 2014 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group w-full">
              <div className="w-full md:w-[45%] mb-8 md:mb-0 md:pr-12 md:text-right">
                <div className="glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-blue-600/30 md:border-l-0 md:border-r-4 md:border-r-blue-600/30 group-hover:border-blue-600 group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4 md:flex-row-reverse md:justify-start">
                    <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                      <span className="material-symbols-outlined text-xl">rocket_launch</span>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-widest">2014</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Awal Pendirian</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Memulai perjalanan dengan visi sederhana namun kuat: menyediakan infrastruktur komunikasi yang handal dan terjangkau di seluruh wilayah Indonesia.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 hidden md:block group-hover:scale-150 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"></div>
              <div className="w-full md:w-[45%] pl-12 hidden md:block"></div>
            </div>

            {/* Timeline Item 2: 2017 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group w-full">
              <div className="w-full md:w-[45%] pr-12 hidden md:block"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 hidden md:block group-hover:scale-150 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"></div>
              <div className="w-full md:w-[45%] mb-8 md:mb-0 md:pl-12">
                <div className="glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-blue-600/30 group-hover:border-blue-600 group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
                      <span className="material-symbols-outlined text-xl">hub</span>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-widest">2017</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Ekspansi Jaringan Wilayah</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Berhasil menjangkau 50+ titik Point of Presence (PoP) di wilayah Sumatera dan Jawa, memperluas cakupan layanan broadband kami.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3: 2020 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group w-full">
              <div className="w-full md:w-[45%] mb-8 md:mb-0 md:pr-12 md:text-right">
                <div className="glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-blue-600/30 md:border-l-0 md:border-r-4 md:border-r-blue-600/30 group-hover:border-blue-600 group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4 md:flex-row-reverse md:justify-start">
                    <div className="p-2.5 bg-cyan-50 rounded-xl text-blue-500">
                      <span className="material-symbols-outlined text-xl">language</span>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-widest">2020</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Transformasi Digital</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Mengadopsi teknologi Fiber Optik terbaru dan memperkuat sistem otomasi operasional untuk pelayanan yang lebih cepat kepada seluruh pelanggan.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 hidden md:block group-hover:scale-150 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"></div>
              <div className="w-full md:w-[45%] pl-12 hidden md:block"></div>
            </div>

            {/* Timeline Item 4: 2022 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 group w-full">
              <div className="w-full md:w-[45%] pr-12 hidden md:block"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10 hidden md:block group-hover:scale-150 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]"></div>
              <div className="w-full md:w-[45%] mb-8 md:mb-0 md:pl-12">
                <div className="glass-card p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border-l-4 border-l-emerald-500/40 group-hover:border-emerald-500 group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                      <span className="material-symbols-outlined text-xl">shield_check</span>
                    </div>
                    <span className="text-sm font-black text-emerald-600 tracking-widest">2022</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Sertifikasi & Kepatuhan</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Mendapatkan sertifikasi ISO standar nasional dan internasional dalam manajemen layanan TI (ITSM) untuk jaminan kualitas tingkat tinggi.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 5: Current */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-8 group w-full">
              <div className="w-full md:w-[45%] mb-8 md:mb-0 md:pr-12 md:text-right">
                <div className="glass-card p-10 rounded-3xl shadow-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30 relative overflow-hidden group-hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-5 md:flex-row-reverse md:justify-start">
                      <div className="p-3 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-500/30 animate-bounce-slow">
                        <span className="material-symbols-outlined text-2xl">trophy</span>
                      </div>
                      <div className="flex flex-col md:items-end">
                        <span className="text-xs font-black text-emerald-600 tracking-widest uppercase">Pencapaian Kini</span>
                        <span className="text-lg font-black text-slate-900 leading-none">2024</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">Pemimpin Pasar Infrastruktur</h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      Kini memiliki 150+ PoP di seluruh Indonesia, melayani lebih dari 1000+ klien korporasi dengan uptime 99.9%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                <div className="w-5 h-5 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="absolute w-10 h-10 bg-emerald-500/20 rounded-full animate-ping"></div>
                <div className="absolute w-20 h-20 bg-emerald-500/5 rounded-full animate-pulse"></div>
              </div>
              <div className="w-full md:w-[45%] pl-12 hidden md:block"></div>
            </div>

            {/* Bottom dot */}
            <div className="hidden md:flex justify-center mt-12">
              <div className="w-3 h-3 rounded-full bg-slate-200 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Global Styles for bounce animation */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite ease-in-out;
          }
        `}} />
      </div>
    </>
  );
}
