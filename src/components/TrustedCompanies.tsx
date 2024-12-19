import React from 'react';

type Company = {
  name: string;
  logoUrl: string;
};

const companies: Company[] = [
  {
    name: "Lockheed Martin",
    logoUrl: "/logos/lockheed-martin.svg"
  },
  {
    name: "Medtronic",
    logoUrl: "/logos/medtronic.svg"
  },
  {
    name: "Siemens Energy",
    logoUrl: "/logos/siemens-energy.svg"
  },
  {
    name: "ABB",
    logoUrl: "/logos/abb.svg"
  },
  {
    name: "Haas Automation",
    logoUrl: "/logos/haas.svg"
  },
  {
    name: "Wärtsilä",
    logoUrl: "/logos/wartsila.svg"
  }
];

export const TrustedCompanies = () => {
  return (
    <div className="mx-auto max-w-4xl text-center mb-20">
      <p className="text-lg text-[#0066CC] font-medium mb-8">
        Trusted by engineers at
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {companies.map((company) => (
          <div 
            key={company.name} 
            className="flex items-center justify-center h-16"
          >
            <img
              src={company.logoUrl}
              alt={`${company.name} logo`}
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};