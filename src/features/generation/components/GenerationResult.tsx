// src/features/generation/components/GenerationResult.tsx
import { Lightbulb } from 'lucide-react';
import { ModelViewer } from './ModelViewer';

interface GenerationResultProps {
    modelUrl: string;
    onReset: () => void;
}

export function GenerationResult({ modelUrl, onReset }: GenerationResultProps) {
    return (
        <div className="max-w-[900px] w-full mx-auto animate-in fade-in slide-in-from-bottom-5 duration-500">
            <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
                    <span className="text-green-400 text-sm font-medium">Модель успешно создана!</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Ваша 3D модель готова</h2>
                <p className="text-gray-400">Вращайте, масштабируйте и рассматривайте модель со всех сторон</p>
            </div>

            <ModelViewer modelUrl={modelUrl} onBack={onReset} />

            <div className="mt-6 text-center text-sm text-gray-500">
                <p className='inline-flex gap-1 items-center'>
                    <Lightbulb strokeWidth={1}/>

                    <span>
                        Совет: используйте мышь для вращения и масштабирования модели
                    </span>
                </p>
            </div>
        </div>
    );
}