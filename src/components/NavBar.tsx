import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gradient-to-tr from-brand-yellow to-brand-blue/70 rounded-2xl flex items-center justify-center shadow-yellow-lg border border-white/30">
        <Sparkles className="text-brand-yellow w-7 h-7 drop-shadow" />
      </div>
      <span className="font-bold tracking-tight text-xl sm:text-2xl gradient-text-brand font-inter select-none">Skill x Swap</span>
    </div>
  );
}

export default function NavBar() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/85 backdrop-blur-2xl shadow-xl border-b border-brand-blue/15"
        : "bg-white/70 backdrop-blur-xl shadow-lg"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <div className="hidden lg:flex gap-4 items-center">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`px-4 py-2 font-semibold text-base rounded-xl transition-all duration-200 ${pathname === path
                ? "text-brand-blue bg-brand-yellow/60 border border-brand-blue/35 shadow-lg"
                : "text-brand-blue hover:text-brand-yellow hover:bg-brand-blue/8"
              }`}
            >
              {name}
            </Link>
          ))}
          <Link
            to="/register-interest"
            className="ml-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-yellow to-brand-blue text-gray-900 font-bold shadow-yellow-lg hover:brightness-110 hover:scale-105 transition-transform"
          >
            Join Early Access
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            className={`p-2.5 rounded-xl transition-all duration-200 ${isMobileMenuOpen
              ? "bg-brand-blue/15 text-brand-yellow"
              : "bg-brand-blue/5 text-brand-blue hover:bg-brand-yellow/10 hover:text-brand-yellow shadow-lg"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <span className="text-2xl">✖️</span> : <span className="text-2xl">☰</span>}
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
                className={`block px-5 py-3 font-semibold rounded-xl text-base transition-all duration-150 ${pathname === path
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
              className="mt-3 w-full text-center bg-gradient-to-r from-brand-yellow to-brand-blue text-gray-900 font-bold py-3 rounded-xl shadow-yellow-lg"
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
