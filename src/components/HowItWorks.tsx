
import { Users, Handshake, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <Users className="w-7 h-7 text-brand-blue" />,
    title: "1. Join & Create Profile",
    desc: "Sign up and list what you want to learn and what you can offer.",
  },
  {
    icon: <Handshake className="w-7 h-7 text-brand-yellow" />,
    title: "2. Get Matched",
    desc: "We connect you with people who want to swap skills — locally or online.",
  },
  {
    icon: <CheckCircle2 className="w-7 h-7 text-green-600" />,
    title: "3. Swap & Grow",
    desc: "Complete a swap, earn Skill Credits, and unlock new opportunities.",
  },
];

export default function HowItWorks() {
  return (
    <section className="container py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-center font-inter">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-soft p-8 flex flex-col items-center text-center animate-fadeInUp">
            <div className="mb-5">{step.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <div className="text-gray-500">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
