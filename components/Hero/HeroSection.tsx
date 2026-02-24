"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { MdArrowForward, MdPlayCircleOutline } from "react-icons/md";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const sliderData = [
    {
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
        title: "Konektivitas Tanpa",
        accent: "Hambatan",
    },
    {
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000",
        title: "Infrastruktur Data",
        accent: "Terpercaya",
    },
    {
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
        title: "Konektivitas Tanpa",
        accent: "Hambatan",
    },
];

const HeroSection = () => {
    return (
        <section className="relative h-[650px] md:h-[600px] lg:h-[730px] w-full overflow-hidden bg-slate-900">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="h-full w-full"
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index} className="relative h-full w-full overflow-hidden">
                        {/* Background */}
                        <div className="absolute inset-0">
                            <img
                                alt={slide.title}
                                className="w-full h-full object-cover scale-105"
                                src={slide.image}
                            />
                            <div className="absolute inset-0 bg-slate-900/60"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center antialiased">

                            {/* Spacer untuk Mobile (Agar tidak tertutup Navbar) */}
                            <div className="h-20 md:hidden"></div>

                            {/* Badge - Responsive margin */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-green-400 text-[10px] md:text-xs font-bold mb-6 md:mb-8">
                                <span className="flex h-2 w-2">
                                    <span className="animate-ping absolute h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative h-2 w-2 rounded-full bg-green-500"></span>
                                </span>
                                KARYA DATA KOMUNIKA
                            </div>

                            {/* Teks Utama - Responsive font size */}
                            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-4 md:mb-6 leading-tight select-none">
                                {slide.title} <br className="hidden md:block" />
                                <span className="text-blue-500"> {slide.accent}</span>
                            </h1>

                            {/* Deskripsi - Responsive width and visibility */}
                            <p className="text-sm md:text-xl text-slate-200 mb-8 md:mb-10 max-w-md md:max-w-2xl leading-relaxed font-medium">
                                Kami menghadirkan sinergi antara teknologi mutakhir dan pertumbuhan strategis untuk mengakselerasi bisnis Anda.
                            </p>

                            {/* Buttons - Mobile Full Width */}
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0">
                                <button className="flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 active:scale-95 text-sm md:text-base">
                                    Mulai Sekarang <MdArrowForward size={20} />
                                </button>
                                <button className="flex items-center justify-center gap-2 px-8 py-3.5 md:py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm border border-white/20 transition-all text-sm md:text-base">
                                    <MdPlayCircleOutline size={24} className="text-green-400" /> Lihat Video
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
                .swiper-slide {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
                .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.5) !important;
                    opacity: 1 !important;
                }
                .swiper-pagination-bullet-active {
                    background: #3b82f6 !important;
                    width: 20px !important;
                    border-radius: 5px !important;
                }
                /* Mengatur posisi pagination agar tidak terlalu mepet di mobile */
                .swiper-pagination {
                    bottom: 20px !important;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;