import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-primary py-24 sm:py-32">
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/95 to-primary/80 animate-fade-in" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fadeIn mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-fade-in">
            High-Precision Machining Excellence for Critical Components
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 animate-fade-in delay-150">
            Specializing in aerospace, medical, and defense industries with tolerances as tight as ±0.0002". 
            Our state-of-the-art 5-axis CNC machines and expert machinists deliver exceptional quality for your most demanding projects.
          </p>
          <div className="mt-8 text-gray-300 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center space-x-2 animate-fade-in delay-300 hover:scale-105 transition-transform duration-300">
                <span className="text-sm">ISO 9001:2015 & AS9100D Certified</span>
              </div>
              <div className="flex items-center justify-center space-x-2 animate-fade-in delay-500 hover:scale-105 transition-transform duration-300">
                <span className="text-sm">24/7 Production Capability</span>
              </div>
              <div className="flex items-center justify-center space-x-2 animate-fade-in delay-700 hover:scale-105 transition-transform duration-300">
                <span className="text-sm">Advanced Quality Control Systems</span>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              onClick={scrollToQuote}
              className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 animate-fade-in delay-1000"
            >
              Get Your Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};