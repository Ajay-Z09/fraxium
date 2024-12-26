import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { CustomerDetailsForm } from "./quote/CustomerDetailsForm";
import { ProjectDetailsForm } from "./quote/ProjectDetailsForm";
import { supabase } from "@/integrations/supabase/client";

export const MultiStepQuoteForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Customer Details (Step 1)
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    
    // Project Details (Step 2)
    partName: "",
    materialType: "",
    materialGrade: "",
    length: "",
    width: "",
    height: "",
    quantity: "",
    tolerances: "",
    machiningType: "",
    certifications: "",
    additionalRequirements: "",
    leadTime: "",
    estimatedBudget: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (file: File) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('cad-files')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('cad-files')
        .getPublicUrl(fileName);

      toast({
        title: "File Uploaded",
        description: "Your CAD file has been uploaded successfully.",
      });

      return publicUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Upload Error",
        description: "There was a problem uploading your file. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.from('quote_requests').insert({
        name: formData.fullName,
        email: formData.email,
        company: formData.companyName,
        phone: formData.phone,
        project_details: JSON.stringify({
          partName: formData.partName,
          materialType: formData.materialType,
          materialGrade: formData.materialGrade,
          dimensions: {
            length: formData.length,
            width: formData.width,
            height: formData.height,
          },
          quantity: parseInt(formData.quantity),
          tolerances: formData.tolerances,
          machiningType: formData.machiningType,
          certifications: formData.certifications,
        }),
        quantity: parseInt(formData.quantity),
        lead_time: formData.leadTime,
        estimated_budget: formData.estimatedBudget ? parseFloat(formData.estimatedBudget) : null,
        additional_requirements: formData.additionalRequirements,
      });

      if (error) throw error;

      toast({
        title: "Quote Request Received",
        description: "We'll get back to you within 24 hours with a detailed quote.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        partName: "",
        materialType: "",
        materialGrade: "",
        length: "",
        width: "",
        height: "",
        quantity: "",
        tolerances: "",
        machiningType: "",
        certifications: "",
        additionalRequirements: "",
        leadTime: "",
        estimatedBudget: "",
      });
      setStep(1);
    } catch (error) {
      console.error('Error saving quote request:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your quote request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  return (
    <div id="quote-form" className="bg-[#F6F6F7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Request a Quote
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll provide you with a detailed quote within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <>
                    <CustomerDetailsForm formData={formData} handleChange={handleChange} />
                    <div className="mt-8">
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="w-full bg-accent hover:bg-accent/90"
                      >
                        Next Step
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <ProjectDetailsForm 
                      formData={formData} 
                      handleChange={handleChange}
                      handleFileUpload={handleFileUpload}
                    />
                    <div className="mt-8 flex gap-4">
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
                        className="flex-1 bg-accent hover:bg-accent/90"
                      >
                        Submit Quote Request
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
