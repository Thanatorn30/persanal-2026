"use client";
import PageFrame from "@/components/common/PageFrame/PageFrame";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Pricing from "./Pricing/Pricing";
import Testimonials from "./Testimonials/Testimonials";
import Faq from "./Faq/Faq";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

// หน้า Home ประกอบจากแต่ละ section (component แยกไฟล์)
export default function HomePage() {
  return (
    <PageFrame>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </PageFrame>
  );
}
