import Image from 'next/image';

export default function ContactMap() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                {/* Map Background */}
                <div className="absolute inset-0 bg-slate-200">
                    <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000" // Contoh gambar map statis atau gunakan provider map
                        alt="Peta Lokasi Jakarta"
                        className="w-full h-full object-cover grayscale opacity-80"
                    />
                </div>

                {/* Custom Marker Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="bg-[#135bec] text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
                        <span className="material-symbols-outlined text-3xl">corporate_fare</span>
                        <div className="pr-2 text-left">
                            <p className="text-xs font-bold uppercase tracking-tighter opacity-70">Kantor Utama</p>
                            <p className="font-bold whitespace-nowrap">Premium Biz HQ</p>
                        </div>
                    </div>
                    <div className="w-4 h-4 bg-[#135bec] rounded-full mt-2 ring-8 ring-[#135bec]/20"></div>
                </div>

                {/* Info Box */}
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-slate-200 flex items-center gap-4 max-w-xs hidden md:flex">
                    <span className="material-symbols-outlined text-[#135bec]">directions</span>
                    <p className="text-sm text-slate-600 font-medium">
                        Hanya 5 menit jalan kaki dari Stasiun MRT Istora Mandiri
                    </p>
                </div>
            </div>
        </section>
    );
}