'use client';

import { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import type { LandingContent } from '@/types/landing';
import { EVENTS, track, identify } from '@/lib/analytics';
import { useForm, ValidationError } from '@formspree/react';

interface LeadFormProps {
  form: LandingContent['form'];
  formspreeEndpoint: string;
}

export function LeadForm({ form, formspreeEndpoint }: LeadFormProps) {
  const [started, setStarted] = useState(false);
  const [email, setEmail] = useState('');
  const [state, handleSubmit] = useForm(formspreeEndpoint);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track(EVENTS.LEAD_FORM_VIEWED);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      identify(email);
      track(EVENTS.LEAD_FORM_SUBMITTED, { cta_type: 'lead_form' });
      toast.success(form.successMessage);
    }
  }, [state.succeeded, email, form.successMessage]);

  useEffect(() => {
    if (state.errors && state.errors.getFormErrors().length > 0) {
      track(EVENTS.LEAD_FORM_ERROR, {
        message: 'Error de validación formspree',
      });
    }
  }, [state.errors]);

  function handleFirstInteraction() {
    if (started) return;
    setStarted(true);
    track(EVENTS.LEAD_FORM_STARTED);
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onFocus={handleFirstInteraction}
      className="flex flex-col gap-4"
      noValidate
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">
          {form.fields.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={form.fields.namePlaceholder}
          className="rounded-2xl border-2 border-slate-100 bg-slate-50/50 px-5 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="text-xs text-red-500 ml-1"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-bold text-slate-700 ml-1"
        >
          {form.fields.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={form.fields.emailPlaceholder}
          className="rounded-2xl border-2 border-slate-100 bg-slate-50/50 px-5 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-xs text-red-500 ml-1"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="company"
          className="text-sm font-bold text-slate-700 ml-1"
        >
          {form.fields.companyLabel}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder={form.fields.companyPlaceholder}
          className="rounded-2xl border-2 border-slate-100 bg-slate-50/50 px-5 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
        />
        <ValidationError
          prefix="Company"
          field="company"
          errors={state.errors}
          className="text-xs text-red-500 ml-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting || state.succeeded}
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {state.submitting
          ? 'Enviando…'
          : state.succeeded
            ? '¡Enviado!'
            : form.submitLabel}
      </button>

      {state.errors && state.errors.getFormErrors().length > 0 && (
        <p role="alert" className="text-sm text-red-600">
          {form.errorMessage}
        </p>
      )}
    </form>
  );
}
