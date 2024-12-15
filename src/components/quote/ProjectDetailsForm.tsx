import { Input } from "@/components/ui/input";

interface ProjectDetailsFormProps {
  formData: {
    partName: string;
    materialType: string;
    materialGrade: string;
    certifications: string;
    length: string;
    width: string;
    height: string;
    tolerances: string;
    machiningType: string;
    specialProcesses: string;
    surfaceFinish: string;
  };
  handleChange: (field: string, value: string) => void;
}

export const ProjectDetailsForm = ({ formData, handleChange }: ProjectDetailsFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-primary">Project Details</h3>
        <p className="text-muted-foreground">Please provide your project specifications below.</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Part Name</label>
        <Input
          value={formData.partName}
          onChange={(e) => handleChange("partName", e.target.value)}
          required
          className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
          placeholder="Enter part name"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Material Type</label>
          <Input
            value={formData.materialType}
            onChange={(e) => handleChange("materialType", e.target.value)}
            required
            className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
            placeholder="Enter material type"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Material Grade/Alloy</label>
          <Input
            value={formData.materialGrade}
            onChange={(e) => handleChange("materialGrade", e.target.value)}
            required
            className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
            placeholder="e.g., Ti-6Al-4V"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Required Certifications</label>
        <Input
          value={formData.certifications}
          onChange={(e) => handleChange("certifications", e.target.value)}
          placeholder="e.g., AS9100, ISO 13485"
          className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Length (mm)</label>
          <Input
            type="number"
            value={formData.length}
            onChange={(e) => handleChange("length", e.target.value)}
            required
            className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
            placeholder="0.00"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Width (mm)</label>
          <Input
            type="number"
            value={formData.width}
            onChange={(e) => handleChange("width", e.target.value)}
            required
            className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
            placeholder="0.00"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Height (mm)</label>
          <Input
            type="number"
            value={formData.height}
            onChange={(e) => handleChange("height", e.target.value)}
            required
            className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
            placeholder="0.00"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Tolerances</label>
        <Input
          value={formData.tolerances}
          onChange={(e) => handleChange("tolerances", e.target.value)}
          placeholder="e.g., ±0.005 mm"
          required
          className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Machining Type</label>
          <Input
            value={formData.machiningType}
            onChange={(e) => handleChange("machiningType", e.target.value)}
            placeholder="Enter machining type"
            className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">Surface Finish</label>
          <Input
            value={formData.surfaceFinish}
            onChange={(e) => handleChange("surfaceFinish", e.target.value)}
            placeholder="e.g., Ra 0.8"
            required
            className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">Special Processes</label>
        <Input
          value={formData.specialProcesses}
          onChange={(e) => handleChange("specialProcesses", e.target.value)}
          placeholder="e.g., 5-axis machining, deburring"
          className="w-full bg-white border-2 border-gray-200 focus:border-accent shadow-sm"
        />
      </div>
    </div>
  );
};
