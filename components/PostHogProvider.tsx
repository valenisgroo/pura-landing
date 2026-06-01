'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { POSTHOG_TOKEN } from '@/lib/config';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!POSTHOG_TOKEN) return;
    posthog.init(POSTHOG_TOKEN, {
      api_host: 'https://us.i.posthog.com',
      capture_pageview: true,
      capture_pageleave: true,
      person_profiles: 'identified_only',
    });
  }, []);

  return <>{children}</>;
}
