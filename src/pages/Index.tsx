import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Index;