"use client";

import React, { useState } from "react";
import { Calendar, User, Mail, Phone, CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        service: "",
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const services = [
        "Konsultasi Bisnis",
        "Strategi Pemasaran",
        "Audit Operasional",
        "Manajemen Keuangan",
        "Pengembangan SDM",
    ];

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.service) newErrors.service = "Pilih layanan yang Anda butuhkan";
        if (!formData.date) {
            newErrors.date = "Pilih tanggal konsultasi";
        } else {
            const selectedDate = new Date(formData.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                newErrors.date = "Tanggal tidak boleh di masa lalu";
            }
        }

        if (!formData.time) {
            newErrors.time = "Pilih waktu";
        } else if (formData.date) {
            const selectedDate = new Date(formData.date);
            const today = new Date();
            const [hours, minutes] = formData.time.split(":").map(Number);

            // If selecting today, check if time is in the past
            if (selectedDate.toDateString() === today.toDateString()) {
                const currentHours = today.getHours();
                const currentMinutes = today.getMinutes();

                if (hours < currentHours || (hours === currentHours && minutes <= currentMinutes)) {
                    newErrors.time = "Waktu sudah terlewati untuk hari ini";
                }
            }
        }

        if (!formData.name) newErrors.name = "Nama lengkap wajib diisi";
        if (!formData.email) {
            newErrors.email = "Email wajib diisi";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Format email tidak valid";
        }
        if (!formData.phone) newErrors.phone = "Nomor HP wajib diisi";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setFormData({
            service: "",
            date: "",
            time: "",
            name: "",
            email: "",
            phone: "",
        });
    };

    return (
        <section id="booking" className="section-padding bg-gray-50 scroll-mt-20">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">Pesan Sesi Konsultasi</h2>
                        <p className="text-gray-600 text-lg">Ambil langkah pertama menuju transformasi bisnis yang berkelanjutan dengan bantuan tim ahli kami.</p>
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-3xl overflow-hidden border border-gray-100">
                        <form onSubmit={handleSubmit} className="p-8 md:p-16 space-y-12">
                            <div className="grid md:grid-cols-2 gap-10">
                                {/* Service Selection */}
                                <div className="space-y-3">
                                    <label className="block text-xs font-bold text-navy uppercase tracking-[0.2em] ml-1">Pilih Layanan</label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className={`w-full p-5 bg-gray-50 border rounded-2xl appearance-none outline-none transition-all duration-300 ${errors.service ? "border-red-500 ring-4 ring-red-500/10" : "border-gray-200 focus:border-gold focus:ring-4 focus:ring-gold/10"
                                                }`}
                                        >
                                            <option value="">Pilih Layanan</option>
                                            {services.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                        {errors.service && <p className="text-red-500 text-[10px] font-bold uppercase mt-2 ml-1 tracking-wider">{errors.service}</p>}
                                    </div>
                                </div>

                                {/* Date & Time */}
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-3">
                                        <label className="block text-xs font-bold text-navy uppercase tracking-[0.2em] ml-1">Tanggal</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            min={new Date().toISOString().split("T")[0]}
                                            className={`w-full p-5 bg-gray-50 border rounded-2xl outline-none transition-all duration-300 ${errors.date ? "border-red-500 ring-4 ring-red-500/10" : "border-gray-200 focus:border-gold focus:ring-4 focus:ring-gold/10"
                                                }`}
                                        />
                                        {errors.date && <p className="text-red-500 text-[10px] font-bold uppercase mt-2 ml-1 tracking-wider">{errors.date}</p>}
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-xs font-bold text-navy uppercase tracking-[0.2em] ml-1">Waktu</label>
                                        <input
                                            type="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            className={`w-full p-5 bg-gray-50 border rounded-2xl outline-none transition-all duration-300 ${errors.time ? "border-red-500 ring-4 ring-red-500/10" : "border-gray-200 focus:border-gold focus:ring-4 focus:ring-gold/10"
                                                }`}
                                        />
                                        {errors.time && <p className="text-red-500 text-[10px] font-bold uppercase mt-2 ml-1 tracking-wider">{errors.time}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <label className="block text-xs font-bold text-navy uppercase tracking-[0.2em] ml-1">Informasi Kontak</label>
                                <div className="grid md:grid-cols-1 gap-6">
                                    <div className="relative group">
                                        <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors" size={20} />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Nama Lengkap"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full p-5 pl-16 bg-gray-50 border rounded-2xl outline-none transition-all duration-300 ${errors.name ? "border-red-500 ring-4 ring-red-500/10" : "border-gray-200 focus:border-gold focus:ring-4 focus:ring-gold/10"
                                                }`}
                                        />
                                        {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase mt-2 ml-1 tracking-wider">{errors.name}</p>}
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors" size={20} />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email Perusahaan"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full p-5 pl-16 bg-gray-50 border rounded-2xl outline-none transition-all duration-300 ${errors.email ? "border-red-500 ring-4 ring-red-500/10" : "border-gray-200 focus:border-gold focus:ring-4 focus:ring-gold/10"
                                                    }`}
                                            />
                                            {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase mt-2 ml-1 tracking-wider">{errors.email}</p>}
                                        </div>
                                        <div className="relative group">
                                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors" size={20} />
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="No. WhatsApp / HP"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full p-5 pl-16 bg-gray-50 border rounded-2xl outline-none transition-all duration-300 ${errors.phone ? "border-red-500 ring-4 ring-red-500/10" : "border-gray-200 focus:border-gold focus:ring-4 focus:ring-gold/10"
                                                    }`}
                                            />
                                            {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase mt-2 ml-1 tracking-wider">{errors.phone}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-navy hover:bg-navy-dark text-white py-6 rounded-2xl font-bold text-lg shadow-2xl shadow-navy/20 transition-all transform hover:-translate-y-1 active:scale-[0.98]"
                            >
                                Konfirmasi Jadwal Konsultasi
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {isSubmitted && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={resetForm}
                            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white rounded-[2.5rem] shadow-3xl p-10 md:p-16 max-w-lg w-full text-center overflow-hidden border border-gray-100"
                        >
                            <button
                                onClick={resetForm}
                                className="absolute top-8 right-8 text-gray-400 hover:text-navy transition-colors p-2 rounded-full hover:bg-gray-50"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-8 relative inline-block">
                                <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl animate-pulse"></div>
                                <div className="relative bg-gold/10 p-6 rounded-full inline-block">
                                    <CheckCircle size={64} className="text-gold" />
                                </div>
                            </div>

                            <h3 className="text-3xl font-serif font-bold text-navy mb-6">Pemesanan Berhasil!</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                Terima kasih, <span className="font-bold text-navy">{formData.name}</span>. Tim konsultan kami akan menghubungi Anda melalui WhatsApp atau Email dalam waktu maksimal 1x24 jam untuk melakukan verifikasi jadwal.
                            </p>

                            <button
                                onClick={resetForm}
                                className="w-full bg-navy hover:bg-navy-dark text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-navy/20 transition-all transform hover:-translate-y-1 active:scale-[0.98]"
                            >
                                Mengerti, Terima Kasih
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default BookingForm;
