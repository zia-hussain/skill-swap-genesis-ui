import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#F6FAFD] min-h-screen font-inter">
      <main className="pt-20">
        <section className="container py-16 px-2">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-white/95 rounded-full shadow-lg border border-white text-sm font-semibold">
                <Users className="w-4 h-4 text-brand-blue" />
                <span className="text-brand-blue font-bold">About Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 heading-soft">
                <span className="gradient-text-brand">Our Story</span>
              </h1>
              <p className="text-lg text-[#3A4961] mb-8">
                Skill x Swap began with a simple idea: <span className="text-brand-yellow font-semibold">Learning is better together</span>. We wanted to create a space where anyone could learn, teach, and connect—no barriers, no gatekeeping.
              </p>
            </div>
            <div className="bg-white/98 rounded-xl card-glass p-8 shadow-xl text-center border border-slate-100">
              <p className="text-[#4E6A8A] text-xl mb-4">Today, thousands of people across the globe swap skills, make friends, and unlock new opportunities—because your growth matters to us.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
