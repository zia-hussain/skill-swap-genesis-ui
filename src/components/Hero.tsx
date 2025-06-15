
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center px-4 py-8 sm:px-8 font-inter bg-gradient-to-tr from-[#fafdff] via-[#f8faff] to-[#ececf8] overflow-hidden">
      {/* Visual glass orbs (background) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          className="absolute top-8 left-8 w-60 h-60 rounded-full bg-gradient-to-br from-brand-yellow/40 to-brand-blue/30 blur-3xl opacity-60"
          animate={{
            y: [0, -36, 0],
            x: [0, 28, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-72 h-72 rounded-full bg-gradient-to-tr from-brand-blue/20 to-brand-yellow/25 blur-[60px] opacity-25"
          animate={{
            y: [0, 32, 0],
            x: [0, -16, 0],
            scale: [1, 0.89, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-6 left-1/3 w-32 h-32 rounded-full bg-white/30 blur-3xl opacity-10"
          animate={{
            y: [0, -22, 0],
            x: [0, 30, 0],
            scale: [1.1, 1.2, 1.1]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Floating glass badge */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="z-10 relative mb-5 inline-flex items-center gap-2 px-6 py-2.5 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/80/40 font-semibold text-xs sm:text-sm text-gray-700 shadow-glass select-none"
      >
        <span role="img" aria-label="sparkles" className="text-brand-yellow">✨</span>
        <span className="font-bold tracking-wide">Early Access · Invite-Only</span>
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ms-1" />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.28, ease: "easeOut" }}
        className="z-10 text-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black leading-[1.06] bg-gradient-to-tr from-gray-700 via-brand-yellow to-brand-blue bg-clip-text text-transparent drop-shadow-md mb-4"
      >
        Unlock Learning with <br className="hidden xs:block" />
        <span className="bg-gradient-to-r from-brand-yellow via-yellow-300 to-brand-blue bg-clip-text text-transparent">
          Minimal, Skillful Swaps
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        className="z-10 max-w-2xl mx-auto text-center text-base xs:text-lg sm:text-2xl text-gray-800 font-medium mb-2"
      >
        The smoothest way to grow{" "}
        <span className="text-brand-blue font-semibold">by helping others grow</span>.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.39, ease: "easeOut" }}
        className="z-10 max-w-xl mx-auto text-center text-gray-500 text-sm xs:text-base mb-10"
      >
        Connect, learn, and transform. Premium learning community powered by true momentum.
      </motion.p>
      
      {/* Call To Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.46, ease: "easeOut" }}
        className="z-10 flex flex-col gap-3 xs:flex-row xs:gap-5 w-full xs:w-auto justify-center items-center mb-7"
      >
        <Link
          to="/register-interest"
          className="py-3 px-8 rounded-full bg-brand-yellow font-bold text-lg text-neutral-900 shadow-yellow-lg hover:shadow-xl hover:brightness-105 transition-all focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
          style={{
            boxShadow: "0 8px 32px 0 rgba(255, 215, 65, 0.15), 0 1.5px 4px 0 rgba(66,100,255,0.06)"
          }}
        >
          Join Early Access
        </Link>
        <button
          type="button"
          className="py-3 px-8 rounded-full font-bold bg-white/75 text-neutral-900 border border-gray-200 shadow hover:shadow-xl text-lg transition-all hover:bg-gray-50 hover:text-brand-blue focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
          onClick={() =>
            document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore How It Works
        </button>
      </motion.div>

      {/* Social Proof Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
        className="z-10 flex flex-col xs:flex-row gap-3 justify-center items-center text-sm xs:text-base bg-white/60 border border-white/50 backdrop-blur-xl rounded-2xl shadow-glass px-5 py-2.5"
      >
        <span className="text-brand-blue font-semibold tracking-tight">1,000+ early adopters</span>
        <span className="hidden xs:inline text-gray-300">·</span>
        <span className="text-gray-600 flex gap-1 items-center">
          Built with <span role="img" aria-label="love">❤️</span> by Samantha
        </span>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.80, delay: 1.3, ease: "easeOut" }}
        className="z-20 flex flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-5 xs:bottom-8"
      >
        <button
          aria-label="Scroll down"
          className="rounded-full w-10 h-10 flex items-center justify-center border-2 border-gray-200 bg-white/70 shadow-glass focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 active:scale-98"
          onClick={() =>
            document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="w-2 h-5 bg-brand-blue rounded-full animate-bounce" />
        </button>
        <span className="text-xs text-gray-400 font-medium mt-1">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
