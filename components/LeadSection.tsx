import type { LandingContent } from '@/content/landing';
import { LeadForm } from '@/components/LeadForm';

interface LeadSectionProps {
  id: string;
  form: LandingContent['form'];
  formspreeEndpoint: string;
}

export function LeadSection({ id, form, formspreeEndpoint }: LeadSectionProps) {
  return (
    <section id={id} className="w-full scroll-mt-8 bg-slate-100">
      <div className="mx-auto max-w-xl px-6 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {form.title}
          </h2>
          <p className="mt-3 text-base text-slate-500 md:text-lg">
            {form.subtitle}
          </p>
        </div>
        <div className="mt-10 rounded-3xl bg-white p-6 shadow-md sm:p-8">
          <LeadForm form={form} formspreeEndpoint={formspreeEndpoint} />
        </div>
      </div>
    </section>
  );
}
