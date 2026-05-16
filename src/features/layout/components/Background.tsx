// src/components/Background.tsx
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame } from 'framer-motion';
import { useBackgroundStore } from '@/features/layout/stores/background.store';

// Отдельный компонент для элемента с параллаксом
function FloatingImage({
  src,
  top,
  left,
  depth,
  speed,
  delay,
  sizeClass,
  isActive
}: {
  src: string;
  top: string;
  left: string;
  depth: number;
  speed: number;
  delay: number;
  sizeClass: string;
  isActive?: boolean
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const time = useRef(0);

  // Уменьшаем скорость и увеличиваем плавность пружины
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 1.2 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 1.2 });

  // Своя анимация плавания (без CSS)
  const floatX = useMotionValue(0);
  const floatY = useMotionValue(0);
  const rotateValue = useMotionValue(0);

  useAnimationFrame((t) => {
    if (!time.current) time.current = t;
    const elapsed = (t - time.current) / 1000;

    // Плавное плавание без скачков
    const y = Math.sin(elapsed * speed) * (4 + depth * 4);
    const x = Math.cos(elapsed * (speed * 0.7)) * (3 + depth * 3);
    const rotate = Math.sin(elapsed * (speed * 0.5)) * (depth * 5);

    floatY.set(y);
    floatX.set(x);
    rotateValue.set(rotate);
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const parallaxX = useTransform(springX, (v) => isActive ? v * 20 * depth : 0);
  const parallaxY = useTransform(springY, (v) => isActive ? v * 20 * depth : 0);

  const finalX = useTransform(parallaxX, (x) => x + floatX.get());
  const finalY = useTransform(parallaxY, (y) => y + floatY.get());

  return (
    <motion.div
      className={`absolute ${sizeClass}`}
      style={{
        top,
        left,
        x: finalX,
        y: finalY,
        rotate: rotateValue,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.85, scale: 1 }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
      }}
    >
      <img src={src} alt="" className="w-full h-full" />
    </motion.div>
  );
}

export function Background() {
  const { isParallaxActive } = useBackgroundStore();

  const elements = [
    { src: '/assets/images/bg/red.svg', top: '11%', left: '11%', depth: 0.3, speed: 0.8, delay: 0.1, sizeClass: 'f1' },
    { src: '/assets/images/bg/orange.svg', top: '30%', left: '0%', depth: 0.5, speed: 1.0, delay: 0.2, sizeClass: 'f2' },
    { src: '/assets/images/bg/shape.svg', top: '45%', left: '10%', depth: 0.2, speed: 0.6, delay: 0.3, sizeClass: 'f3' },
    { src: '/assets/images/bg/green.svg', top: '70%', left: '-4%', depth: 0.6, speed: 1.2, delay: 0.4, sizeClass: 'f4' },
    { src: '/assets/images/bg/grad.svg', top: '85%', left: '23%', depth: 0.4, speed: 0.9, delay: 0.5, sizeClass: 'f5' },
    { src: '/assets/images/bg/blue.svg', top: '-7%', left: '75%', depth: 0.35, speed: 0.7, delay: 0.6, sizeClass: 'f6' },
    { src: '/assets/images/bg/arrow.svg', top: '22%', left: '75%', depth: 0.55, speed: 1.1, delay: 0.7, sizeClass: 'f7' },
    { src: '/assets/images/bg/pink.svg', top: '54%', left: '84%', depth: 0.25, speed: 0.75, delay: 0.8, sizeClass: 'f8' },
    { src: '/assets/images/bg/violet.svg', top: '63%', left: '74%', depth: 0.45, speed: 0.85, delay: 0.9, sizeClass: 'f9' },
    { src: '/assets/images/bg/object.svg', top: '78%', left: '57%', depth: 0.7, speed: 1.3, delay: 1.0, sizeClass: 'f10' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/40 via-transparent to-dark-bg/20" />

      {elements.map((el, i) => (
        <FloatingImage isActive={isParallaxActive} key={i} {...el} />
      ))}
    </div>
  );
}