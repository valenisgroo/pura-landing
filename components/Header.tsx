'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { LandingContent } from '@/content/landing';
import { MeetingButton } from '@/components/MeetingButton';
import Link from 'next/link';

interface HeaderProps {
  logo: LandingContent['logo'];
  primaryCta: string;
  calendlyUrl: string;
  formSectionId: string;
}

/**
 * Header fixed que empieza transparente sobre el hero y al scrollear toma
 * fondo blanco con sombra. Client Component por el scroll listener.
 */
export function Header({
  logo,
  primaryCta,
  calendlyUrl,
  formSectionId,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-sm backdrop-blur-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" aria-label="Inicio">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={100}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="flex items-center gap-2">
          <a
            href={`#${formSectionId}`}
            className={`hidden rounded-full px-5 py-2 text-sm font-medium transition sm:inline-flex ${
              scrolled
                ? 'text-slate-600 hover:bg-slate-100'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            Contacto
          </a>
          <MeetingButton
            href={calendlyUrl}
            label={primaryCta}
            location="header"
            className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              scrolled
                ? 'bg-sky-600 text-white hover:bg-sky-700'
                : 'bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm'
            }`}
          />
        </nav>
      </div>
    </header>
  );
}
