"use client";

import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Data Array untuk Komisaris agar kode tidak berulang panjang
const commissioners = [
  {
    name: "Michael Ross",
    role: "President Commissioner",
    desc: "Ensuring the company adheres to the highest standards of governance and compliance.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW2Uz0rrYli-Ixjsk2yye5hvOhaWXunumSn_T-sWS0VDF11El1cMXO1VwWxIzhzwYwqdL4u4H4LfksC99-xtOWNxT6G5EwkYhn0Z4G4pvNQbzdYqPkz08Q2-cU_EnVkLRy8J3VIKm0lVe6aZY8VdjG-NrQURMmLMPe5Scc__xWNG7bHvgzTtzXlwsVCO4NRUkjFrx7SeuhzKZIG7S7R4nkNyWg3HzieBrgVinuQ9ylCCQ6fYMhnRPEmYqf8xaFkha5aTMiMLHglrl6",
  },
  {
    name: "Dr. Aminah Sato",
    role: "Independent Commissioner",
    desc: "Providing objective oversight and guidance on ESG initiatives and stakeholder relations.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM3PqrLvreLp8ims3U_pguEL5JvUZSvRgVHy6OGtEa2Rqfv8nk3A0JW3tIEB0W-FSEG-G5t1f_3jF_Ug-m17nEwORNNhaIlnQJQyWzTJv5VV7Z6O7hojQwhrvAbHozFlLaRwyuzmjLlN-azcFRMGBoHULJcFwMMW7rPWzaTxcZznAzNB_8W5ym0EvJYKMODAEClm1sd_qGw8qUPAMCpTuV8Fxu1byT4q8Yq558tes8UsDOMp-t7wDK8L5e4q41mD4YUCJ75-022WW4",
  },
  {
    name: "James Sterling",
    role: "Commissioner",
    desc: "Advising on global market expansion and investment strategies for sustainable growth.",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2iva4ensc-FedfKuCbC7-WGpKADIwiYvEbGQH8yXNCx7noNVEIB6-x5RL9S1uEiSZ4TVFcsosDUu_hl6tXfFV68o480G4Q3PWYN71RSbwZITp9kdkybP3MomgXS5IdWABmfI0ZCDyDrdl5kV90OlajxMKtWE6knBbVKY8uT7NsDrsfLwiXQjbQ1ZjMhIQ5z2ALTDspgehQ34TIjLwQtsAQac9rr0AhYTKHG5KG-RnEX6cW3f3M3TA2DAqakHN091jvk-Ct41-cHpO",
  },
  {
    name: "Sophia Laurent",
    role: "Commissioner",
    desc: "Overseeing audit committees and internal controls to maintain fiscal discipline.",
    imgSrc: null, // Menggunakan icon placeholder
  },
  {
    name: "Robert Wu",
    role: "Independent Commissioner",
    desc: "Bringing expertise in digital transformation and cybersecurity governance.",
    imgSrc: null, // Menggunakan icon placeholder
  },
];

