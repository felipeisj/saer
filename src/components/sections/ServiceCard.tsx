'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: string;
  imagePosition?: string;
  overlayColor?: string;
  tag?: string;
  priority?: boolean;
}

export function ServiceCard({
  title,
  subtitle,
  href,
  imageSrc,
  imagePosition = 'center',
  overlayColor = '#0F2044',
  tag,
  priority = false,
}: ServiceCardProps) {
  return (
    <div
      className={[
        'group relative overflow-hidden cursor-pointer h-[480px]',
        'transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
        'hover:z-10 hover:shadow-[0_0_50px_rgba(0,0,0,0.6)]',
        'active:scale-[0.99] active:duration-150',
      ].join(' ')}
    >
      <Link href={href} className="absolute inset-0 z-10" aria-label={title} />

      {/* Background image with Ken Burns on hover */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority={priority}
          className="object-cover select-none transition-transform duration-[7000ms] ease-out group-hover:scale-110"
          style={{ objectPosition: imagePosition }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Color overlay — slides up on hover */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] opacity-75 transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full"
        style={{ backgroundColor: overlayColor }}
      />

      {/* Persistent bottom vignette for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 z-[3] bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      />

      {/* Tag pill (top-left) */}
      {tag && (
        <div className="absolute top-5 left-5 z-[5]">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
            {tag}
          </span>
        </div>
      )}

      {/* Content: vertical title + subtitle + arrow */}
      <div className="relative z-[5] flex h-full pb-8 pr-6 pl-6 pointer-events-none select-none items-end justify-between">
        {/* Vertical big title */}
        <p
          className="[writing-mode:vertical-rl] -rotate-180 font-black uppercase tracking-[0.05em] leading-tight text-[3.2rem] transition-transform duration-[600ms]"
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: '1.5px',
            WebkitTextStrokeColor: 'white',
            filter: 'drop-shadow(0 0 8px rgba(0,0,0,1)) drop-shadow(0 2px 4px rgba(0,0,0,1))',
          }}
        >
          {title}
        </p>

        {/* Bottom-right: subtitle + arrow */}
        <div className="flex flex-col items-end gap-3 max-w-[180px] text-right">
          <p className="text-white/80 text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {subtitle}
          </p>
          <div className="flex items-center gap-1.5 text-white">
            <span className="text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
              Ver más
            </span>
            <ArrowRight
              size={28}
              strokeWidth={1.5}
              className="opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-100 md:translate-x-[-8px] md:group-hover:translate-x-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceCardGroup({ cards }: { cards: ServiceCardProps[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
      {cards.map((card, i) => (
        <ServiceCard key={card.title} {...card} priority={i < 2} />
      ))}
    </div>
  );
}
