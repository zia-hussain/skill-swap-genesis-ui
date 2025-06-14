
import { motion } from "framer-motion";

export default function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-2 sm:gap-3 cursor-pointer group"
        onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-gray-400 rounded-full p-1 group-hover:border-brand-blue transition-colors backdrop-blur-sm bg-white/20">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 sm:w-2 sm:h-4 bg-gray-400 rounded-full group-hover:bg-brand-blue transition-colors mx-auto"
          />
        </div>
        <span className="text-xs sm:text-sm text-gray-500 group-hover:text-brand-blue transition-colors font-medium">Scroll to explore</span>
      </motion.div>
    </motion.div>
  );
}
