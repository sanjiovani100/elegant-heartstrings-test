import { X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FilePreview } from "../types/fileUpload";

interface FilePreviewListProps {
  files: File[];
  previewUrls: string[];
  onRemove?: (index: number) => void;
}

export const FilePreviewList = ({ files, previewUrls, onRemove }: FilePreviewListProps) => {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {files.map((file, index) => (
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
                onClick={() => onRemove(index)}
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
  );
};