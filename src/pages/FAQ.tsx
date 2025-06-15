import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AccordionFaq from "@/components/AccordionFaq";
import { motion } from "framer-motion";
import { HelpCircle, Mail } from "lucide-react";

export default function FAQ() {
  return (
    <div className="bg-[#F6FAFD] min-h-screen font-inter">
      <NavBar />
      <main className="pt-20">
        <section className="container py-16 px-2">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 mb-7 bg-white/95 rounded-full shadow-lg border border-white text-sm font-semibold">
                <HelpCircle className="w-4 h-4 text-brand-yellow" />
                <span className="text-brand-blue font-bold">Need Help?</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 heading-soft gradient-text-brand"
              >
                Your Questions,
                <br />
                Answered
              </h1>
              <p className="text-lg text-[#436599] mb-10">
                Everything you need to know about Skill x Swap
              </p>
            </div>
            <div className="mb-12">
              <AccordionFaq />
            </div>
            <div className="bg-white/98 rounded-xl card-glass p-8 shadow-lg text-center max-w-2xl mx-auto mt-8 border border-slate-100">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-blue-500 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl font-semibold text-brand-blue">Still have questions?</div>
              </div>
              <div className="text-[#486086] mb-5">Just drop us an email and we’ll get back to you soon:</div>
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
