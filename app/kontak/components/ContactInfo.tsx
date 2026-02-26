import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ContactInfo() {
    return (
        <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-xl shadow-slate-200/50 flex items-start gap-6 hover:translate-y-[-4px] transition-transform">
                <div className="p-4 bg-[#135bec]/10 text-[#135bec] rounded-xl">
                    <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">Alamat Kantor</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Jl. Jenderal Sudirman Kav. 52-53, District 8, Jakarta Selatan, 12190
                    </p>
                    <Link href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-1 text-[#135bec] font-bold mt-4 hover:underline">
                        Lihat di Google Maps <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </Link>
                </div>
            </div>

            {/* Communication Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/30 p-8 rounded-2xl shadow-xl shadow-slate-200/50 space-y-8">
                <div className="flex items-center gap-6">
                    <div className="p-4 bg-[#10b981]/10 text-[#10b981] rounded-xl">
                        <span className="material-symbols-outlined text-3xl">mail</span>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Bisnis</h3>
                        <p className="text-lg font-bold text-[#0f172a]">hello@karyadata.id</p>
                    </div>
                </div>

                <div className="h-px bg-slate-200 w-full"></div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-[#0f172a]">Butuh respon cepat?</h3>
                    <Link
                        href="https://wa.me/yourphonenumber"
                        className="w-full flex items-center justify-center gap-3 bg-[#10b981] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#10b981]/30 transition-all"
                    >
                        <span className="material-symbols-outlined">chat</span>
                        Hubungi via WhatsApp
                    </Link>
                </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-[#0f172a] p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-6">Terhubung di Media Sosial</h3>
                <div className="flex gap-4">
                    <Link href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#135bec] transition-colors">
                        <FaLinkedinIn className="text-xl" />
                    </Link>
                    <Link href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#135bec] transition-colors">
                        <FaInstagram className="text-xl" />
                    </Link>
                    <Link href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#135bec] transition-colors">
                        <FaTwitter className="text-xl" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
