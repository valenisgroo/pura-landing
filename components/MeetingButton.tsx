'use client';

import { EVENTS, track } from '@/lib/analytics';

interface MeetingButtonProps {
  href: string;
  label: string;
  location: string;
  className?: string;
}

export function MeetingButton({ href, label, location, className }: MeetingButtonProps) {
  function handleClick() {
    track(EVENTS.MEETING_CTA_CLICKED, {
      cta_type: 'meeting',
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
