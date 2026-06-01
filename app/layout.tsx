import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { landing } from '@/content/landing';
import { SITE_URL } from '@/lib/config';
import { ClarityScript } from '@/components/ClarityScript';
import { ToasterProvider } from '@/components/ToasterProvider';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: landing.seo.title,
    template: `%s · ${landing.footer.companyName}`,
  },
  description: landing.seo.description,
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: landing.footer.companyName,
  description: landing.seo.description,
  url: SITE_URL,
  logo: `${SITE_URL}${landing.logo.src}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        {children}
        <ToasterProvider />
        <ClarityScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
