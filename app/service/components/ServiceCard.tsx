import React from "react";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="w-[420px] premium-card p-12 rounded-[3rem] flex flex-col justify-between group">
            <div>
                <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mb-10 shadow-xl shadow-blue-100/50 group-hover:icon-container-gradient group-hover:scale-110 transition-all duration-500">
                    {icon}
                </div>
                <h4 className="text-3xl font-extrabold text-gray-900 mb-5 tracking-tight group-hover:text-brand-blue transition-colors">
                    {title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-lg font-medium">
                    {description}
                </p>
            </div>
            <div className="mt-12 flex items-center justify-between">
                <a
                    className="inline-flex items-center text-brand-blue font-extrabold text-base hover:text-brand-green transition-colors group/link"
                    href="#"
                >
                    Selengkapnya{" "}
                    <svg
                        className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                        ></path>
                    </svg>
                </a>
                <div className="w-12 h-1.5 bg-brand-blue/5 rounded-full overflow-hidden group-hover:bg-brand-blue/10 transition-colors">
                    <div className="w-1/3 h-full bg-brand-blue rounded-full group-hover:w-full transition-all duration-700"></div>
                </div>
            </div>
        </div>
    );
}
