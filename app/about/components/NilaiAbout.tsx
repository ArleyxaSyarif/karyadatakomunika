import React from 'react';

// Data Nilai Perusahaan agar kode lebih bersih
const companyValues = [
  {
    title: 'Integritas',
    desc: 'Menjunjung tinggi kejujuran, transparansi, dan standar etika tertinggi dalam setiap keputusan dan tindakan yang kami ambil.',
    icon: 'gavel',
    color: 'primary', // Mengacu pada config tailwind
  },
  {
    title: 'Inovasi',
    desc: 'Terus mencari solusi kreatif dan mengadopsi teknologi terbaru untuk menjawab tantangan masa depan yang dinamis.',
    icon: 'lightbulb',
    color: 'secondary',
  },
  {
    title: 'Kerja Tim',
    desc: 'Berkolaborasi secara harmonis, menghargai keberagaman pendapat, dan saling mendukung untuk mencapai tujuan bersama.',
    icon: 'groups',
    color: 'primary',
  },
  {
    title: 'Keunggulan',
    desc: 'Berdedikasi untuk memberikan hasil terbaik melampaui ekspektasi melalui proses yang terukur dan berkualitas tinggi.',
    icon: 'workspace_premium',
    color: 'secondary',
  },
];

export default function NilaiAbout() {
  return (
    <div className="min-h-screen bg-[#f5f7f8] text-slate-900 selection:bg-blue-100">
      {/* Import Material Symbols Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <main className="px-6 py-32">
        <div className="max-w-7xl mx-auto">

          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0056b2]/10 text-[#0056b2] mb-4">
              <span className="material-symbols-outlined text-lg">verified</span>
              <span className="text-xs font-bold tracking-widest uppercase">Eksplorasi Budaya</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Nilai-Nilai <span className='text-blue-600'> Perusahaan Kami</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Kami berkomitmen untuk memberikan standar tertinggi dalam setiap aspek operasional kami melalui prinsip-prinsip utama yang membentuk identitas kami.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((item, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 transition-all hover:-translate-y-1 hover:border-${item.color === 'primary' ? '[#0056b2]' : '[#28a745]'}/30`}
              >
                <div className={`size-14 rounded-full flex items-center justify-center mb-6 transition-colors 
                  ${item.color === 'primary'
                    ? 'bg-[#0056b2]/10 text-[#0056b2] group-hover:bg-[#0056b2] group-hover:text-white'
                    : 'bg-[#28a745]/10 text-[#28a745] group-hover:bg-[#28a745] group-hover:text-white'}`}
                >
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className={`mt-6 h-1 w-12 transition-all duration-500 rounded-full group-hover:w-full
                  ${item.color === 'primary' ? 'bg-[#0056b2]/20' : 'bg-[#28a745]/20'}`}
                ></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 p-12 bg-gradient-to-r from-[#0056b2] to-[#0056b2]/80 rounded-xl relative overflow-hidden shadow-2xl shadow-[#0056b2]/30">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white max-w-xl">
                <h2 className="text-3xl font-bold mb-4">Ingin tahu lebih banyak tentang kami?</h2>
                <p className="opacity-90 text-lg leading-relaxed">
                  Unduh profil perusahaan lengkap kami untuk memahami visi jangka panjang dan misi strategis kami.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#0056b2] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined">download</span>
                  Profil Perusahaan
                </button>
              </div>
            </div>

            {/* Abstract Pattern Decoration */}
            <div className="absolute -right-10 -top-10 opacity-10 text-white">
              <span className="material-symbols-outlined text-[200px]">hub</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
