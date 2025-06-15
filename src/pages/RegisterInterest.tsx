import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";
import { motion } from "framer-motion";
import { Sparkles, Users, TrendingUp } from "lucide-react";
export default function RegisterInterest() {
    return (<div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-yellow-50/20 min-h-screen font-inter">
            <NavBar />
            <main className="pt-20">
                <section className="container py-16 px-2">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/80 rounded-full shadow-neumorph">
                                <Sparkles className="w-4 h-4 text-brand-yellow"/>
                                <span className="text-sm font-medium text-brand-blue">Early Access Available</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 gradient-text-brand leading-tight">
                                Be the First to Join<br/>
                                <span className="text-brand-yellow">
                                  a Smarter Way to Learn & Share
                                </span>
                            </h1>
                            <p className="text-lg text-neutral-700 mb-6">
                                Sign up for early news and exclusive access.<br/>
                                We’ll reach out with updates — no spam, only value.
                            </p>
                            {/* Stats */}
                            <div className="flex flex-col xs:flex-row items-center justify-center gap-5 mb-10 text-sm text-neutral-500">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4"/>
                                    <span>1,000+ early adopters</span>
                                </div>
                                <div className="hidden xs:block w-1 h-1 bg-brand-blue/30 rounded-full"/>
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4"/>
                                    <span>Growing community</span>
                                </div>
                            </div>
                        </div>
                        {/* Register Form */}
                        <div className="my-8">
                            <RegisterForm />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>);
}
