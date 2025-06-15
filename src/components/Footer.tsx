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
    gradient: "from-brand-yellow to-brand-blue",
    hoverColor: "hover:text-brand-yellow"
  },
  {
    name: "Facebook", 
    href: "https://facebook.com/skillxswap",
    icon: Facebook,
    gradient: "from-brand-blue to-brand-yellow",
    hoverColor: "hover:text-brand-blue"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/skillxswap",
    icon: Linkedin,
    gradient: "from-brand-yellow to-brand-blue", 
    hoverColor: "hover:text-brand-yellow"
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-white via-brand-yellow/10 to-brand-blue/10 text-brand-blue overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 border border-brand-yellow/15 rounded-full" />
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-brand-blue/15 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-yellow/8 to-transparent" />
      </div>
      <div className="container relative z-10 py-16 px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-brand rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="font-bold text-2xl gradient-text-brand">Skill x Swap</span>
              </div>
              <p className="text-brand-blue/80 text-lg leading-relaxed mb-6">
                The global skill-sharing platform where you grow by helping others grow. 
                Connect, learn, and transform together in a community that believes in the power of shared knowledge.
              </p>
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a 
                  href="mailto:hello@skillxswap.com"
                  className="flex items-center gap-3 text-brand-blue hover:text-brand-yellow transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  hello@skillxswap.com
                </a>
                <div className="flex items-center gap-3 text-brand-blue">
                  <MapPin className="w-5 h-5" />
                  Global Community
                </div>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white hover:shadow-xl transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Links Sections */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-blue">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-brand-blue/80 hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-blue">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-brand-blue/80 hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-brand-blue">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-brand-blue/80 hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-brand-blue/10 to-brand-yellow/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-brand-blue">Stay Updated</h3>
            <p className="text-brand-blue/75 mb-6">
              Get the latest updates on our platform launch and exclusive early access opportunities.
            </p>
            <Link
              to="/register-interest"
              className="inline-flex items-center gap-3 bg-gradient-brand text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Join Early Access
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-brand-blue/15">
          <div className="flex items-center gap-3 text-brand-blue/60">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-400" />
            <span>© 2024 Skill x Swap. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2 text-brand-blue/60 text-sm">
            <span>Built for the global learning community</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
