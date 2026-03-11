import React from "react";
import ServiceCard from "./ServiceCard";
import {
    BsMic,
    BsWifi,
    BsLightningCharge,
    BsCpu,
    BsGear,
    BsTools,
    BsLaptop
} from "react-icons/bs";

const services = [
    {
        icon: <BsMic className="w-12 h-12 text-brand-blue group-hover:text-white transition-colors" />,
        title: "Dedicated Internet",
        description: "Koneksi internet stabil dan simetris 1:1 khusus untuk kebutuhan bisnis korporasi skala besar dengan monitoring proaktif 24/7.",
    },
    {
        icon: <BsWifi className="w-12 h-12 text-brand-blue group-hover:text-white transition-colors" />,
        title: "Broadband Business",
        description: "Layanan internet berkecepatan tinggi dengan harga ekonomis namun tetap handal untuk UKM dan operasional kantor cabang.",
    },
    {
        icon: <BsLightningCharge className="w-12 h-12 text-brand-blue group-hover:text-white transition-colors" />,
        title: "Fiber Optic",
        description: "Infrastruktur kabel serat optik termodern dengan latensi sangat rendah dan kapasitas bandwidth nyaris tanpa batas.",
    },
    {
        icon: <BsCpu className="w-12 h-12 text-brand-blue group-hover:text-white transition-colors" />,
        title: "Aktivasi FOT & FOC",
        description: "Layanan pengaktifan terminal dan penarikan core fiber optic yang cepat dan profesional untuk kebutuhan provider ISP.",
    },
    {
        icon: <BsGear className="w-12 h-12 text-brand-blue group-hover:text-white transition-colors" />,
        title: "Managed Service",
        description: "Pengelolaan operasional infrastruktur TI harian Anda, membiarkan tim Anda fokus sepenuhnya pada strategi bisnis inti.",
    },
    {
        icon: <BsTools className="w-12 h-12 text-brand-blue group-hover:text-white transition-colors" />,
        title: "Instalasi & Maintenance",
        description: "Tim teknis ahli kami siap membantu pemasangan, konfigurasi, dan perawatan berkala perangkat jaringan Anda secara menyeluruh.",
    },
    {
        icon: <BsLaptop className="w-12 h-12 text-brand-blue group-hover:text-white transition-colors" />,
        title: "Website Development",
        description: "Membangun kehadiran digital yang kuat melalui website modern, responsif, dan fungsional yang berfokus pada hasil konversi maksimal.",
    },
];

export default function ServiceList() {
    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-brand-blue font-extrabold tracking-[0.2em] uppercase text-xs mb-4">
                        Portofolio Solusi
                    </h2>
                    <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Layanan Profesional Kami
                    </h3>
                    <p className="text-gray-500 font-medium text-lg leading-relaxed">
                        Kami menyediakan infrastruktur yang dirancang khusus untuk memenuhi standar
                        keandalan tertinggi bagi bisnis Anda.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="w-20 h-1.5 bg-gradient-to-r from-brand-blue to-brand-green rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="slider-container relative w-full cursor-grab active:cursor-grabbing overflow-hidden">
                <div className="flex slider-track animate-infinite-scroll w-max gap-8 px-4 py-10">
                    {/* Service Cards Track */}
                    <div className="flex gap-8 shrink-0">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                    {/* Duplicated Track for Seamless Loop */}
                    <div aria-hidden="true" className="flex gap-8 shrink-0">
                        {services.map((service, index) => (
                            <ServiceCard key={`dup-${index}`} {...service} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
                <div className="inline-block p-1 bg-brand-light rounded-3xl border border-gray-100/50">
                    <div className="px-10 py-6 bg-white rounded-2xl shadow-sm border border-gray-100 italic text-gray-500 font-medium text-lg">
                        "Memberikan performa maksimal untuk setiap kebutuhan digital Anda melalui
                        inovasi berkelanjutan dan dukungan infrastruktur modern."
                    </div>
                </div>
            </div>
        </section>
    );
}
