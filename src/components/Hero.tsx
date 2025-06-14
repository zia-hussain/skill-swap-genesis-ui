
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, TrendingUp, Star, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-yellow-50/30 pt-16 sm:pt-20">
      {/* Enhanced Animated Background Elements */}
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

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Badge */}
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

        {/* Enhanced CTA Buttons */}
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

        {/* Enhanced Social Proof */}
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
      </div>

      {/* Enhanced Scroll Indicator */}
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
    </section>
  );
}
