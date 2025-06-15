
import { motion } from "framer-motion";

export default function HeroMainContent() {
  return (
    <div className="flex flex-col items-center w-full">
      <motion.h1
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.28, ease: "easeOut" }}
        className="text-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight mb-5 gradient-text-brand drop-shadow-md px-2"
        style={{
          WebkitTextStroke: 'transparent'
        }}
      >
        Unlock <span className="gradient-text-brand">Learning</span>{" "}
        with <br className="hidden xs:block" />
        <span className="bg-gradient-to-r from-brand-yellow via-yellow-300 to-brand-blue bg-clip-text text-transparent">
          Minimal, Skillful Swaps
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.34, ease: "easeOut" }}
        className="max-w-2xl text-center text-base xs:text-lg sm:text-2xl text-gray-800 font-medium mb-2"
      >
        The smoothest way to grow <span className="text-brand-blue font-semibold">by helping others grow</span>.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.39, ease: "easeOut" }}
        className="max-w-xl text-center text-gray-500 text-sm xs:text-base mb-10"
      >
        Connect, learn, and transform. Premium learning community powered by true momentum.
      </motion.p>
    </div>
  );
}
