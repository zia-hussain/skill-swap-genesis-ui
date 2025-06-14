
import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating orbs with enhanced animations */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 lg:left-20 w-24 h-24 lg:w-40 lg:h-40 bg-gradient-to-r from-brand-yellow/20 to-brand-blue/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, 25, 0],
          x: [0, -20, 0],
          scale: [1, 0.8, 1],
          rotate: [360, 0, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute top-40 lg:top-60 right-16 lg:right-32 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-r from-brand-blue/30 to-purple-400/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, -35, 0],
          x: [0, 25, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-32 left-1/4 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-yellow-300/20 to-orange-400/10 rounded-full blur-lg"
      />
    </div>
  );
}
