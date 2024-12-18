import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ProjectDetailsFormProps {
  formData: {
    partName: string;
    materialType: string;
    materialGrade: string;
    length: string;
    width: string;
    height: string;
    quantity: string;
    tolerances: string;
    machiningType: string;
    certifications: string;
    additionalRequirements: string;
    leadTime: string;
    estimatedBudget: string;
  };
  handleChange: (field: string, value: string) => void;
  handleFileUpload: (file: File) => void;
}

export const ProjectDetailsForm = ({ formData, handleChange, handleFileUpload }: ProjectDetailsFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-primary">Project Details</h3>
      </div>

      <div>
        <Label htmlFor="partName">Part Name / Description</Label>
        <Input
          id="partName"
          value={formData.partName}
          onChange={(e) => handleChange("partName", e.target.value)}
          required
          className="mt-2"
          placeholder="Enter part name or description"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="materialType">Material Type</Label>
          <Input
            id="materialType"
            value={formData.materialType}
            onChange={(e) => handleChange("materialType", e.target.value)}
            required
            className="mt-2"
            placeholder="e.g., Aluminum, Steel, Plastic"
          />
        </div>
        <div>
          <Label htmlFor="materialGrade">Material Grade/Alloy</Label>
          <Input
            id="materialGrade"
            value={formData.materialGrade}
            onChange={(e) => handleChange("materialGrade", e.target.value)}
            required
            className="mt-2"
            placeholder="Enter material grade"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="length">Length (mm)</Label>
          <Input
            id="length"
            type="number"
            value={formData.length}
            onChange={(e) => handleChange("length", e.target.value)}
            required
            className="mt-2"
            placeholder="0.00"
          />
        </div>
        <div>
          <Label htmlFor="width">Width (mm)</Label>
          <Input
            id="width"
            type="number"
            value={formData.width}
            onChange={(e) => handleChange("width", e.target.value)}
            required
            className="mt-2"
            placeholder="0.00"
          />
        </div>
        <div>
          <Label htmlFor="height">Height (mm)</Label>
          <Input
            id="height"
            type="number"
            value={formData.height}
            onChange={(e) => handleChange("height", e.target.value)}
            required
            className="mt-2"
            placeholder="0.00"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="quantity">Quantity Needed</Label>
          <Input
            id="quantity"
            type="number"
            value={formData.quantity}
            onChange={(e) => handleChange("quantity", e.target.value)}
            required
            className="mt-2"
            placeholder="Enter quantity"
          />
        </div>
        <div>
          <Label htmlFor="tolerances">Tolerance Requirements</Label>
          <Input
            id="tolerances"
            value={formData.tolerances}
            onChange={(e) => handleChange("tolerances", e.target.value)}
            required
            className="mt-2"
            placeholder="e.g., ±0.005 mm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="machiningType">Machining Type</Label>
          <Input
            id="machiningType"
            value={formData.machiningType}
            onChange={(e) => handleChange("machiningType", e.target.value)}
            required
            className="mt-2"
            placeholder="Enter machining type"
          />
        </div>
        <div>
          <Label htmlFor="certifications">Required Certifications</Label>
          <Input
            id="certifications"
            value={formData.certifications}
            onChange={(e) => handleChange("certifications", e.target.value)}
            className="mt-2"
            placeholder="e.g., ISO 9001, AS9100"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="additionalRequirements">Additional Requirements</Label>
        <Textarea
          id="additionalRequirements"
          value={formData.additionalRequirements}
          onChange={(e) => handleChange("additionalRequirements", e.target.value)}
          className="mt-2"
          placeholder="e.g., surface finish, assembly requirements"
        />
      </div>

      <div>
        <Label htmlFor="leadTime">Lead Time / Deadline</Label>
        <Input
          id="leadTime"
          value={formData.leadTime}
          onChange={(e) => handleChange("leadTime", e.target.value)}
          required
          className="mt-2"
          placeholder="Enter required lead time"
        />
      </div>

      <div>
        <Label htmlFor="cadFile">Upload Your CAD File</Label>
        <Input
          id="cadFile"
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileUpload(file);
          }}
          className="mt-2"
          accept=".stl,.step,.stp,.iges,.igs,.x_t,.x_b,.sldprt"
        />
      </div>

      <div>
        <Label htmlFor="estimatedBudget">Estimated Budget (Optional)</Label>
        <Input
          id="estimatedBudget"
          type="number"
          value={formData.estimatedBudget}
          onChange={(e) => handleChange("estimatedBudget", e.target.value)}
          className="mt-2"
          placeholder="Enter your budget"
        />
      </div>
    </div>
  );
};