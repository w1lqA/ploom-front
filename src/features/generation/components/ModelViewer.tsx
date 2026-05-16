// src/features/generation/components/ModelViewer.tsx
import { Suspense, useState, Component, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei';

// Ручной ErrorBoundary
class ModelErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={1.5} />;
}

interface ModelViewerProps {
    modelUrl: string;
    onBack?: () => void;
}

export function ModelViewer({ modelUrl, onBack }: ModelViewerProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden border border-white/10 relative">
            <ModelErrorBoundary
                fallback={
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl">
                        <div className="text-center">
                            <div className="text-6xl mb-4">🖼️</div>
                            <h3 className="text-white font-medium text-lg mb-2">Не удалось загрузить 3D модель</h3>
                            <p className="text-gray-400 text-sm max-w-md px-4">
                                Файл модели временно недоступен или поврежден
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                            >
                                Попробовать снова
                            </button>
                        </div>
                    </div>
                }
            >
                <Canvas
                    camera={{ position: [2, 2, 3], fov: 45 }}
                    shadows
                    className="bg-gradient-to-b from-gray-900 to-gray-950"
                    onCreated={() => setIsLoading(false)}
                >
                    <ambientLight intensity={0.6} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

                    <Suspense
                        fallback={
                            <Html center>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-8 h-8 border-3 border-white/20 border-t-blue-500 rounded-full animate-spin" />
                                    <p className="text-white/70 text-sm">Загрузка 3D модели...</p>
                                </div>
                            </Html>
                        }
                    >
                        <Model url={modelUrl} />
                        <OrbitControls
                            enableZoom={true}
                            enablePan={true}
                            zoomSpeed={1.2}
                            rotateSpeed={1}
                            minDistance={1}
                            maxDistance={10}
                        />
                    </Suspense>

                    <Environment preset="city" />
                </Canvas>
            </ModelErrorBoundary>

            {/* Затемнение при загрузке */}
            {isLoading && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-10 h-10 border-3 border-white/20 border-t-blue-500 rounded-full animate-spin" />
                        <p className="text-white font-medium">Подготовка 3D сцены...</p>
                    </div>
                </div>
            )}

            {/* Кнопка назад */}
            {onBack && (
                <button
                    onClick={onBack}
                    className="absolute bottom-4 right-4 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white font-medium transition-all duration-200 flex items-center gap-2 border border-white/10 shadow-lg"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Вернуться назад
                </button>
            )}
        </div>
    );
}