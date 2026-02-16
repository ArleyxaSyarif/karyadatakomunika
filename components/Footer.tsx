import React from 'react';

const Footer = () => {
    return (
        <footer className="relative w-full border-t border-primary/10 bg-white pt-16 pb-8 transition-colors duration-300 antialiased font-display">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Top Section: Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-primary/5">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
                                <span className="material-symbols-outlined">rocket_launch</span>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight text-[#1a1a1a]">Lumina<span className="text-primary">.</span></span>
                        </div>
                        <p className="text-[#6b7280] leading-relaxed text-base max-w-sm">
                            Building the future of digital experiences with precision, passion, and a commitment to excellence. Join us on our journey to innovate.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 shadow-sm border border-primary/10" href="#">
                                <span className="material-symbols-outlined text-[20px]">language</span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 shadow-sm border border-primary/10" href="#">
                                <span className="material-symbols-outlined text-[20px]">share</span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-primary/5 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-300 shadow-sm border border-primary/10" href="#">
                                <span className="material-symbols-outlined text-[20px]">chat</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-[#1a1a1a]">Company</h4>
                        <ul className="flex flex-col gap-4">
                            <li><a className="text-[#6b7280] hover:text-primary transition-colors text-sm font-medium" href="#">About Us</a></li>
                            <li><a className="text-[#6b7280] hover:text-primary transition-colors text-sm font-medium" href="#">Careers</a></li>
                            <li><a className="text-[#6b7280] hover:text-primary transition-colors text-sm font-medium" href="#">News & Press</a></li>
                            <li><a className="text-[#6b7280] hover:text-primary transition-colors text-sm font-medium" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-[#1a1a1a]">Resources</h4>
                        <ul className="flex flex-col gap-4">
                            <li><a className="text-[#6b7280] hover:text-primary transition-colors text-sm font-medium" href="#">Documentation</a></li>
                            <li><a className="text-[#6b7280] hover:text-primary transition-colors text-sm font-medium" href="#">Help Center</a></li>
                            <li><a className="text-[#6b7280] hover:text-primary transition-colors text-sm font-medium" href="#">Privacy Policy</a></li>
                            <li><a className="text-[#6b7280] hover:text-primary transition-colors text-sm font-medium" href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 shadow-sm relative overflow-hidden group">
                            {/* Decorative element */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
                            <h4 className="text-sm font-bold uppercase tracking-widest text-[#1a1a1a] mb-2">Stay in the loop</h4>
                            <p className="text-[#6b7280] text-sm mb-6">Weekly updates on technology and design delivered to your inbox.</p>
                            <form className="flex flex-col gap-3">
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">mail</span>
                                    <input
                                        className="w-full pl-10 pr-4 py-3 bg-white border border-primary/10 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400"
                                        placeholder="Enter your email"
                                        type="email"
                                    />
                                </div>
                                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98]" type="button">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Contact Details */}
                <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b border-primary/5">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">call</span>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Phone</p>
                            <p className="text-sm font-semibold text-[#1a1a1a]">+1 (555) 000-0000</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">alternate_email</span>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Email</p>
                            <p className="text-sm font-semibold text-[#1a1a1a]">hello@lumina.design</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">location_on</span>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Location</p>
                            <p className="text-sm font-semibold text-[#1a1a1a]">San Francisco, CA</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">schedule</span>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Hours</p>
                            <p className="text-sm font-semibold text-[#1a1a1a]">Mon - Fri, 9am - 6pm</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Sub-footer */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6b7280]">
                    <p>© 2024 Lumina Digital. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms</a>
                        <a className="hover:text-primary transition-colors" href="#">Cookies</a>
                        <div className="flex items-center gap-1 text-xs px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-gray-500 font-medium tracking-tight">System Operational</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Decorative Glows */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
