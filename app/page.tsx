import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ManutencaoPreventiva from "@/components/sections/ManutencaoPreventiva";
import FachadasPrediais from "@/components/sections/FachadasPrediais";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <ManutencaoPreventiva />
        <FachadasPrediais />
        {/* EngenhariaServicos adicionada na etapa seguinte */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
