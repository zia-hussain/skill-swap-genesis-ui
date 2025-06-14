
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-white min-h-screen font-inter">
    <main>
      <Hero />
      <div id="how-it-works" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600">Coming up next - let's perfect the hero first! 🔥</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Index;
