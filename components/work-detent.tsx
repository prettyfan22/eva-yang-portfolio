"use client";

import { useEffect } from "react";

/*
  A soft stop at the project grid, on the way down only. When a downward mouse wheel or trackpad scroll would carry
  the grid past the top of the window, the page settles on it and the rest of that flick's momentum is absorbed. The
  pause ends when the flick's events stop (a fresh scroll then continues), after 1.5s at most, and at once on any
  upward scroll. It never renews itself, so scrolling can't get stuck.
  Touch scrolling relies on the CSS scroll snap on .tiles.
*/
const HOLD_MAX_MS = 1500; // hard cap from the moment the grid is reached
const SAME_FLICK_MS = 180; // events closer together than this belong to the same flick

export function WorkDetent() {
  useEffect(() => {
    const tiles = document.querySelector<HTMLElement>(".tiles");
    if (!tiles) return;
    let holdUntil = 0;
    let lastWheel = 0;
    // distance between the grid and its resting spot just under the nav
    const offset = () => tiles.getBoundingClientRect().top - (parseFloat(getComputedStyle(tiles).scrollMarginTop) || 69);

    function onWheel(e: WheelEvent) {
      const now = performance.now();
      const sameFlick = now - lastWheel < SAME_FLICK_MS;
      lastWheel = now;
      if (e.deltaY <= 0) { holdUntil = 0; return; }
      if (now < holdUntil) {
        if (sameFlick) { e.preventDefault(); return; }
        holdUntil = 0;
      }
      // catch the grid a little early: smooth scrolling can move further between events than one event's delta
      const d = offset();
      if (d > 2 && d < Math.max(e.deltaY * 4, 220)) {
        e.preventDefault();
        window.scrollTo({ top: window.scrollY + d, behavior: "smooth" });
        holdUntil = now + HOLD_MAX_MS;
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);
  return null;
}
