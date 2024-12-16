import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Hero = () => {
  const scrollToQuote = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col space-y-8">
          {/* Navigation Tabs */}
          <div className="flex space-x-4 border-b">
            <div className="border-b-4 border-[#706FD3] pb-2">
              <span className="text-[#706FD3] font-semibold">For Prototyping</span>
            </div>
            <div className="pb-2">
              <span className="text-gray-600 font-semibold">For Production</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fadeIn">
              <h1 className="text-4xl sm:text-6xl font-bold text-[#1A2B3B] leading-tight">
                Custom Manufactured Parts Done Right.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover the Fictiv difference for faster lead times, higher-quality parts, 
                no minimum order quantities, and extensive capabilities. Partner with Fictiv 
                for all of your prototype and production needs.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={scrollToQuote}
                  className="bg-[#706FD3] hover:bg-[#706FD3]/90 text-white font-semibold px-8 py-6 text-lg"
                >
                  Get Instant Quote
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
                Fictiv-verified Inspections
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};