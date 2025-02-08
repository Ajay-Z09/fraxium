
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#1A2B3B] py-24 sm:py-32">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"
        style={{
          backgroundImage: `url('/placeholder.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Brand Logo */}
        <div className="absolute top-8 left-8">
          <h1 className="text-2xl font-bold text-white">Fraxium</h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fadeIn">
            <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
              Precision Engineering<br />
              <span className="text-[#517FA4]">Manufacturing Excellence</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Expert precision manufacturing services for industries demanding the highest standards. From concept to creation, we deliver excellence in every component.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToQuote}
                className="bg-[#517FA4] hover:bg-[#517FA4]/90 text-white font-semibold px-8 py-6 text-lg group"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                className="border-gray-500 text-white hover:text-[#517FA4] font-semibold px-8 py-6 text-lg flex items-center gap-2"
              >
                Watch Video <Play size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-700 mt-16">
          <div className="flex items-center gap-3 animate-fadeIn">
            <div className="rounded-full bg-[#517FA4]/10 p-2">
              <svg className="w-5 h-5 text-[#517FA4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-300 font-medium">
              ISO 9001:2015 Certified
            </span>
          </div>
          <div className="flex items-center gap-3 animate-fadeIn delay-100">
            <div className="rounded-full bg-[#517FA4]/10 p-2">
              <svg className="w-5 h-5 text-[#517FA4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-300 font-medium">
              24/7 Production
            </span>
          </div>
          <div className="flex items-center gap-3 animate-fadeIn delay-200">
            <div className="rounded-full bg-[#517FA4]/10 p-2">
              <svg className="w-5 h-5 text-[#517FA4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-300 font-medium">
              Advanced Equipment
            </span>
          </div>
          <div className="flex items-center gap-3 animate-fadeIn delay-300">
            <div className="rounded-full bg-[#517FA4]/10 p-2">
              <svg className="w-5 h-5 text-[#517FA4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-300 font-medium">
              Quality Guaranteed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
