"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, inView } from "motion";

// Anything marked .reveal rises into place the first time it scrolls into view
export function Reveals() {
  const path = usePathname();
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    return inView(
      ".reveal",
      (el) => {
        if (reduce) { (el as HTMLElement).style.opacity = "1"; return; }
        animate(el, { opacity: [0, 1], y: [40, 0] }, { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] });
      },
      { margin: "0px 0px -10% 0px" },
    );
  }, [path]);
  return null;
}
