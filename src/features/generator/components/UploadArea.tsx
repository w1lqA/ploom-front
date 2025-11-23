import { useCallback, useRef, useState } from 'react';
import { useNotification } from '../../../shared/hooks/useNotification';

export function UploadArea() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const { showNotification } = useNotification();

  const handleFileSelect = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      showNotification(`Файл "${file.name}" загружен`);
    } else {
      showNotification('Пожалуйста, выберите изображение');
    }
  }, [showNotification]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const preventDefaults = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent) => {
    preventDefaults(e);
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    preventDefaults(e);
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    preventDefaults(e);
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <>
      <div
        className={`border-2 border-dashed border-dark-border rounded-xl p-16 text-center bg-dark-card mb-5 transition-all duration-300 ${
          isDragOver ? 'border-gray-500 bg-dark-hover' : ''
        }`}
        id="uploadArea"
        onDragEnter={handleDragEnter}
        onDragOver={preventDefaults}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="text-4xl mb-4">📁</div>
        <h3 className="text-lg mb-2 font-normal">Перетащите изображение сюда</h3>
        <p className="text-gray-400 mb-3">или</p>
        <button
          onClick={handleUploadClick}
          className="bg-dark-border hover:bg-dark-hover text-white px-8 py-4 rounded-xl text-lg transition-colors duration-300 whitespace-nowrap"
        >
          Выберите файл
        </button>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileInputChange}
        />
      </div>
    </>
  );
}