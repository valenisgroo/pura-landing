import posthog from 'posthog-js';

export const EVENTS = {
  LEAD_FORM_VIEWED: 'lead_form_viewed',
  LEAD_FORM_STARTED: 'lead_form_started',
  LEAD_FORM_SUBMITTED: 'lead_form_submitted',
  LEAD_FORM_ERROR: 'lead_form_error',
  MEETING_CTA_CLICKED: 'meeting_cta_clicked',
  SCROLL_DEPTH_REACHED: 'scroll_depth_reached',
} as const;

export type AppEvent = (typeof EVENTS)[keyof typeof EVENTS];

export function track(event: AppEvent, properties?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  posthog.capture(event, properties);
}

export function identify(email: string) {
  if (typeof window === 'undefined') return;
  posthog.identify(email, { email });
}
