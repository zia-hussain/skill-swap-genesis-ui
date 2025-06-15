
import { motion } from "framer-motion";

export default function HeroScrollIndicator() {
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
