
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-white/30"
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-yellow" />
      </motion.div>
      <span className="text-xs sm:text-sm font-semibold text-gray-700 tracking-wide">✨ Now in Early Access</span>
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
    </motion.div>
  );
}
