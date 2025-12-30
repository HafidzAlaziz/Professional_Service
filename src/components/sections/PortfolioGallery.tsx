"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Scale-up Retail Indonesia",
        category: "Business Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        result: "Peningkatan omzet 45% dalam 6 bulan",
    },
    {
        title: "Transformasi Digital Logistik",
        category: "Operational Audit",
        image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=800&auto=format&fit=crop",
        result: "Efisiensi biaya operasional sebesar 30%",
    },
    {
        title: "Restrukturisasi Korporat",
        category: "Financial Management",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
        result: "Penstabilan arus kas di masa krisis",
    },
    {
        title: "Ekspansi Pasar FMCG",
        category: "Market Expansion",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
        result: "Penetrasi ke 12 kota baru di Jawa Timur",
    },
];

const PortfolioGallery = () => {
    return (
        <section id="portfolio" className="section-padding bg-white scroll-mt-20">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">Hasil Kerja Nyata</h2>
                        <p className="text-gray-600 text-lg">Bukan sekadar janji, kami memberikan dampak nyata bagi setiap mitra yang kami tangani melalui pendekatan strategis yang dipersonalisasi.</p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="text-gold font-bold flex items-center group transition-all hover:translate-x-1 shrink-0 relative"
                    >
                        Lihat Semua Proyek
                        <ExternalLink size={18} className="ml-2" />
                        <div className="h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-300 absolute -bottom-1 left-0"></div>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-8">
                                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-3 block">{project.category}</span>
                                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors line-clamp-2 min-h-[3.5rem]">{project.title}</h3>
                                <div className="pt-4 border-t border-gray-50">
                                    <p className="text-sm text-gray-500 font-medium italic leading-relaxed">{project.result}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default PortfolioGallery;
