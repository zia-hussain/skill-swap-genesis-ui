import { Link } from "react-router-dom";
import { Sparkles, Rocket, TrendingUp } from "lucide-react";

function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-6 py-2 mb-4 bg-white/80 rounded-2xl shadow-neumorph border border-white/80 text-xs sm:text-sm text-brand-blue font-semibold font-inter select-none">
      <Sparkles className="text-brand-yellow w-4 h-4 me-1" />
      <span className="font-bold tracking-wide">Early Access · Invite-Only</span>
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ms-1" />
    </div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-brand-gradient" />
  );
}

function GradientHeadline() {
  return (
    <h1
      className="text-center font-black mb-7 w-full px-2 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight gradient-text-brand"
    >
      Share &amp; Master Skills — <span className="text-brand-yellow">Effortlessly.</span>
      <br />
      <span className="gradient-text-brand font-extrabold drop-shadow-xl">
        Your premium global skill community.
      </span>
    </h1>
  );
}

function HeroSubtext() {
  return (
    <>
      <p className="max-w-xl text-center text-lg xs:text-xl md:text-2xl text-neutral-800 font-medium mb-1">
        Grow by helping others, <span className="text-brand-yellow font-semibold underline underline-offset-2">effortlessly.</span>
      </p>
      <p className="max-w-md text-center text-neutral-500 text-base sm:text-lg mb-7">
        Swap skills, unlock opportunities, and join a thoughtful, premium community built just for you.
      </p>
    </>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col xs:flex-row gap-3 xs:gap-6 w-full xs:w-auto justify-center items-center mb-8">
      <Link
        to="/register-interest"
        className="py-3 px-8 rounded-full btn-glass-yellow text-[1.08rem] shadow-xl min-w-[210px] text-center hover:shadow-lg font-bold focus-visible:ring-2 focus-visible:ring-brand-blue"
      >
        <Rocket className="w-5 h-5 inline mr-2 -mt-1" />
        Join Early Access
        <TrendingUp className="w-5 h-5 inline ml-2 -mt-1" />
      </Link>
      <a
        href="#how-it-works"
        className="py-3 px-8 rounded-full btn-glass-blue shadow-xl text-[1.08rem] min-w-[210px] text-center hover:shadow-lg font-bold focus-visible:ring-2 focus-visible:ring-brand-blue"
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
    <section className="relative min-h-[98vh] flex flex-col justify-center items-center overflow-hidden pt-14 sm:pt-32 pb-12 px-2 bg-brand-gradient">
      <HeroBackground />
      <div className="z-10 flex flex-col items-center w-full relative pb-7">
        <HeroBadge />
        <GradientHeadline />
        <HeroSubtext />
        <CTAButtons />
        <SocialProofCard />
      </div>
    </section>
  );
}
