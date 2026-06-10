'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  label: string;
}

const SLIDES: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2400&auto=format&fit=crop',
    label: 'Minería',
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop',
    label: 'Construcción',
  },
  {
    image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2400&auto=format&fit=crop',
    label: 'Sector Público',
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop',
    label: 'Desarrollo de Software',
  },
];

const DURATION = 6500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    setZoomed(false);
    const zoomTimer = setTimeout(() => setZoomed(true), 60);
    const advanceTimer = setTimeout(next, DURATION);
    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(advanceTimer);
    };
  }, [index, next]);

  return (
    <div className="group/hero absolute inset-0 overflow-hidden">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          className={[
            'absolute inset-0 transition-opacity ease-in-out',
            i === index ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          style={{ transitionDuration: '1200ms' }}
          aria-hidden={i !== index}
        >
          <div
            className={[
              'absolute inset-0 transition-transform ease-linear',
              i === index && zoomed ? 'scale-[1.12]' : 'scale-100',
            ].join(' ')}
            style={{ transitionDuration: `${DURATION + 1200}ms` }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      ))}

      {/* Overlays for legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, rgba(7,22,40,0.84) 0%, rgba(15,32,68,0.72) 45%, rgba(10,29,58,0.82) 100%)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-transparent to-[#050d1a]/40" />

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-11 w-11 rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm opacity-0 group-hover/hero:opacity-100 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:scale-105"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-11 w-11 rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-sm opacity-0 group-hover/hero:opacity-100 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:scale-105"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 right-6 md:right-12 z-20 hidden sm:flex items-end gap-6">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.image}
            onClick={() => setIndex(i)}
            className="group flex flex-col items-start gap-2.5"
            aria-label={`Ir a slide ${slide.label}`}
          >
            <span
              className={[
                'text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 whitespace-nowrap',
                i === index ? 'text-[#C4965A]' : 'text-white/35 group-hover:text-white/60',
              ].join(' ')}
            >
              {slide.label}
            </span>
            <span className="relative h-[2px] w-10 bg-white/15 overflow-hidden rounded-full">
              {i === index && (
                <span
                  key={index}
                  className="absolute inset-y-0 left-0 bg-[#C4965A]"
                  style={{ animation: `progress-fill ${DURATION}ms linear forwards` }}
                />
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
