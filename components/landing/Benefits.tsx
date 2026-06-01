import { icons } from 'lucide-react';
import type { LandingContent } from '@/content/landing';

interface BenefitsProps {
  benefits: LandingContent['benefits'];
}

function BenefitIcon({ name }: { name: string }) {
  const Icon = icons[name as keyof typeof icons];
  if (!Icon) return null;
  return <Icon size={20} strokeWidth={1.5} className="text-slate-600" />;
}

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <section id="beneficios" className="w-full scroll-mt-20 bg-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {benefits.title}
        </h2>
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                <BenefitIcon name={item.icon} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
