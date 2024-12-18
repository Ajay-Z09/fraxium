import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DimensionsInputProps {
  length: string;
  width: string;
  height: string;
  onChange: (field: string, value: string) => void;
}

export const DimensionsInput = ({ length, width, height, onChange }: DimensionsInputProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <Label htmlFor="length">Length (mm)</Label>
        <Input
          id="length"
          type="number"
          value={length}
          onChange={(e) => onChange("length", e.target.value)}
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
          value={width}
          onChange={(e) => onChange("width", e.target.value)}
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
          value={height}
          onChange={(e) => onChange("height", e.target.value)}
          required
          className="mt-2"
          placeholder="0.00"
        />
      </div>
    </div>
  );
};