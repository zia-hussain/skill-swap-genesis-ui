
import { Facebook, Instagram, Linkedin, Heart, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerLinks = {
  product: [
    { name: "How It Works", path: "/#how-it-works" },
    { name: "Early Access", path: "/register-interest" },
    { name: "About Us", path: "/about" },
    { name: "FAQ", path: "/faq" }
  ],
  legal: [
    { name: "Legal Notice", path: "/legal" },
    { name: "Privacy Policy", path: "/legal#privacy" },
    { name: "Terms of Service", path: "/legal#terms" },
    { name: "Cookie Policy", path: "/legal#cookies" }
  ],
  community: [
    { name: "Success Stories", path: "/#testimonials" },
    { name: "Community Guidelines", path: "/legal#guidelines" },
    { name: "Help Center", path: "/faq" },
    { name: "Contact Support", path: "mailto:support@skillxswap.com" }
  ]
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/skillxswap",
    icon: Instagram,
  },
  {
    name: "Facebook", 
    href: "https://facebook.com/skillxswap",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/skillxswap",
    icon: Linkedin,
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#171C2E] bg-gradient-to-tr from-[#1A223C] to-[#212A47] text-white py-16 px-0 border-t border-[#222944] shadow-[0_-1px_16px_rgba(44,66,120,0.11),_0_8px_28px_0_rgba(244,202,66,0.11)]">
      <div className="container mx-auto">
        <div className="grid gap-16 md:grid-cols-5 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-brand-yellow to-brand-blue rounded-xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <span className="font-bold text-2xl gradient-text-brand-light">Skill x Swap</span>
            </div>
            <p className="mb-5 text-white/70 leading-relaxed max-w-xs">
              The global skill-sharing platform where you grow by helping others grow. Connect, learn, and transform together in a community that believes in the power of shared knowledge.
            </p>
            <div className="flex flex-col gap-2 mb-7">
              <a href="mailto:hello@skillxswap.com" className="flex items-center gap-3 text-white/80 hover:text-brand-yellow transition">
                <Mail className="w-5 h-5" />
                hello@skillxswap.com
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5" />
                Global Community
              </div>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-[#283150]/75 rounded-full flex items-center justify-center text-white hover:bg-brand-yellow hover:text-black transition`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Links Columns */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/75 hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/75 hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-white/75 hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#141B2E]/80 rounded-2xl px-4 md:px-10 py-7 mb-8 max-w-2xl mx-auto border border-[#232B48]/70 shadow-xl backdrop-blur-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3 text-white">Stay Updated</h3>
            <p className="mb-5 text-white/70">Get the latest updates on our platform launch and exclusive early access opportunities.</p>
            <Link 
              to="/register-interest"
              className="btn-glass-yellow px-8 py-3 font-bold rounded-3xl shadow"
            >
              Join Early Access
              <Mail className="w-5 h-5 inline ml-2" />
            </Link>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-[#232B48]/80 mt-10">
          <div className="flex items-center gap-3 text-white/60">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-400" />
            <span>© 2024 Skill x Swap. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Built for the global learning community</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
