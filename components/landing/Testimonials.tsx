import { Star } from 'lucide-react';
import type { LandingContent } from '@/content/landing';

interface TestimonialsProps {
  testimonials: LandingContent['testimonials'];
}

const avatarColors = [
  'bg-sky-500',
  'bg-indigo-500',
  'bg-teal-500',
];

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonios" className="w-full scroll-mt-20 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {testimonials.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
            {testimonials.subtitle}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <li
              key={item.name}
              className="group flex flex-col gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-lg hover:shadow-sky-50"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-slate-600 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${avatarColors[i % avatarColors.length]}`}
                >
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
