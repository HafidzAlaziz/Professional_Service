"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-navy">
            {/* Dynamic Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gold/10 rounded-full filter blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[120px]"></div>
            </div>

            <div className="container-custom relative z-10 w-full mb-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >

                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-8">
                            Solusi <span className="text-gold italic">Profesional</span> Untuk Pertumbuhan Bisnis
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                            Kami mentransformasi tantangan bisnis menjadi peluang melalui strategi terukur, konsultasi ahli, dan dedikasi pada hasil nyata.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link
                                href="/#booking"
                                className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-gold/20 group"
                            >
                                Booking Konsultasi
                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/#portfolio"
                                className="inline-flex items-center justify-center bg-transparent border-2 border-white/20 hover:border-gold hover:text-gold text-white px-10 py-5 rounded-full font-bold text-lg transition-all"
                            >
                                Lihat Portofolio
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-5 hidden lg:block"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 to-transparent rounded-2xl blur opacity-25"></div>
                            <div className="relative bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-3xl">
                                <div className="grid grid-cols-2 gap-x-10 gap-y-12">
                                    <div className="space-y-1">
                                        <p className="text-5xl font-serif font-bold text-gold">150+</p>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-tight">Klien Global<br />Telah Percaya</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-5xl font-serif font-bold text-gold">98%</p>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-tight">Tingkat<br />Kepuasan Mitra</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-5xl font-serif font-bold text-gold">10th+</p>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-tight">Pengalaman<br />Industri Nyata</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-5xl font-serif font-bold text-gold">24/7</p>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-tight">Dukungan<br />Tim Ahli Kami</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
