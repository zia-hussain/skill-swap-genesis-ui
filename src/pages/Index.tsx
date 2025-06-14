
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-yellow-50/20 min-h-screen font-inter">
    <NavBar />
    <main>
      <Hero />
      <HowItWorks />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

export default Index;
