import { Input } from "@/components/ui/input";

interface CustomerDetailsFormProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    companyName: string;
  };
  handleChange: (field: string, value: string) => void;
}

export const CustomerDetailsForm = ({ formData, handleChange }: CustomerDetailsFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-primary">Tell Us About Your Project</h3>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
        <Input
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          required
          className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
          className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
          placeholder="Enter your email address"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number (WhatsApp)</label>
        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          required
          className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
          placeholder="Enter your WhatsApp number"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
        <Input
          value={formData.companyName}
          onChange={(e) => handleChange("companyName", e.target.value)}
          required
          className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
          placeholder="Enter your company name"
        />
      </div>
    </div>
  );
};