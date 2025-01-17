import { type ToastProps } from "@/components/ui/toast";

export type FileType = 'image' | 'document' | 'logo';

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export interface FileValidationOptions {
  maxSize: number;
  accept: Record<string, string[]>;
  maxFiles?: number;
  validateDimensions?: boolean;
  minWidth?: number;
  minHeight?: number;
  required?: boolean;
}

export interface FileUploadState {
  files: File[];
  previews: string[];
  errors: string[];
  isUploading: boolean;
}

export interface UploadProgress {
  [key: string]: number;
}

export interface FilePreview {
  url: string;
  type: string;
  name: string;
}

export interface FileValidationError {
  code: 'size' | 'type' | 'dimensions' | 'required' | 'maxFiles';
  message: string;
  file?: string;
}

export interface FileUploadProps {
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  value?: File[];
  onChange: (files: File[]) => void;
  onRemove?: (index: number) => void;
  progress?: number;
  error?: string;
  helperText?: string;
  required?: boolean;
  validateDimensions?: boolean;
  minWidth?: number;
  minHeight?: number;
}

export interface FileUploadHandlers {
  handleFileUpload: (files: File[], field: "logo" | "promotionalMaterials") => Promise<void>;
}

export type ToastFunction = (props: ToastProps) => void;