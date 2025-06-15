import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, FileText, Lock, Eye, ShieldCheck } from "lucide-react";

export default function Legal() {
  return (
    <div className="bg-[#F6FAFD] min-h-screen font-inter">
      <NavBar />
      <main className="pt-20">
        <section className="container py-16 px-2">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-white/95 rounded-full shadow-lg border border-white text-sm font-semibold">
                <ShieldCheck className="w-4 h-4 text-brand-yellow" />
                <span className="text-brand-blue font-bold">Privacy & Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 heading-soft gradient-text-brand"
              >
                Legal Notice
              </h1>
              <p className="text-lg text-[#4B5D72]">Your privacy and trust matter to us</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid gap-6"
            >
              {/* Privacy Section */}
              <div className="bg-white/85 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-blue-500 rounded-2xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-bold text-2xl text-brand-blue">Privacy & Data Protection</h2>
                </div>
                
                <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
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
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-yellow to-yellow-400 rounded-2xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gray-900" />
                  </div>
                  <h2 className="font-bold text-2xl text-brand-blue">Terms & Conditions</h2>
                </div>
                
                <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
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
              <div className="bg-white/85 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-bold text-2xl text-brand-blue">Our Commitment</h2>
                </div>
                
                <div className="text-neutral-700 text-lg leading-relaxed">
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
