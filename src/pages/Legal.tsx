
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, FileText, Lock, Eye } from "lucide-react";

export default function Legal() {
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
                <Shield className="w-4 h-4 text-brand-yellow" />
                <span className="text-sm font-medium text-gray-700">Privacy & Legal</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              >
                Legal
                <br />
                <span className="bg-gradient-to-r from-brand-yellow via-yellow-400 to-brand-blue bg-clip-text text-transparent">
                  Notice
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-xl text-gray-600 mb-12 leading-relaxed"
              >
                Your privacy and trust matter to us
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="grid gap-6"
            >
              {/* Privacy Section */}
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-blue-500 rounded-2xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-bold text-2xl text-gray-900">Privacy & Data Protection</h2>
                </div>
                
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></div>
                    <span>All data is processed according to standard GDPR practices.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Your personal data will never be sold or shared with third parties.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></div>
                    <span>By joining, you consent to be contacted about Skill x Swap only. You can unsubscribe at any time.</span>
                  </div>
                </div>
              </div>

              {/* Terms Section */}
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-yellow to-yellow-400 rounded-2xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gray-900" />
                  </div>
                  <h2 className="font-bold text-2xl text-gray-900">Terms & Conditions</h2>
                </div>
                
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Site content © Skill x Swap. All rights reserved.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></div>
                    <span>Early access registration does not guarantee immediate platform access.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>We reserve the right to update these terms with reasonable notice.</span>
                  </div>
                </div>
              </div>

              {/* Transparency Section */}
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-bold text-2xl text-gray-900">Our Commitment</h2>
                </div>
                
                <div className="text-gray-700 text-lg leading-relaxed">
                  <p className="mb-4">
                    We believe in complete transparency. As we build Skill x Swap, your privacy and trust 
                    remain our top priorities. We'll always be clear about how we use your information 
                    and what to expect from our platform.
                  </p>
                  <p className="font-semibold text-brand-blue">
                    Questions about our legal practices? Reach out anytime at{" "}
                    <a href="mailto:legal@skillxswap.com" className="underline hover:text-brand-yellow transition-colors">
                      legal@skillxswap.com
                    </a>
                  </p>
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
