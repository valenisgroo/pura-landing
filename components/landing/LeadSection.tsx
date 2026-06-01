import type { LandingContent } from '@/content/landing';
import { LeadForm } from '@/components/LeadForm';

interface LeadSectionProps {
  id: string;
  form: LandingContent['form'];
  formspreeEndpoint: string;
}

export function LeadSection({ id, form, formspreeEndpoint }: LeadSectionProps) {
  return (
    <section id={id} className="w-full scroll-mt-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">

          {/* Left: text */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {form.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {form.subtitle}
            </p>
          </div>

          {/* Right: form card */}
          <div className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/60 sm:p-10">
            <LeadForm form={form} formspreeEndpoint={formspreeEndpoint} />
          </div>

        </div>
      </div>
    </section>
  );
}
