import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  value?: File[];
  onChange: (files: File[]) => void;
  onRemove?: (index: number) => void;
  progress?: number;
  error?: string;
  helperText?: string;
}

export const FileUpload = ({
  accept = {
    'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
    'application/pdf': ['.pdf'],
  },
  maxFiles = 1,
  maxSize = 5 * 1024 * 1024, // 5MB
  value = [],
  onChange,
  onRemove,
  progress,
  error,
  helperText,
}: FileUploadProps) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Validate file size
      const validFiles = acceptedFiles.filter(file => file.size <= maxSize);
      if (validFiles.length < acceptedFiles.length) {
        console.error("Some files were too large and were excluded");
      }

      // Limit number of files
      const finalFiles = validFiles.slice(0, maxFiles);
      onChange(finalFiles);
    },
    [onChange, maxSize, maxFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
          isDragActive
            ? "border-primary bg-primary/10"
            : "border-gray-300 hover:border-primary",
          error && "border-red-500"
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
                Drag & drop files here, or click to select files
              </p>
              {helperText && (
                <p className="text-xs text-gray-500">{helperText}</p>
              )}
            </>
          )}
        </div>
      </div>

      {progress !== undefined && progress > 0 && (
        <Progress value={progress} className="w-full" />
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      {value.length > 0 && (
        <ul className="space-y-2">
          {value.map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 bg-gray-50 rounded"
            >
              <span className="text-sm truncate max-w-[200px]">
                {file.name}
              </span>
              {onRemove && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemove(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};