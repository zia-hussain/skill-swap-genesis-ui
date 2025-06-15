import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AccordionFaq from "@/components/AccordionFaq";
import { motion } from "framer-motion";
import { HelpCircle, Mail } from "lucide-react";

export default function FAQ() {
  return (
    <div className="bg-brand-gradient min-h-screen font-inter">
      <NavBar />
      <main className="pt-20">
        <section className="container py-16 px-2">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/80 rounded-full shadow-neumorph">
                <HelpCircle className="w-4 h-4 text-brand-yellow" />
                <span className="text-sm font-medium text-brand-blue">Need Help?</span>
              </div>
              <h1
                className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                style={{
                  background: "linear-gradient(90deg, #33A4EE 28%, #F5C738 99%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Your Questions,
                <br />
                <span style={{
                  background: "linear-gradient(90deg, #F5C738 0%, #33A4EE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  Answered
                </span>
              </h1>
              <p className="text-lg text-brand-blue/70 mb-10">
                Everything you need to know about Skill x Swap
              </p>
            </div>
            <div className="mb-12">
              <AccordionFaq />
            </div>
            <div className="bg-white/98 rounded-xl p-8 shadow-neumorph text-center max-w-2xl mx-auto mt-8 border border-slate-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-blue-500 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-semibold text-brand-blue">Still have questions?</div>
              </div>
              <div className="text-brand-blue/70 mb-6">Just drop us an email and we’ll get back to you soon:</div>
              <a 
                href="mailto:hello@skillxswap.com" 
                className="inline-flex items-center gap-2 btn-glass-yellow px-7 py-3 font-bold rounded-3xl shadow"
              >
                <Mail className="w-5 h-5" />
                hello@skillxswap.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
