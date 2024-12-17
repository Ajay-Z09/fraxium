import { Card, CardContent } from "@/components/ui/card";
import { Diamond, Atom, FlaskConical, Layers } from "lucide-react";

export const MaterialSelection = () => {
  const materials = [
    {
      category: "High-Performance Metals",
      icon: <Diamond className="w-8 h-8 text-accent" />,
      materials: ["Titanium", "Inconel", "Tungsten and Tungsten Alloys", "Stainless Steel (High-Performance Grades)"]
    },
    {
      category: "Advanced Alloys",
      icon: <Atom className="w-8 h-8 text-accent" />,
      materials: ["Cobalt-Chrome Alloys", "Hastelloy", "Aluminum Alloys", "Magnesium Alloys"]
    },
    {
      category: "Specialty Materials",
      icon: <FlaskConical className="w-8 h-8 text-accent" />,
      materials: ["Carbon Fiber Reinforced Polymers (CFRP)", "Ceramics", "Monel", "Tantalum"]
    },
    {
      category: "Engineered Materials",
      icon: <Layers className="w-8 h-8 text-accent" />,
      materials: ["Beryllium and Beryllium Copper", "Super Duplex Stainless Steel", "Silicon and Silicon Carbide", "Molybdenum and Molybdenum Alloys", "Nitinol"]
    }
  ];

  return (
    <div className="bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Material Selection
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Extensive experience with a wide range of high-performance materials
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((category, index) => (
            <Card key={index} className="border-2 border-gray-100 transition-all duration-300 hover:border-accent/50 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-primary mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.materials.map((material, mIndex) => (
                    <li key={mIndex} className="text-sm text-gray-600">
                      • {material}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};