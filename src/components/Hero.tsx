
import { motion } from "framer-motion";
import { Sparkles, Rocket, TrendingUp, ArrowDown, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-[#f6faff] via-[#fafdff] to-[#fdf8e3] px-2 pt-32 pb-12 sm:pb-0 overflow-x-hidden">
      {/* Animated Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-5 py-2.5 mb-7 bg-white shadow-[0_4px_24px_0_rgba(66,100,255,0.07)] rounded-full border border-white/80"
        style={{ zIndex: 2 }}
      >
        <Sparkles className="w-5 h-5 text-brand-yellow" />
        <span className="text-base font-semibold text-gray-700">Now in Early Access</span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05 }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold tracking-tight text-center leading-[1.08] sm:leading-tight mb-4"
      >
        <span className="block text-neutral-900">Skill-Powered Learning.</span>
        <span
          className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-[#ceb24b] to-brand-blue-dark"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#ffd741 0%,#fae57e 30%,#3c79f5 95%)"
          }}
        >
          Human-First Connections.
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.22 }}
        className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-3xl xl:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center mt-2 mb-2"
      >
        A global skill-sharing platform where you grow{" "}
        <a
          href="#"
          className="text-brand-blue font-semibold underline underline-offset-2 decoration-2 hover:text-brand-blue-dark transition-colors"
          style={{ color: "#2066e0" }}
        >
          by helping others grow.
        </a>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.33 }}
        className="mx-auto max-w-xl text-gray-500 text-center text-sm sm:text-base mt-0 mb-6 sm:mb-10"
      >
        Connect, learn, and transform together in the world's most innovative learning community.
      </motion.p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-12 items-center w-full justify-center z-50">
        <Link
          to="/register-interest"
          className="btn-shadow flex items-center justify-center gap-2 min-w-[235px] py-3 px-7 rounded-full bg-brand-yellow text-neutral-900 font-bold text-lg shadow-yellow-lg hover:brightness-95 focus:ring-2 ring-brand-yellow-dark transition-all duration-200"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(255, 215, 65, 0.18), 0 1.5px 4px 0 rgba(66,100,255,0.02)"
          }}
        >
          <Rocket className="w-5 h-5" strokeWidth={2.3} /> Join Early Access
          <TrendingUp className="w-5 h-5" strokeWidth={2.3} />
        </Link>
        <button
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold bg-white/90 text-neutral-800 border border-gray-200 shadow-md hover:shadow-lg text-lg transition-all duration-200 hover:bg-gray-50 active:scale-95"
          onClick={() =>
            document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          Explore How It Works
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Social Proof Bar */}
      <div className="flex flex-col sm:flex-row sm:gap-5 w-full max-w-3xl justify-center items-center z-30 mb-8">
        <div className="flex-1 flex justify-center mb-4 sm:mb-0">
          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-lg">
            {/* Avatars/Orbs */}
            <div className="flex -space-x-2">
              {Array.from({ length: 4 }).map((_, k) => (
                <div
                  key={k}
                  className="w-6 h-6 rounded-full border-[2.5px] border-white bg-gradient-to-br from-[#746dff] to-[#7ecbff] shadow"
                />
              ))}
            </div>
            <span className="text-brand-blue font-bold text-base" style={{ color: "#3c79f5" }}>
              1,000+
            </span>
            <span className="text-gray-600 font-semibold text-base">early adopters</span>
          </div>
        </div>
        <div className="hidden sm:flex w-2 h-2 bg-gray-200 rounded-full mx-3"></div>
        <div className="flex-1 flex justify-center mb-4 sm:mb-0">
          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-lg">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 font-semibold text-base">Highly rated community</span>
          </div>
        </div>
        <div className="hidden sm:flex w-2 h-2 bg-gray-200 rounded-full mx-3"></div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-lg">
            <Sparkles className="w-5 h-5 text-brand-yellow" />
            <span className="text-gray-600 font-semibold text-base">Built with <span className="text-red-500">❤️</span> by Samantha</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center select-none pointer-events-none opacity-80">
        <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center mb-1 bg-white">
          <div className="w-2 h-5 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
        <span className="text-sm text-gray-400 font-medium">Scroll to explore</span>
      </div>

      {/* Decorative glow/orbs */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute left-0 top-0 w-60 h-60 rounded-full bg-brand-yellow blur-2xl opacity-30"></div>
        <div className="absolute right-0 top-12 w-40 h-40 rounded-full bg-brand-blue blur-2xl opacity-20"></div>
        <div className="absolute left-1/2 top-36 w-40 h-40 rounded-full bg-white opacity-10 blur-3xl" style={{transform:"translateX(-50%)"}}></div>
        <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-[#c7e5ff] blur-2xl opacity-30 rounded-full"></div>
      </div>
    </section>
  );
}
