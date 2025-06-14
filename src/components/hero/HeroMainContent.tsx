
import { motion } from "framer-motion";

export default function HeroMainContent() {
  return (
    <>
      {/* Enhanced Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 sm:mb-8 leading-[0.9] sm:leading-[0.85]"
      >
        <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Skill-Powered Learning.
        </span>
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="block bg-gradient-to-r from-brand-yellow via-yellow-400 to-brand-blue bg-clip-text text-transparent"
        >
          Human-First Connections.
        </motion.span>
      </motion.h1>

      {/* Enhanced Subheadline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto mb-8 sm:mb-12 px-2"
      >
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 leading-relaxed mb-3 sm:mb-4">
          A global skill-sharing platform where you grow{" "}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-bold text-brand-blue relative"
          >
            by helping others grow
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-brand-yellow to-brand-blue rounded-full"
            />
          </motion.span>
          .
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
          Connect, learn, and transform together in the world's most innovative learning community.
        </p>
      </motion.div>
    </>
  );
}
