
import HeroBackground from "./hero/HeroBackground";
import HeroBadge from "./hero/HeroBadge";
import HeroMainContent from "./hero/HeroMainContent";
import HeroCTAButtons from "./hero/HeroCTAButtons";
import HeroSocialProof from "./hero/HeroSocialProof";
import HeroScrollIndicator from "./hero/HeroScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#fafdff] via-[#f8faff] to-[#ececf8] font-inter px-4 pt-14 sm:pt-20 pb-8 w-full">
      <HeroBackground />
      <div className="z-10 flex flex-col items-center w-full">
        <HeroBadge />
        <HeroMainContent />
        <HeroCTAButtons />
        <HeroSocialProof />
      </div>
      <HeroScrollIndicator />
    </section>
  );
}
