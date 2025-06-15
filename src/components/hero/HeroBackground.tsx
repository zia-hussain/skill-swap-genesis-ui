
import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Large back orb */}
      <motion.div
        className="absolute -top-24 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-yellow/30 to-brand-blue/20 blur-3xl opacity-55"
        animate={{
          y: [0, -40, 0],
          x: [0, 42, 0],
          scale: [1, 1.13, 1],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Mid blue orb */}
      <motion.div
        className="absolute top-1/4 right-0 w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-brand-blue/30 to-brand-yellow/10 blur-[90px] opacity-30"
        animate={{
          y: [0, 30, 0],
          x: [0, -50, 0],
          scale: [1.1, 0.94, 1.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Soft white lower orb */}
      <motion.div
        className="absolute bottom-20 left-1/3 w-[180px] h-[180px] rounded-full bg-white/40 blur-2xl opacity-10"
        animate={{
          y: [0, -25, 0],
          x: [0, 30, 0],
          scale: [1.1, 1.2, 1.05]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
