import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function RegisterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });
  const [error, setError] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fields.consent || !fields.name || !fields.email) {
      setError("Please fill all required fields and accept consent.");
      return;
    }
    setLoading(true);
    setTimeout(() => { // Simulate request
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-6 items-center py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
        >
          <CheckCircle2 className="w-10 h-10 text-white" />
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
          <p className="text-gray-600 text-lg">You're on the list. We'll keep you posted with updates and invites.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto bg-white/99 shadow-neumorph rounded-xl py-10 px-8 border border-slate-100">
      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="block font-semibold text-brand-blue">Name*</label>
        <input 
          id="name" 
          name="name" 
          required 
          type="text"
          className="w-full bg-white/80 border border-slate-200 rounded-xl px-4 py-3 text-brand-blue placeholder-brand-blue/25 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all duration-300"
          placeholder="Your full name"
          value={fields.name}
          onChange={handleChange} 
        />
      </div>
      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block font-semibold text-brand-blue">Email*</label>
        <input 
          id="email" 
          name="email" 
          required 
          type="email"
          className="w-full bg-white/80 border border-slate-200 rounded-xl px-4 py-3 text-brand-blue placeholder-brand-blue/25 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all duration-300"
          placeholder="your@email.com"
          value={fields.email}
          onChange={handleChange} 
        />
      </div>
      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="block font-semibold text-brand-blue">Message (Optional)</label>
        <textarea 
          id="message" 
          name="message"
          className="w-full bg-white/80 border border-slate-200 rounded-xl px-4 py-3 min-h-[100px] text-brand-blue placeholder-brand-blue/25 focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all duration-300 resize-none"
          placeholder="Tell us what skills you'd like to learn or share..."
          value={fields.message}
          onChange={handleChange} 
        />
      </div>
      {/* Consent */}
      <div className="flex items-start gap-3">
        <input 
          id="consent" 
          name="consent" 
          type="checkbox" 
          className="mt-1 accent-brand-yellow scale-110" 
          checked={fields.consent} 
          onChange={handleChange} 
        />
        <label htmlFor="consent" className="text-xs text-brand-blue/60 leading-relaxed">
          I agree that this data will be processed for contact purposes. I understand I can revoke consent at any time.*
        </label>
      </div>
      {/* ... error message (unchanged) ... */}
      {/* Submit */}
      <button 
        type="submit"
        disabled={loading}
        className="w-full mt-2 shadow-neumorph btn-glass-blue flex items-center justify-center gap-2 py-3 px-8 text-lg font-bold"
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Sending...
          </div>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Join Early Access
          </>
        )}
      </button>
    </form>
  );
}
