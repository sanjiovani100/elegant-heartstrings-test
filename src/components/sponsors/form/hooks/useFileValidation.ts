import { FileValidationOptions, ValidationResult } from "../types/fileUpload";

export const useFileValidation = ({
  maxSize,
  accept,
  validateDimensions,
  minWidth,
  minHeight
}: FileValidationOptions) => {
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

  return { validateFile };
};