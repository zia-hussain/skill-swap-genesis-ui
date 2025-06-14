
import { Users, Handshake, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Users className="w-8 h-8 text-brand-blue" />,
    title: "Join & Create Profile",
    desc: "Sign up and list what you want to learn and what you can offer to the community.",
    number: "01"
  },
  {
    icon: <Handshake className="w-8 h-8 text-brand-yellow" />,
    title: "Get Smart-Matched",
    desc: "Our AI connects you with perfect skill swap partners — locally or globally.",
    number: "02"
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-green-600" />,
    title: "Swap & Grow Together",
    desc: "Complete swaps, earn Skill Credits, and unlock new learning opportunities.",
    number: "03"
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/60 backdrop-blur-lg rounded-full shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-brand-yellow" />
            <span className="text-sm font-medium text-gray-700">Simple Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Three simple steps to start your skill-sharing journey
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full flex flex-col group-hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-brand-yellow/20 to-brand-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-600">{step.number}</span>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
