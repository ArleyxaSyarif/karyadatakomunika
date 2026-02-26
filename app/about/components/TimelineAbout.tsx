"use client";

import React from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "700", "800"] });

export default function TimelineSection() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{
        __html: `
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        .dark .glass-card {
           background: rgba(30, 41, 59, 0.6);
           border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .timeline-line {
          background: linear-gradient(180deg, rgba(19,91,236,0) 0%, rgba(19,91,236,0.3) 15%, rgba(19,91,236,0.3) 85%, rgba(19,91,236,0) 100%);
        }
      `}} />

      <div className={`bg-[#f6f6f8] dark:bg-[#101622] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col justify-center ${manrope.className} antialiased`}>
        <main className="flex-grow flex flex-col items-center w-full py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#135bec]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#10b981]/5 rounded-full blur-3xl"></div>
          </div>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#135bec]/10 text-[#135bec] text-xs font-bold tracking-wider uppercase mb-4 border border-[#135bec]/20">
              Our History
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              From Garage to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-[#10b981]">Global Leader</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Tracing our path of innovation and growth. Every milestone represents a leap forward in our mission to reshape the industry.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            {/* Center line (Desktop) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] timeline-line hidden md:block"></div>

            {/* Timeline Item 1: 2010 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group w-full">
              <div className="w-full md:w-[45%] mb-8 md:mb-0 md:pr-8 md:text-right">
                <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#135bec]/30 md:border-l-0 md:border-r-4 md:border-r-[#135bec]/30">
                  <div className="flex items-center gap-3 mb-3 md:flex-row-reverse md:justify-start">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-[#135bec]">
                      <span className="material-symbols-outlined">lightbulb</span>
                    </div>
                    <span className="text-sm font-bold text-[#135bec] tracking-widest">2010</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Founded in Garage</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Two engineers, one vision. Started with a single laptop and a disruptive idea to change how data is processed.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-[#135bec] rounded-full z-10 hidden md:block group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(19,91,236,0.5)]"></div>
              <div className="w-full md:w-[45%] pl-8 hidden md:block"></div>
            </div>

            {/* Timeline Item 2: 2013 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group w-full">
              <div className="w-full md:w-[45%] pr-8 hidden md:block"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-[#135bec] rounded-full z-10 hidden md:block group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(19,91,236,0.5)]"></div>
              <div className="w-full md:w-[45%] mb-8 md:mb-0 md:pl-8">
                <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#135bec]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600">
                      <span className="material-symbols-outlined">rocket_launch</span>
                    </div>
                    <span className="text-sm font-bold text-[#135bec] tracking-widest">2013</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">First Major Launch</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Launched our flagship SaaS product &quot;NexusOne&quot;, acquiring over 10,000 users in the first month.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3: 2016 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group w-full">
              <div className="w-full md:w-[45%] mb-8 md:mb-0 md:pr-8 md:text-right">
                <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#135bec]/30 md:border-l-0 md:border-r-4 md:border-r-[#135bec]/30">
                  <div className="flex items-center gap-3 mb-3 md:flex-row-reverse md:justify-start">
                    <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600">
                      <span className="material-symbols-outlined">public</span>
                    </div>
                    <span className="text-sm font-bold text-[#135bec] tracking-widest">2016</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">International Expansion</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Opened offices in London and Singapore. Our team grew to 200 employees across 3 continents.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-[#135bec] rounded-full z-10 hidden md:block group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(19,91,236,0.5)]"></div>
              <div className="w-full md:w-[45%] pl-8 hidden md:block"></div>
            </div>

            {/* Timeline Item 4: 2020 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group w-full">
              <div className="w-full md:w-[45%] pr-8 hidden md:block"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-[#135bec] rounded-full z-10 hidden md:block group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(19,91,236,0.5)]"></div>
              <div className="w-full md:w-[45%] mb-8 md:mb-0 md:pl-8">
                <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border-l-4 border-l-[#10b981]/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-[#10b981]">
                      <span className="material-symbols-outlined">eco</span>
                    </div>
                    <span className="text-sm font-bold text-[#10b981] tracking-widest">2020</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sustainability Initiative</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Committed to 100% renewable energy for all data centers. Launched the &quot;Green Code&quot; program.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 5: Current */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-4 group w-full">
              <div className="w-full md:w-[45%] mb-8 md:mb-0 md:pr-8 md:text-right">
                <div className="glass-card p-8 rounded-2xl shadow-xl border border-[#10b981]/20 bg-gradient-to-br from-white to-emerald-50 dark:from-slate-800 dark:to-emerald-900/20 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#10b981]/10 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4 md:flex-row-reverse md:justify-start">
                      <div className="p-2 bg-[#10b981] text-white rounded-lg shadow-lg shadow-[#10b981]/30">
                        <span className="material-symbols-outlined">trophy</span>
                      </div>
                      <div className="flex flex-col md:items-end">
                        <span className="text-sm font-bold text-[#10b981] tracking-widest uppercase">Current</span>
                        <span className="text-xs font-semibold text-slate-400">2024</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">Global Market Leader</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                      Recognized as the #1 provider in our sector. Serving 5M+ users with a focus on AI-driven analytics.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                <div className="w-4 h-4 bg-[#10b981] rounded-full"></div>
                <div className="absolute w-8 h-8 bg-[#10b981]/30 rounded-full animate-ping"></div>
                <div className="absolute w-16 h-16 bg-[#10b981]/10 rounded-full animate-pulse"></div>
              </div>
              <div className="w-full md:w-[45%] pl-8 hidden md:block"></div>
            </div>

            {/* Bottom dot */}
            <div className="hidden md:flex justify-center mt-6">
              <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}