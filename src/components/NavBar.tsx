import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Register Interest", path: "/register-interest" },
  { name: "FAQ's", path: "/faq" },
  { name: "Legal", path: "/legal" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 flex items-center justify-center bg-gradient-brand rounded-xl shadow-lg">
        <Sparkles className="text-brand-yellow w-6 h-6" />
      </div>
      <span className="font-bold tracking-tight text-lg sm:text-2xl gradient-text-brand font-inter select-none">Skill x Swap</span>
    </div>
  );
}

export default function NavBar() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => setIsMobileMenuOpen(false), [pathname]);
  return (
    <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-[17px] shadow-md border-b border-slate-100">
      <nav className="container flex items-center justify-between h-16 sm:h-20 px-4">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="hidden lg:flex gap-2 items-center">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`px-5 py-2 font-semibold rounded-3xl transition-all duration-200 ${
                pathname === path
                  ? "text-brand-blue bg-brand-yellow/12 shadow border border-brand-yellow"
                  : "text-neutral-700 hover:text-brand-yellow hover:bg-brand-blue/8"
              }`}
            >
              {name}
            </Link>
          ))}
          <Link
            to="/register-interest"
            className="ml-4 px-7 py-2.5 rounded-3xl btn-glass-yellow text-brand-blue font-bold shadow-neumorph hover:opacity-90"
            style={{ pointerEvents: "auto" }}
          >
            Join Early Access
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            className="p-2.5 rounded-xl bg-neutral-200/60 text-brand-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <span className="text-xl">✖️</span> : <span className="text-xl">☰</span>}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/97 shadow-xl border-t rounded-b-3xl border-brand-blue/8">
          <div className="container py-4 px-4 flex flex-col gap-2">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`block px-5 py-3 font-semibold rounded-full text-base transition-all duration-150 text-center ${
                  pathname === path
                    ? "text-brand-blue bg-brand-yellow/16 border border-brand-yellow shadow"
                    : "text-brand-blue hover:text-brand-yellow hover:bg-brand-blue/7"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            <Link
              to="/register-interest"
              className="mt-3 w-full bg-white/90 text-brand-blue font-bold py-3 rounded-full shadow btn-glass-yellow"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🚀 Join Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
