import Hero from "../components/sections/Hero";
import Benefits from "../components/sections/Benefits";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
