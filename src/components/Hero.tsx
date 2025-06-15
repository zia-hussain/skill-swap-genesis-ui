
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Rocket, TrendingUp, ArrowDown } from "lucide-react";

// Glassy light badge
function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
      className="inline-flex items-center gap-2 px-7 py-2 glass-premium shadow-glass text-xs sm:text-sm text-brand-blue font-semibold font-inter select-none mx-auto mb-4"
    >
      <Sparkles className="text-brand-yellow w-4 h-4 me-1 animate-glow" />
      <span className="font-bold tracking-wide text-brand-blue">Early Access · Invite-Only</span>
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ms-1" />
    </motion.div>
  );
}

// Glassy light background orbs
function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <motion.div
        className="absolute -top-24 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-yellow/30 to-brand-blue/15 blur-[120px] opacity-60"
        animate={{
          y: [0, -40, 0],
          x: [0, 42, 0],
          scale: [1, 1.13, 1],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-brand-blue/25 to-brand-yellow/10 blur-[90px] opacity-25"
        animate={{
          y: [0, 30, 0],
          x: [0, -50, 0],
          scale: [1.1, 0.94, 1.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-[180px] h-[180px] rounded-full bg-white/30 blur-2xl opacity-25"
        animate={{
          y: [0, -25, 0],
          x: [0, 30, 0],
          scale: [1.1, 1.2, 1.05]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function GradientHeadline() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
      className="text-center font-black mb-7 w-full px-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] gradient-text-brand"
      style={{
        WebkitTextStroke: 'transparent',
      }}
    >
      <span>
        Unlock Your <span className="bg-gradient-to-r from-brand-yellow via-brand-blue to-brand-yellow bg-clip-text text-transparent font-black">Learning Journey</span>
      </span>
      <br />
      <span className="bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-blue bg-clip-text text-transparent">
        with Skillful, Glassy Swaps
      </span>
    </motion.h1>
  );
}

function HeroSubtext() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.29, ease: "easeOut" }}
        className="max-w-xl text-center text-base sm:text-xl md:text-2xl text-brand-blue font-medium mb-1"
      >
        The smoothest way to grow <span className="text-brand-yellow font-semibold underline underline-offset-2 decoration-wavy decoration-brand-blue hover:text-brand-blue transition">by helping others grow.</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.66, delay: 0.35, ease: "easeOut" }}
        className="max-w-md text-center text-brand-blue/70 text-sm sm:text-lg mb-8"
      >
        Connect, learn, and transform together. Premium glassy community, true momentum.
      </motion.p>
    </>
  );
}

function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.64, delay: 0.41, ease: "easeOut" }}
      className="flex flex-col xs:flex-row gap-3 xs:gap-6 w-full xs:w-auto justify-center items-center mb-7"
    >
      <Link
        to="/register-interest"
        className="py-3 px-8 rounded-full bg-gradient-to-br from-brand-yellow to-brand-blue font-bold text-lg text-gray-900 transition-all duration-150 shadow-yellow-lg hover:shadow-2xl hover:scale-105 focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 flex items-center gap-2"
        style={{
          boxShadow: "0 8px 32px 0 rgba(255, 215, 65, 0.20), 0 1.5px 6px 0 rgba(66,100,255,0.13)"
        }}
      >
        <Rocket className="w-5 h-5" />
        Join Early Access
        <TrendingUp className="w-5 h-5" />
      </Link>
      <button
        type="button"
        className="py-3 px-8 rounded-full font-bold bg-white/80 text-brand-blue border border-brand-blue/10 shadow hover:shadow-md text-lg transition-all hover:bg-brand-yellow/25 hover:text-brand-blue focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 flex items-center gap-2"
        onClick={() =>
          document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore How It Works
        <ArrowDown className="w-5 h-5" />
      </button>
    </motion.div>
  );
}

function SocialProofCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95, delay: 0.49, ease: "easeOut" }}
      className="flex flex-col items-center gap-1 glass-card border border-brand-blue/10 shadow-glass px-7 py-4 max-w-xs mx-auto mt-5"
      style={{
        boxShadow: "0 10px 32px 0 rgba(50, 130, 255, 0.10), 0 4px 14px rgba(255, 215, 65, 0.09)"
      }}
    >
      <span className="text-brand-blue font-semibold text-sm tracking-tight">
        1,000+ early adopters
      </span>
      <span className="text-gray-500 flex items-center gap-1 text-xs">
        Built with <span role="img" aria-label="love">❤️</span> by Samantha
      </span>
      <span className="flex items-center gap-1 text-brand-yellow font-semibold text-xs">
        <Sparkles className="w-4 h-4" /> Invite Only
      </span>
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
      className="z-20 flex flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-8 xs:bottom-14"
    >
      <button
        aria-label="Scroll down"
        className="rounded-full w-12 h-12 flex items-center justify-center border-2 border-brand-yellow/50 bg-white/85 shadow-glass focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 active:scale-98"
        onClick={() =>
          document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="w-2 h-6 bg-brand-blue rounded-full animate-bounce" />
      </button>
      <span className="text-xs text-brand-blue/80 font-medium mt-1">Scroll to explore</span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[98svh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-white via-yellow-50/80 to-blue-50/55 font-inter px-4 pt-16 sm:pt-28 pb-16 w-full text-brand-blue">
      <HeroBackground />
      <div className="z-10 flex flex-col items-center w-full relative">
        <HeroBadge />
        <GradientHeadline />
        <HeroSubtext />
        <CTAButtons />
        <SocialProofCard />
      </div>
      <ScrollIndicator />
    </section>
  );
}
