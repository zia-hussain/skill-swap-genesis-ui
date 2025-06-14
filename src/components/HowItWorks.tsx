
import { Users, Handshake, CheckCircle2, Sparkles, ArrowRight, Star, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Users className="w-10 h-10 text-white" />,
    title: "Join & Create Profile",
    desc: "Sign up in seconds and create your unique skill profile. List what you want to learn and what amazing skills you can share with our global community.",
    number: "01",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100/50"
  },
  {
    icon: <Handshake className="w-10 h-10 text-white" />,
    title: "Get Smart-Matched",
    desc: "Our AI-powered matching system connects you with perfect skill swap partners based on your interests, location, and learning goals.",
    number: "02",
    gradient: "from-brand-yellow to-yellow-500",
    bgGradient: "from-yellow-50 to-yellow-100/50"
  },
  {
    icon: <CheckCircle2 className="w-10 h-10 text-white" />,
    title: "Swap & Grow Together",
    desc: "Complete meaningful skill exchanges, earn Skill Credits, unlock new opportunities, and build lasting connections with fellow learners.",
    number: "03",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-100/50"
  },
];

const features = [
  { icon: <Star className="w-5 h-5 text-yellow-500" />, text: "AI-Powered Matching" },
  { icon: <Zap className="w-5 h-5 text-blue-500" />, text: "Instant Connections" },
  { icon: <Heart className="w-5 h-5 text-red-500" />, text: "Community Driven" },
  { icon: <Users className="w-5 h-5 text-purple-500" />, text: "Global Network" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-32 h-32 border border-brand-yellow/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-24 h-24 border border-brand-blue/10 rounded-full"
        />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/80 backdrop-blur-xl rounded-full shadow-xl border border-white/20"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-brand-yellow" />
            </motion.div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">Simple Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              How It Works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Three simple steps to start your transformative skill-sharing journey
          </motion.p>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg"
              >
                {feature.icon}
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Connection line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-6 w-12 h-0.5 bg-gradient-to-r from-brand-yellow/50 to-brand-blue/50 z-0">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: idx * 0.3 + 0.5 }}
                    viewport={{ once: true }}
                    className="w-full h-full bg-gradient-to-r from-brand-yellow to-brand-blue origin-left"
                  />
                  <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-brand-blue" />
                </div>
              )}

              <div className={`relative bg-gradient-to-br ${step.bgGradient} backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center h-full flex flex-col group-hover:-translate-y-3 border border-white/20`}>
                {/* Step number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-white to-gray-50 rounded-full flex items-center justify-center shadow-xl border border-white/50">
                  <span className="text-lg font-bold text-gray-700">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl`}
                  >
                    {step.icon}
                  </motion.div>
                  
                  {/* Floating particles */}
                  <motion.div
                    animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                    className="absolute -top-2 -right-2 w-3 h-3 bg-brand-yellow rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4 }}
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand-blue rounded-full"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed flex-grow text-lg">{step.desc}</p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/5 to-brand-blue/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-brand-blue/10 via-brand-yellow/10 to-brand-blue/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who are already growing through skill sharing
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('register-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-yellow to-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
