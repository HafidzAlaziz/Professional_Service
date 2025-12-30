"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Budi Santoso",
        role: "CEO Modern Retail",
        content: "Dampak yang diberikan sangat luar biasa. Tim kami jadi lebih terorganisir dan profit meningkat signifikan hanya dalam 3 bulan.",
    },
    {
        name: "Siska Amelia",
        role: "Founder Creative Agency",
        content: "Layanan konsultasi yang benar-benar membumi dan solutif. Mereka memahami masalah inti bisnis saya tanpa banyak basa-basi.",
    },
    {
        name: "Hendra Wijaya",
        role: "COO Logistics Corp",
        content: "Efisiensi operasional kami naik drastis. Rekomendasi teknis yang diberikan sangat aplikatif dan mudah diimplementasikan.",
    },
];

const Testimonials = () => {
    // Duplicate testimonials for seamless looping
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="section-padding bg-navy relative overflow-hidden scroll-mt-20">
            {/* Decorative quotes icon in background */}
            <Quote size={240} className="absolute -top-12 -right-12 text-white/5 rotate-12 pointer-events-none" />
            <Quote size={180} className="absolute -bottom-10 -left-10 text-white/5 -rotate-12 pointer-events-none" />

            <div className="container-custom relative z-10 mb-16">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Apa Kata Mereka?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">Kepercayaan adalah pondasi dari setiap kerjasama kami dalam membangun masa depan digital yang lebih baik.</p>
                </div>
            </div>

            {/* Infinite Slider Container */}
            <div className="relative w-full overflow-hidden py-10">
                <motion.div
                    className="flex gap-10 whitespace-nowrap"
                    animate={{
                        x: [0, "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 60, // Slower speed (higher duration)
                            ease: "linear",
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    {duplicatedTestimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-500 group min-w-[350px] md:min-w-[450px] whitespace-normal"
                        >
                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className={`fill-gold text-gold transition-all duration-500 group-hover:scale-110`} />
                                ))}
                            </div>
                            <p className="text-gray-300 italic mb-10 text-lg leading-relaxed relative">
                                <span className="text-gold text-3xl font-serif absolute -top-4 -left-2 opacity-50 font-bold">"</span>
                                {t.content}
                                <span className="text-gold text-3xl font-serif absolute -bottom-8 -right-2 opacity-50 font-bold">"</span>
                            </p>
                            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-lg">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg">{t.name}</p>
                                    <p className="text-gold text-sm font-bold uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
