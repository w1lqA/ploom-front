import { useState } from 'react';
import { UploadArea } from './components/UploadArea';
import { PromptInput } from './components/PromptInput';
import { GenerateButton } from './components/GenerateButton';
import { QueryExamples } from './components/QueryExamples';

export function GeneratorPage() {
  const [prompt, setPrompt] = useState('');

  const handleQuerySelect = (query: string) => {
    setPrompt(query);
  };

  const handlePromptChange = (value: string) => {
    setPrompt(value);
  };

  return (
    <div className="p-5 max-w-[800px] mx-auto flex flex-col justify-center min-h-screen">
      <div className="max-w-[700px] mx-auto mb-10">
        <UploadArea />
        <PromptInput value={prompt} onChange={handlePromptChange} />
        <GenerateButton />
        <QueryExamples onQuerySelect={handleQuerySelect} />
      </div>
    </div>
  );
}