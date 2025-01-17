import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X, Upload, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  FileUploadProps,
  FileValidationError,
  FilePreview,
  ValidationResult
} from "./types/fileUpload";

export const FileUpload = ({
  accept = {
    'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
    'application/pdf': ['.pdf'],
  },
  maxFiles = 1,
  maxSize = 5 * 1024 * 1024,
  value = [],
  onChange,
  onRemove,
  progress,
  error,
  helperText,
  required = false,
  validateDimensions = false,
  minWidth = 0,
  minHeight = 0,
}: FileUploadProps) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const validateFile = async (file: File): Promise<ValidationResult> => {
    if (file.size > maxSize) {
      return {
        isValid: false,
        message: `File size exceeds ${maxSize / (1024 * 1024)}MB limit`,
      };
    }

    const fileType = file.type;
    const isAcceptedType = Object.entries(accept).some(([type, extensions]) => {
      if (fileType.match(type.replace('*', '.*'))) {
        return true;
      }
      return extensions.some(ext => file.name.toLowerCase().endsWith(ext));
    });

    if (!isAcceptedType) {
      return {
        isValid: false,
        message: "File type not accepted",
      };
    }

    if (validateDimensions && file.type.startsWith('image/')) {
      try {
        const dimensions = await getImageDimensions(file);
        if (dimensions.width < minWidth || dimensions.height < minHeight) {
          return {
            isValid: false,
            message: `Image must be at least ${minWidth}x${minHeight} pixels`,
          };
        }
      } catch (err) {
        return {
          isValid: false,
          message: "Failed to validate image dimensions",
        };
      }
    }

    return { isValid: true };
  };

  const getImageDimensions = (file: File): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(img.src);
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        URL.revokeObjectURL(img.src);
        reject(new Error("Failed to load image"));
      };
    });
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const validatedFiles: File[] = [];
      const errors: FileValidationError[] = [];

      for (const file of acceptedFiles) {
        const validation = await validateFile(file);
        if (!validation.isValid) {
          errors.push({
            code: 'type',
            message: validation.message || 'Invalid file',
            file: file.name,
          });
        } else {
          validatedFiles.push(file);
        }
      }

      if (errors.length > 0) {
        errors.forEach(error => 
          toast.error(`${error.file}: ${error.message}`)
        );
        return;
      }

      const newPreviewUrls = validatedFiles.map(file => 
        file.type.startsWith('image/') ? URL.createObjectURL(file) : ''
      );
      setPreviewUrls(prev => [...prev, ...newPreviewUrls]);

      const finalFiles = [...value, ...validatedFiles].slice(0, maxFiles);
      onChange(finalFiles);
    },
    [onChange, maxSize, maxFiles, value, validateDimensions, minWidth, minHeight, accept]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles: maxFiles - value.length,
    maxSize,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    disabled: value.length >= maxFiles,
  });

  const handleRemove = (index: number) => {
    if (onRemove) {
      onRemove(index);
      // Clean up preview URL
      URL.revokeObjectURL(previewUrls[index]);
      const newPreviewUrls = [...previewUrls];
      newPreviewUrls.splice(index, 1);
      setPreviewUrls(newPreviewUrls);
    }
  };

  return (
    <div className="space-y-4">
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

      {progress !== undefined && progress > 0 && (
        <div className="space-y-2">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-gray-500 text-center">{progress}% uploaded</p>
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      {value.length > 0 && (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {value.map((file, index) => (
            <li
              key={index}
              className="relative group rounded-lg overflow-hidden border border-gray-200"
            >
              {file.type.startsWith('image/') ? (
                <div className="aspect-square">
                  <img
                    src={previewUrls[index]}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square flex items-center justify-center bg-gray-50">
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {onRemove && (
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemove(index)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div className="p-2 text-xs truncate">{file.name}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
