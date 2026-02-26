"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tambahkan logika pengiriman data di sini
  };

  return (
    <div className="lg:col-span-7">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-2">Kirim Pesan</h2>
          <p className="text-slate-500">
            Isi formulir di bawah ini dan kami akan segera menghubungi Anda kembali dalam waktu kurang dari 24 jam.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nama Lengkap</label>
              <input 
                type="text" 
                className="w-full px-5 py-4 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:border-[#135bec] focus:ring-4 focus:ring-[#135bec]/10 transition-all outline-none" 
                placeholder="Masukkan nama Anda" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Alamat Email</label>
              <input 
                type="email" 
                className="w-full px-5 py-4 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:border-[#135bec] focus:ring-4 focus:ring-[#135bec]/10 transition-all outline-none" 
                placeholder="nama@perusahaan.com" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nomor Telepon</label>
              <input 
                type="tel" 
                className="w-full px-5 py-4 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:border-[#135bec] focus:ring-4 focus:ring-[#135bec]/10 transition-all outline-none" 
                placeholder="+62 812..." 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Topik Layanan</label>
              <select className="w-full px-5 py-4 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:border-[#135bec] focus:ring-4 focus:ring-[#135bec]/10 transition-all outline-none appearance-none">
                <option>Digital Strategy</option>
                <option>Development</option>
                <option>Cloud Infrastructure</option>
                <option>Business Consulting</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Detail Pesan</label>
            <textarea 
              rows={5} 
              className="w-full px-5 py-4 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:border-[#135bec] focus:ring-4 focus:ring-[#135bec]/10 transition-all outline-none resize-none" 
              placeholder="Ceritakan kebutuhan proyek Anda secara singkat..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#135bec] text-white py-5 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-[#135bec]/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          >
            Kirim Pesan Sekarang
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
          </button>
        </form>
      </div>
    </div>
  );
}