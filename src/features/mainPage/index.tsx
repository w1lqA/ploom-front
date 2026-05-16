// src/pages/MainPage/MainPage.tsx
import { useEffect, useState } from 'react';
import { UploadArea } from './components/UploadArea';
import { GenerateButton } from './components/GenerateButton';
import { GenerationResult } from '@/features/generation/components/GenerationResult';
import { toast } from 'sonner';
import { useGenerate } from '@/features/generation/hooks/useGenerate';
import { motion, AnimatePresence } from 'framer-motion';
import { useBackgroundStore } from '@/features/layout/stores/background.store';

export function MainPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [generatedModelUrl, setGeneratedModelUrl] = useState<string | null>(null);
  // const [generatedModelUrl, setGeneratedModelUrl] = useState<string | null>('https://v3b.fal.media/files/b/0a9a5d3d/zO7aCrArLeeETC1rntdf5_model.glb');

  const { setParallaxActive } = useBackgroundStore();

  useEffect(() => {
    setParallaxActive(!showResult);
  }, [showResult, setParallaxActive]);

  const { mutate: generate, isPending } = useGenerate();

  const handleGenerate = () => {
    if (files.length === 0) {
      toast.error('Загрузите изображения для генерации');
      return;
    }

    generate(files, {
      onSuccess: (data) => {
        setGeneratedModelUrl(data.modelUrl);
        setShowResult(true);
        setFiles([]);
      }
    });
  };

  const handleReset = () => {
    setShowResult(false);
    setGeneratedModelUrl(null);
  };

  return (
    <div className="min-h-screen">
      <div className="p-5 max-w-[900px] mx-auto flex flex-col justify-center min-h-screen">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-[700px] w-full mx-auto"
            >
              <div className="text-center mb-10">
                <h1 className="text-3xl mt-16 md:mt-0 md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                  Создайте 3D модель по фото
                </h1>
                <p className="text-gray-400 text-lg">
                  Загрузите от 1 до 5 фотографий объекта с разных ракурсов
                </p>
              </div>

              <UploadArea
                files={files}
                onFilesSelected={setFiles}
                disabled={isPending}
              />

              <GenerateButton
                onClick={handleGenerate}
                disabled={files.length === 0}
                loading={isPending}
              />

              <div className="mt-8 text-center text-sm text-gray-500">
                <p>Поддерживаются форматы: JPG, PNG, WEBP</p>
                <p className="mt-1">Для лучшего результата используйте фото с разных сторон</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              {generatedModelUrl && (
                <GenerationResult
                  modelUrl={generatedModelUrl}
                  onReset={handleReset}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// пока что бек не принимает текстовое описание, поэтому закомментил
{/* <PromptInput 
  value={prompt} 
  onChange={setPrompt} 
  disabled={isPending} 
/> */}



{/* <div className={`transition-opacity duration-300 ${isPending ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
    <QueryExamples onQuerySelect={setPrompt} />
</div> */}