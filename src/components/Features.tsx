import { Shield, Clock, Award, Factory, FileCheck, Ruler, Zap } from "lucide-react";

const features = [
  {
    name: "Precision Guaranteed",
    description: "Achieve tolerances as tight as ±0.0002 inches with our advanced CNC machinery and expert quality control processes",
    icon: Ruler,
  },
  {
    name: "Rapid Turnaround",
    description: "24-hour quotes and expedited manufacturing available. Our efficient workflows ensure quick delivery without compromising quality",
    icon: Clock,
  },
  {
    name: "Quality Certified",
    description: "ISO 9001:2015 & AS9100D certified facility with comprehensive quality management systems and full material traceability",
    icon: Award,
  },
  {
    name: "Advanced Equipment",
    description: "State-of-the-art 5-axis CNC machines capable of handling complex geometries and diverse materials",
    icon: Factory,
  },
  {
    name: "Expert Machinists",
    description: "Skilled team with decades of combined experience in precision manufacturing and complex part production",
    icon: Award,
  },
  {
    name: "Quality Inspection",
    description: "CMM verification and detailed inspection reports for every batch, ensuring consistent quality and compliance",
    icon: FileCheck,
  },
  {
    name: "Material Expertise",
    description: "Extensive experience with exotic alloys, titanium, Inconel, and other high-performance materials",
    icon: Shield,
  },
  {
    name: "24/7 Production",
    description: "Round-the-clock manufacturing capability to meet urgent deadlines and high-volume requirements",
    icon: Zap,
  },
];

export const Features = () => {
  const trustedCompanies = [
    "Lockheed Martin",
    "Medtronic",
    "Siemens Energy",
    "ABB",
    "Haas Automation",
    "Wärtsilä"
  ];

  return (
    <div className="bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Trusted By Section */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <p className="text-lg text-gray-600 mb-8">
            Trusted by engineers at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {trustedCompanies.map((company) => (
              <div 
                key={company} 
                className="flex items-center justify-center h-16"
              >
                <span className="text-xl text-gray-800 font-semibold hover:text-accent transition-colors">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Original Content */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Industry-Leading Precision Manufacturing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our commitment to excellence and advanced manufacturing capabilities ensure your components meet the highest standards of precision and quality.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative animate-fadeIn">
                <dt className="text-lg font-semibold leading-7 text-primary">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="ml-16">{feature.name}</div>
                </dt>
                <dd className="mt-2 ml-16 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};