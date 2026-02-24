"use client";

import React from 'react';
import Image from 'next/image';

const PartnerSection = () => {
    const lane1Partners = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBHOhzPnExBPK4b2i1mm-XoWrSKDkjxbQA_sepjH0xu-MNwhWmMtYY7_oe9dhuH85Hp6CDwYIB_ahm0Wvtziv8LRZPIjoX-oGgtd4ZkAkLfe0OO9x2Q_cCb6JrgOs4MMEKYBd8yNMU717Ons5ZmZawbyL4cW33GxvgURbJzZT1vHmTfqPPJXtFehxJnRdHch07eQnsMiFt0Z9G-2bkBskDgf2oPdufvZQM8iRR3PAsvsgtXc9sRrSBUlsuoHMP605gpPKAz2as7ewo",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDI6rungQqpLa6IYSwO1wTTrXohCP3pbtnj-CpJ3MlYyvBgzR7CUU66wkaHKWlmC4V0PW_HwI7UMv5wEF9kGn3N5UqiWgFiG92cqM-_zlVeP2CZvBTuLxhInc8krX_nhOd-Zce73JSMCmywmQvRw5fs-sDHW0eumeoBVr3WB6kUznaiVm9BUAgMX6rvFCWbBKdvZ1Qk-ZzbMEPyowy4BRnvpEkhaFcrQTTmb6LmLLYHNnRInZ5C_r-j7Jjskdcz1O8Szro5mGgLRh4",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBU4xHhAtV-wudK_Lj3J-Y-KyuMd-nLCNzxgz5m09VuS69tuMi7PmkY0SHKGJF2eLLq-2gsfaz8lQLp1wURyZLkUITvj-bS_wUgNYVBiYlJzRMvLWsQRnvyYDQRlBXVuKoIbua-EOxu3uVWPdfLB54WK5zv8t7NNJ-a1el0_Q5GgPitLQ6ga-FzH6Vm3Fie47m2f6oTTQqkBvC_yg1XhQ8DVpsuOQBWqTeCrlDYGbEUDTNP4rM7EMKbfJBWekJZEF9jRICiJK6MW9o",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCR-YqnzaJh8tPEtOWABv65sKfJOaAbjEJyIrDdLC5P6ztrh1UVuKR1tPVG1zjF-78pqW3BBtMULBhU7J12eXTMdOWvh7LtIRlZVg7dMBZVMvlbYOooAq6nhnQx2SszmqWZZX13iJ-bTZNI4MP7kPv59gJrJLiDGsYUzKHBUv8d25pN55RidRYISXcbUtD3m4WoLYlUo8ZahN9q-aqgo1C5LVXGv3mtV4jVrTY8mp0Dh1g_HecE_PMSwJL2x5gPFNiDteYNvj9cazo",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPY3mD_Qlap2VY2v-1LjEnKHY3wZ0VERnUVj34iMaB11bjM22M0y83zH__FHPCiWKzrStETtUWZt3ADsRgdeFIydn9d_lpGn4GjuBoCwN7oFTjgnnWQQhZusGmqfXYh4FVNzUgmQ6TR87ZZaqyk8Hsy3bcNMPsyv2OmFEvmaH6zgH_H9d_iHnsh8M6eBXTyVG_jAwvGEgu9W4hCYKUmG4nx-cHxJfRDXO-9mPo3_Lv7drk18zBP4WM73zomud6LwgwmGzoATeGoHA",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDtIvK6KO8ShiCp-F3uzJlyZ6ze_vU_uLNkwHPifrrLv4b56PLfq0dsMC_Oxdzx4V5pWfwcIrYgEpkiFrnSq9Beo8e0kYg_nBi4049fSa935HJ_oe0WQejqSze8h7IIyxfqnTYwZ5T9n4AePYbRupTPqmAa2YqMxFCGRBOsWyvyvp9ynIJC3KmUkFdv1PkuiYXp__0V4SuAqsV0A-vEIsaijG8gpWM4mO-lHHC1dQEQUAmVpxrhmH23RkNEIxTayhTqsPcS2lRZLv8",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAtOsRvF1WGvI1gJtoK5Y2EO3RqTDPKPfYq8ZCNGC2kzPFe9rE68kspRp9orPz7yZrK74GJ3ZqsUAWYYzXWN1JBzBgaS-LkSQgXh1rbKsn-0UHNPs7OyyhpWLiELFofs0gzFAXYyrnaZLvzMeNXkLGK-0_KlE5aD-oKjzvnlRF7EorUx4P-4GojronP2PxJPqMJ1a1nt0qIdhMdgNtpan0EA7j834NkQ7jTPyieqTEela97MXNe6qHRoRj8ae_be4dF4US3aH9hPwg"
    ];

    const lane2Partners = [...lane1Partners].reverse();

    return (
        <section className="py-16 bg-white overflow-hidden border-y border-slate-50">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center">
                {/* Badge Kecil yang Halus */}
                <div className="mb-4 flex items-center gap-2">
                    <span className="h-[1px] w-6 bg-blue-200"></span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-500">
                        Strategic Alliance
                    </span>
                    <span className="h-[1px] w-6 bg-blue-200"></span>
                </div>

                {/* Judul yang Lebih Proporsional */}
                <h2 className="text-2xl md:text-4xl font-bold text-slate-800 tracking-tight text-center">
                    Dipercaya oleh  <span className="text-[#0b50da]">70+ perusahaan</span>
                </h2>
            </div>

            {/* Container Marquee */}
            <div className="space-y-6 relative">
                {/* Fade Mask Overlay - Lebih halus */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

                {/* Lane 1 */}
                <div className="flex overflow-hidden group">
                    <div className="flex animate-scroll-left whitespace-nowrap gap-16 md:gap-28 items-center py-2">
                        {[...lane1Partners, ...lane1Partners, ...lane1Partners].map((url, idx) => (
                            <div key={`lane1-${idx}`} className="w-24 md:w-32 h-10 flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                <div className="relative w-full h-full">
                                    <Image src={url} alt="Partner Logo" fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lane 2 */}
                <div className="flex overflow-hidden">
                    <div className="flex animate-scroll-right whitespace-nowrap gap-16 md:gap-28 items-center py-2">
                        {[...lane2Partners, ...lane2Partners, ...lane2Partners].map((url, idx) => (
                            <div key={`lane2-${idx}`} className="w-24 md:w-32 h-10 flex items-center justify-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                                <div className="relative w-full h-full">
                                    <Image src={url} alt="Partner Logo" fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Kecil */}
            <div className="mt-12 text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-300">
                    & More than 500+ worldwide partners
                </p>
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-33.33%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scroll-left 50s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 50s linear infinite;
                }
                /* Pause on hover biar user bisa lihat logonya */
                .animate-scroll-left:hover, .animate-scroll-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default PartnerSection;