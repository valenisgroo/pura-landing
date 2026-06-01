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

export function Header({
  logo,
  primaryCta,
  calendlyUrl,
  formSectionId,
}: HeaderProps) {
  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: `#${formSectionId}` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Inicio"
          className="transition-transform hover:scale-105"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={48}
            className="h-10 w-auto drop-shadow-sm"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-5 py-2.5 text-sm font-bold text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MeetingButton
          href={calendlyUrl}
          label={primaryCta}
          location="header"
          className="inline-flex items-center justify-center rounded-full bg-blue-900 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:scale-105 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
        />
      </div>
    </header>
  );
}
