import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useLocomotiveScroll } from "@/hooks/useLocomotiveScroll";

const Index = () => {
  useLocomotiveScroll();
  return (
    <div className="bg-[#F6FAFD] min-h-screen font-inter" data-scroll-container>
      <NavBar />
      <main>
        <Hero />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
