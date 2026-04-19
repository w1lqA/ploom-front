import { useState } from 'react';
import { UploadArea } from './components/UploadArea';
import { PromptInput } from './components/PromptInput';
import { GenerateButton } from './components/GenerateButton';
import { QueryExamples } from './components/QueryExamples';
import { toast } from 'sonner';
import { useGenerate } from '@/features/generation/hooks/useGenerate';

export function MainPage() {
  const [prompt, setPrompt] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  
  const { mutate: generate, isPending } = useGenerate();

  const handleGenerate = () => {
    if (files.length === 0) {
      toast.error('Загрузите изображения для генерации');
      return;
    }

    generate(files, {
      onSuccess: () => {
        // Очищаем форму после успеха
        setFiles([]);
        setPrompt('');
      }
    });
  };

  return (
    <div className="p-5 max-w-[800px] mx-auto flex flex-col justify-center min-h-screen">
      <div className="max-w-[700px] w-full mx-auto mb-10 transition-all duration-500">
        <h1 className="text-3xl font-bold text-white mb-2 text-center">Создайте 3D модель по фото</h1>
        <p className="text-gray-400 text-center mb-10">Загрузите от 1 до 5 фотографий объекта</p>

        <UploadArea 
          files={files} 
          onFilesSelected={setFiles} 
          disabled={isPending} 
        />

        <PromptInput 
          value={prompt} 
          onChange={setPrompt} 
          disabled={isPending} 
        />

        <GenerateButton 
          onClick={handleGenerate} 
          disabled={files.length === 0} 
          loading={isPending}
        />

        <div className={`transition-opacity duration-300 ${isPending ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
           <QueryExamples onQuerySelect={setPrompt} />
        </div>
      </div>
    </div>
  );
}