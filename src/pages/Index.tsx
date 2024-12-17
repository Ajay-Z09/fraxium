import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { MaterialSelection } from "@/components/MaterialSelection";
import { MultiStepQuoteForm } from "@/components/MultiStepQuoteForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Services />
      <MaterialSelection />
      <MultiStepQuoteForm />
      <Footer />
    </div>
  );
};

export default Index;