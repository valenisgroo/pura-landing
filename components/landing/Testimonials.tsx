import { Star } from 'lucide-react';
import type { LandingContent } from '@/types/landing';

interface TestimonialsProps {
  testimonials: LandingContent['testimonials'];
}

const avatarColors = ['bg-blue-600', 'bg-slate-700', 'bg-blue-800'];

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section
      id="testimonios"
      className="w-full scroll-mt-20 bg-white py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {testimonials.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            {testimonials.subtitle}
          </p>
          <div className="mt-8 h-1.5 w-20 bg-blue-500 rounded-full mx-auto opacity-80" />
        </div>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <li
              key={item.name}
              className="group flex flex-col gap-6 rounded-3xl border border-slate-100/60 bg-white p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200/60 hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)] relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none"
                aria-hidden="true"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="flex gap-1">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="flex-1 text-base leading-relaxed text-slate-700 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm ${avatarColors[i % avatarColors.length]}`}
                >
                  {item.initials}
                </div>
                <div>
                  <p className="text-base font-bold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-sm font-medium text-blue-600">
                    {item.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
