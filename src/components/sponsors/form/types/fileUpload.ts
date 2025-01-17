import { z } from "zod";

export type FileType = 'image' | 'document' | 'logo';
export type ValidationResult = { isValid: boolean; message?: string };

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

export const sponsorshipFileSchema = z.object({
  logo: z.instanceof(File).optional(),
  promotionalMaterials: z.array(z.instanceof(File)).optional(),
});

export type SponsorshipFileData = z.infer<typeof sponsorshipFileSchema>;

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

export type SponsorshipType = 'digital' | 'physical';

export interface ValidationRules {
  logo: {
    required: boolean;
    fileTypes: string[];
    maxSize: number;
    dimensions?: {
      minWidth: number;
      minHeight: number;
    };
  };
  promotionalMaterials: {
    required: boolean;
    fileTypes: string[];
    maxSize: number;
    maxFiles: number;
  };
}

export const validationRulesByType: Record<SponsorshipType, ValidationRules> = {
  digital: {
    logo: {
      required: true,
      fileTypes: ['.svg'],
      maxSize: 5 * 1024 * 1024,
    },
    promotionalMaterials: {
      required: false,
      fileTypes: ['.png', '.jpg', '.jpeg', '.pdf'],
      maxSize: 10 * 1024 * 1024,
      maxFiles: 5,
    },
  },
  physical: {
    logo: {
      required: true,
      fileTypes: ['.png', '.jpg', '.jpeg', '.svg'],
      maxSize: 5 * 1024 * 1024,
      dimensions: {
        minWidth: 1000,
        minHeight: 1000,
      },
    },
    promotionalMaterials: {
      required: false,
      fileTypes: ['.png', '.jpg', '.jpeg', '.pdf'],
      maxSize: 10 * 1024 * 1024,
      maxFiles: 5,
    },
  },
};