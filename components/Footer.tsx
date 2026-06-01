import type { LandingContent } from '@/content/landing';

interface FooterProps {
  footer: LandingContent['footer'];
}

export function Footer({ footer }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-6">
        <p className="text-sm text-slate-400">
          © {year} {footer.companyName} · by{' '}
          <span className="font-semibold text-slate-500">Valentino Isgró</span>
        </p>
      </div>
    </footer>
  );
}
