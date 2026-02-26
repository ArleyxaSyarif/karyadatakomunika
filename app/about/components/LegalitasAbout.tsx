"use client";

import React, { useState, useEffect } from "react";

// Data Sertifikasi untuk menghindari pengulangan kode manual
const certifications = [
  {
    id: 1,
    title: "ISO 9001:2015",
    shortDesc: "Sertifikasi Sistem Manajemen Mutu yang diakui secara internasional untuk efisiensi operasional.",
    fullDesc: "Sertifikasi ISO 9001:2015 adalah standar internasional untuk sistem manajemen mutu. Ini menunjukkan komitmen kami terhadap kepuasan pelanggan, peningkatan berkelanjutan, dan proses operasional yang efisien di seluruh organisasi.",
    imgSrc: "{{DATA:IMAGE:IMAGE_7}}",
    iconColor: "text-[#0056b3]",
    iconBg: "bg-blue-50",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Izin Operasional",
    shortDesc: "Izin resmi dari instansi terkait untuk menjalankan kegiatan bisnis secara legal dan transparan.",
    fullDesc: "Izin operasional kami dikeluarkan oleh otoritas pemerintah yang berwenang, memastikan bahwa setiap aspek bisnis kami mematuhi regulasi lokal dan standar industri yang berlaku.",
    imgSrc: "{{DATA:IMAGE:IMAGE_6}}",
    iconColor: "text-[#10b981]",
    iconBg: "bg-emerald-50",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Sertifikasi KAN",
    shortDesc: "Akreditasi dari Komite Akreditasi Nasional untuk standar kompetensi dan keandalan layanan.",
    fullDesc: "Akreditasi KAN memberikan jaminan pihak ketiga bahwa kami memiliki kompetensi teknis untuk melakukan kegiatan tertentu. Ini adalah bukti komitmen kami terhadap kualitas dan keakuratan dalam setiap proses.",
    imgSrc: "{{DATA:IMAGE:IMAGE_9}}",
    iconColor: "text-[#0056b3]",
    iconBg: "bg-blue-50",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Data Privacy Shield",
    shortDesc: "Kepatuhan penuh terhadap regulasi perlindungan data pribadi dan keamanan informasi digital.",
    fullDesc: "Perlindungan data adalah prioritas utama kami. Kami menerapkan enkripsi standar industri dan kontrol akses yang ketat untuk memastikan data pengguna tetap aman, rahasia, dan sesuai dengan regulasi global.",
    imgSrc: "{{DATA:IMAGE:IMAGE_8}}",
    iconColor: "text-[#10b981]",
    iconBg: "bg-emerald-50",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
      </svg>
    ),
  }
];

export default function LegalitasAbout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", desc: "", imgSrc: "" });

  const openModal = (title: string, desc: string, imgSrc: string) => {
    setModalContent({ title, desc, imgSrc });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Mengunci scroll background saat modal terbuka
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div className="bg-white min-h-screen antialiased">
      {/* --- Inline Styles for Custom CSS & Animations --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        .bg-pattern {
          background-image: radial-gradient(#2563eb11 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .smooth-shadow {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }
      `}} />

      {/* BEGIN: Legality Section */}
      <section className="relative py-20 overflow-hidden bg-white bg-pattern" id="legalitas-sertifikasi">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#2563eb] rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#10b981] rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* BEGIN: Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16" data-purpose="header-content">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-[#2563eb] uppercase bg-blue-50 rounded-full">
              Compliance & Safety
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Legalitas & Keamanan <span className="text-[#2563eb]">Terjamin</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Kami berkomitmen untuk menjaga standar operasional tertinggi melalui sertifikasi resmi dan kepatuhan hukum yang ketat untuk memberikan rasa aman bagi seluruh mitra kami.
            </p>
          </div>
          {/* END: Section Header */}

          {/* BEGIN: Marquee Wrapper */}
          <div className="relative w-full overflow-hidden" data-purpose="scrolling-container">
            {/* Main scrolling flexbox */}
            <div className="flex w-[200%] animate-infinite-scroll" data-purpose="card-track">

              {/* Group 1: Certification Cards */}
              <div className="flex shrink-0 items-center justify-around gap-8 px-4 w-1/2">
                {certifications.map((cert) => (
                  <div key={`group1-${cert.id}`} className="w-[350px] bg-white p-8 rounded-[24px] smooth-shadow border border-slate-50 flex flex-col items-start transition-transform hover:-translate-y-2 duration-300">
                    <img alt={cert.title} className="w-full h-32 object-cover rounded-xl mb-6 grayscale hover:grayscale-0 transition-all duration-500" src={cert.imgSrc} />
                    <div className={`w-12 h-12 mb-4 rounded-xl ${cert.iconBg} flex items-center justify-center ${cert.iconColor}`}>
                      {cert.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{cert.title}</h3>
                    <p className="text-sm text-slate-600 mb-6">{cert.shortDesc}</p>
                    <button
                      className="w-full py-3 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                      onClick={() => openModal(cert.title, cert.fullDesc, cert.imgSrc)}
                    >
                      View Certificate
                    </button>
                  </div>
                ))}
              </div>

              {/* Group 2: Duplicate for seamless loop */}
              <div aria-hidden="true" className="flex shrink-0 items-center justify-around gap-8 px-4 w-1/2">
                {certifications.map((cert) => (
                  <div key={`group2-${cert.id}`} className="w-[350px] bg-white p-8 rounded-[24px] smooth-shadow border border-slate-50 flex flex-col items-start transition-transform hover:-translate-y-2 duration-300">
                    <img alt={cert.title} className="w-full h-32 object-cover rounded-xl mb-6 grayscale hover:grayscale-0 transition-all duration-500" src={cert.imgSrc} />
                    <div className={`w-12 h-12 mb-4 rounded-xl ${cert.iconBg} flex items-center justify-center ${cert.iconColor}`}>
                      {cert.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{cert.title}</h3>
                    <p className="text-sm text-slate-600 mb-6">{cert.shortDesc}</p>
                    <button
                      className="w-full py-3 bg-[#2563eb] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                      onClick={() => openModal(cert.title, cert.fullDesc, cert.imgSrc)}
                    >
                      View Certificate
                    </button>
                  </div>
                ))}
              </div>

            </div>

            {/* Gradient Overlays for Fade Effect on Edges */}
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>
          {/* END: Marquee Wrapper */}
        </div>
      </section>
      {/* END: Legality Section */}

      {/* BEGIN: Modal Structure */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" id="certModal">
          <div className="bg-white rounded-[24px] max-w-lg w-full overflow-hidden smooth-shadow transform transition-all animate-in zoom-in-95 duration-200">
            <div className="p-6 flex justify-between items-center border-b border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900">{modalContent.title}</h2>
              <button className="text-slate-400 hover:text-slate-600 transition-colors" onClick={closeModal}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-6">
              <img className="w-full h-56 object-contain rounded-2xl mb-6 bg-slate-50" src={modalContent.imgSrc} alt={modalContent.title} />
              <p className="text-slate-600 leading-relaxed">{modalContent.desc}</p>
            </div>
            <div className="p-6 border-t border-slate-100 text-right">
              <button
                className="px-8 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors active:scale-95"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* END: Modal Structure */}
    </div>
  );
}
