import { icons } from 'lucide-react';
import type { LandingContent } from '@/content/landing';

interface BenefitsProps {
  benefits: LandingContent['benefits'];
}

function BenefitIcon({ name }: { name: string }) {
  const Icon = icons[name as keyof typeof icons];
  if (!Icon) return null;
  return <Icon size={28} strokeWidth={1.5} className="text-sky-600" />;
}

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {benefits.title}
        </h2>
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                <BenefitIcon name={item.icon} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
