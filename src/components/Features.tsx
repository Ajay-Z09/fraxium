import { Shield, Clock, Award, Factory } from "lucide-react";

const features = [
  {
    name: "Precision Guaranteed",
    description: "Tolerances as tight as ±0.0002 inches",
    icon: Shield,
  },
  {
    name: "Rapid Turnaround",
    description: "24-hour quotes, expedited manufacturing available",
    icon: Clock,
  },
  {
    name: "Quality Certified",
    description: "ISO 9001:2015 certified facility",
    icon: Award,
  },
  {
    name: "Advanced Equipment",
    description: "State-of-the-art 5-axis CNC machines",
    icon: Factory,
  },
];

export const Features = () => {
  return (
    <div className="bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Why Choose Our Services
          </h2>
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