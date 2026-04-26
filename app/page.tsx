import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Bonuses from "@/components/Bonuses";
import Cases from "@/components/Cases";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import Tariffs from "@/components/Tariffs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Program />
        <Tariffs />
        <Bonuses />
        <Cases />
        <Reviews />
        <Results />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
