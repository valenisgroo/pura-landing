import Image from 'next/image';
import type { LandingContent } from '@/content/landing';

interface FooterProps {
  logo: LandingContent['logo'];
  footer: LandingContent['footer'];
}

export function Footer({ logo, footer }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={100}
          height={40}
          className="h-9 w-auto"
        />
        <p className="text-sm text-slate-500">{footer.tagline}</p>
        <p className="text-sm text-slate-400">
          © {year} — {footer.companyName}
        </p>
      </div>
    </footer>
  );
}
