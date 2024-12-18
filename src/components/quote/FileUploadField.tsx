import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface FileUploadFieldProps {
  onFileUpload: (file: File) => Promise<void>;
}

export const FileUploadField = ({ onFileUpload }: FileUploadFieldProps) => {
  const { toast } = useToast();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 50MB",
          variant: "destructive",
        });
        return;
      }
      await onFileUpload(file);
    }
  };

  return (
    <div>
      <Label htmlFor="cadFile">Upload Your CAD File</Label>
      <Input
        id="cadFile"
        type="file"
        onChange={handleFileChange}
        className="mt-2"
        accept=".stl,.step,.stp,.iges,.igs,.x_t,.x_b,.sldprt"
      />
      <p className="text-sm text-gray-500 mt-1">
        Supported formats: STL, STEP, IGES, Parasolid
      </p>
    </div>
  );
};