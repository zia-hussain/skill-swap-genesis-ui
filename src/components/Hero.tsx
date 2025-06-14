
import HeroBadge from "./hero/HeroBadge";
import HeroMainContent from "./hero/HeroMainContent";
import HeroCTAButtons from "./hero/HeroCTAButtons";
import HeroSocialProof from "./hero/HeroSocialProof";
import HeroScrollIndicator from "./hero/HeroScrollIndicator";
import HeroBackground from "./hero/HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-yellow-50/30 pt-16 sm:pt-20">
      {/* Enhanced Animated Background Elements */}
      <HeroBackground />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced Badge */}
        <HeroBadge />

        {/* Main Content */}
        <HeroMainContent />

        {/* Enhanced CTA Buttons */}
        <HeroCTAButtons />

        {/* Enhanced Social Proof */}
        <HeroSocialProof />
      </div>

      {/* Enhanced Scroll Indicator */}
      <HeroScrollIndicator />
    </section>
  );
}
