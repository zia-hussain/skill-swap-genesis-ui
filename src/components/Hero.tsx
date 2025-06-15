
import { Link } from "react-router-dom";
import { Sparkles, Rocket, TrendingUp } from "lucide-react";

function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-7 py-2 glass-premium shadow-glass text-xs sm:text-sm text-brand-blue font-semibold font-inter select-none mx-auto mb-4">
      <Sparkles className="text-brand-yellow w-4 h-4 me-1" />
      <span className="font-bold tracking-wide text-brand-blue">Early Access · Invite-Only</span>
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ms-1" />
    </div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute -top-24 left-0 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-brand-yellow/30 to-brand-blue/15 blur-3xl opacity-60" />
      <div className="absolute top-[25%] right-0 w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-brand-blue/20 to-brand-yellow/10 blur-xl opacity-25" />
      <div className="absolute bottom-20 left-1/3 w-[160px] h-[160px] rounded-full bg-white/40 blur-xl opacity-12" />
    </div>
  );
}

function GradientHeadline() {
  return (
    <h1 className="text-center font-black mb-7 w-full px-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight gradient-text-brand"
        style={{ WebkitTextStroke: 'transparent' }}>
      <span>Share &amp; Master Skills — <span className="text-brand-yellow">Effortlessly.</span></span>
      <br />
      <span className="text-brand-blue/95">Your premium global skill community.</span>
    </h1>
  );
}

function HeroSubtext() {
  return (
    <>
      <p className="max-w-xl text-center text-base sm:text-xl md:text-2xl text-brand-blue font-medium mb-1">
        Grow by helping others, <span className="text-brand-yellow font-semibold underline underline-offset-2">effortlessly.</span>
      </p>
      <p className="max-w-md text-center text-brand-blue/75 text-sm sm:text-lg mb-8">
        Swap skills, unlock opportunities, and join a thoughtful, premium community built just for you.
      </p>
    </>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col xs:flex-row gap-3 xs:gap-6 w-full xs:w-auto justify-center items-center mb-7">
      <Link
        to="/register-interest"
        className="py-3 px-8 rounded-full bg-brand-yellow font-bold text-lg text-brand-blue shadow-yellow-lg hover:brightness-105 hover:scale-105 transition-all focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 flex items-center gap-2"
        style={{
          boxShadow: "0 8px 24px 0 #F5C73833, 0 2px 8px 0 #33A4EE17"
        }}
      >
        <Rocket className="w-5 h-5" />
        Join Early Access
        <TrendingUp className="w-5 h-5" />
      </Link>
      <a
        href="#how-it-works"
        className="py-3 px-8 rounded-full font-bold bg-white/80 text-brand-blue border border-brand-blue/10 shadow hover:shadow-md text-lg transition-all hover:bg-brand-blue/10 hover:text-brand-yellow focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 flex items-center gap-2"
      >
        Explore How It Works
      </a>
    </div>
  );
}

function SocialProofCard() {
  return (
    <div className="flex flex-col items-center gap-1 glass-card border border-brand-blue/10 shadow-glass px-7 py-4 max-w-xs mx-auto mt-5">
      <span className="text-brand-blue font-semibold text-sm tracking-tight">
        1,000+ early adopters
      </span>
      <span className="text-gray-500 flex items-center gap-1 text-xs">
        Built with <span role="img" aria-label="love">❤️</span> by Samantha
      </span>
      <span className="flex items-center gap-1 text-brand-yellow font-semibold text-xs">
        <Sparkles className="w-4 h-4" /> Invite Only
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[98svh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-white via-brand-yellow/12 to-brand-blue/10 font-inter px-4 pt-16 sm:pt-28 pb-16 w-full text-brand-blue">
      <HeroBackground />
      <div className="z-10 flex flex-col items-center w-full relative">
        <HeroBadge />
        <GradientHeadline />
        <HeroSubtext />
        <CTAButtons />
        <SocialProofCard />
      </div>
    </section>
  );
}
