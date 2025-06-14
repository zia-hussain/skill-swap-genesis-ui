import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

const Index = () => (
  <div className="bg-neutralBg min-h-screen font-inter">
    <NavBar />
    <main>
      <Hero />
      {/* Placeholder for animated scroll down sections (add later) */}
      <div id="how-it-works">
        {/* We'll add this section after Hero is perfect */}
      </div>
      {/* <HowItWorks /> */}
      {/* <Testimonials /> */}
    </main>
    <Footer />
  </div>
);

export default Index;
