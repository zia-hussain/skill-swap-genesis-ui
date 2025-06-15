
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="mb-5 flex items-center gap-2 px-6 py-2.5 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/80 shadow-glass text-xs sm:text-sm text-gray-700 font-semibold font-inter select-none shrink-0"
      style={{
        boxShadow: "0 7px 28px 0 rgba(255, 215, 65, 0.13), 0 1.5px 4px 0 rgba(66,100,255,0.05)"
      }}
    >
      <motion.span
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        <Sparkles className="text-brand-yellow w-4 h-4" />
      </motion.span>
      <span className="font-bold tracking-wide">Early Access · Invite-Only</span>
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ms-1" />
    </motion.div>
  );
}
