export interface LandingContent {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };

  links: {
    calendly: string;
    formspree: string;
  };

  logo: {
    src: string;
    alt: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: {
      src: string;
      alt: string;
    };
    primaryCta: string;
    secondaryCta: string;
  };

  benefits: {
    title: string;
    items: { icon: string; title: string; description: string }[];
  };

  form: {
    title: string;
    subtitle: string;
    fields: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
    };
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
  };

  testimonials: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      quote: string;
      rating: number;
      initials: string;
    }[];
  };

  stats: {
    items: { value: string; label: string }[];
  };

  footer: {
    companyName: string;
  };
}
