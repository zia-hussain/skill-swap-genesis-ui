
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
      className="flex flex-col xs:flex-row gap-3 justify-center items-center text-sm xs:text-base bg-white/60 border border-white/50 backdrop-blur-xl rounded-2xl shadow-glass px-5 py-2.5"
    >
      <span className="text-brand-blue font-semibold tracking-tight">1,000+ early adopters</span>
      <span className="hidden xs:inline text-gray-300">·</span>
      <span className="text-gray-600 flex gap-1 items-center">
        Built with <span role="img" aria-label="love">❤️</span> by Samantha
      </span>
      <span className="hidden xs:inline text-gray-300">·</span>
      <span className="flex items-center gap-1 text-brand-yellow font-semibold">
        <Sparkles className="w-4 h-4" /> Invite Only
      </span>
    </motion.div>
  );
}
