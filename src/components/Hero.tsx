
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Rocket, TrendingUp, ArrowDown } from "lucide-react";

function GradientHeadline() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
      className="text-center font-black mb-7 w-full px-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] bg-gradient-to-b from-brand-yellow via-brand-blue to-blue-900 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(66,100,255,0.18)]"
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

function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
      className="inline-flex items-center gap-2 px-7 py-2 bg-slate-800/80 backdrop-blur-3xl rounded-xl border border-white/20 shadow-glass text-xs sm:text-sm text-gray-100 font-semibold font-inter select-none mx-auto mb-4"
      style={{
        boxShadow: "0 7px 28px 0 rgba(23,33,50,0.13), 0 2px 6px 0 rgba(66,100,255,0.09)"
      }}
    >
      <Sparkles className="text-brand-yellow w-4 h-4 me-1 animate-glow" />
      <span className="font-bold tracking-wide text-white drop-shadow">Early Access · Invite-Only</span>
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ms-1" />
    </motion.div>
  );
}

function HeroSubtext() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.29, ease: "easeOut" }}
        className="max-w-xl text-center text-base sm:text-xl md:text-2xl text-gray-300 font-medium mb-2"
      >
        The smoothest way to grow <span className="text-brand-yellow font-semibold underline underline-offset-2 decoration-wavy decoration-brand-blue hover:text-brand-blue transition">by helping others grow.</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.66, delay: 0.35, ease: "easeOut" }}
        className="max-w-md text-center text-gray-400 text-sm sm:text-lg mb-10"
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
        className="py-3 px-8 rounded-full bg-gradient-to-br from-brand-yellow to-brand-blue font-bold text-lg text-gray-900 transition-all duration-150 shadow-lg hover:shadow-2xl hover:scale-105 focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 flex items-center gap-2"
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
        className="py-3 px-8 rounded-full font-bold bg-white/10 text-white border border-white/10 shadow hover:shadow-lg text-lg transition-all hover:bg-brand-blue/30 hover:text-brand-yellow focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 flex items-center gap-2"
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
      className="flex flex-col items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-glass px-7 py-4 max-w-xs mx-auto mt-5"
      style={{
        boxShadow: "0 10px 32px 0 rgba(50, 130, 255, 0.14), 0 4px 14px rgba(255, 215, 65, 0.08)"
      }}
    >
      <span className="text-brand-blue font-semibold text-sm tracking-tight">
        1,000+ early adopters
      </span>
      <span className="text-gray-300 flex items-center gap-1 text-xs">
        Built with <span role="img" aria-label="love">❤️</span> by Samantha
      </span>
      <span className="flex items-center gap-1 text-brand-yellow font-semibold text-xs">
        <Sparkles className="w-4 h-4" /> Invite Only
      </span>
    </motion.div>
  );
}

// Glassy animated orb background (dark)
function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Glow gradients - top/left */}
      <motion.div
        className="absolute -top-28 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-brand-yellow/60 to-brand-blue/40 blur-[120px] opacity-75"
        animate={{
          y: [0, -50, 0],
          x: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Glow gradients - right */}
      <motion.div
        className="absolute top-1/4 right-0 w-[330px] h-[330px] rounded-full bg-gradient-to-tr from-brand-blue/65 to-brand-yellow/30 blur-[100px] opacity-45"
        animate={{
          y: [0, 30, 0],
          x: [0, -70, 0],
          scale: [1.08, 0.93, 1.11],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Glow gradients - bottom */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[230px] h-[230px] rounded-full bg-white/16 blur-3xl opacity-13"
        animate={{
          y: [0, -28, 0],
          x: [0, 18, 0],
          scale: [1, 1.22, 1]
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// Scroll Down Indicator
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
        className="rounded-full w-12 h-12 flex items-center justify-center border-2 border-brand-yellow/50 bg-white/10 backdrop-blur shadow-glass focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 active:scale-98"
        onClick={() =>
          document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="w-2 h-6 bg-brand-blue rounded-full animate-bounce" />
      </button>
      <span className="text-xs text-gray-400 font-medium mt-1">Scroll to explore</span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[98svh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#121826] via-[#172347] to-[#0c101a] font-inter px-4 pt-16 sm:pt-28 pb-16 w-full text-white">
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
