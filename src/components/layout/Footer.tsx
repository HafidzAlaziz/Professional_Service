import React from "react";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-serif font-bold text-navy mb-6 block">
                            PRO<span className="text-gold">SERVICE</span>
                        </span>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Empowering businesses through expert strategic consulting and innovative solutions since 2014.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all shadow-sm">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all shadow-sm">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all shadow-sm">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-navy mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#services" className="text-gray-500 hover:text-gold text-sm transition-colors">Layanan</a></li>
                            <li><a href="#portfolio" className="text-gray-500 hover:text-gold text-sm transition-colors">Portofolio</a></li>
                            <li><a href="#testimonials" className="text-gray-500 hover:text-gold text-sm transition-colors">Testimonial</a></li>
                            <li><a href="#faq" className="text-gray-500 hover:text-gold text-sm transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-navy mb-6 uppercase tracking-wider text-sm">Layanan Kami</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors">Konsultasi Bisnis</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors">Strategi Pemasaran</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors">Audit Operasional</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors">Manajemen Keuangan</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-navy mb-6 uppercase tracking-wider text-sm">Hubungi Kami</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-gold shrink-0" />
                                <span className="text-gray-500 text-sm">Sudirman Central Business District, Jakarta</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-gold shrink-0" />
                                <span className="text-gray-500 text-sm">+62 21 555-0123</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-gold shrink-0" />
                                <span className="text-gray-500 text-sm">hello@proservice.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 text-center bg-gray-50 rounded-b-lg">
                    <p className="text-gray-400 text-xs">
                        © {new Date().getFullYear()} PROSERVICE INDONESIA. All rights reserved. Professional Services Boilerplate.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
