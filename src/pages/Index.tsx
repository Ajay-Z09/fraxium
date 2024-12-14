import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { MultiStepQuoteForm } from "@/components/MultiStepQuoteForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <MultiStepQuoteForm />
      <Footer />
    </div>
  );
};

export default Index;