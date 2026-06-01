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
    ogImage: '/og-image.png',
  },

  links: {
    calendly: 'https://calendly.com/valentinoisgro/30min',
    formspree: FORMSPREE_ID,
  },

  logo: {
    src: '/logo-pura-avif.avif',
    alt: 'Pura',
  },

  hero: {
    eyebrow: 'Agua purificada de Mendoza',
    title: 'El agua que tu cuerpo reconoce',
    subtitle:
      'Pura nace en Mendoza y se purifica para que tomes agua liviana, equilibrada y con un sabor limpio. Hecha para acompañar tu día.',
    image: {
      src: '/pura-hero.avif',
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
    successMessage: '¡Correo enviado correctamente!',
    errorMessage:
      'Ups, no pudimos enviar el formulario. Probá de nuevo en unos minutos.',
  },

  testimonials: {
    title: 'Lo que dicen quienes nos eligen',
    subtitle:
      'Personas y empresas que encontraron en Pura el agua que buscaban.',
    items: [
      {
        name: 'Martina López',
        role: 'Nutricionista',
        quote:
          'Desde que recomiendo Pura a mis pacientes, todos notan la diferencia. Liviana, sin gusto raro y perfecta para hidratarse bien.',
        rating: 5,
        initials: 'ML',
      },
      {
        name: 'Diego Fernández',
        role: 'Gerente de Operaciones, Bodega Altura',
        quote:
          'La pusimos en nuestras oficinas y el feedback fue inmediato. El sabor limpio hace que realmente quieras tomar más agua.',
        rating: 5,
        initials: 'DF',
      },
      {
        name: 'Valeria Ríos',
        role: 'Chef y emprendedora',
        quote:
          'Uso Pura en mi cocina porque el agua importa. Con una base neutra y limpia, los sabores de mis platos destacan más.',
        rating: 5,
        initials: 'VR',
      },
    ],
  },

  stats: {
    items: [
      { value: '+10.000', label: 'Botellas vendidas' },
      { value: '0', label: 'Aditivos' },
      { value: '+50', label: 'Puntos de entrega' },
    ],
  },

  footer: {
    companyName: 'Pura',
  },
};
