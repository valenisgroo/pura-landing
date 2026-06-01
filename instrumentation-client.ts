import posthog from "posthog-js";
import { POSTHOG_TOKEN } from "@/lib/config";

if (POSTHOG_TOKEN) {
  posthog.init(POSTHOG_TOKEN, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2026-01-30",
    capture_pageview: true,
    capture_pageleave: true,
    capture_exceptions: true,
    person_profiles: "identified_only",
    debug: process.env.NODE_ENV === "development",
  });
}
