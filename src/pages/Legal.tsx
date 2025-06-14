
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Legal() {
  return (
    <div className="bg-neutralBg min-h-screen font-inter">
      <NavBar />
      <main className="container pt-16 pb-10 px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Legal Notice</h1>
        <section className="bg-white shadow-soft rounded-xl p-8 mb-8">
          <h2 className="font-semibold text-lg mb-4 text-brand-blue">Terms & Privacy</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>All data is processed according to standard GDPR practices.</li>
            <li>Your personal data will never be sold or shared with third parties.</li>
            <li>By joining, you consent to be contacted about Skill x Swap only. You can unsubscribe at any time.</li>
            <li>Site content &copy; Skill x Swap. All rights reserved.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
