import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import BookingForm from "@/components/sections/BookingForm";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />

            {/* Services Section Placeholder for spacing or small content */}
            <section id="services" className="py-10 bg-white">
                {/* Can be expanded if needed */}
            </section>

            <PortfolioGallery />
            <Testimonials />
            <BookingForm />
            <FAQ />
            <Footer />
        </main>
    );
}
