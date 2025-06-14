
import { motion } from "framer-motion";
import { Quote, Heart, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="container py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-blue to-blue-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 right-20 w-12 h-12 border border-white/20 rounded-full"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 mb-6"
              >
                <Quote className="w-8 h-8 text-brand-yellow" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              >
                Our Mission
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl mb-6 leading-relaxed opacity-90"
              >
                "We believe the next wave of learning will be powered not by institutions, but by communities. No gatekeeping, no money—just real people sharing real expertise."
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-brand-yellow to-yellow-400 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Samantha</div>
                  <div className="text-white/80">Founder & Visionary</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
