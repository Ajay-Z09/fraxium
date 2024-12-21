import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileCheck, Play, Package } from "lucide-react";

export const HowWeWork = () => {
  const steps = [
    {
      title: "Upload Your CAD File",
      description: "Start by selecting a manufacturing process and uploading a 3D CAD file to kick off the end-to-end manufacturing solution.",
      icon: <Upload className="w-8 h-8 text-accent" />
    },
    {
      title: "Receive a Quote with DFM",
      description: "Within hours, you'll get a detailed Design for Manufacturability (DFM) analysis along with an accurate real-time quote, ensuring a seamless experience.",
      icon: <FileCheck className="w-8 h-8 text-accent" />
    },
    {
      title: "Production Commences",
      description: "Once you approve the quote and place your order, we'll initiate the manufacturing process. Additional finishing options are available to meet your needs.",
      icon: <Play className="w-8 h-8 text-accent" />
    },
    {
      title: "Parts Delivered!",
      description: "Leveraging our efficient digital manufacturing system, we'll produce and ship your parts in as little as one day, completing the end-to-end solution.",
      icon: <Package className="w-8 h-8 text-accent" />
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our streamlined process ensures quality and efficiency
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 border-gray-100 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-4">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};