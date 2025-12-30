"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const allProjects = [
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
    {
        title: "Modernisasi Sistem IT",
        category: "Digital Transformation",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
        result: "Integrasi sistem yang mempercepat proses 50%",
    },
    {
        title: "Brand Rejuvenation",
        category: "Marketing Strategy",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
        result: "Peningkatan awareness sebesar 60% dalam 1 kuartal",
    },
];

const PortfolioPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-40 pb-20 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/20 rounded-full blur-[120px]"></div>
                </div>

                <div className="container-custom relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center text-gold font-bold mb-8 hover:translate-x-[-8px] transition-transform"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Kembali ke Beranda
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Portofolio Kami</h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        Koleksi lengkap transformasi bisnis dan solusi strategis yang telah kami berikan kepada mitra-mitra kami di seluruh Indonesia.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {allProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-10">
                                    <span className="text-xs font-bold text-gold uppercase tracking-[0.2em] mb-4 block">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">{project.title}</h3>
                                    <div className="pt-6 border-t border-gray-50">
                                        <p className="text-base text-gray-500 font-medium italic leading-relaxed">{project.result}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

        </main>
    );
};

export default PortfolioPage;
