import type { LandingContent } from '@/content/landing';

interface StatsProps {
  stats: LandingContent['stats'];
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="w-full bg-slate-900">
      <div className="py-7">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-52">
          {stats.items.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5 text-center">
              <p className="text-3xl font-bold tracking-tight text-white">
                {stat.value}
              </p>
              <p className="text-xs text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
