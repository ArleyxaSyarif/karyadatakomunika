import React from 'react';

// Data untuk Statistik
const stats = [
  { label: 'Tahun Pengalaman', value: '10+', growth: '+2 Unit' },
  { label: 'Proyek Selesai', value: '250+', growth: '+12%' },
  { label: 'Karbon Tereduksi', value: '15k', growth: 'Ton' },
];

// Data untuk Area Fokus
const focusAreas = [
  {
    icon: 'wb_sunny',
    title: 'Energi Terbarukan',
    desc: 'Solusi tenaga surya modern untuk kebutuhan industri dan rumah tangga.',
  },
  {
    icon: 'agriculture',
    title: 'Pertanian Pintar',
    desc: 'Optimasi lahan berkelanjutan menggunakan teknologi sensor presisi.',
  },
  {
    icon: 'water_drop',
    title: 'Konservasi Air',
    desc: 'Sistem filtrasi dan daur ulang air cerdas untuk masa depan.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-green-100">
      {/* Import Material Symbols Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <section className="relative pt-8 pb-16 px-4 md:px-8 lg:px-40 overflow-hidden font-['Public_Sans',sans-serif]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Content Side */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider bg-[#16a34a]/10 text-[#16a34a]">
                  <span className="material-symbols-outlined text-sm">eco</span>
                  Tentang Kami
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                  Dedikasi Untuk <span className="text-[#2563eb]">Masa Depan Hijau</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed opacity-90 font-light">
                  Kami adalah pelopor dalam solusi teknologi berkelanjutan yang berfokus pada pelestarian ekosistem bumi.
                  Dimulai sejak satu dekade lalu, misi kami adalah menghadirkan inovasi hijau yang membantu masyarakat
                  hidup selaras dengan alam melalui efisiensi energi dan pengurangan jejak karbon secara signifikan.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-2 rounded-2xl p-6 bg-white/70 backdrop-blur-md shadow-sm border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#16a34a]/30 group">
                    <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-[#16a34a]">{stat.value}</p>
                      <span className="text-xs font-bold text-[#16a34a]/80">{stat.growth}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="bg-[#2563eb] hover:bg-[#2563eb]/90 text-white px-8 py-3.5 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-[#2563eb]/20">
                  Pelajari Selengkapnya
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full max-w-[540px]">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl group bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600"
                      alt="Forest"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden aspect-square shadow-xl group bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600"
                      alt="Solar Panels"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl overflow-hidden aspect-square shadow-xl group bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=600"
                      alt="Urban Farm"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl group bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1466611653911-954ffea113ad?auto=format&fit=crop&q=80&w=600"
                      alt="Wind Turbines"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Areas Sub-section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:border-[#16a34a]/20 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-[#16a34a]/10 text-[#16a34a]">
                  <span className="material-symbols-outlined">{area.icon}</span>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold mb-1">{area.title}</h4>
                  <p className="text-slate-500 text-sm">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative backgrounds */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#2563eb]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#16a34a]/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      </section>
    </div>
  );
}
