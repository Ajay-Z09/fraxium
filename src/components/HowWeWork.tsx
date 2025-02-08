
import { Card, CardContent } from "@/components/ui/card";
import { Settings2, FileCheck2, Wrench } from "lucide-react";

export const HowWeWork = () => {
  const steps = [
    {
      title: "Engineering Consultation",
      description: "Our expert team collaborates with your R&D department to analyze requirements and optimize designs for manufacturing.",
      icon: <Settings2 className="w-8 h-8 text-white" />
    },
    {
      title: "DFM Analysis",
      description: "Comprehensive Design for Manufacturing analysis to ensure optimal production efficiency and quality.",
      icon: <FileCheck2 className="w-8 h-8 text-white" />
    },
    {
      title: "Precision Manufacturing",
      description: "State-of-the-art equipment and skilled technicians bring your designs to life with unmatched precision.",
      icon: <Wrench className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="bg-[#1A2B3B] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Manufacturing Process
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Streamlined Workflow for Maximum Efficiency
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="bg-[#517FA4]/10 border-0 backdrop-blur-sm transition-all duration-300 hover:bg-[#517FA4]/20">
              <CardContent className="p-6">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
