'use client';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import type { LandingContent } from '@/content/landing';
import { EVENTS, track } from '@/lib/analytics';
import { useForm, ValidationError } from '@formspree/react';

interface LeadFormProps {
  form: LandingContent['form'];
  formspreeEndpoint: string;
}

export function LeadForm({ form, formspreeEndpoint }: LeadFormProps) {
  const [started, setStarted] = useState(false);
  const [state, handleSubmit] = useForm(formspreeEndpoint);

  useEffect(() => {
    if (state.succeeded) {
      track(EVENTS.LEAD_FORM_SUBMITTED, { cta_type: 'lead_form' });
      toast.success(form.successMessage);
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors && state.errors.getFormErrors().length > 0) {
      track(EVENTS.LEAD_FORM_ERROR, { message: 'Error de validación formspree' });
    }
  }, [state.errors]);

  function handleFirstInteraction() {
    if (started) return;
    setStarted(true);
    track(EVENTS.LEAD_FORM_STARTED);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onFocus={handleFirstInteraction}
        className="flex flex-col gap-4"
        noValidate
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            {form.fields.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={form.fields.namePlaceholder}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-3 focus:ring-sky-100"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-xs text-red-500"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            {form.fields.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={form.fields.emailPlaceholder}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-3 focus:ring-sky-100"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-xs text-red-500"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-sm font-medium text-slate-700">
            {form.fields.companyLabel}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={form.fields.companyPlaceholder}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-3 focus:ring-sky-100"
          />
          <ValidationError
            prefix="Company"
            field="company"
            errors={state.errors}
            className="text-xs text-red-500"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting || state.succeeded}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.submitting ? 'Enviando…' : state.succeeded ? '¡Enviado!' : form.submitLabel}
        </button>

        {state.errors && state.errors.getFormErrors().length > 0 && (
          <p role="alert" className="text-sm text-red-600">
            {form.errorMessage}
          </p>
        )}
      </form>
    </>
  );
}
