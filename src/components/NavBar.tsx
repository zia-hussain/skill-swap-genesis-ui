
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Register Interest", path: "/register-interest" },
  { name: "FAQ's", path: "/faq" },
  { name: "Legal", path: "/legal" },
];

function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-10 h-10 bg-gradient-to-r from-brand-yellow to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="11" fill="#F5C738"/>
          <circle cx="6" cy="8" r="2" fill="#0072CE"/>
          <circle cx="22" cy="8" r="2" fill="#EF476F"/>
          <circle cx="14" cy="22" r="2" fill="#44CF6C"/>
          <circle cx="8" cy="20" r="1.5" fill="#0072CE"/>
          <circle cx="20" cy="20" r="1.5" fill="#FFB800"/>
        </svg>
      </div>
      <span className="font-bold tracking-tight text-2xl text-gray-900 font-inter">Skill x Swap</span>
    </motion.div>
  );
}

export default function NavBar() {
  const { pathname } = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm">
      <nav className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map(({ name, path }) => (
            <motion.div
              key={name}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={path}
                className={cn(
                  "px-4 py-2 font-medium rounded-xl transition-all duration-300 hover:bg-brand-yellow/20 hover:text-brand-yellow text-sm",
                  pathname === path && "text-brand-yellow bg-brand-yellow/10"
                )}
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile menu button - simplified for now */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl bg-brand-yellow/10 text-brand-yellow"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </nav>
    </header>
  );
}
