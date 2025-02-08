import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { MaterialSelection } from "@/components/MaterialSelection";
import { MultiStepQuoteForm } from "@/components/MultiStepQuoteForm";
import { Footer } from "@/components/Footer";
import { HowWeWork } from "@/components/HowWeWork";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Services />
      <HowWeWork />
      <MaterialSelection />
      <MultiStepQuoteForm />
      <Footer />
    </div>
  );
};

export default Index;