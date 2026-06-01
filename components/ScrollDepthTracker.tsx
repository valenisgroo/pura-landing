'use client';

import { useEffect } from 'react';
import { EVENTS, track } from '@/lib/analytics';

const THRESHOLDS = [25, 50, 75, 90, 100] as const;

export function ScrollDepthTracker() {
  useEffect(() => {
    const reached = new Set<number>();

    function getScrollPercent() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return 100;
      return Math.min(100, Math.round((scrollTop / docHeight) * 100));
    }

    function handleScroll() {
      const percent = getScrollPercent();
      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !reached.has(threshold)) {
          reached.add(threshold);
          track(EVENTS.SCROLL_DEPTH_REACHED, { depth: threshold });
        }
      }
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // chequeo inicial (páginas cortas que ya se ven enteras)

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
