
import * as React from "react";
import { ChevronDown } from "lucide-react";
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
    <Accordion type="multiple" className="w-full max-w-2xl mx-auto">
      {faqs.map((faq, idx) => (
        <AccordionItem value={`item-${idx}`} key={idx}>
          <AccordionTrigger className="group font-semibold text-lg flex items-center px-4 py-3 border border-gray-200 rounded-xl mb-2 hover:bg-brand-yellow/10 transition-colors">
            <ChevronDown className="w-5 h-5 text-brand-blue transition-transform group-data-[state=open]:rotate-180 mr-3" />
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="pl-11 pr-6 pb-4 text-gray-600">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
