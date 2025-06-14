
export default function Testimonials() {
  return (
    <section className="container py-16">
      <div className="bg-brand-blue/95 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row gap-8 items-center text-white shadow-xl animate-fadeInUp">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 font-inter">Our Mission</h2>
          <p className="text-lg max-w-xl mb-3">
            “We believe the next wave of learning will be powered not by institutions, but by communities. No gatekeeping, no money—just real people sharing real expertise.”
          </p>
          <span className="block text-sm font-semibold">— Samantha, Founder</span>
        </div>
      </div>
    </section>
  );
}
