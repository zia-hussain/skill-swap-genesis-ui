import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

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
      <div className="flex flex-col gap-3 items-center py-16 animate-fadeInUp">
        <CheckCircle2 className="w-14 h-14 text-green-500 mb-2" />
        <div className="text-xl font-bold">Thank you!</div>
        <div className="text-gray-500 text-center">You’re on the list. We’ll keep you posted with updates and invites.</div>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto animate-fadeInUp">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold">Name*</label>
        <input id="name" name="name" required type="text"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-yellow font-inter"
          value={fields.name}
          onChange={handleChange} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold">E-mail*</label>
        <input id="email" name="email" required type="email"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-yellow font-inter"
          value={fields.email}
          onChange={handleChange} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-semibold">Messages/Comments (Optional)</label>
        <textarea id="message" name="message"
          className="border border-gray-300 rounded-lg px-4 py-2 min-h-[84px] focus:ring-2 focus:ring-brand-yellow font-inter"
          value={fields.message}
          onChange={handleChange} />
      </div>
      <div className="flex items-center gap-2">
        <input id="consent" name="consent" type="checkbox" className="accent-brand-yellow" checked={fields.consent} onChange={handleChange} />
        <label htmlFor="consent" className="text-xs text-gray-600">I agree that this data will be processed for contact. I understand I can revoke consent at any time.*</label>
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit"
        className="bg-brand-blue text-white px-6 py-2 rounded-lg shadow transition hover:bg-brand-yellow hover:text-brand-blue font-semibold w-full disabled:opacity-40"
        disabled={loading}
      >{loading ? "Sending..." : "Send"}</button>
    </form>
  );
}
