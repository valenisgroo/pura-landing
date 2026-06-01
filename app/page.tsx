import type { Metadata } from 'next';
import { landing } from '@/content/landing';
import { SITE_URL } from '@/lib/config';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Benefits } from '@/components/Benefits';
import { Testimonials } from '@/components/Testimonials';
import { LeadSection } from '@/components/LeadSection';
import { Footer } from '@/components/Footer';
import { ScrollDepthTracker } from '@/components/ScrollDepthTracker';

const FORM_SECTION_ID = 'formulario';

export const metadata: Metadata = {
  description: landing.seo.description,
  keywords: landing.seo.keywords,
  alternates: { canonical: '/' },
  openGraph: {
    title: landing.seo.title,
    description: landing.seo.description,
    url: SITE_URL,
    siteName: landing.footer.companyName,
    images: [
      {
        url: landing.seo.ogImage,
        width: 1200,
        height: 630,
        alt: landing.seo.title,
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: landing.seo.title,
    description: landing.seo.description,
    images: [landing.seo.ogImage],
  },
};

export default function Home() {
  return (
    <>
      <ScrollDepthTracker />
      <Header
        logo={landing.logo}
        primaryCta={landing.hero.primaryCta}
        calendlyUrl={landing.links.calendly}
        formSectionId={FORM_SECTION_ID}
      />
      <main className="flex w-full flex-col">
        <Hero
          hero={landing.hero}
          calendlyUrl={landing.links.calendly}
          formSectionId={FORM_SECTION_ID}
        />
        <Benefits benefits={landing.benefits} />
        <Stats stats={landing.stats} />
        <Testimonials testimonials={landing.testimonials} />
        <LeadSection
          id={FORM_SECTION_ID}
          form={landing.form}
          formspreeEndpoint={landing.links.formspree}
        />
      </main>
      <Footer footer={landing.footer} />
    </>
  );
}
