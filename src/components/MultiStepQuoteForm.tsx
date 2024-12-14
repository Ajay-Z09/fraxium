import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export const MultiStepQuoteForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Customer Details (Step 1)
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    address: "",
    industry: "",
    
    // Project Details (Step 2)
    partName: "",
    materialType: "",
    materialGrade: "",
    certifications: "",
    length: "",
    width: "",
    height: "",
    tolerances: "",
    machiningType: "",
    specialProcesses: "",
    surfaceFinish: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 24 hours with a detailed quote.",
    });
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      address: "",
      industry: "",
      partName: "",
      materialType: "",
      materialGrade: "",
      certifications: "",
      length: "",
      width: "",
      height: "",
      tolerances: "",
      machiningType: "",
      specialProcesses: "",
      surfaceFinish: "",
    });
    setStep(1);
  };

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  return (
    <div id="quote-form" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Request a Quote
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll provide you with a detailed quote within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl sm:mt-20">
          <Card>
            <CardContent className="p-6">
              <div className="mb-8 flex justify-center">
                <div className="flex items-center">
                  <div className={`h-8 w-8 rounded-full ${step === 1 ? 'bg-accent' : 'bg-gray-200'} flex items-center justify-center text-white font-bold`}>
                    1
                  </div>
                  <div className="w-16 h-1 bg-gray-200">
                  </div>
                  <div className={`h-8 w-8 rounded-full ${step === 2 ? 'bg-accent' : 'bg-gray-200'} flex items-center justify-center text-white font-bold`}>
                    2
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Customer Details</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <Input
                        value={formData.fullName}
                        onChange={(e) => handleChange("fullName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Company Name</label>
                      <Input
                        value={formData.companyName}
                        onChange={(e) => handleChange("companyName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Address</label>
                      <Textarea
                        value={formData.address}
                        onChange={(e) => handleChange("address", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Industry</label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => handleChange("industry", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aerospace">Aerospace</SelectItem>
                          <SelectItem value="medical">Medical</SelectItem>
                          <SelectItem value="automotive">Automotive</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="w-full"
                    >
                      Next Step
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Project Details</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Part Name</label>
                      <Input
                        value={formData.partName}
                        onChange={(e) => handleChange("partName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Material Type</label>
                      <Select
                        value={formData.materialType}
                        onValueChange={(value) => handleChange("materialType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select material type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="titanium">Titanium</SelectItem>
                          <SelectItem value="inconel">Inconel</SelectItem>
                          <SelectItem value="aluminum">Aluminum</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Material Grade/Alloy</label>
                      <Input
                        value={formData.materialGrade}
                        onChange={(e) => handleChange("materialGrade", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Certifications Required</label>
                      <Input
                        value={formData.certifications}
                        onChange={(e) => handleChange("certifications", e.target.value)}
                        placeholder="e.g., AS9100, ISO 13485"
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Length (mm)</label>
                        <Input
                          type="number"
                          value={formData.length}
                          onChange={(e) => handleChange("length", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Width (mm)</label>
                        <Input
                          type="number"
                          value={formData.width}
                          onChange={(e) => handleChange("width", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Height (mm)</label>
                        <Input
                          type="number"
                          value={formData.height}
                          onChange={(e) => handleChange("height", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Tolerances</label>
                      <Input
                        value={formData.tolerances}
                        onChange={(e) => handleChange("tolerances", e.target.value)}
                        placeholder="e.g., ±0.005 mm"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Machining Type</label>
                      <Select
                        value={formData.machiningType}
                        onValueChange={(value) => handleChange("machiningType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select machining type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="milling">Milling</SelectItem>
                          <SelectItem value="turning">Turning</SelectItem>
                          <SelectItem value="grinding">Grinding</SelectItem>
                          <SelectItem value="edm">EDM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Special Processes</label>
                      <Input
                        value={formData.specialProcesses}
                        onChange={(e) => handleChange("specialProcesses", e.target.value)}
                        placeholder="e.g., 5-axis machining, deburring"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Surface Finish</label>
                      <Input
                        value={formData.surfaceFinish}
                        onChange={(e) => handleChange("surfaceFinish", e.target.value)}
                        placeholder="e.g., Ra 0.8"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="flex-1"
                      >
                        Previous
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1"
                      >
                        Submit Quote Request
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};