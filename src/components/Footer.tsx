import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <div className="flex items-center text-gray-300">
            <Phone className="h-5 w-5 mr-2" />
            <span>1-800-PRECISION</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Mail className="h-5 w-5 mr-2" />
            <span>quotes@yourcompany.com</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="h-5 w-5 mr-2" />
            <span>123 Precision Way, Industry City</span>
          </div>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-300">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};