"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Apa itu layanan konsultasi strategis?",
        answer: "Layanan kami mencakup analisis mendalam terhadap model bisnis Anda, identifikasi hambatan, dan penyusunan roadmap taktis untuk mencapai efisiensi maksimal dan pertumbuhan profit berkelanjutan.",
    },
    {
        question: "Berapa lama durasi satu proyek biasanya berlangsung?",
        answer: "Tergantung pada kompleksitas masalah. Proyek audit biasanya memakan waktu 2-4 minggu, sementara transformasi strategis bisa berlangsung antara 3 hingga 6 bulan.",
    },
    {
        question: "Apakah ada biaya tersembunyi selain harga paket?",
        answer: "Tidak sama sekali. Semua biaya, termasuk akomodasi (jika diperlukan kunjungan lapangan), akan didiskusikan secara transparan di awal kontrak.",
    },
    {
        question: "Bagaimana cara memulai kerjasama?",
        answer: "Cukup klik tombol 'Booking Konsultasi', isi data diri Anda, dan tim kami akan menjadwalkan sesi discovery gratis selama 30 menit untuk memahami kebutuhan Anda.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding bg-gray-50 scroll-mt-20">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-serif font-bold text-navy mb-6">Pertanyaan Umum</h2>
                    <p className="text-gray-600 text-lg">Jawaban singkat untuk membantu Anda memahami cara kami bekerja.</p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? "border-gold shadow-xl shadow-gold/5" : "border-gray-100 shadow-sm"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50/50 transition-colors"
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? "text-navy" : "text-navy/80"}`}>{faq.question}</span>
                                <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? "bg-gold text-white rotate-180" : "bg-gray-50 text-navy"}`}>
                                    {openIndex === index ? (
                                        <Minus size={18} />
                                    ) : (
                                        <Plus size={18} />
                                    )}
                                </div>
                            </button>
                            <div
                                className={`accordion-content transition-all duration-500 ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-8 pt-2 border-t border-gray-50">
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
