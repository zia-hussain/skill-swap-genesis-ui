
import { Facebook, Instagram, Linkedin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur-lg mt-16">
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-yellow to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-gray-900 font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Skill x Swap</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>© 2024 All rights reserved.</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="mailto:hello@skillxswap.com" className="text-gray-600 hover:text-brand-blue transition-colors font-medium">
              Contact
            </a>
            <div className="flex items-center gap-4">
              <motion.a 
                href="https://instagram.com/skillxswap" 
                aria-label="Instagram" 
                target="_blank" 
                rel="noopener"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://facebook.com/skillxswap" 
                aria-label="Facebook" 
                target="_blank" 
                rel="noopener"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/company/skillxswap" 
                aria-label="LinkedIn" 
                target="_blank" 
                rel="noopener"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Home</Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">About</Link>
            <Link to="/register-interest" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Register</Link>
            <Link to="/faq" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">FAQs</Link>
            <Link to="/legal" className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">Legal</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
