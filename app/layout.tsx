import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { landing } from '@/content/landing';
import { SITE_URL } from '@/lib/config';
import { ClarityScript } from '@/components/ClarityScript';
import { ToasterProvider } from '@/components/ToasterProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: landing.seo.title,
    template: `%s · ${landing.footer.companyName}`,
  },
  description: landing.seo.description,
  robots: { index: true, follow: true },
  // El favicon lo provee `app/icon.png` por convención de archivos de Next.
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
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
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
