import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { HowWeWork } from "@/components/HowWeWork";
import { MaterialSelection } from "@/components/MaterialSelection";
import { MultiStepQuoteForm } from "@/components/MultiStepQuoteForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Services />
      <HowWeWork />
      <MaterialSelection />
      <MultiStepQuoteForm />
    </main>
  );
};

export default Index;