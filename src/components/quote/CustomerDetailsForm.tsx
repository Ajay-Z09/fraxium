import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CustomerDetailsFormProps {
  formData: {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    address: string;
    industry: string;
  };
  handleChange: (field: string, value: string) => void;
}

export const CustomerDetailsForm = ({ formData, handleChange }: CustomerDetailsFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-primary">Customer Details</h3>
        <p className="text-muted-foreground">Please provide your contact information below.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
          <Input
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            required
            className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
          <Input
            value={formData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
            required
            className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
            placeholder="Acme Inc."
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Address</label>
        <Textarea
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
          required
          className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm min-h-[100px]"
          placeholder="Enter your complete address"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Industry</label>
        <Input
          value={formData.industry}
          onChange={(e) => handleChange("industry", e.target.value)}
          required
          className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
          placeholder="Enter your industry"
        />
      </div>
    </div>
  );
};