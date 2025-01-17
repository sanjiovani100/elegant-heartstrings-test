import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileUploadProps } from "./types/fileUpload";
import { DropZone } from "./upload/DropZone";
import { FilePreviewList } from "./upload/FilePreview";
import { UploadProgress } from "./upload/UploadProgress";
import { useFileValidation } from "./hooks/useFileValidation";

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
  
  const { validateFile } = useFileValidation({
    maxSize,
    accept,
    validateDimensions,
    minWidth,
    minHeight
  });

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
    [onChange, maxSize, maxFiles, value, validateDimensions, minWidth, minHeight, accept, validateFile]
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