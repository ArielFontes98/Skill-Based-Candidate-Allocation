import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { Slide01 } from './slides/Slide01';
import { Slide02 } from './slides/Slide02';
import { Slide03 } from './slides/Slide03';
import { Slide04 } from './slides/Slide04';
import { Slide05 } from './slides/Slide05';
import { Slide06 } from './slides/Slide06';
import { Slide07 } from './slides/Slide07';
import { Slide08 } from './slides/Slide08';
import { Slide09 } from './slides/Slide09';
import { Slide10 } from './slides/Slide10';
import { Slide11 } from './slides/Slide11';
import { Slide12 } from './slides/Slide12';
import { Slide13 } from './slides/Slide13';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06,
  Slide07, Slide08, Slide09, Slide10, Slide11, Slide13, Slide12
];

// Navigation tab to slide mapping
const navMapping: Record<string, number[]> = {
  'Problem': [1, 2, 3],      // Slides 2, 3, 4 (index 1, 2, 3)
  'Solution': [4, 5, 6],     // Slides 5, 6, 7 (index 4, 5, 6)
  'How it Works': [7, 8, 9, 10], // Slides 8-11 (index 7-10)
  'Roadmap': [11],           // Slide 13 - Roadmap (index 11)
  'Pilot & Next Steps': [12] // Slide 12 - Pilot (index 12)
};

export function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = (index: number) => {
    if (index < 0 || index >= slides.length) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSlide < slides.length - 1) {
          setDirection(1);
          setCurrentSlide(currentSlide + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSlide > 0) {
          setDirection(-1);
          setCurrentSlide(currentSlide - 1);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        setDirection(-1);
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setDirection(1);
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#111111]">
      {/* Top Navigation - only show after first slide */}
      {currentSlide > 0 && (
        <Navigation 
          currentSlide={currentSlide} 
          goToSlide={goToSlide}
          navMapping={navMapping}
        />
      )}

      {/* Slide Container - 16:9 aspect ratio */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[1400px] aspect-[16/9] bg-white rounded-2xl shadow-2xl overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <CurrentSlideComponent goToSlide={goToSlide} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {currentSlide > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-[#820AD1] hover:scale-110 transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {currentSlide < slides.length - 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-[#820AD1] hover:scale-110 transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Slide Counter */}
          <div className="absolute bottom-4 right-6 text-sm text-gray-400 font-medium z-10">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
}