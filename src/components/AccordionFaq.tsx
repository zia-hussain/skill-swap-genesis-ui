
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Skill x Swap?",
    a: "Skill x Swap is an app where you exchange skills instead of money, connecting people so everyone can learn and grow together.",
  },
  {
    q: "How does it work?",
    a: "List the skills you can offer, and what you want to learn. We smart-match you, and you swap. Every completed swap gives you a Skill Credit.",
  },
  {
    q: "Is it free?",
    a: "Yes! The platform is free to browse and join. Upgrades unlock messaging and more swaps.",
  },
  {
    q: "What can I swap?",
    a: "Anything teachable—coding, baking, business skills, languages, design, fitness. If you can teach it, you can swap it.",
  },
];

export default function AccordionFaq() {
  return (
    <Accordion type="multiple" className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
        >
          <AccordionItem value={`item-${idx}`} className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden">
            <AccordionTrigger className="group font-semibold text-lg flex items-center justify-between px-6 py-5 hover:bg-white/50 transition-all duration-300 text-left">
              <span className="text-gray-900">{faq.q}</span>
              <ChevronDown className="w-5 h-5 text-brand-blue transition-transform group-data-[state=open]:rotate-180 flex-shrink-0 ml-4" />
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-5 text-gray-600 text-lg leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
