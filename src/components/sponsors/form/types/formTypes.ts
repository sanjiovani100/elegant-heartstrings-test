import { z } from "zod";
import { SponsorshipFormData } from "../types";

export type SponsorshipType = "physical" | "digital" | "hybrid";

export interface ValidationRules {
  logo: {
    maxSize: number;
    acceptedFormats: Record<string, string[]>;
    minDimensions?: {
      width: number;
      height: number;
    };
  };
  promotionalMaterials: {
    maxSize: number;
    maxFiles: number;
    acceptedFormats: Record<string, string[]>;
  };
}

export interface UploadProgress {
  [key: string]: number;
}

export const validationRulesByType: Record<SponsorshipType, ValidationRules> = {
  digital: {
    logo: {
      maxSize: 5 * 1024 * 1024,
      acceptedFormats: {
        'image/svg+xml': ['.svg']
      }
    },
    promotionalMaterials: {
      maxSize: 10 * 1024 * 1024,
      maxFiles: 5,
      acceptedFormats: {
        'image/*': ['.png', '.jpg', '.jpeg'],
        'application/pdf': ['.pdf']
      }
    }
  },
  physical: {
    logo: {
      maxSize: 5 * 1024 * 1024,
      acceptedFormats: {
        'image/*': ['.png', '.jpg', '.jpeg', '.svg']
      },
      minDimensions: {
        width: 1000,
        height: 1000
      }
    },
    promotionalMaterials: {
      maxSize: 10 * 1024 * 1024,
      maxFiles: 5,
      acceptedFormats: {
        'image/*': ['.png', '.jpg', '.jpeg'],
        'application/pdf': ['.pdf']
      }
    }
  },
  hybrid: {
    logo: {
      maxSize: 5 * 1024 * 1024,
      acceptedFormats: {
        'image/*': ['.png', '.jpg', '.jpeg', '.svg']
      },
      minDimensions: {
        width: 1000,
        height: 1000
      }
    },
    promotionalMaterials: {
      maxSize: 10 * 1024 * 1024,
      maxFiles: 5,
      acceptedFormats: {
        'image/*': ['.png', '.jpg', '.jpeg'],
        'application/pdf': ['.pdf']
      }
    }
  }
};