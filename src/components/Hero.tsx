
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100svh] sm:min-h-screen overflow-x-hidden font-inter bg-gradient-to-br from-[#fafdff] via-[#f7f8fa] to-[#ececf8]">
      {/* Animated floating orbs for glassmorphism visual */}
      <div className="pointer-events-none absolute inset-0 -z-1 select-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.07, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-8 left-8 sm:top-16 sm:left-24 w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-brand-yellow/40 to-brand-blue/30 blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -10, 0],
            scale: [1, 0.93, 1],
            opacity: [0.22, 0.35, 0.22],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-48 right-8 sm:top-32 sm:right-32 w-52 h-52 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-brand-blue/20 to-brand-yellow/10 blur-2xl opacity-25"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.07],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-2/3 bottom-16 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-white/40 blur-2xl opacity-10"
        />
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-5 py-2 mb-5 bg-white/70 backdrop-blur-lg rounded-full border border-white/30 font-semibold text-xs sm:text-sm text-gray-700 shadow-lg select-none"
        style={{ zIndex: 3 }}
      >
        <span role="img" aria-label="sparkles">✨</span> Now in Early Access
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ms-1" />
      </motion.div>

      {/* Headline and subheadline */}
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.22, ease: "easeOut" }}
        className="text-4xl xs:text-5xl md:text-7xl font-extrabold text-center mb-4 bg-gradient-to-r from-gray-900 via-brand-yellow to-brand-blue bg-clip-text text-transparent leading-tight"
        style={{ zIndex: 3 }}
      >
        Minimal. Modern. <br />
        <span className="bg-gradient-to-r from-brand-yellow via-yellow-300 to-brand-blue bg-clip-text text-transparent">
          Skill-Powered Learning.
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.33, ease: "easeOut" }}
        className="text-base xs:text-lg md:text-2xl text-gray-700 text-center font-medium mb-3 max-w-2xl mx-auto"
      >
        The smoothest way to grow{" "}
        <span className="text-brand-blue font-semibold">by helping others grow</span>.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.37, ease: "easeOut" }}
        className="mx-auto max-w-xl text-gray-500 text-center text-sm xs:text-base mb-9"
      >
        Connect, learn, transform. The learning community with real momentum — not just a trend.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.82, delay: 0.41, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full justify-center mb-3 z-10"
      >
        <Link
          to="/register-interest"
          className="w-full sm:w-auto py-3 px-7 rounded-full bg-brand-yellow text-neutral-900 font-bold text-lg shadow-yellow-lg hover:brightness-105 hover:scale-105 transition-all"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(255, 215, 65, 0.18), 0 1.5px 4px 0 rgba(66,100,255,0.02)"
          }}
        >
          Join Early Access
        </Link>
        <button
          type="button"
          className="w-full sm:w-auto py-3 px-7 rounded-full font-bold bg-white/85 text-neutral-800 border border-gray-200 shadow hover:shadow-xl text-lg transition-all hover:bg-gray-50 active:scale-98"
          onClick={() =>
            document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore How It Works
        </button>
      </motion.div>

      {/* Social Proof Group */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.54 }}
        className="flex flex-col xs:flex-row gap-3 justify-center items-center text-base z-10"
      >
        <span className="text-brand-blue font-bold" style={{ color: "#3c79f5" }}>
          1,000+
        </span>
        <span className="text-gray-600 font-semibold">early adopters</span>
        <span className="hidden xs:inline text-gray-400">·</span>
        <span className="text-gray-600 font-semibold flex items-center gap-1">
          Built with <span role="img" aria-label="love">❤️</span> by Samantha
        </span>
      </motion.div>

      {/* Scroll Down Arrow Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 1.1 }}
        className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 bottom-3 xs:bottom-6 z-30"
      >
        <button
          tabIndex={-1}
          aria-label="Scroll down"
          className="rounded-full w-10 h-10 flex items-center justify-center border-2 border-gray-200 bg-white/70 mb-1 backdrop-blur-md shadow-glass active:scale-98"
          onClick={() =>
            document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="w-2 h-5 bg-gray-400 rounded-full animate-bounce" />
        </button>
        <span className="text-xs text-gray-400 font-medium">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
