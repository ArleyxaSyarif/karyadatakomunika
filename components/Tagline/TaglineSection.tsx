export default function TaglineSection() {
    return (
        <section className="relative overflow-hidden bg-white py-20 px-6 md:py-24">
            {/* Background Decor - Dibuat sangat tipis agar fokus tetap pada teks solid */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-50"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-50"></div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 bg-slate-50 border border-slate-100 rounded-full">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                        KDK Innovation Hub
                    </span>
                </div>

                {/* Headline Utama - Warna Solid Tanpa Gradient */}
                <h1 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                    Membangun <span className="text-blue-600">Teknologi</span>, <br />
                    Mendorong <span className="text-emerald-500 italic">Pertumbuhan</span>.
                </h1>

                {/* Sub-tagline */}
                <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    KDK menghadirkan sinergi antara infrastruktur digital yang kokoh dan
                    konektivitas tanpa batas untuk mengakselerasi ekosistem masa depan.
                </p>

                {/* Tombol Aksi (CTA) */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
                    {/* Biru Solid */}
                    <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-200/50">
                        Jelajahi Solusi
                    </button>
                    {/* Hijau Emerald Solid */}
                    <button className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-semibold rounded-xl transition-all">
                        Hubungkan Bisnis
                    </button>
                </div>


            </div>
        </section>
    );
}