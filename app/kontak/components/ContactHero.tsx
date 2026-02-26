export default function ContactHero() {
    return (
        <section className="relative pt-32 pb-32 overflow-hidden">
            {/* Mesh Gradient Background */}
            <div
                className="absolute top-0 left-0 w-full h-[500px] opacity-10 -z-10"
                style={{
                    backgroundColor: "#135bec",
                    backgroundImage: `
            radial-gradient(at 0% 0%, hsla(222,84%,60%,1) 0, transparent 50%), 
            radial-gradient(at 50% 0%, hsla(160,84%,39%,1) 0, transparent 50%), 
            radial-gradient(at 100% 0%, hsla(222,84%,60%,1) 0, transparent 50%)
          `
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Badge Status */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#135bec]/10 text-[#135bec] text-sm font-bold mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#135bec] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#135bec]"></span>
                    </span>
                    Tersedia 24/7 untuk Anda
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
                    Hubungi <span className="text-blue-600 bg-clip-text">Tim Ahli</span> Kami
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Kami siap membantu mentransformasi bisnis Anda dengan solusi digital premium. Konsultasikan kebutuhan Anda hari ini dengan para spesialis kami.
                </p>
            </div>
        </section>
    );
}