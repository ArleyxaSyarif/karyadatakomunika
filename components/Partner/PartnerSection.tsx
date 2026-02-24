"use client"
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
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAtOsRvF1WGvI1gJtoK5Y2EO3RqTDPKPfYq8ZCNGC2kzPFe9rE68kspRp9orPz7yZrK74GJ3ZqsUAWYYzXWN1JBzBgaS-LkSQgXh1rbKsn-0UHNPs7OyyhpWLiELFofs0gzFAXYyrnaZLvzMeNXkLGK-0_KlE5aD-oKjzvnlRF7EorUx4P-4GojronP2PxJPqMJ1a1nt0qIdhMdgNtpan0EA7j834NkQ7jTPyieqTEela97MXNe6qHRoRj8ae_be4dF4US3aH9hPwg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBI7OeSLS51vcD6EP76eoQPJX7Nzj2kC_rQVaCGbrKu7P3YPNFh4d65O5raoL34eEMH0rKLu5XrX_Mjb0P2Q7JqFWYvSTF-6gTUsfP8d14JybgJ9XynKjBCT5TjkaCh8AlfSY5T8aRIz-an-AQ_PgReFS8zZxpIck5D-4uScslZHKssA_gux_xDd28YHIfq5EctXOBxTI-FetINiLxUJiV24naonATSp8HDYZas1zQBQ3BbY7sBLuQ2Z2HLqxUJ4bacKuX4owm9LEY",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBR1UUSlIFhoYIrvb-RBUjmJRfUYwQ-igRVpPTO1TnGOCRYoetoV589d6V7H6fF_kKjxeTivgQK4AiIJt_vr23EQavzV8Vtt3600i2BalrL3bZjWfv2pupa1gRVPZQnWCi5gGZWK6IolQ0H5Nb5XksYVdTemSKrJKue441Ohj246oEUOFEcW98KFI3Ih_Io3OAcY-WpBX6AHnRpAvPkcEijdZoJqtJS6qJytGs_JFeJP-afLqmkTl2uuMW_TRQKsz-Fm_n64zFjZ1Y",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCH9pw46pUAduU8i7lS6nomSfaqyPHqaFIPyDoayiCFGN2FjgmxTrZqILkjXcq7C7kiRZTexFuHRYSVT9Z0WWY8fPcSdz7WqV2mvbmE_bgbkb71nHQKqN1sE3PkMEsmIvOG7ZBAMxh5JPEMmXDiKhKas-Zdo6U0zor-pDQ05ZS-_lBHOGzV1ELI4cuL8SMzw2R05zcP-GKeif6RPnU54y3C7SLMX4yULMrz1Iesqda-oHyoxOZIiMFOICz5BuVEqgsziDMBef-xYXg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcz8tfBIJ0YITJbB1Zgu2rNT7UqhT05Oqd59YNVmF0updSSsB4arDWaq4dh0b2O1PE4EDokWqxs2TAiIwFJxgf1tF-R9Gah7SCyxMQs6Iql12XUDek5vnCMNKVs3pkYAdxkwTRg_ikXoI9gPmwfWXnTUKY2vQ-Fqi0XPm7nX148EV3VgeotsDFnWVF_VGGIqhdEqF0R0rdvpaRkHlAqR4dvx6P_hniXKrE-DE8xCWZJyVoNjNys1kf4qbnTjAdIpMAVyEWsUoaCg0",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2JnQYJHDCCsRYdJQA_fwFVcnBPvioBYOHAjBE-Fllxql6kCFs3jz2KphxREhl5A9sBgXdFigQ0klz7kx9jfk_E5dyi68o0lO8viyNxZ9eCrxiVAS1Hb4lEv94yyDcqH7dgSi4F3WQVY7LNFnW_CwhnjhgEppvh76ELPAISr3vooIQbWZslVRD1pNCBDA6aJRIVtOf46rElslTv33yVE5NfOEutAh-mdi8hmFnnHk6hHm60HswTAAd7qeqrMasKghv53fqHDOuPXU",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDD2lRhi4x63n7pjTRPhGHfUxXhL8mo7sLxB-z_hezpltuLD57hq6FnGTEoFKFM7i3j5oFyepzJv4zflePGEerTKdYamowRrRP-xXC507qp3owPIFT1-p-r1aZP4jTures5TvQtPmkOp4Dq44xkqWnt006y5aL3SkJArVjhMvrc0BxCgkYRm-qO4LGio5iFsdSBTJ2ZeuoZkFtm9g7cTmFULkb6m2qyKCdG3ZXszYgtam7opn0z9oLJHrcXeQBbm-4oOxXRcxHto8Q",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDhlUJmERuJ0WPdhhdCNcl1o_I4L0CsCGAjTeKSPWSAmQp32o1ulonxFTSq5Rig37wQ4uT6QFL9-C0mW5p72tYq6WQfQ3CXDRTwoKjtc-uZYGlkntf8_nSq0cw-ZYfBGVagIF_3cyEBRywCaXGVaDo6FNMktg6ql2rlHq4Xmnj8pH73V5Gt8RHgUhoI-FYciAPJDCK4hqoXsJGV3M945xkUN0mhaDyvqJ81Q8mkRvGv7u-E0UGygrGKY0SroEfAbTt10MY8x7KOpmM"
    ];

    const lane2Partners = [...lane1Partners].reverse();

    return (
        <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
                {/* Badge - Warna Biru Muda Transparan */}
                <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#0b50da] uppercase bg-blue-50 border border-blue-100 rounded-full">
                    Global Collaboration
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                    Dipercaya oleh <span className="text-[#0b50da]">Pemimpin Global</span>
                </h2>

                <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl leading-relaxed">
                    Kami mendukung tim paling ambisius di dunia melalui kemitraan strategis dan integrasi teknis yang inovatif.
                </p>
            </div>

            {/* Container Marquee */}
            <div className="space-y-8 relative">
                {/* Fade Mask Overlay - Memberikan efek blur di pinggir kiri dan kanan */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* Lane 1: Scroll Left */}
                <div className="flex overflow-hidden">
                    <div className="flex animate-scroll-left whitespace-nowrap gap-12 md:gap-24 items-center py-4">
                        {[...lane1Partners, ...lane1Partners].map((url, idx) => (
                            <div key={`lane1-${idx}`} className="w-32 md:w-44 h-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <div className="relative w-full h-full">
                                    <Image src={url} alt="Partner Logo" fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lane 2: Scroll Right */}
                <div className="flex overflow-hidden">
                    <div className="flex animate-scroll-right whitespace-nowrap gap-12 md:gap-24 items-center py-4">
                        {[...lane2Partners, ...lane2Partners].map((url, idx) => (
                            <div key={`lane2-${idx}`} className="w-32 md:w-44 h-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <div className="relative w-full h-full">
                                    <Image src={url} alt="Partner Logo" fill className="object-contain" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-24 flex flex-col items-center gap-4">
                <div className="w-24 h-1.5 bg-blue-100 rounded-full"></div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Expanding the ecosystem</p>
            </div>

            {/* CSS Animasi (Gunakan Global CSS atau Tailwind Config) */}
            <style jsx>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scroll-left 40s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 40s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default PartnerSection;