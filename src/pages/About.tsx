
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Quote, Heart, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-yellow-50/20 min-h-screen font-inter">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/60 backdrop-blur-lg rounded-full shadow-lg"
            >
              <Heart className="w-4 h-4 text-brand-yellow" />
              <span className="text-sm font-medium text-gray-700">Built with Purpose</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 gradient-text-brand leading-tight"
            >
              Why We Built
              <br />
              <span className="text-brand-yellow font-extrabold">
                Skill x Swap
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Learning should be accessible, collaborative,{" "}
              <span className="font-semibold text-brand-yellow">empowering for everyone.</span>
              <br/>
              No gatekeeping. No money. Only growth.
            </motion.p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="container px-4 pb-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="bg-white/85 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-yellow to-yellow-400 rounded-2xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-gray-900" />
                </div>
                <h2 className="font-bold text-2xl text-brand-blue">Our Mission</h2>
              </div>
              
              <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
                Skill x Swap was born out of a simple but powerful idea:
                <span className="font-semibold text-brand-blue"> What if we could all grow by helping each other?</span>
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">No fees or exclusivity:</span>
                    <span className="text-neutral-700"> Anyone can join, share, and learn.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">No pro credentials required:</span>
                    <span className="text-neutral-700"> If you have a skill, you're valuable here.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Learning, reimagined:</span>
                    <span className="text-neutral-700"> The only currency is experience and support.</span>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/register-interest"
                  className="inline-flex items-center gap-2 btn-glass-yellow text-gray-900 font-bold px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Users className="w-5 h-5" />
                  Join the Movement
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center"
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl relative">
                <Quote className="absolute -top-4 -left-4 text-brand-yellow/20 w-16 h-16"/>
                <div className="text-xl italic mb-6 text-neutral-800 leading-relaxed">
                  "I couldn't find what I needed—so I built it.<br/>
                  Learning should be for everyone, everywhere, at any stage."
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Samantha</div>
                    <div className="text-neutral-600 text-sm">Founder & Visionary</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
