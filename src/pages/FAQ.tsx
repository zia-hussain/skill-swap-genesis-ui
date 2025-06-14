
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AccordionFaq from "@/components/AccordionFaq";
import { motion } from "framer-motion";
import { HelpCircle, Mail } from "lucide-react";

export default function FAQ() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-yellow-50/20 min-h-screen font-inter">
      <NavBar />
      <main className="pt-20">
        <section className="container py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/60 backdrop-blur-lg rounded-full shadow-lg"
              >
                <HelpCircle className="w-4 h-4 text-brand-yellow" />
                <span className="text-sm font-medium text-gray-700">Need Help?</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              >
                Your Questions,
                <br />
                <span className="bg-gradient-to-r from-brand-yellow via-yellow-400 to-brand-blue bg-clip-text text-transparent">
                  Answered
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-xl text-gray-600 mb-12 leading-relaxed"
              >
                Everything you need to know about Skill x Swap
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mb-16"
            >
              <AccordionFaq />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-blue-500 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-semibold text-gray-900">Still have questions?</div>
              </div>
              <div className="text-gray-600 mb-6">Just drop us an email and we'll get back to you soon:</div>
              <a 
                href="mailto:hello@skillxswap.com" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-yellow to-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                hello@skillxswap.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
