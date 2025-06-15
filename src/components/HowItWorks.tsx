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
    <section id="how-it-works" className="relative py-24 px-4 bg-gradient-to-br from-white via-brand-yellow/10 to-brand-blue/10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-brand-yellow/15 rounded-full" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-brand-blue/15 rounded-full" />
      </div>
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/90 backdrop-blur-md rounded-full shadow border border-white/20">
            <Sparkles className="w-5 h-5 text-brand-yellow" />
            <span className="text-sm font-semibold text-brand-blue tracking-wide">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight gradient-text-brand">How It Works</h2>
          <p className="text-xl md:text-2xl text-brand-blue/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Three simple steps to start your transformative skill-sharing journey
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/85 backdrop-blur-sm rounded-2xl px-4 py-2 shadow"
              >
                {feature.icon}
                <span className="text-sm font-medium text-brand-blue">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-6 w-12 h-0.5 bg-gradient-to-r from-brand-yellow/40 to-brand-blue/40" />
              )}
              <div className={`relative bg-gradient-to-br ${step.bgGradient} backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center h-full flex flex-col group-hover:-translate-y-2 border border-white/20`}>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-white to-gray-50 rounded-full flex items-center justify-center shadow-md border border-white/70">
                  <span className="text-lg font-bold text-brand-blue/90">{step.number}</span>
                </div>
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">{step.title}</h3>
                <p className="text-brand-blue/80 leading-relaxed flex-grow text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-blue/10 via-brand-yellow/10 to-brand-blue/10 backdrop-blur-lg rounded-3xl p-8 shadow border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg text-brand-blue/70 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who are already growing through skill sharing
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-gradient-brand text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
