"use client";

import { useEffect } from "react";

/*
  A soft stop at the project grid. When a mouse wheel or trackpad scroll would carry the grid past the top of the
  window (in either direction), the page settles on it instead, and the rest of that gesture's momentum is absorbed.
  A fresh scroll continues as normal. Touch scrolling relies on the CSS scroll snap on .tiles.
*/
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
      const gap = now - lastWheel;
      lastWheel = now;
      // still absorbing the gesture that hit the stop: momentum events arrive less than ~200ms apart
      if (now < holdUntil && gap < 220) { e.preventDefault(); holdUntil = Math.min(holdUntil + 120, now + 1200); return; }
      const d = offset();
      const crossing = (e.deltaY > 0 && d > 2 && d - e.deltaY < 0) || (e.deltaY < 0 && d < -2 && d - e.deltaY > 0);
      if (!crossing) return;
      e.preventDefault();
      window.scrollTo({ top: window.scrollY + d, behavior: "smooth" });
      holdUntil = now + 450;
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);
  return null;
}
