import { FORMSPREE_ID } from '@/lib/config';

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

  footer: {
    tagline: string;
    companyName: string;
  };
}

export const landing: LandingContent = {
  seo: {
    title: 'Pura — Agua purificada de Mendoza',
    description:
      'Pura es agua purificada de Mendoza, Argentina. Liviana, equilibrada y de origen mendocino. Pedí información o agendá una reunión con nuestro equipo.',
    keywords: [
      'agua purificada',
      'agua embotellada',
      'Mendoza',
      'Argentina',
      'Pura',
      'agua mineral',
    ],
    ogImage: '/pura-hero.png',
  },

  links: {
    calendly: 'https://calendly.com/pura/reunion',
    formspree: FORMSPREE_ID,
  },

  logo: {
    src: '/pura-logo.png',
    alt: 'Pura',
  },

  hero: {
    eyebrow: 'Agua purificada de Mendoza',
    title: 'El agua que tu cuerpo reconoce',
    subtitle:
      'Pura nace en Mendoza y se purifica para que tomes agua liviana, equilibrada y con un sabor limpio. Hecha para acompañar tu día.',
    image: {
      src: '/pura-hero.png',
      alt: 'Botella de agua Pura sobre un fondo natural de Mendoza',
    },
    primaryCta: 'Agendar reunión',
    secondaryCta: 'Quiero más información',
  },

  benefits: {
    title: 'Por qué elegir Pura',
    items: [
      {
        icon: 'Droplets',
        title: 'Purificada de verdad',
        description:
          'Proceso de purificación que elimina impurezas y conserva un sabor limpio y neutro.',
      },
      {
        icon: 'Mountain',
        title: 'Origen mendocino',
        description:
          'Agua de Mendoza, embotellada cerca de su fuente para mantener la frescura.',
      },
      {
        icon: 'Scale',
        title: 'Liviana y equilibrada',
        description:
          'Baja en sodio y con un pH equilibrado para que tomes sin que pese.',
      },
      {
        icon: 'Leaf',
        title: 'Compromiso sustentable',
        description:
          'Botellas 100% reciclables y procesos pensados para cuidar el agua.',
      },
    ],
  },

  form: {
    title: 'Dejanos tus datos',
    subtitle:
      'Completá el formulario y nuestro equipo se pone en contacto con vos.',
    fields: {
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'vos@empresa.com',
      companyLabel: 'Empresa',
      companyPlaceholder: 'Nombre de tu empresa',
    },
    submitLabel: 'Enviar',
    successMessage:
      '¡Gracias! Recibimos tus datos y te vamos a contactar pronto.',
    errorMessage:
      'Ups, no pudimos enviar el formulario. Probá de nuevo en unos minutos.',
  },

  footer: {
    tagline: 'Agua purificada de Mendoza, Argentina.',
    companyName: 'Pura',
  },
};
