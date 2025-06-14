
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
    <motion.div 
      className="flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="w-12 h-12 bg-gradient-to-r from-brand-yellow to-yellow-400 rounded-2xl flex items-center justify-center shadow-xl"
        whileHover={{ rotate: 5, scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-6 h-6 text-gray-900" />
        </motion.div>
      </motion.div>
      <span className="font-bold tracking-tight text-2xl text-gray-900 font-inter">Skill x Swap</span>
    </motion.div>
  );
}

export default function NavBar() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-white/20" 
          : "bg-white/80 backdrop-blur-xl shadow-sm"
      )}
    >
      <nav className="container flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-2 items-center">
          {navLinks.map(({ name, path }) => (
            <motion.div
              key={name}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={path}
                className={cn(
                  "relative px-5 py-3 font-semibold rounded-xl transition-all duration-300 text-sm group",
                  pathname === path 
                    ? "text-brand-yellow bg-brand-yellow/10 shadow-lg" 
                    : "text-gray-700 hover:text-brand-yellow hover:bg-brand-yellow/5"
                )}
              >
                {name}
                {pathname === path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-yellow/10 to-brand-blue/10 rounded-xl -z-10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-yellow to-brand-blue group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={cn(
              "p-3 rounded-xl transition-all duration-300",
              isMobileMenuOpen 
                ? "bg-brand-yellow/20 text-brand-yellow" 
                : "bg-white/80 text-gray-700 hover:bg-brand-yellow/10 hover:text-brand-yellow shadow-lg"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-white/20"
          >
            <div className="container py-6 px-4">
              <div className="flex flex-col gap-2">
                {navLinks.map(({ name, path }, idx) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <Link
                      to={path}
                      className={cn(
                        "block px-6 py-4 font-semibold rounded-2xl transition-all duration-300 relative group",
                        pathname === path 
                          ? "text-brand-yellow bg-gradient-to-r from-brand-yellow/10 to-brand-blue/10 shadow-lg" 
                          : "text-gray-700 hover:text-brand-yellow hover:bg-brand-yellow/5"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {name}
                      {pathname === path && (
                        <motion.div
                          className="absolute left-2 top-1/2 w-1 h-8 bg-gradient-to-b from-brand-yellow to-brand-blue rounded-full transform -translate-y-1/2"
                          layoutId="mobilActiveTab"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <Link
                  to="/register-interest"
                  className="block w-full text-center bg-gradient-to-r from-brand-yellow to-yellow-400 text-gray-900 font-bold py-4 rounded-2xl shadow-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🚀 Join Early Access
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
