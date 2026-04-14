import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ServicesOverview from "@/components/sections/ServicesOverview";
import MaintenancePlans from "@/components/sections/MaintenancePlans";
import MaintenanceDetails from "@/components/sections/MaintenanceDetails";
import Renovations from "@/components/sections/Renovations";
import Facades from "@/components/sections/Facades";
import WhyAlpha3 from "@/components/sections/WhyAlpha3";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <ServicesOverview />
        <MaintenancePlans />
        <MaintenanceDetails />
        <Renovations />
        <Facades />
        <WhyAlpha3 />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
