import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import BeforeAfter from "./components/BeforeAfter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Process />
      <Pricing />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}