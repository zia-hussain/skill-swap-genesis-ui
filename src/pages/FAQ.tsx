
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AccordionFaq from "@/components/AccordionFaq";

export default function FAQ() {
  return (
    <div className="bg-neutralBg min-h-screen font-inter">
      <NavBar />
      <main className="container pt-16 pb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Your Questions, Answered</h1>
        <AccordionFaq />
        <div className="mt-14 max-w-xl mx-auto p-6 rounded-xl bg-brand-blue/10 flex flex-col items-center text-center">
          <div className="text-lg font-semibold mb-2">Still have questions?</div>
          <div className="text-gray-700 mb-4">Just drop us an email:</div>
          <a href="mailto:hello@skillxswap.com" className="text-brand-blue font-bold underline">hello@skillxswap.com</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
