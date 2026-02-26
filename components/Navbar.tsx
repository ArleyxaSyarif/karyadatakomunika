"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MdLayers, MdExpandMore, MdSearch, MdClose, MdMenu } from "react-icons/md";

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

    // Tutup menu mobile jika layar di-resize ke desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled
                ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm py-0"
                : "bg-transparent border-b border-transparent py-4"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Left: Logo Area */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                        <div className={`relative flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${isScrolled ? "bg-blue-600 shadow-lg shadow-blue-600/20" : "bg-white/10 backdrop-blur-sm"
                            }`}>
                            <MdLayers className={`text-xl transition-colors ${isScrolled ? "text-white" : "text-white"}`} />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-lg font-bold tracking-tight font-display transition-colors duration-300 ${isScrolled ? "text-neutral-900" : "text-white"
                                }`}>
                                Karya Data Komunika
                            </span>
                        </div>
                    </Link>

                    {/* Center: Navigation Links (Desktop) */}
                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-1">
                            <NavLink href="/" label="Beranda" active isScrolled={isScrolled} />
                            <NavLink href="#" label="Layanan" isScrolled={isScrolled} />
                            <NavLink href="#" label="Portofolio" isScrolled={isScrolled} />
                            <NavLink href="#" label="News" isScrolled={isScrolled} />
                            <NavLink href="#" label="Career" isScrolled={isScrolled} />
                            <NavLink href="#" label="Tentang Kami" isScrolled={isScrolled} />

                            {/* Dropdown Desktop */}
                            <div className="relative group ml-2">
                                <button className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all rounded-lg font-display ${isScrolled ? "text-gray-600 hover:bg-gray-100 hover:text-blue-600" : "text-white/80 hover:bg-white/10 hover:text-white"
                                    }`}>
                                    Resources
                                    <MdExpandMore className="text-lg transition-transform duration-300 group-hover:rotate-180" />
                                </button>
                                <div className="absolute left-1/2 mt-2 w-48 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="rounded-xl bg-white border border-gray-100 p-2 shadow-2xl ring-1 ring-black/5">
                                        <Link href="#" className="flex items-center rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-display transition-colors">
                                            Blog
                                        </Link>
                                        <Link href="#" className="flex items-center rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-display transition-colors">
                                            Case Studies
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-1 sm:gap-3">
                        {/* Search Icon */}
                        <button className={`group flex h-10 w-10 items-center justify-center rounded-full transition-all ${isScrolled ? "text-gray-500 hover:bg-gray-100 hover:text-blue-600" : "text-white hover:bg-white/10"
                            }`}>
                            <MdSearch className="text-xl" />
                        </button>

                        <div className={`hidden h-6 w-px lg:block ${isScrolled ? "bg-gray-200" : "bg-white/20"}`}></div>

                        {/* CTA Button */}
                        <Link
                            href="#"
                            className="relative hidden sm:inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-95 font-display"
                        >
                            Kontak
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className={`inline-flex items-center justify-center rounded-full p-2.5 transition-all active:scale-90 ${isScrolled || isMobileMenuOpen ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
                                    }`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border-b border-gray-100 shadow-2xl overflow-hidden ${isMobileMenuOpen ? "max-h-[80vh] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
                    }`}
            >
                <div className="px-4 pb-8 pt-4 space-y-1">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-xl px-4 py-3.5 text-base font-bold text-blue-600 bg-blue-50/50 font-display">
                        Beranda
                    </Link>
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-xl px-4 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-display transition-all">
                        Layanan
                    </Link>
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-xl px-4 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-display transition-all">
                        Portofolio
                    </Link>
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-xl px-4 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-display transition-all">
                        News
                    </Link>
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-xl px-4 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-display transition-all">
                        Career
                    </Link>

                    {/* Resources in Mobile */}
                    <div className="pt-4 mt-2 border-t border-gray-100">
                        <span className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Resources</span>
                        <div className="mt-2 grid grid-cols-2 gap-2 px-2">
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center rounded-xl bg-gray-50 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all">Blog</Link>
                            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center rounded-xl bg-gray-50 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all">Case Studies</Link>
                        </div>
                    </div>

                    <div className="mt-8 px-2">
                        <Link
                            href="#"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex w-full items-center justify-center rounded-2xl bg-blue-600 py-4 text-center text-base font-bold text-white shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all"
                        >
                            Kontak Kami
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

interface NavLinkProps {
    href: string;
    label: string;
    active?: boolean;
    isScrolled: boolean;
}

const NavLink = ({ href, label, active, isScrolled }: NavLinkProps) => (
    <Link
        href={href}
        className={`group relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg font-display ${isScrolled
            ? (active ? "text-blue-600 bg-blue-50/50" : "text-gray-500 hover:text-blue-600 hover:bg-gray-50")
            : (active ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/10")
            }`}
    >
        {label}
        <span className={`absolute inset-x-4 -bottom-0.5 h-0.5 transition-all duration-300 transform origin-left ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            } ${!isScrolled && active ? "bg-white" : "bg-blue-600"}`}></span>
    </Link>
);

export default Navbar;