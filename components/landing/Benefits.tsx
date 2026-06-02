import { icons } from 'lucide-react';
import type { LandingContent } from '@/types/landing';

interface BenefitsProps {
  benefits: LandingContent['benefits'];
}

function BenefitIcon({ name, className }: { name: string; className: string }) {
  const Icon = icons[name as keyof typeof icons];
  if (!Icon) return null;
  return <Icon size={22} strokeWidth={1.5} className={className} />;
}

// Visual style per item index — order stays from landing.ts
const cardConfig = [
  // 0: Purificada — small card top-right
  {
    grid: '',
    bg: 'bg-white border border-slate-100',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    title: 'text-slate-900',
    desc: 'text-slate-600',
  },
  // 1: Origen mendocino — large card top-left (col-span-2)
  {
    grid: 'md:col-span-2',
    bg: 'bg-gradient-to-br from-blue-100 to-sky-50',
    iconBg: 'bg-blue-200/60',
    iconColor: 'text-blue-800',
    title: 'text-blue-950',
    desc: 'text-blue-900/70',
  },
  // 2: Liviana — wide card bottom-right (col-span-2)
  {
    grid: 'md:col-span-2',
    bg: 'bg-slate-50 border border-slate-100',
    iconBg: 'bg-white',
    iconColor: 'text-blue-600',
    title: 'text-slate-900',
    desc: 'text-slate-600',
  },
  // 3: Compromiso — dark navy card bottom-left
  {
    grid: '',
    bg: 'bg-blue-950',
    iconBg: 'bg-blue-900',
    iconColor: 'text-blue-300',
    title: 'text-white',
    desc: 'text-blue-200',
  },
];

// Render order: 1 (large), 0 (small), 3 (dark), 2 (wide)
// Produces: row1=[Origen(2), Purificada(1)]  row2=[Compromiso(1), Liviana(2)]
const renderOrder = [1, 0, 3, 2];

export function Benefits({ benefits }: BenefitsProps) {
  return (
    <section id="beneficios" className="w-full scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {benefits.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {renderOrder.map((idx) => {
            const item = benefits.items[idx];
            const cfg = cardConfig[idx];
            return (
              <div
                key={item.title}
                className={`rounded-3xl p-8 ${cfg.bg} ${cfg.grid}`}
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${cfg.iconBg}`}
                >
                  <BenefitIcon name={item.icon} className={cfg.iconColor} />
                </div>
                <h3 className={`mb-3 text-xl font-bold ${cfg.title}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${cfg.desc}`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
