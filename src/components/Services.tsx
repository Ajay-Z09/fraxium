import { Card, CardContent } from "@/components/ui/card";
import { Settings2, Zap, RotateCcw, Microscope, Hammer, Wrench, Scissors, Scan, Printer, Factory } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "CNC Machining",
      icon: <Settings2 className="w-8 h-8 text-accent" />,
      description: "High-precision computer-controlled manufacturing for complex parts"
    },
    {
      title: "EDM",
      icon: <Zap className="w-8 h-8 text-accent" />,
      description: "Electrical Discharge Machining for intricate metal shaping"
    },
    {
      title: "Swiss Turning",
      icon: <RotateCcw className="w-8 h-8 text-accent" />,
      description: "Precision turning for small, complex cylindrical parts"
    },
    {
      title: "Micromachining",
      icon: <Microscope className="w-8 h-8 text-accent" />,
      description: "Ultra-precise manufacturing for miniature components"
    },
    {
      title: "Surface Grinding",
      icon: <Hammer className="w-8 h-8 text-accent" />,
      description: "Achieving precise surface finishes and tolerances"
    },
    {
      title: "Prototype Development",
      icon: <Wrench className="w-8 h-8 text-accent" />,
      description: "Rapid prototyping and development solutions"
    },
    {
      title: "Precision Laser Cutting",
      icon: <Scissors className="w-8 h-8 text-accent" />,
      description: "High-accuracy laser cutting services"
    },
    {
      title: "Automated Quality Inspection",
      icon: <Scan className="w-8 h-8 text-accent" />,
      description: "Advanced quality control and inspection processes"
    },
    {
      title: "3D Printing",
      icon: <Printer className="w-8 h-8 text-accent" />,
      description: "Additive manufacturing for rapid prototyping and production"
    },
    {
      title: "Injection Molding",
      icon: <Factory className="w-8 h-8 text-accent" />,
      description: "High-volume production of plastic parts with excellent consistency"
    },
    {
      title: "Sheet Metal Fabrication",
      icon: <Settings2 className="w-8 h-8 text-accent" />,
      description: "Custom metal forming and fabrication services"
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Manufacturing Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Comprehensive manufacturing solutions tailored to your needs
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-gray-100 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};