import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KeyMetrics from "@/components/KeyMetrics";
import LogoAnimation from "@/components/LogoAnimation";
import NavBar from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoAnimation />
      <About />
      <Portfolio />
      <KeyMetrics />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
