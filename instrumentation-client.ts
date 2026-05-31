import posthog from "posthog-js";
import { POSTHOG_TOKEN } from "@/lib/config";

posthog.init(POSTHOG_TOKEN, {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  defaults: "2026-01-30",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
});
