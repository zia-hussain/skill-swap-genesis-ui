
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, TrendingUp, Rocket } from "lucide-react";

export default function HeroCTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.46, ease: "easeOut" }}
      className="flex flex-col xs:flex-row gap-3 xs:gap-5 w-full xs:w-auto justify-center items-center mb-7"
    >
      <Link
        to="/register-interest"
        className="py-3 px-8 rounded-full bg-brand-yellow font-bold text-lg text-neutral-900 shadow-yellow-lg hover:shadow-xl hover:brightness-105 transition-all focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 flex items-center gap-2"
        style={{
          boxShadow: "0 8px 32px 0 rgba(255, 215, 65, 0.15), 0 1.5px 4px 0 rgba(66,100,255,0.06)"
        }}
      >
        <Rocket className="w-5 h-5" />
        Join Early Access
        <TrendingUp className="w-5 h-5" />
      </Link>
      <button
        type="button"
        className="py-3 px-8 rounded-full font-bold bg-white/75 text-neutral-900 border border-gray-200 shadow hover:shadow-xl text-lg transition-all hover:bg-gray-50 hover:text-brand-blue focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 flex items-center gap-2"
        onClick={() =>
          document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore How It Works
        <ArrowDown className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
