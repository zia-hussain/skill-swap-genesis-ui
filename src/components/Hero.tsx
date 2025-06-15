
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-[#fafdff] via-[#f7f8fa] to-[#ececf8] px-2 pt-28 pb-12 sm:pt-36 overflow-x-hidden font-inter">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glowy glass orbs */}
        <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-gradient-to-br from-brand-yellow/30 to-brand-blue/25 blur-3xl opacity-30"></div>
        <div className="absolute right-8 top-24 w-56 h-56 rounded-full bg-gradient-to-tr from-brand-blue/30 to-brand-yellow/10 blur-2xl opacity-25"></div>
        <div className="absolute left-1/3 bottom-12 w-28 h-28 rounded-full bg-white/60 blur-2xl opacity-10"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-premium border border-white/30 flex flex-col items-center max-w-2xl w-full px-6 py-10 rounded-3xl shadow-glass mx-auto z-10"
      >
        <span className="flex items-center gap-2 px-5 py-2 mb-5 bg-white/60 rounded-full border border-white/40 font-semibold text-sm text-gray-700 shadow-lg backdrop-blur-lg select-none">
          🟢 Now in Early Access
        </span>
        <h1 className="text-4xl xs:text-5xl md:text-7xl font-extrabold text-center mb-5 bg-gradient-to-r from-gray-900 via-brand-yellow to-brand-blue bg-clip-text text-transparent leading-tight">
          Minimal. Modern. <br />
          <span className="bg-gradient-to-r from-brand-yellow via-yellow-300 to-brand-blue bg-clip-text text-transparent">
            Skill-Powered Learning.
          </span>
        </h1>
        <p className="text-base xs:text-lg md:text-2xl text-gray-700 text-center mb-4 mt-1 font-medium">
          The smoothest way to grow{" "}
          <span className="text-brand-blue font-semibold">by helping others grow</span>.
        </p>
        <p className="mx-auto max-w-xl text-gray-500 text-center text-sm xs:text-base mb-8">
          Connect, learn, transform. The learning community with real momentum — not just a trend.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full justify-center mb-2">
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
            className="w-full sm:w-auto py-3 px-7 rounded-full font-bold bg-white/90 text-neutral-800 border border-gray-200 shadow-md hover:shadow-xl text-lg transition-all hover:bg-gray-50 active:scale-98"
            onClick={() =>
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore How It Works
          </button>
        </div>
        <div className="flex gap-3 justify-center items-center mt-6">
          <span className="text-brand-blue font-bold text-base" style={{ color: "#3c79f5" }}>
            1,000+
          </span>
          <span className="text-gray-600 font-semibold text-base">early adopters</span>
          <span className="hidden xs:inline text-gray-400">·</span>
          <span className="text-gray-600 font-semibold text-base">Built with ❤️ by Samantha</span>
        </div>
      </motion.div>
      <div className="flex flex-col items-center my-6 z-20">
        <button
          tabIndex={-1}
          aria-label="Scroll down"
          className="rounded-full w-10 h-10 flex items-center justify-center border-2 border-gray-200 bg-white/70 mb-1 backdrop-blur-md"
          onClick={() =>
            document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="w-2 h-5 bg-gray-400 rounded-full animate-bounce" />
        </button>
        <span className="text-xs text-gray-400 font-medium">Scroll to explore</span>
      </div>
    </section>
  );
}
