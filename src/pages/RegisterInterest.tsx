
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";

export default function RegisterInterest() {
  return (
    <div className="bg-neutralBg min-h-screen font-inter">
      <NavBar />
      <main>
        <section className="container pt-16 pb-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 animate-fadeInUp">
              Be the First to Join<br/> a Smarter Way to Learn & Share
            </h1>
            <p className="text-lg text-center mb-10 text-gray-700">
              Sign up for early news and exclusive access. <br />
              We’ll reach out with updates — no spam, only value.
            </p>
            <RegisterForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
