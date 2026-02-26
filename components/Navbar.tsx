"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdLayers, MdExpandMore, MdSearch, MdClose, MdMenu } from "react-icons/md";

const Navbar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // LOGIKA UTAMA:
    // Navbar berwarna putih jika: (Bukan di Home) ATAU (Sudah di-scroll)
    const isHome = pathname === "/";
    const isWhiteMode = !isHome || isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        // Jalankan saat mount untuk cek posisi scroll awal
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isWhiteMode
                ? "bg-white border-b border-gray-200 shadow-lg py-0"
                : "bg-transparent border-b border-transparent py-2"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Left: Logo Area */}
                    <Link href="/" className="flex-shrink flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-0">
                        <div className={`relative flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${isWhiteMode ? "bg-blue-600/10" : "bg-white/20"
                            }`}>
                            <MdLayers className={`text-2xl transition-colors ${isWhiteMode ? "text-blue-600" : "text-white"}`} />
                        </div>
                        <div className="flex flex-col min-w-0 max-w-[140px] xs:max-w-[200px] md:max-w-none">
                            <span className={`text-sm sm:text-xl font-bold tracking-tight font-display transition-colors duration-300 truncate ${isWhiteMode ? "text-neutral-900" : "text-white"
                                }`}>
                                Karya Data Komunika
                            </span>
                        </div>
                    </Link>

                    {/* Center: Navigation Links (Desktop) */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            <NavLink href="/" label="Beranda" active={pathname === "/"} isWhiteMode={isWhiteMode} />
                            <NavLink href="/area" label="Area" active={pathname === "/area"} isWhiteMode={isWhiteMode} />
                            <NavLink href="/about" label="About" active={pathname === "/about"} isWhiteMode={isWhiteMode} />
                            <NavLink href="#" label="Layanan" isWhiteMode={isWhiteMode} />
                            <NavLink href="#" label="Portofolio" isWhiteMode={isWhiteMode} />

                            {/* Dropdown Desktop */}
                            <div className="relative group">
                                <button className={`flex items-center gap-1 px-1 py-2 text-sm font-medium transition-colors font-display ${isWhiteMode ? "text-gray-500 hover:text-blue-600" : "text-white/80 hover:text-white"
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
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button className={`group flex h-10 w-10 items-center justify-center rounded-full transition-all ${isWhiteMode ? "text-gray-500 hover:bg-blue-50 hover:text-blue-600" : "text-white hover:bg-white/10"
                            }`}>
                            <MdSearch className="text-xl" />
                        </button>

                        <div className={`hidden h-6 w-px sm:block ${isWhiteMode ? "bg-gray-200" : "bg-white/20"}`}></div>

                        <Link
                            href="/kontak"
                            className="relative hidden sm:inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-95 font-display"
                        >
                            Kontak
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <div className="flex md:hidden">
                            <button
                                type="button"
                                className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors ${isWhiteMode || isMobileMenuOpen ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
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
                className={`md:hidden absolute top-full left-0 w-full bg-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border-b border-gray-100 shadow-2xl overflow-hidden ${isMobileMenuOpen ? "max-h-[80vh] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
                    }`}
            >
                <div className="space-y-1.5 px-4 pb-10 pt-4">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`block rounded-lg px-4 py-3 text-base font-semibold font-display ${pathname === "/" ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"}`}>
                        Beranda
                    </Link>
                    <Link href="/area" onClick={() => setIsMobileMenuOpen(false)} className={`block rounded-lg px-4 py-3 text-base font-semibold font-display ${pathname === "/area" ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"}`}>
                        Area
                    </Link>
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 font-display transition-colors">
                        Layanan
                    </Link>
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-4 py-3 text-base font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 font-display transition-colors">
                        Portofolio
                    </Link>

                    <div className="pt-4 border-t border-gray-100">
                        <span className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Resources</span>
                        <div className="mt-2 grid grid-cols-1 gap-1">
                            <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 font-medium">Blog</Link>
                            <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 font-medium">Case Studies</Link>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link
                            href="/kontak"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-4 text-center text-base font-bold text-white shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-transform"
                        >
                            Hubungi Kami
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
    isWhiteMode: boolean;
}

const NavLink = ({ href, label, active, isWhiteMode }: NavLinkProps) => (
    <Link
        href={href}
        className={`group relative px-1 py-2 text-sm font-semibold transition-all duration-300 font-display ${isWhiteMode
            ? (active ? "text-blue-600" : "text-gray-500 hover:text-blue-600")
            : (active ? "text-white" : "text-white/80 hover:text-white")
            }`}
    >
        {label}
        <span className={`absolute inset-x-0 -bottom-1 h-0.5 w-full transition-transform duration-300 transform ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            } ${!isWhiteMode && active ? "bg-white" : "bg-blue-600"}`}></span>
    </Link>
);

export default Navbar;