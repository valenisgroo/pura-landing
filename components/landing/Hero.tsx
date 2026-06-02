import Image from 'next/image';
import type { LandingContent } from '@/types/landing';
import { MeetingButton } from '@/components/MeetingButton';

interface HeroProps {
  hero: LandingContent['hero'];
  calendlyUrl: string;
  formSectionId: string;
}

export function Hero({ hero, calendlyUrl, formSectionId }: HeroProps) {
  return (
    <section
      id="inicio"
      className="w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 pt-20 min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-6xl w-full px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left: content */}
          <div className="flex flex-col gap-7">
            <span className="w-fit rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              {hero.eyebrow}
            </span>

            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
              {hero.title}
            </h1>

            <p className="max-w-md text-lg leading-relaxed text-slate-600">
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <MeetingButton
                href={calendlyUrl}
                label={hero.primaryCta}
                location="hero"
                className="inline-flex items-center justify-center rounded-full bg-blue-900 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-800"
              />
              <a
                href={`#${formSectionId}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right: bottle image */}
          <div className="relative h-[380px] md:h-[520px]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-center drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
