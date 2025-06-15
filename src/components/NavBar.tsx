
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-2xl shadow-xl"
        : "bg-white/80 backdrop-blur-lg"
      }`}>
      <nav className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="hidden lg:flex gap-4 items-center">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`px-4 py-2 font-semibold text-base rounded-xl transition-all duration-200 ${
                pathname === path
                  ? "text-brand-blue bg-brand-yellow/15 border border-brand-blue/20 shadow-md"
                  : "text-brand-blue hover:text-brand-yellow hover:bg-brand-blue/10"
              }`}
            >
              {name}
            </Link>
          ))}
          <Link
            to="/register-interest"
            className="ml-4 px-6 py-2.5 rounded-xl bg-gradient-brand text-white font-bold shadow-lg hover:brightness-110 hover:scale-105 transition-transform"
          >
            Join Early Access
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <span className="text-xl">✖️</span> : <span className="text-xl">☰</span>}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-brand-blue/15 animate-fade-in-up">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-2">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`block px-5 py-3 font-semibold rounded-xl text-base transition-all duration-150 ${
                  pathname === path
                    ? "text-brand-yellow bg-brand-blue/10 border border-brand-yellow/10 shadow-lg"
                    : "text-brand-blue hover:text-brand-yellow hover:bg-brand-blue/8"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            <Link
              to="/register-interest"
              className="mt-3 w-full text-center bg-gradient-brand text-white font-bold py-3 rounded-xl shadow-lg"
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
