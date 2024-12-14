import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <Input
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            required
            className="w-full bg-white border-gray-200 focus:border-accent"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
          <Input
            value={formData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
            required
            className="w-full bg-white border-gray-200 focus:border-accent"
            placeholder="Acme Inc."
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            className="w-full bg-white border-gray-200 focus:border-accent"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            className="w-full bg-white border-gray-200 focus:border-accent"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
        <Textarea
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
          required
          className="w-full bg-white border-gray-200 focus:border-accent"
          placeholder="Enter your complete address"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
        <Select
          value={formData.industry}
          onValueChange={(value) => handleChange("industry", value)}
        >
          <SelectTrigger className="w-full bg-white border-gray-200">
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="aerospace">Aerospace</SelectItem>
            <SelectItem value="medical">Medical</SelectItem>
            <SelectItem value="automotive">Automotive</SelectItem>
            <SelectItem value="defense">Defense</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};