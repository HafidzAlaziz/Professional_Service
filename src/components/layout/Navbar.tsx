"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Layanan", href: "/#services" },
        { name: "Portofolio", href: "/#portfolio" },
        { name: "Testimonial", href: "/#testimonials" },
        { name: "FAQ", href: "/#faq" },
    ];

    const isHomePage = pathname === "/";

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled || !isHomePage ? "bg-white/90 backdrop-blur-md shadow-lg py-4 border-b border-gray-100" : "bg-transparent py-7"
                }`}
        >
            <div className="container-custom">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 md:w-12 md:h-12 bg-navy rounded-xl flex items-center justify-center overflow-hidden border border-gold/30 shadow-lg shadow-gold/10 group-hover:scale-110 transition-transform duration-500">
                                <svg viewBox="0 0 40 40" className="w-full h-full p-2">
                                    <path
                                        d="M10 10 L30 10 L30 20 L10 20 L10 30"
                                        fill="none"
                                        stroke="#D4AF37"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="animate-logo-path-1"
                                    />
                                    <path
                                        d="M15 15 L25 15 L25 25 L15 25"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="animate-logo-path-2"
                                    />
                                </svg>
                            </div>
                            <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${scrolled || !isHomePage ? "text-navy" : "text-white"}`}>
                                PRO<span className="text-gold uppercase tracking-tighter">SERVICE</span>
                                <div className="h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300"></div>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:text-gold relative group ${scrolled || !isHomePage ? "text-navy/80" : "text-white/90"
                                        }`}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                            <Link
                                href="/#booking"
                                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl ${scrolled || !isHomePage
                                    ? "bg-navy text-white hover:bg-gold shadow-navy/10"
                                    : "bg-gold text-white hover:bg-white hover:text-navy shadow-gold/20"
                                    }`}
                            >
                                Booking Konsultasi
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-xl transition-colors ${scrolled || !isHomePage ? "text-navy bg-gray-50" : "text-white bg-white/10"}`}
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 z-40 bg-navy transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center min-h-screen space-y-10 p-6">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-8 right-8 p-3 bg-white/10 rounded-full text-white"
                    >
                        <X size={30} />
                    </button>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-serif font-bold text-white hover:text-gold transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#booking"
                        onClick={() => setIsOpen(false)}
                        className="w-full max-w-xs text-center bg-gold text-white py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-gold/20 mt-10"
                    >
                        Booking Konsultasi
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
