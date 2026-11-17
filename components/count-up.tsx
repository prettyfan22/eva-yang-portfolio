"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

// A research figure that counts up the first time it is seen
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.6 });
  useEffect(() => {
    if (!seen || !ref.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const controls = animate(0, to, { duration: 1.1, ease: [0.2, 0.7, 0.2, 1], onUpdate: (v) => { el.textContent = Math.round(v) + suffix; } });
    return () => controls.stop();
  }, [seen, to, suffix]);
  return <b ref={ref}>{to}{suffix}</b>;
}
