export default function ContactMap() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">

                {/* Layer 1: Iframe dengan pointer-events-none agar tidak bisa digerakkan */}
                <div className="absolute inset-0 grayscale contrast-125 opacity-90 pointer-events-none">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9987.470545847356!2d106.76408449532613!3d-6.580772004982667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c4ff2d5ecf4b%3A0x9da488eab0064996!2sSMK%20informatika%20Pesat%20Kota%20Bogor!5e0!3m2!1sen!2ssg!4v1772087042668!5m2!1sen!2ssg"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi Kantor"
                    ></iframe>
                </div>

                {/* Layer 2: Transparent Overlay untuk memastikan peta benar-benar tidak bisa disentuh */}
                <div className="absolute inset-0 z-10 bg-transparent"></div>

                {/* Layer 3: UI Elements (Marker & Info) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 pointer-events-none">
                    <div className="bg-[#135bec] text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
                        <span className="material-symbols-outlined text-3xl">corporate_fare</span>
                        <div className="pr-2">
                            <p className="text-xs font-bold uppercase tracking-tighter opacity-70">Kantor Utama</p>
                            <p className="font-bold whitespace-nowrap">Premium Biz HQ</p>
                        </div>
                    </div>
                    <div className="w-4 h-4 bg-[#135bec] rounded-full mt-2 ring-8 ring-[#135bec]/20"></div>
                </div>

                {/* Info Box - Menggunakan z-20 agar tetap di atas overlay */}
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-slate-200 flex items-center gap-4 max-w-xs hidden md:flex z-20">
                    <span className="material-symbols-outlined text-[#135bec]">directions</span>
                    <p className="text-sm text-slate-600 font-medium">
                        Hanya 5 menit jalan kaki dari Stasiun MRT Istora Mandiri
                    </p>
                </div>
            </div>
        </section>
    );
}