import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";
import { motion } from "framer-motion";
import { Sparkles, Users, TrendingUp } from "lucide-react";
export default function RegisterInterest() {
    return (
      <div className="bg-[#F6FAFD] min-h-screen font-inter">
        <NavBar />
        <main className="pt-20">
            <section className="container py-16 px-2">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-5 py-2 mb-7 bg-white/95 rounded-full shadow-lg border border-white text-sm font-semibold">
                            <Sparkles className="w-4 h-4 text-brand-yellow"/>
                            <span className="font-bold text-brand-blue">Early Access Available</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 heading-soft">
                            <span className="gradient-text-brand">
                            Be the First to Join<br/>
                            a Smarter Way to Learn & Share
                            </span>
                        </h1>
                        <p className="text-lg text-[#486086] mb-8">
                            Sign up for early news and exclusive access.<br/>
                            We’ll reach out with updates — no spam, only value.
                        </p>
                        <div className="flex flex-col xs:flex-row items-center justify-center gap-5 mb-9 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-brand-blue"/>
                                <span>1,000+ early adopters</span>
                            </div>
                            <div className="hidden xs:block w-1 h-1 bg-brand-blue/20 rounded-full"/>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-brand-yellow"/>
                                <span>Growing community</span>
                            </div>
                        </div>
                    </div>
                    <div className="my-8">
                        <RegisterForm />
                    </div>
                </div>
            </section>
        </main>
        <Footer />
      </div>
    );
}
