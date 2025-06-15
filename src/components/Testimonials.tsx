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
    <section className="relative py-24 px-4 bg-gradient-to-br from-white via-brand-blue/8 to-brand-yellow/8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 border border-brand-yellow/10 rounded-full" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-brand-blue/10 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-brand-yellow/8 to-brand-blue/8 rounded-full blur-xl" />
      </div>
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/85 backdrop-blur-xl rounded-full shadow border border-white/20">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-sm font-semibold text-brand-blue tracking-wide">Community Love</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight gradient-text-brand">Real Stories, Real Impact</h2>
          <p className="text-xl md:text-2xl text-brand-blue/70 max-w-3xl mx-auto leading-relaxed">
            See how our community is transforming lives through skill sharing
          </p>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-xl text-center border border-white/20">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-brand rounded-2xl flex items-center justify-center text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-brand-blue mb-1">{stat.number}</div>
              <div className="text-sm text-brand-blue/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="group">
              <div className="bg-white/85 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col group-hover:-translate-y-1.5 border border-white/20 relative overflow-hidden">
                <Quote className="absolute top-4 right-4 text-brand-yellow/15 w-8 h-8" />
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
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-yellow/15 to-brand-blue/10 rounded-full px-4 py-2 text-sm font-medium text-brand-blue">
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
        <div className="relative">
          <div className="bg-gradient-to-r from-brand-blue/15 to-brand-yellow/15 rounded-3xl p-12 md:p-16 text-brand-blue shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 right-20 w-12 h-12 border border-white/20 rounded-full"></div>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <Quote className="w-10 h-10 text-brand-yellow" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight gradient-text-brand">Our Mission</h2>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                  "We believe the next wave of learning will be powered not by institutions, but by communities. No gatekeeping, no money—just real people sharing real expertise, creating connections that last a lifetime."
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-brand-blue">Samantha</div>
                      <div className="text-brand-blue/70 text-lg">Founder & Visionary</div>
                    </div>
                  </div>
                  <div>
                    <Link
                      to="/register-interest"
                      className="inline-flex items-center gap-3 bg-gradient-brand text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Join Our Mission
                      <Users className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
