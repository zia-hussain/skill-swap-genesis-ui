
import { motion } from "framer-motion";
import { ArrowDown, TrendingUp, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroCTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-2"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full sm:w-auto"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-yellow via-yellow-400 to-brand-blue rounded-2xl sm:rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
        <Link
          to="/register-interest"
          className="relative w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-brand-yellow to-yellow-400 text-gray-900 font-bold text-base sm:text-lg lg:text-xl rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden inline-flex items-center justify-center gap-2 sm:gap-3"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-2 sm:gap-3">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            Join Early Access
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </span>
        </Link>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="group w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-gray-700 font-bold text-base sm:text-lg lg:text-xl hover:text-brand-blue transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 relative"
        onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="relative">
          Explore How It Works
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-300"></div>
        </span>
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
