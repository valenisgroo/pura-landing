import type { LandingContent } from '@/types/landing';

interface StatsProps {
  stats: LandingContent['stats'];
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="w-full bg-white border-y border-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-center sm:gap-24">
          {stats.items.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
              <p className="text-4xl font-black tracking-tight text-blue-900">
                {stat.value}
              </p>
              <div className="h-0.5 w-10 rounded-full bg-blue-400" />
              <p className="text-xs font-bold tracking-widest uppercase text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
