
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4">
      {/* Animated Gradient Background */}
      <div
        aria-hidden
        className="absolute inset-0 w-full h-full
          bg-gradient-to-br from-[#FFFDEB] via-[#F5C738]/30 to-[#0072CE]/10 
          opacity-80"
        style={{
          zIndex: 0,
          filter: "blur(12px)",
          pointerEvents: "none"
        }}
      />
      {/* Glassmorphic Card for Content */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 max-w-2xl w-full mx-auto text-center
        py-12 px-6 md:py-24 rounded-3xl bg-white/70 backdrop-blur-lg shadow-2xl border border-white/60"
        style={{ boxShadow: "0 12px 55px 0 rgba(0,0,0,0.09)" }}
      >
        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1, duration: 0.85, ease: [0.19, 1, 0.22, 1]
          }}
          className="font-extrabold text-[2.5rem] md:text-[3.7rem] leading-tight tracking-tighter mb-6 text-gray-900 font-inter"
          style={{ letterSpacing: "-1.5px", lineHeight: 1.08 }}
        >
          Skill-Powered Learning.<br className="hidden md:block" />
          <span className="bg-gradient-to-r from-brand-yellow via-yellow-100 to-brand-blue bg-clip-text text-transparent">
            Human-First Connections.
          </span>
        </motion.h1>
        {/* Animated Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25, duration: 0.8
          }}
          className="text-lg md:text-2xl text-gray-700 mb-10 font-inter"
        >
          A global skill-sharing app where you grow <span className="font-semibold text-brand-blue">by helping others grow</span>.
        </motion.p>
        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.7 }}
        >
          <a
            href="/register-interest"
            className="inline-block bg-brand-yellow text-brand-blue text-lg md:text-xl font-bold py-3 px-8 rounded-xl shadow-soft transition-all hover:bg-brand-blue/90 hover:text-white border border-brand-yellow/30
              backdrop-blur-md"
            style={{ boxShadow: "0 3px 24px 0 #F5C73822" }}
          >
            Join Early Access
          </a>
          <span className="inline-block w-4"></span>
          <a
            href="#how-it-works"
            className="inline-block text-brand-blue text-lg md:text-xl font-semibold hover:underline underline-offset-4 transition"
          >
            Explore How It Works
          </a>
        </motion.div>
      </motion.div>
      {/* Animated Scroll Icon */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.9, type: "spring" }}
        className="absolute left-1/2 -translate-x-1/2 bottom-12 z-20 flex flex-col items-center cursor-pointer animate-bounce"
      >
        <a href="#how-it-works" className="p-3 bg-white/70 rounded-full shadow border border-brand-yellow/20 hover:scale-110 transition"
          style={{ backdropFilter: "blur(8px)" }}
          aria-label="Scroll down to learn how it works"
        >
          <ArrowDown className="w-7 h-7 text-brand-blue" strokeWidth={2.1} />
        </a>
        <span className="mt-1 text-xs text-brand-blue">Scroll</span>
      </motion.div>
    </section>
  );
}
