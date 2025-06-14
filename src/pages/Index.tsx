
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import { Link } from "react-router-dom";

const Index = () => (
  <div className="bg-neutralBg min-h-screen font-inter">
    <NavBar />
    <main>
      {/* Hero */}
      <section className="container px-4 pt-16 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fadeInUp tracking-tight">
          Skill-Powered Learning,<br className="hidden md:inline"/> Human-First Connections
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-gray-700">
          Join the world’s first platform to exchange skills, not money.<br /> Unlock your potential and empower others—together!
        </p>
        <Link
          to="/register-interest"
          className="inline-block bg-brand-yellow text-brand-blue text-lg font-bold py-3 px-8 rounded-lg shadow-soft animate-fadeInUp transition hover:bg-brand-blue hover:text-white"
        >
          Join the Movement
        </Link>
      </section>
      <HowItWorks />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

export default Index;
