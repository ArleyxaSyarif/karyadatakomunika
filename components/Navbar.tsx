"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full border-b border-white/10 bg-surface-dark/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? "shadow-lg" : ""
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Left: Logo Area */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 transition-colors group-hover:bg-primary/30">
                            <span className="material-icons-round text-primary text-2xl">
                                layers
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-white font-display">
                                Lumina
                            </span>
                        </div>
                    </Link>

                    {/* Center: Navigation Links */}
                    {/* Hidden on mobile, flex on desktop */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {/* Active Link */}
                            <Link
                                href="#"
                                className="group relative px-1 py-2 text-sm font-medium text-white transition-colors hover:text-primary font-display"
                            >
                                Beranda
                                <span className="absolute inset-x-0 bottom-0 h-0.5 w-full scale-x-100 bg-primary transition-transform duration-300"></span>
                            </Link>

                            {/* Inactive Links */}
                            <Link
                                href="#"
                                className="group relative px-1 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white font-display"
                            >
                                Layanan
                                <span className="absolute inset-x-0 bottom-0 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
                            </Link>
                            <Link
                                href="#"
                                className="group relative px-1 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white font-display"
                            >
                                Portofolio
                                <span className="absolute inset-x-0 bottom-0 h-0.5 w-full scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
                            </Link>
                            <div className="relative group">
                                <button className="flex items-center gap-1 px-1 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white font-display">
                                    Resources
                                    <span className="material-icons-round text-lg transition-transform group-hover:rotate-180">
                                        expand_more
                                    </span>
                                </button>
                                {/* Dropdown Menu */}
                                <div className="absolute left-1/2 mt-2 w-48 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="rounded-xl bg-[#2a221c] border border-white/10 p-2 shadow-xl ring-1 ring-black ring-opacity-5">
                                        <Link
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white font-display"
                                        >
                                            Blog
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white font-display"
                                        >
                                            Case Studies
                                        </Link>
                                        <Link
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white font-display"
                                        >
                                            Help Center
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        {/* Search Icon */}
                        <button className="group flex h-10 w-10 items-center justify-center rounded-full text-gray-300 transition-all hover:bg-white/5 hover:text-primary">
                            <span className="material-icons-round text-2xl">search</span>
                        </button>

                        {/* Divider */}
                        <div className="hidden h-6 w-px bg-white/10 sm:block"></div>

                        {/* CTA Button */}
                        <Link
                            href="#"
                            className="relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-orange-500/20 active:scale-95 font-display"
                        >
                            <span>Mulai Sekarang</span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 hover:animate-shimmer"></div>
                        </Link>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <span className="material-icons-round text-2xl">
                                    {isMobileMenuOpen ? "close" : "menu"}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="space-y-1 px-4 pb-3 pt-2 bg-surface-dark border-t border-white/10">
                    <Link
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-white bg-white/5 font-display"
                    >
                        Beranda
                    </Link>
                    <Link
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white font-display"
                    >
                        Layanan
                    </Link>
                    <Link
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white font-display"
                    >
                        Portofolio
                    </Link>
                    <div className="pl-3 space-y-1 border-l-2 border-white/10 ml-3 mt-2 mb-2">
                        <div className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider font-display">
                            Resources
                        </div>
                        <Link
                            href="#"
                            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 font-display"
                        >
                            Blog
                        </Link>
                        <Link
                            href="#"
                            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 font-display"
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="#"
                            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 font-display"
                        >
                            Help Center
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
