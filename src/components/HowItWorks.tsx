import { Users, Handshake, CheckCircle2, Sparkles, ArrowRight, Star, Zap, Heart } from "lucide-react";

const steps = [
  {
    icon: <Users className="w-10 h-10 text-white" />,
    title: "Join & Create Profile",
    desc: "Sign up in seconds and create your unique skill profile. List what you want to learn and what amazing skills you can share with our global community.",
    number: "01",
    gradient: "from-brand-blue to-brand-yellow",
    bgGradient: "from-brand-blue/10 to-white",
  },
  {
    icon: <Handshake className="w-10 h-10 text-white" />,
    title: "Get Smart-Matched",
    desc: "Our AI-powered matching system connects you with perfect skill swap partners based on your interests, location, and learning goals.",
    number: "02",
    gradient: "from-brand-yellow to-brand-blue",
    bgGradient: "from-brand-yellow/10 to-white",
  },
  {
    icon: <CheckCircle2 className="w-10 h-10 text-white" />,
    title: "Swap & Grow Together",
    desc: "Complete meaningful skill exchanges, earn Skill Credits, unlock new opportunities, and build lasting connections with fellow learners.",
    number: "03",
    gradient: "from-green-400 to-blue-400",
    bgGradient: "from-blue-100/20 to-white",
  },
];

const features = [
  { icon: <Star className="w-5 h-5 text-brand-yellow" />, text: "AI-Powered Matching" },
  { icon: <Zap className="w-5 h-5 text-brand-blue" />, text: "Instant Connections" },
  { icon: <Heart className="w-5 h-5 text-red-400" />, text: "Community Driven" },
  { icon: <Users className="w-5 h-5 text-brand-blue" />, text: "Global Network" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-3 bg-section-gradient overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-36 h-36 border border-brand-yellow/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-brand-blue/10 rounded-full" />
      </div>
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-7 glass-card rounded-full shadow border border-white/20">
            <Sparkles className="w-5 h-5 text-brand-yellow" />
            <span className="text-sm font-semibold text-brand-blue tracking-wide">Simple Process</span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight gradient-text-brand"
          >How It Works</h2>
          <p className="text-lg md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Three simple steps to start your transformative skill-sharing journey
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/90 rounded-2xl px-4 py-2 shadow-neumorph"
              >
                {feature.icon}
                <span className="text-sm font-medium text-brand-blue">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-18">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-6 w-12 h-0.5 bg-gradient-to-r from-brand-yellow/40 to-brand-blue/40" />
              )}
              <div className={`relative bg-white/90 rounded-section p-8 shadow-neumorph hover:shadow-lg transition h-full flex flex-col group-hover:-translate-y-2 border border-white/30`}>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-white to-gray-50 rounded-full flex items-center justify-center shadow border">
                  <span className="text-lg font-bold text-brand-blue/90">{step.number}</span>
                </div>
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">{step.title}</h3>
                <p className="text-neutral-700 leading-relaxed flex-grow text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="bg-white/95 backdrop-blur-lg rounded-section p-8 shadow-neumorph border border-white/10 max-w-3xl mx-auto mt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-3">Ready to Start Your Journey?</h3>
            <p className="text-lg text-neutral-700 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who are already growing through skill sharing
            </p>
            <a
              href="/register-interest"
              className="inline-flex items-center gap-3 btn-glass-yellow font-bold px-7 py-3 rounded-3xl shadow-neumorph hover:opacity-90"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
