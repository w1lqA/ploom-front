// src/stores/background.store.ts
import { create } from 'zustand';

interface BackgroundStore {
  isParallaxActive: boolean;
  disableParallax: () => void;
  enableParallax: () => void;
  setParallaxActive: (active: boolean) => void;
}

export const useBackgroundStore = create<BackgroundStore>((set) => ({
  isParallaxActive: true,
  disableParallax: () => set({ isParallaxActive: false }),
  enableParallax: () => set({ isParallaxActive: true }),
  setParallaxActive: (active: boolean) => set({ isParallaxActive: active }),
}));
