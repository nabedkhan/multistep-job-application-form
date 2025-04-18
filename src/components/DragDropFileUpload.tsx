import { cn } from "@/utils/cn";
import { useRef, useState } from "react";

interface DragDropFileUploadProps {
  onChange: (file: File) => void;
}

export default function DragDropFileUpload({ onChange }: DragDropFileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.currentTarget === dropZoneRef.current) {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      onChange(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onChange(e.target.files[0]);
    }
  };

  return (
    <div
      ref={dropZoneRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={cn({ "opacity-50": isDragging })}>
      <input
        type="file"
        id="cv-upload"
        className="hidden"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />

      <label
        htmlFor="cv-upload"
        className="w-full h-12 border border-neutral-900 text-neutral-900 hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer rounded-[10px]">
        Upload new CV
      </label>
    </div>
  );
}
