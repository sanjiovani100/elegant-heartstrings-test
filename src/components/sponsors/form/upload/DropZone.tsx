import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropZoneProps {
  isDragActive: boolean;
  getRootProps: any;
  getInputProps: any;
  maxFiles: number;
  value: File[];
  helperText?: string;
  required?: boolean;
  error?: string;
}

export const DropZone = ({
  isDragActive,
  getRootProps,
  getInputProps,
  maxFiles,
  value,
  helperText,
  required,
  error,
}: DropZoneProps) => {
  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
        isDragActive
          ? "border-primary bg-primary/10"
          : "border-gray-300 hover:border-primary",
        error && "border-red-500",
        value.length >= maxFiles && "opacity-50 cursor-not-allowed"
      )}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-2">
        <Upload className="h-8 w-8 text-gray-400" />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            <p className="text-sm text-gray-600">
              {value.length >= maxFiles 
                ? "Maximum files reached"
                : "Drag & drop files here, or click to select files"}
            </p>
            {helperText && (
              <p className="text-xs text-gray-500">{helperText}</p>
            )}
            {required && (
              <p className="text-xs text-red-500">*Required</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};