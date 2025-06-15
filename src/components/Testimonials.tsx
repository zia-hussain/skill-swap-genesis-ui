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
    <section className="relative py-24 px-3 bg-section-gradient overflow-hidden">
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-18">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 glass-card rounded-full shadow border border-white/20">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-sm font-semibold text-brand-blue tracking-wide">Community Love</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
            style={{
              background: "linear-gradient(93deg, #33A4EE 2%, #F5C738 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            Real Stories, Real Impact
          </h2>
          <p className="text-lg md:text-2xl text-brand-blue/70 max-w-3xl mx-auto leading-relaxed">
            See how our community is transforming lives through skill sharing
          </p>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 mb-18">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-soft-card rounded-card p-7 shadow-neumorph text-center border border-white/20">
              <div className="text-3xl font-extrabold text-brand-blue mb-1">{stat.number}</div>
              <div className="text-sm text-brand-blue/70 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="group">
              <div className="bg-white/98 rounded-card p-8 shadow-neumorph border border-white/20 relative overflow-hidden flex flex-col h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-brand-blue/90 text-lg leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                {/* Skills exchanged */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-yellow/18 to-brand-blue/11 rounded-full px-4 py-2 text-sm font-medium text-brand-blue">
                    <Sparkles className="w-4 h-4 text-brand-yellow" />
                    {testimonial.skills}
                  </div>
                </div>
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-brand-blue text-lg">{testimonial.name}</div>
                    <div className="text-brand-blue/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Mission Statement */}
        <div className="relative mt-12">
          <div className="bg-soft-card rounded-section p-10 md:p-16 text-brand-blue shadow-neumorph overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 flex flex-col gap-6 items-start">
                <div className="flex items-center gap-3 mb-2">
                  <Quote className="w-10 h-10 text-brand-yellow" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
                  style={{
                    background: "linear-gradient(97deg, #33A4EE 10%, #F5C738 82%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >Our Mission</h2>
                <p className="text-xl md:text-2xl mb-5 leading-relaxed opacity-90">
                  "We believe the next wave of learning will be powered not by institutions, but by communities. No gatekeeping, no money—just real people sharing real expertise, creating connections that last a lifetime."
                </p>
                <div className="flex gap-5 items-center">
                  <div className="flex items-center gap-3">
                    <Heart className="w-8 h-8 text-white bg-brand-blue rounded-full p-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-lg text-brand-blue">Samantha</div>
                      <div className="text-brand-blue/60 text-sm">Founder & Visionary</div>
                    </div>
                  </div>
                  <a
                    href="/register-interest"
                    className="ml-6 px-7 py-2.5 btn-glass-blue font-bold rounded-3xl shadow btn-shadow"
                  >
                    Join Our Mission
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
