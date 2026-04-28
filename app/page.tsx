import About from "@/components/About";
import Bonuses from "@/components/Bonuses";
import Cases from "@/components/Cases";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ForWhom from "@/components/ForWhom";
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
        <ForWhom />
        <CTASection />
        <Cases />
        <About />
        <Program />
        <Results />
        <Bonuses />
        <Tariffs />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
