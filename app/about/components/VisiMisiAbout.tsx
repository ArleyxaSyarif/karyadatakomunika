import React from 'react';

/**
 * Komponen Corporate Identity - Next.js Version
 * Menggunakan Tailwind CSS & Material Symbols
 */

export default function CorporatePage() {
  const stats = [
    { label: 'Client Retention', value: '98%', color: 'text-[#137fec]' },
    { label: 'Projects Done', value: '150+', color: 'text-[#22c55e]' },
    { label: 'Users Impacted', value: '12M', color: 'text-[#137fec]' },
    { label: 'Global Awards', value: '45', color: 'text-[#22c55e]' },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f6f7f8] dark:bg-[#101922] text-slate-900 dark:text-slate-100 selection:bg-blue-100">
      {/* Import Material Icons via Standard Head (Next.js Optimization) */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <main className="flex flex-col items-center justify-center py-20 px-6 lg:px-10">
        <div className="max-w-6xl w-full">
          
          {/* Header Section */}
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-[#137fec] uppercase bg-[#137fec]/10 rounded-full">
              Corporate Identity
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
              Our Purpose & <span className="text-[#137fec]">Drive</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We are committed to excellence and innovation, driving towards a sustainable future through dedicated service and clear objectives that empower global communities.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="group relative flex flex-col p-8 md:p-12 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-[#137fec]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-24 h-24 bg-[#137fec]/5 rounded-full blur-3xl group-hover:bg-[#137fec]/10 transition-colors"></div>
              </div>
              <div className="relative mb-8 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#137fec] text-white shadow-lg shadow-[#137fec]/20">
                <span className="material-symbols-outlined !text-3xl">visibility</span>
              </div>
              <div className="relative">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">Our Vision</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  To be the global leader in sustainable technology, empowering communities through innovative solutions that define the next generation of digital excellence and human connectivity.
                </p>
                <ul className="space-y-4">
                  {['Global Technological Leadership', 'Sustainable Infrastructure', 'Community Empowerment'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#22c55e] mt-0.5">check_circle</span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative flex flex-col p-8 md:p-12 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-[#22c55e]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-24 h-24 bg-[#22c55e]/5 rounded-full blur-3xl group-hover:bg-[#22c55e]/10 transition-colors"></div>
              </div>
              <div className="relative mb-8 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#22c55e] text-white shadow-lg shadow-[#22c55e]/20">
                <span className="material-symbols-outlined !text-3xl">track_changes</span>
              </div>
              <div className="relative">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  Our mission is to provide high-quality, accessible, and efficient services that exceed customer expectations while fostering a culture of continuous improvement, integrity, and social responsibility.
                </p>
                <ul className="space-y-4">
                  {['Customer-Centric Innovation', 'Operational Excellence', 'Integrity in Every Action'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#137fec] mt-0.5">verified</span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}