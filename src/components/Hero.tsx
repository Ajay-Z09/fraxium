import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { AuthButton } from "./AuthButton";

export const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="absolute top-8 left-8">
          <h1 className="text-2xl font-bold text-[#706FD3]">Fraxium</h1>
        </div>

        {/* Auth Button */}
        <div className="absolute top-8 right-8">
          <AuthButton />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fadeIn">
            {/* New Hero Content */}
            <h1 className="text-4xl sm:text-6xl font-bold text-[#1A2B3B] leading-tight">
              1-to-1 Collaboration for Precision-Driven Innovation
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Partnering with R&D teams to turn groundbreaking ideas into manufacturable solutions through tailored DFM consultation and prototype development.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToQuote}
                className="bg-[#706FD3] hover:bg-[#706FD3]/90 text-white font-semibold px-8 py-6 text-lg"
              >
                Start Your Collaboration Journey
              </Button>
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 font-semibold px-8 py-6 text-lg flex items-center gap-2"
              >
                See How It Works <Play size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
          <div className="flex items-center gap-2 animate-fadeIn delay-300">
            <div className="rounded-full bg-[#706FD3]/10 p-2">
              <svg className="w-5 h-5 text-[#706FD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700">
              Instant Quoting & DFM
            </span>
          </div>
          <div className="flex items-center gap-2 animate-fadeIn delay-500">
            <div className="rounded-full bg-[#706FD3]/10 p-2">
              <svg className="w-5 h-5 text-[#706FD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700">
              No Minimum Order Quantities
            </span>
          </div>
          <div className="flex items-center gap-2 animate-fadeIn delay-700">
            <div className="rounded-full bg-[#706FD3]/10 p-2">
              <svg className="w-5 h-5 text-[#706FD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700">
              Full Mechanical BOM Capabilities
            </span>
          </div>
          <div className="flex items-center gap-2 animate-fadeIn delay-900">
            <div className="rounded-full bg-[#706FD3]/10 p-2">
              <svg className="w-5 h-5 text-[#706FD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700">
              Fraxium-verified Inspections
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};