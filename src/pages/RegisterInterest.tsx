
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";
import { motion } from "framer-motion";
import { Sparkles, Users, TrendingUp } from "lucide-react";

export default function RegisterInterest() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-yellow-50/20 min-h-screen font-inter">
      <NavBar />
      <main className="pt-20">
        <section className="container py-16 px-4">
          <div className="max-w-3xl mx-auto">
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
                <Sparkles className="w-4 h-4 text-brand-yellow" />
                <span className="text-sm font-medium text-gray-700">Early Access Available</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              >
                Be the First to Join<br/>
                <span className="bg-gradient-to-r from-brand-yellow via-yellow-400 to-brand-blue bg-clip-text text-transparent">
                  a Smarter Way to Learn & Share
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Sign up for early news and exclusive access. <br />
                We'll reach out with updates — no spam, only value.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-sm text-gray-600"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>1,000+ early adopters</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Growing community</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
            >
              <RegisterForm />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
