import { useNotification } from '@/shared/hooks/useNotification';
import { Button } from '@/shared/ui/Button';
import { useCallback, useRef, useState } from 'react';

interface UploadAreaProps {
  files: File[];
  onFilesSelected: (files: File[]) => void;
  disabled?: boolean;
}

export function UploadArea({ files, onFilesSelected, disabled }: UploadAreaProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const { showNotification } = useNotification();

  const handleFileSelect = useCallback((selectedFiles: FileList | null) => {
    if (!selectedFiles || disabled) return;
    const newFiles = Array.from(selectedFiles).filter(file => file.type.startsWith('image/'));

    if (newFiles.length > 0) {
      onFilesSelected([...files, ...newFiles].slice(0, 5));
    } else {
      showNotification('Пожалуйста, выберите изображения');
    }
  }, [files, onFilesSelected, showNotification, disabled]);

  const removeFile = (index: number) => {
    onFilesSelected(files.filter((_, i) => i !== index));
  };

  const preventDefaults = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="mb-8">
      <div
        onDragEnter={(e) => { preventDefaults(e); if (!disabled) setIsDragOver(true); }}
        onDragOver={preventDefaults}
        onDragLeave={(e) => { preventDefaults(e); setIsDragOver(false); }}
        onDrop={(e) => { preventDefaults(e); setIsDragOver(false); handleFileSelect(e.dataTransfer.files); }}
        className={`border-2 border-dashed rounded-xl p-10 text-center transition-all duration-300 ${isDragOver ? 'border-accent bg-dark-hover' : 'border-dark-border bg-dark-card'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <div className="text-4xl mb-4">{isDragOver ? '📥' : '📁'}</div>
        <h3 className="text-lg mb-2 font-medium text-white">
          {files.length > 0 ? `Выбрано файлов: ${files.length}/5` : 'Перетащите изображения'}
        </h3>
        <p className="text-gray-400 mb-5 text-sm">PNG, JPG до 50MB</p>

        <Button
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled || files.length >= 5}
          variant="secondary"
          size="sm"
        >
          {files.length > 0 ? 'Добавить еще' : 'Выбрать файлы'}
        </Button>

        <input
          type="file"
          multiple
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files)}
        />
      </div>

      {files.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {files.map((file, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 bg-dark-input border border-dark-border rounded-lg px-3 py-2 text-sm">
              <div className='flex flex-row w-full gap-2'>
                <span className="text-gray-300 truncate max-w-[150px]">{file.name}</span>
                <button
                  onClick={() => removeFile(idx)}
                  className="text-gray-500 hover:text-red-400 transition-colors"
                  disabled={disabled}
                >
                  ✕
                </button>
              </div>
              <img className='max-w-24 aspect-square max-h-24 w-full h-full object-cover' src={URL.createObjectURL(file)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}