import type { LandingContent } from '@/content/landing';
import { LeadForm } from '@/components/LeadForm';

interface LeadSectionProps {
  id: string;
  form: LandingContent['form'];
  formspreeEndpoint: string;
}

export function LeadSection({ id, form, formspreeEndpoint }: LeadSectionProps) {
  return (
    <section id={id} className="w-full scroll-mt-8 bg-sky-50">
      <div className="mx-auto max-w-xl px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {form.title}
        </h2>
        <p className="mt-3 text-center text-lg text-slate-600">
          {form.subtitle}
        </p>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <LeadForm form={form} formspreeEndpoint={formspreeEndpoint} />
        </div>
      </div>
    </section>
  );
}
