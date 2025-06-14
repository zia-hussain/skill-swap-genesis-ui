
import { motion } from "framer-motion";
import { Quote, Heart, Star, Users, Globe, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "Skill x Swap transformed how I learn. I taught photography and learned coding - both from amazing people who became real friends.",
    name: "Sarah Chen",
    role: "Digital Designer",
    avatar: "SC",
    rating: 5,
    skills: "Photography → Web Development"
  },
  {
    quote: "The matching system is incredible. Found a Spanish tutor who also wanted to learn guitar. Two months later, we're both fluent in each other's skills!",
    name: "Marcus Rodriguez", 
    role: "Music Teacher",
    avatar: "MR",
    rating: 5,
    skills: "Guitar → Spanish"
  },
  {
    quote: "As a busy mom, I thought I'd never have time to learn. Skill x Swap's flexible approach let me trade cooking lessons for yoga sessions.",
    name: "Emma Thompson",
    role: "Home Chef & Mom",
    avatar: "ET", 
    rating: 5,
    skills: "Cooking → Yoga"
  }
];

const stats = [
  { number: "10K+", label: "Skills Shared", icon: <TrendingUp className="w-5 h-5" /> },
  { number: "50+", label: "Countries", icon: <Globe className="w-5 h-5" /> },
  { number: "98%", label: "Success Rate", icon: <Star className="w-5 h-5" /> },
  { number: "5K+", label: "Active Users", icon: <Users className="w-5 h-5" /> }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-white via-blue-50/30 to-yellow-50/20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-40 h-40 border border-brand-yellow/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 0.8, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-32 h-32 border border-brand-blue/5 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-brand-yellow/5 to-brand-blue/5 rounded-full blur-xl"
        />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-red-500" />
            </motion.div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">Community Love</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Real Stories,
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-yellow via-yellow-400 to-brand-blue bg-clip-text text-transparent">
              Real Impact
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            See how our community is transforming lives through skill sharing
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl text-center border border-white/20"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-yellow to-brand-blue rounded-2xl flex items-center justify-center text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2 border border-white/20 relative overflow-hidden">
                {/* Quote decoration */}
                <Quote className="absolute top-4 right-4 text-brand-yellow/20 w-8 h-8" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>

                {/* Skills exchanged */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-yellow/10 to-brand-blue/10 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                    <Sparkles className="w-4 h-4 text-brand-yellow" />
                    {testimonial.skills}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/5 to-brand-blue/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 right-20 w-12 h-12 border border-white/20 rounded-full"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-32 w-8 h-8 border border-white/10 rounded-full"
              />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-6"
                >
                  <Quote className="w-10 h-10 text-brand-yellow" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                >
                  Our Mission
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90"
                >
                  "We believe the next wave of learning will be powered not by institutions, but by communities. No gatekeeping, no money—just real people sharing real expertise, creating connections that last a lifetime."
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-yellow to-yellow-400 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-gray-900" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">Samantha</div>
                      <div className="text-white/80 text-lg">Founder & Visionary</div>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/register-interest"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-yellow to-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Join Our Mission
                      <Users className="w-5 h-5" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
