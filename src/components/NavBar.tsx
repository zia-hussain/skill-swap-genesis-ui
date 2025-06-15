import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Register Interest", path: "/register-interest" },
  { name: "FAQ's", path: "/faq" },
  { name: "Legal", path: "/legal" },
];

function Logo() {
  return (
    <div 
      className="flex items-center gap-2 sm:gap-3"
    >
      <div 
        className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-tr from-brand-yellow to-brand-blue rounded-2xl flex items-center justify-center shadow-glass border border-white/60"
      >
        <span className="text-lg font-bold">🟢</span>
      </div>
      <span className="font-bold tracking-tight text-xl sm:text-2xl text-gray-900 font-inter select-none">Skill x Swap</span>
    </div>
  );
}

export default function NavBar() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/10"
        : "bg-white/60 backdrop-blur-2xl shadow-sm"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <div className="hidden lg:flex gap-3 items-center">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`px-4 py-2 font-semibold text-base rounded-xl transition-all duration-200 ${pathname === path
                ? "text-brand-blue bg-white/60 border border-brand-blue/20 shadow-lg backdrop-blur-sm"
                : "text-gray-700 hover:text-brand-blue hover:bg-brand-blue/10"
              }`}
            >
              {name}
            </Link>
          ))}
          <Link
            to="/register-interest"
            className="ml-4 px-6 py-2.5 rounded-xl bg-brand-yellow text-gray-900 font-bold shadow-yellow-lg hover:brightness-110 hover:scale-105 transition-transform"
          >
            Join Early Access
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            className={`p-2.5 rounded-xl transition-all duration-200 ${isMobileMenuOpen
              ? "bg-brand-blue/20 text-brand-blue"
              : "bg-white/80 text-gray-700 hover:bg-brand-blue/10 hover:text-brand-blue shadow-lg"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <span className="text-2xl">✖️</span> : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl shadow-2xl border-t border-white/10 animate-fade-in-up">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-2">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`block px-4 py-3 font-semibold rounded-xl text-base transition-all duration-150 ${pathname === path
                  ? "text-brand-blue bg-brand-blue/10 border border-brand-blue/20 shadow-lg"
                  : "text-gray-700 hover:text-brand-blue hover:bg-brand-blue/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            <Link
              to="/register-interest"
              className="mt-3 w-full text-center bg-brand-yellow text-gray-900 font-bold py-3 rounded-xl shadow-yellow-lg"
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
