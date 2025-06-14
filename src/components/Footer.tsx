
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
    gradient: "from-pink-500 to-purple-600",
    hoverColor: "hover:text-pink-500"
  },
  {
    name: "Facebook", 
    href: "https://facebook.com/skillxswap",
    icon: Facebook,
    gradient: "from-blue-600 to-blue-700",
    hoverColor: "hover:text-blue-600"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/skillxswap",
    icon: Linkedin,
    gradient: "from-blue-700 to-blue-800", 
    hoverColor: "hover:text-blue-700"
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-40 h-40 border border-brand-yellow/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-32 h-32 border border-brand-blue/10 rounded-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="container relative z-10 py-16 px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-yellow to-yellow-400 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-gray-900 font-bold text-xl">S</span>
                </div>
                <span className="font-bold text-2xl">Skill x Swap</span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The global skill-sharing platform where you grow by helping others grow. 
                Connect, learn, and transform together in a community that believes in the power of shared knowledge.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <motion.a 
                  href="mailto:hello@skillxswap.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-brand-yellow transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  hello@skillxswap.com
                </motion.a>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <MapPin className="w-5 h-5" />
                  Global Community
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center text-white hover:shadow-xl transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-brand-yellow transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-blue/20 to-brand-yellow/20 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/10"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on our platform launch and exclusive early access opportunities.
            </p>
            <Link
              to="/register-interest"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-yellow to-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Join Early Access
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700"
        >
          <div className="flex items-center gap-3 text-gray-400">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-red-500" />
            </motion.div>
            <span>© 2024 Skill x Swap. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built for the global learning community</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
