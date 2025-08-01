import Navigation from "@/components/layout/navigation"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ServicesSection from "@/components/sections/services-section"
import FleetSection from "@/components/sections/fleet-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FleetSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