export default function LeadershipSection() {
  return (
    <>
      {/* Memuat ikon Material Symbols */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      {/* CSS Kustom (Pattern, Animasi, Scrollbar, Masking) */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .pattern-bg {
          background-color: #ffffff;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); } 
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
      `}} />

      <div className={`${inter.className} bg-white text-slate-900 pattern-bg min-h-screen w-full flex-col overflow-x-hidden flex`}>
        <main className="layout-container flex grow flex-col pt-10">

          {/* Header Section */}
          <section className="flex flex-col items-center justify-center px-6 py-20 text-center lg:px-40">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2563eb] ring-1 ring-inset ring-blue-100">
              <span className="h-2 w-2 rounded-full bg-[#10b981]"></span>
              Our Governance
            </div>
            <h1 className="mb-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Visionary Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-blue-400">Guiding Our Future</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-600">
              Meet the Board of Directors and Commissioners dedicated to sustainable growth, innovation, and corporate integrity.
            </p>
          </section>

          <div className="mx-auto w-full max-w-[1200px] px-6 pb-24">

            {/* Board of Directors Title */}
            <div className="mb-12 flex items-center gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Board of Directors</h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#10b981] to-transparent opacity-50"></div>
            </div>

            {/* Board of Directors Cards */}
            <div className="flex flex-col gap-12">
              {/* CEO: Sarah Jenkins */}
              <div className="group relative overflow-hidden rounded-3xl bg-white p-2 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl md:h-auto md:w-1/3 lg:w-[320px]">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                    <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600')" }}></div>
                    <div className="absolute bottom-4 left-4 z-20 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a className="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-[#2563eb]" href="#">
                        <span className="material-symbols-outlined text-sm">mail</span>
                      </a>
                      <a className="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-[#2563eb]" href="#">
                        <span className="material-symbols-outlined text-sm">link</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-center px-4 pb-6 md:py-8 md:pr-10">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">Sarah Jenkins</h3>
                        <p className="text-[#2563eb] font-medium">Chief Executive Officer</p>
                      </div>
                      <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#2563eb] sm:flex">
                        <span className="material-symbols-outlined">verified</span>
                      </div>
                    </div>
                    <p className="mb-6 text-base leading-relaxed text-slate-600">
                      Sarah has over 20 years of experience in the technology sector, leading major transformations at Fortune 500 companies. Her strategic vision focuses on sustainable innovation and fostering a culture of excellence.
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                      <div className="flex gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px] text-[#10b981]">check_circle</span> Leadership</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px] text-[#10b981]">check_circle</span> Strategy</span>
                      </div>
                      <button className="group/btn flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-[#2563eb]">
                        Read Bio <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTO: David Chen (Reverse Layout) */}
              <div className="group relative overflow-hidden rounded-3xl bg-white p-2 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex flex-col gap-8 md:flex-row-reverse">
                  <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl md:h-auto md:w-1/3 lg:w-[320px]">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                    <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600')" }}></div>
                    <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a className="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-[#2563eb]" href="#">
                        <span className="material-symbols-outlined text-sm">mail</span>
                      </a>
                      <a className="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-[#2563eb]" href="#">
                        <span className="material-symbols-outlined text-sm">link</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-center px-4 pb-6 md:py-8 md:pl-10 text-right md:text-right">
                    <div className="mb-4 flex flex-row-reverse items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">David Chen</h3>
                        <p className="text-[#2563eb] font-medium">Chief Technology Officer</p>
                      </div>
                      <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#2563eb] sm:flex">
                        <span className="material-symbols-outlined">code</span>
                      </div>
                    </div>
                    <p className="mb-6 text-base leading-relaxed text-slate-600 md:ml-auto">
                      David architects the technological roadmap for Corporate Co. With a background in AI and cloud infrastructure, he ensures our digital assets remain cutting-edge and secure.
                    </p>
                    <div className="mt-auto flex flex-row-reverse items-center justify-between border-t border-slate-100 pt-6">
                      <div className="flex gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">Tech <span className="material-symbols-outlined text-[18px] text-[#10b981]">check_circle</span></span>
                        <span className="flex items-center gap-1">R&D <span className="material-symbols-outlined text-[18px] text-[#10b981]">check_circle</span></span>
                      </div>
                      <button className="group/btn flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-[#2563eb] flex-row-reverse">
                        Read Bio <span className="material-symbols-outlined transition-transform group-hover/btn:-translate-x-1 rotate-180">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CFO: Elena Rodriguez */}
              <div className="group relative overflow-hidden rounded-3xl bg-white p-2 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl md:h-auto md:w-1/3 lg:w-[320px]">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                    <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600')" }}></div>
                    <div className="absolute bottom-4 left-4 z-20 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a className="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-[#2563eb]" href="#">
                        <span className="material-symbols-outlined text-sm">mail</span>
                      </a>
                      <a className="flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md hover:bg-white hover:text-[#2563eb]" href="#">
                        <span className="material-symbols-outlined text-sm">link</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-center px-4 pb-6 md:py-8 md:pr-10">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">Elena Rodriguez</h3>
                        <p className="text-[#2563eb] font-medium">Chief Financial Officer</p>
                      </div>
                      <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#2563eb] sm:flex">
                        <span className="material-symbols-outlined">trending_up</span>
                      </div>
                    </div>
                    <p className="mb-6 text-base leading-relaxed text-slate-600">
                      Elena brings a disciplined approach to financial planning and risk management. She oversees the company's fiscal health and drives long-term value creation for our shareholders.
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                      <div className="flex gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px] text-[#10b981]">check_circle</span> Finance</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px] text-[#10b981]">check_circle</span> Audit</span>
                      </div>
                      <button className="group/btn flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-[#2563eb]">
                        Read Bio <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Board of Commissioners Title */}
            <div className="mt-24 mb-12 flex items-center gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Board of Commissioners</h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#10b981] to-transparent opacity-50"></div>
            </div>

            {/* Infinite Scroll Commissioners Wrapper */}
            <div className="relative w-full overflow-hidden mask-linear-fade">
              <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] py-4">

                {/* Looping 2x untuk menciptakan efek infinite scroll yang mulus */}
                {[...commissioners, ...commissioners].map((person, index) => (
                  <div key={index} className="w-[300px] shrink-0 px-3">
                    <div className="group h-full rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl hover:ring-[#2563eb]/20">
                      <div className="mb-4 flex items-center gap-4">

                        {/* Avatar Image atau Placeholder Icon */}
                        {person.imgSrc ? (
                          <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-white shadow-md">
                            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${person.imgSrc}')` }}></div>
                          </div>
                        ) : (
                          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-slate-100 ring-2 ring-white shadow-md">
                            <span className="material-symbols-outlined text-3xl text-slate-400">person</span>
                          </div>
                        )}

                        <div>
                          <h4 className="text-lg font-bold text-slate-900">{person.name}</h4>
                          <p className="text-sm text-slate-500">{person.role}</p>
                        </div>
                      </div>

                      <p className="mb-4 text-sm text-slate-600">
                        {person.desc}
                      </p>

                      <a className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#2563eb] hover:text-[#0b5cb5]" href="#">
                        View Profile <span className="material-symbols-outlined ml-1 text-base">arrow_right_alt</span>
                      </a>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </main>


      </div>
    </>
  );
}
