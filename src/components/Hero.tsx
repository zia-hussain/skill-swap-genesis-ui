
import { motion } from "framer-motion";
import { Sparkles, Rocket, TrendingUp, ArrowDown } from "lucide-react";

function GradientHeadline() {
  return (
    <h1 className="text-center leading-[1.05] font-black mb-5 w-full px-2
     text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight inline-block"
      style={{
        lineHeight: '1.09',
        WebkitTextStroke: 'transparent',
      }}>
      <span className="inline-block bg-gradient-to-br from-brand-yellow via-brand-blue to-brand-yellow bg-clip-text text-transparent drop-shadow-lg">
        Unlock Learning with Minimal, <span className="font-black text-transparent bg-gradient-to-r from-brand-yellow via-gray-400 to-brand-blue bg-clip-text">Skillful Swaps</span>
      </span>
    </h1>
  );
}

function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
      className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/90 shadow-glass text-xs sm:text-sm text-gray-700 font-semibold font-inter select-none mx-auto mb-4"
      style={{
        boxShadow: "0 7px 28px 0 rgba(255, 215, 65, 0.13), 0 1.5px 4px 0 rgba(66,100,255,0.05)"
      }}
    >
      <Sparkles className="text-brand-yellow w-4 h-4 me-1" />
      <span className="font-bold tracking-wide">Early Access · Invite-Only</span>
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
        transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
        className="max-w-2xl text-center text-base xs:text-lg sm:text-2xl text-gray-800 font-medium mb-2"
      >
        The smoothest way to grow <span className="text-brand-blue font-semibold underline underline-offset-2 decoration-wavy decoration-brand-yellow hover:text-brand-yellow transition">by helping others grow.</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.66, delay: 0.4, ease: "easeOut" }}
        className="max-w-xl text-center text-gray-500 text-sm xs:text-base mb-10"
      >
        Connect, learn, and transform. Premium learning community powered by true momentum.
      </motion.p>
    </>
  );
}

function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.51, ease: "easeOut" }}
      className="flex flex-col xs:flex-row gap-3 xs:gap-5 w-full xs:w-auto justify-center items-center mb-8"
    >
      <a
        href="/register-interest"
        className="py-3 px-8 rounded-full bg-brand-yellow font-bold text-lg text-neutral-900 shadow-yellow-lg hover:shadow-xl hover:brightness-105 transition-all focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 flex items-center gap-2 hover-scale"
        style={{
          boxShadow: "0 8px 32px 0 rgba(255, 215, 65, 0.15), 0 1.5px 4px 0 rgba(66,100,255,0.06)"
        }}
      >
        <Rocket className="w-5 h-5" />
        Join Early Access
        <TrendingUp className="w-5 h-5" />
      </a>
      <button
        type="button"
        className="py-3 px-8 rounded-full font-bold bg-white/90 text-neutral-900 border border-gray-200 shadow hover:shadow-xl text-lg transition-all hover:bg-gray-50 hover:text-brand-blue focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 flex items-center gap-2 hover-scale"
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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.88, delay: 0.65, ease: "easeOut" }}
      className="flex flex-col items-center gap-1 bg-white/80 border border-white/60 backdrop-blur-2xl rounded-2xl shadow-glass px-6 py-3 max-w-xs mx-auto"
      style={{
        boxShadow: "0 10px 32px 0 rgba(50, 130, 255, 0.11), 0 2px 8px rgba(255, 215, 65, 0.09)"
      }}
    >
      <span className="text-brand-blue font-semibold text-sm tracking-tight">
        1,000+ early adopters
      </span>
      <span className="text-gray-600 flex items-center gap-1 text-xs">
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
      className="z-20 flex flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-6 xs:bottom-9"
    >
      <button
        aria-label="Scroll down"
        className="rounded-full w-11 h-11 flex items-center justify-center border-2 border-gray-200 bg-white/80 shadow-glass focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 active:scale-98"
        onClick={() =>
          document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="w-2 h-5 bg-brand-blue rounded-full animate-bounce" />
      </button>
      <span className="text-xs text-gray-400 font-medium mt-1">Scroll to explore</span>
    </motion.div>
  );
}

// Soft animated orb background
function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Large top orb */}
      <motion.div
        className="absolute -top-24 left-0 w-[440px] h-[440px] rounded-full bg-gradient-to-br from-brand-yellow/40 to-brand-blue/30 blur-3xl opacity-60"
        animate={{
          y: [0, -40, 0],
          x: [0, 42, 0],
          scale: [1, 1.13, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Mid blue orb */}
      <motion.div
        className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-brand-blue/35 to-brand-yellow/20 blur-[100px] opacity-28"
        animate={{
          y: [0, 30, 0],
          x: [0, -60, 0],
          scale: [1.12, 0.94, 1.12],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Soft white lower orb */}
      <motion.div
        className="absolute bottom-20 left-1/3 w-[200px] h-[200px] rounded-full bg-white/45 blur-3xl opacity-14"
        animate={{
          y: [0, -25, 0],
          x: [0, 30, 0],
          scale: [1.07, 1.15, 1.07]
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// Main Hero Component
export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#fafdff] via-[#f8faff] to-[#ececf8] font-inter px-4 pt-14 sm:pt-20 pb-10 w-full">
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
