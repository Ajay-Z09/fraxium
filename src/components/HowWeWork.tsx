import { Card, CardContent } from "@/components/ui/card";
import { Users, FileCheck2, Wrench } from "lucide-react";

export const HowWeWork = () => {
  const steps = [
    {
      title: "Understand Your Vision",
      description: "In a 1-to-1 session, we collaborate with your R&D team to identify goals and challenges.",
      icon: <Users className="w-8 h-8 text-white" />
    },
    {
      title: "Optimize Designs",
      description: "Provide comprehensive DFM analysis to enhance manufacturability.",
      icon: <FileCheck2 className="w-8 h-8 text-white" />
    },
    {
      title: "Build Prototypes",
      description: "Develop precise prototypes to bring your ideas to life.",
      icon: <Wrench className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="bg-[#706FD3] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our 3-Step Process
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/80">
            How We Work Together
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/10 border-0 backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
              <CardContent className="p-6">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-sm text-white/80">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};