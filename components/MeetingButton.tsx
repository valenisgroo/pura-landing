"use client";

import { EVENTS, track } from "@/lib/analytics";

interface MeetingButtonProps {
  /** Link de Calendly (viene de content/landing.ts). */
  href: string;
  /** Texto del botón. */
  label: string;
  /** Dónde está ubicado el botón (ej. "hero", "footer"). Sirve para los reportes. */
  location: string;
  className?: string;
}

/**
 * Botón "Agendar reunión". Dispara el evento de conversión `meeting_cta_clicked`
 * y luego abre Calendly en una pestaña nueva.
 *
 * La lógica de tracking vive acá adentro: editar el TEXTO (en content/landing.ts)
 * nunca rompe la métrica.
 */
export function MeetingButton({
  href,
  label,
  location,
  className,
}: MeetingButtonProps) {
  function handleClick() {
    track(EVENTS.MEETING_CTA_CLICKED, {
      cta_type: "meeting",
      cta_location: location,
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {label}
    </a>
  );
}
