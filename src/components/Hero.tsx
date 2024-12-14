import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-primary py-24 sm:py-32">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80')",
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/95 to-primary/80" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fadeIn mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
              alt="High-Precision Manufacturing"
              className="rounded-lg shadow-xl w-32 h-32 object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            High-Precision Machining Excellence for Critical Components
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Specializing in aerospace, medical, and defense industries with tolerances as tight as ±0.0002". 
            Our state-of-the-art 5-axis CNC machines and expert machinists deliver exceptional quality for your most demanding projects.
          </p>
          <div className="mt-8 text-gray-300 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80"
                  alt="ISO Certification"
                  className="w-12 h-12 rounded object-cover"
                />
                <span className="text-sm">ISO 9001:2015 & AS9100D Certified</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
                  alt="24/7 Production"
                  className="w-12 h-12 rounded object-cover"
                />
                <span className="text-sm">24/7 Production Capability</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                  alt="Quality Control"
                  className="w-12 h-12 rounded object-cover"
                />
                <span className="text-sm">Advanced Quality Control Systems</span>
              </div>
            </div>
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