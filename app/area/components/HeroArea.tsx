import Image from "next/image";

export default function HeroArea() {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 bg-white">
            <div className="flex flex-col gap-12 py-12 md:py-24 lg:flex-row lg:items-center">

                {/* Left Content */}
                <div className="flex flex-col gap-8 lg:w-1/2">
                    <div className="flex flex-col gap-4">
                        {/* Badge Promo */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider w-fit">
                            <span className="material-symbols-outlined text-sm">bolt</span>
                            Ultra-Fast 5G Now Live
                        </div>

                        {/* Judul Utama */}
                        <h1 className="text-slate-900 text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
                            Experience High-Speed <span className="text-blue-700">Connectivity</span> Nationwide
                        </h1>

                        {/* Deskripsi */}
                        <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
                            Reliable, lightning-fast internet and mobile services designed to keep you connected to what matters most, anywhere in the country.
                        </p>
                    </div>

                    {/* Button Group */}
                    <div className="flex flex-wrap gap-4">
                        <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-blue-700 text-white text-base font-bold shadow-xl shadow-blue-700/30 hover:scale-[1.02] transition-transform">
                            Check Availability
                        </button>
                        <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-slate-100 text-slate-900 text-base font-bold border border-slate-200 hover:bg-slate-200 transition-colors">
                            Learn More
                        </button>
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center gap-6 pt-4">
                        <div className="flex -space-x-3">
                            {[0, 1, 2].map((i) => (
                                <div key={i} className="relative h-10 w-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                                    <Image
                                        src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072`}
                                        alt="User profile"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm">
                            <p className="font-bold text-slate-900">2.5M+ Users</p>
                            <p className="text-slate-500">Trusted nationwide coverage</p>
                        </div>
                    </div>
                </div>

                {/* Right Illustration */}
                <div className="lg:w-1/2 relative">
                    {/* Decorative Blobs */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-700/5 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>

                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                            alt="Modern workspace"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

                        {/* Floating Status Card */}
                        <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-700 rounded-lg text-white">
                                    <span className="material-symbols-outlined">signal_cellular_alt</span>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg">99.9% Network Uptime</p>
                                    <p className="text-white/90 text-sm">Enterprise-grade reliability for everyone.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}