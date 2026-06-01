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

export function Header({ logo, primaryCta, calendlyUrl, formSectionId }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: `#${formSectionId}` },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-sm backdrop-blur-md border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <Link href="/" aria-label="Inicio">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={90}
            height={36}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                scrolled
                  ? 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MeetingButton
          href={calendlyUrl}
          label={primaryCta}
          location="header"
          className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition ${
            scrolled
              ? 'bg-sky-600 text-white hover:bg-sky-700'
              : 'bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm'
          }`}
        />
      </div>
    </header>
  );
}
