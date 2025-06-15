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
    <section className="relative py-24 px-3 bg-transparent overflow-hidden">
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 card-glass rounded-full shadow border border-white/14">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-sm font-semibold text-brand-blue tracking-wide">Community Love</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 leading-tight gradient-text-brand"
            style={{
              background: "linear-gradient(93deg, #33A4EE 2%, #F5C738 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
            Real Stories, Real Impact
          </h2>
          <p className="text-lg md:text-2xl text-[#436599] max-w-3xl mx-auto leading-relaxed mb-5">
            See how our community is transforming lives through skill sharing
          </p>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/97 rounded-xl px-7 py-8 card-soft shadow-lg text-center border border-white/19">
              <div className="stat-number mb-1">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="group">
              <div className="card-glass rounded-xl p-8 shadow-xl border border-white/16 relative overflow-hidden flex flex-col h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-brand-blue text-base leading-relaxed mb-7 flex-grow italic">
                  "{testimonial.quote}"
                </p>
                {/* Skills exchanged */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-yellow/14 to-brand-blue/7 rounded-full px-4 py-1 text-sm font-medium text-brand-blue">
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
                    <div className="font-bold text-brand-blue text-base">{testimonial.name}</div>
                    <div className="text-brand-blue/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
