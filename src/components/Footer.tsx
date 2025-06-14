
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg text-gray-900">Skill x Swap</span>
          <span className="text-sm text-gray-500">&copy;Copyright. All rights reserved.</span>
        </div>
        <div className="flex gap-4 items-center">
          <a href="mailto:hello@skillxswap.com" className="text-gray-700 hover:text-brand-blue transition-colors text-sm">Contact</a>
          <a href="https://instagram.com/skillxswap" aria-label="Instagram" target="_blank" rel="noopener" className="hover:text-brand-blue">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://facebook.com/skillxswap" aria-label="Facebook" target="_blank" rel="noopener" className="hover:text-brand-blue">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/company/skillxswap" aria-label="LinkedIn" target="_blank" rel="noopener" className="hover:text-brand-blue">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <div className="flex gap-3">
          <Link to="/" className="text-gray-400 hover:text-gray-700 text-xs">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-gray-700 text-xs">About</Link>
          <Link to="/register-interest" className="text-gray-400 hover:text-gray-700 text-xs">Register</Link>
          <Link to="/faq" className="text-gray-400 hover:text-gray-700 text-xs">FAQs</Link>
          <Link to="/legal" className="text-gray-400 hover:text-gray-700 text-xs">Legal</Link>
        </div>
      </div>
    </footer>
  );
}
