
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const Index = () => {
  return (
    <div className="bg-[#F6FAFD] min-h-screen font-inter" data-scroll-container>
      <NavBar />
      <main>
        {/* Hero Section: animate immediately */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            delay: 0.05
          }}
        >
          <Hero />
        </motion.div>
        {/* How It Works: slight delay for stagger effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.85,
            ease: "easeInOut",
            delay: 0.20
          }}
        >
          <HowItWorks />
        </motion.div>
        {/* Testimonials: longer delay for further stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.35
          }}
        >
          <Testimonials />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
