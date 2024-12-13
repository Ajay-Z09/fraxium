import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fadeIn mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            High-Precision Machining Excellence for Critical Components
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Specializing in aerospace, medical, and defense industries with tolerances as tight as ±0.0002". 
            Our state-of-the-art 5-axis CNC machines and expert machinists deliver exceptional quality for your most demanding projects.
          </p>
          <div className="mt-8 text-gray-300 space-y-4">
            <p className="text-sm">
              • ISO 9001:2015 & AS9100D Certified
            </p>
            <p className="text-sm">
              • 24/7 Production Capability
            </p>
            <p className="text-sm">
              • Advanced Quality Control Systems
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              onClick={scrollToQuote}
              className="bg-accent hover:bg-accent/90 text-lg px-8 py-6"
            >
              Get Your Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};