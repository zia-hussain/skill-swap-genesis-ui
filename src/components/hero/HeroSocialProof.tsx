
import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";

export default function HeroSocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-gray-600 mb-6 sm:mb-8 px-2"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 shadow-lg border border-white/20"
      >
        <div className="flex -space-x-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
          ))}
        </div>
        <div className="text-xs sm:text-sm font-semibold">
          <span className="text-brand-blue">1,000+</span> early adopters
        </div>
      </motion.div>
      
      <div className="hidden sm:block w-2 h-2 bg-gray-300 rounded-full"></div>
      
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 shadow-lg border border-white/20"
      >
        <div className="flex gap-0.5 sm:gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-xs sm:text-sm font-semibold">Highly rated community</span>
      </motion.div>
      
      <div className="hidden sm:block w-2 h-2 bg-gray-300 rounded-full"></div>
      
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 shadow-lg border border-white/20"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-yellow" />
        </motion.div>
        <span className="text-xs sm:text-sm font-semibold">Built with ❤️ by Samantha</span>
      </motion.div>
    </motion.div>
  );
}
