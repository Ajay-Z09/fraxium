import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate-fadeIn mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Precision Machining for Your Most Critical Components
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Industry-leading precision machining services with rapid turnaround times. Get an instant quote for your custom parts.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              onClick={scrollToQuote}
              className="bg-accent hover:bg-accent/90 text-lg px-8 py-6"
            >
              Get Quote Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};