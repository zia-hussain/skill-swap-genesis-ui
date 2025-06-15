
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.18,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Index = () => {
  return (
    <div className="bg-[#F6FAFD] min-h-screen font-inter" data-scroll-container>
      <NavBar />
      <main>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Hero />
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          custom={1}
        >
          <HowItWorks />
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          custom={2}
        >
          <Testimonials />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

