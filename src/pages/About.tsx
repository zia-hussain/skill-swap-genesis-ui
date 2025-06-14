
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-neutralBg min-h-screen font-inter">
      <NavBar />
      <main className="container py-16 px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Why We Built Skill x Swap</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Learning should be accessible, collaborative,&nbsp;
            <span className="font-semibold text-brand-yellow">empowering for everyone.</span>
            <br/>
            No gatekeeping. No money. Only growth.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="font-bold text-xl mb-3">Our Mission</h2>
            <p className="text-gray-700 mb-3">
              Skill x Swap was born out of a simple but powerful idea:
              <span className="font-semibold text-brand-blue"> What if we could all grow by helping each other?</span>
            </p>
            <ul className="mb-4 text-gray-700 space-y-2 text-base">
              <li><b>No fees or exclusivity:</b> Anyone can join, share, and learn.</li>
              <li><b>No pro credentials required:</b> If you have a skill, you’re valuable here.</li>
              <li><b>Learning, reimagined:</b> The only currency is experience and support.</li>
            </ul>
            <Link to="/register-interest"
              className="inline-block bg-brand-yellow text-brand-blue font-bold px-6 py-2 rounded-lg shadow-soft mt-2 transition hover:bg-brand-blue hover:text-white"
            >Join the Movement</Link>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <div className="bg-white rounded-xl p-6 shadow-soft relative animate-fadeInUp">
              <Quote className="absolute -top-5 -left-4 text-brand-yellow opacity-10 w-16 h-16"/>
              <div className="text-base italic mb-3">
                "I couldn't find what I needed—so I built it.<br/>
                Learning should be for everyone, everywhere, at any stage."
              </div>
              <div className="font-semibold">— Samantha, Founder</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
