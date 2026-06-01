import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import type { LandingContent } from '@/content/landing';
import { MeetingButton } from '@/components/MeetingButton';

interface HeroProps {
  hero: LandingContent['hero'];
  calendlyUrl: string;
  formSectionId: string;
}

export function Hero({ hero, calendlyUrl, formSectionId }: HeroProps) {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="flex max-w-xl flex-col gap-6">
            <p className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium tracking-wide text-white/90 backdrop-blur-sm">
              {hero.eyebrow}
            </p>

            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              {hero.title}
            </h1>

            <p className="max-w-sm text-base leading-relaxed text-white/70 md:text-lg">
              {hero.subtitle}
            </p>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <MeetingButton
                href={calendlyUrl}
                label={hero.primaryCta}
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 hover:shadow-sky-400/40"
              />
              <a
                href={`#${formSectionId}`}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll arrow */}
      <a
        href="#beneficios"
        aria-label="Ver beneficios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50 transition-opacity hover:opacity-90"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] text-white uppercase">
          Scroll
        </span>
        <ChevronDown size={22} className="text-white animate-bounce" />
      </a>
    </section>
  );
}
