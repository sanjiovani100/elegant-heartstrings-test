import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileUploadProps } from "./types/fileUpload";
import { DropZone } from "./upload/DropZone";
import { FilePreviewList } from "./upload/FilePreview";
import { UploadProgress } from "./upload/UploadProgress";

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

  const validateFile = async (file: File) => {
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
      const validFiles: File[] = [];
      for (const file of acceptedFiles) {
        const validation = await validateFile(file);
        if (validation.isValid) {
          validFiles.push(file);
        }
      }

      const newPreviewUrls = validFiles.map(file => 
        file.type.startsWith('image/') ? URL.createObjectURL(file) : ''
      );
      setPreviewUrls(prev => [...prev, ...newPreviewUrls]);

      const finalFiles = [...value, ...validFiles].slice(0, maxFiles);
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
      URL.revokeObjectURL(previewUrls[index]);
      const newPreviewUrls = [...previewUrls];
      newPreviewUrls.splice(index, 1);
      setPreviewUrls(newPreviewUrls);
    }
  };

  return (
    <div className="space-y-4">
      <DropZone
        isDragActive={isDragActive}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        maxFiles={maxFiles}
        value={value}
        helperText={helperText}
        required={required}
        error={error}
      />

      <UploadProgress progress={progress} />

      {error && <p className="text-sm text-red-500">{error}</p>}

      {value.length > 0 && (
        <FilePreviewList
          files={value}
          previewUrls={previewUrls}
          onRemove={onRemove && handleRemove}
        />
      )}
    </div>
  );
};