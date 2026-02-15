"use client";

const HeroSection = () => {
    return (
        <main className="relative flex min-h-screen w-full flex-col items-center pt-20 bg-hero-bg overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-[rgba(18,18,18,0.9)] via-[rgba(18,18,18,0.9)] to-[rgba(18,18,18,0.4)]"></div>
                <img
                    alt="BuildCorp Architecture"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzmx0-Q1qy7AnCalDjhkYxV1G40wkHbt1sl9-fLXB4k5nhFR9TViLPiMTkfTkvUkzWvXBHvYGLj8OH4F8DTzDniRIBMOO6Z4txfNiSgZUBtpicQKI9J8kxQF7WcnBXYCwpV7Hv1JQ3z9MJ0DDARzqLPNAi1-TH07US21EmswSH9OIQ2uwLAEhAH9mhoNqfwY8K7W0J5acTa-FO2FS-t3nZvlzfzb5nF-xkhHhFr0ZahSDINWi6qJNRMz2M6yVlG5sgsnTxzwRqduw"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-20 flex flex-1 items-center w-full max-w-7xl px-6 py-20 lg:px-10">
                <div className="max-w-3xl">
                    {/* Accent Label */}
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-12 bg-primary"></span>
                        <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase font-display">
                            Innovation & Excellence
                        </span>
                    </div>
                    {/* Headline */}
                    <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl font-display">
                        Membangun Masa Depan <br />
                        <span className="text-primary">Yang Lebih Baik</span>
                    </h1>
                    {/* Subheadline */}
                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl font-display">
                        Solusi konstruksi kelas dunia yang menggabungkan inovasi, keberlanjutan, dan presisi arsitektur untuk mewujudkan visi Anda menjadi kenyataan yang kokoh.
                    </p>
                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="group flex min-w-[180px] items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-background-dark transition-all hover:scale-105 active:scale-95 font-display">
                            Lihat Proyek Kami
                            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </button>
                        <button className="min-w-[180px] rounded-lg border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 active:scale-95 font-display">
                            Pelajari Lebih Lanjut
                        </button>
                    </div>
                    {/* Statistics / Trust Badges */}
                    <div className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-10">
                        <div>
                            <p className="text-3xl font-bold text-white font-display">500+</p>
                            <p className="text-sm font-medium text-white/50 uppercase tracking-wider font-display">
                                Proyek Selesai
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white font-display">25+</p>
                            <p className="text-sm font-medium text-white/50 uppercase tracking-wider font-display">
                                Tahun Pengalaman
                            </p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-white font-display">40+</p>
                            <p className="text-sm font-medium text-white/50 uppercase tracking-wider font-display">
                                Arsitek Ahli
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
                <div className="flex flex-col items-center gap-2 opacity-50">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white font-display">
                        Scroll
                    </span>
                    <div className="h-12 w-[2px] bg-gradient-to-b from-primary to-transparent"></div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;
