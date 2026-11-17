"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useScroll } from "motion/react";

const LIKES = [
  { key: "smell", label: "Smell", img: "/img/like-smell.jpg", text: "For perfume, I reach for santal, pink pepper rose and osmanthus: cool, woody, unisex scents that help me unwind. They're easy to share with almost anyone, and quietly say calm, mature and capable. At home, it's bergamot and rose oils." },
  { key: "sip", label: "Sip", img: "/img/like-sip.jpg", text: "My mornings start with an iced pour-over, made with Geisha beans if my budget worked out that month. My evenings end with a glass of French or Napa Chardonnay." },
  { key: "savour", label: "Savour", img: "/img/like-savour.jpg", text: "On weekends I bake rosemary and olive focaccia, mostly because I love the smell of the dough as it ferments. Food is my favourite way to get to know a culture, so I'll happily eat my way through Chinese, Korean, Japanese and Italian kitchens." },
  { key: "play", label: "Play", img: "/img/like-play.jpg", text: "I recently traded the gym for badminton, and it turned out to be the perfect outlet for my competitive side. I get at least one practice in every week in LA, all so I can beat some uncs and friends back home in Vancouver and Calgary." },
  { key: "wander", label: "Wander", img: "/img/like-wander.jpg", text: "I love getting lost somewhere new: the concrete jungle of New York, cyberpunk Chongqing, K-drama Seoul, and every themed café I find along the way." },
];
const PHOTOS = [{ key: "roots", img: "/img/wuhan.jpg" }, ...LIKES];

const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const clamp = (v: number) => Math.max(0, Math.min(1, v));

type Dial = { introH: number; frameFrom: number; frameTo: number; listTo: number; centers: number[]; stageH: number; lead: number; roll: number; slow: number };

/*
  Desktop: a pinned stage. Scrolling first lifts the intro away and centres the photo while the list rises from
  below the screen; then the list turns like a dial and the row at the photo's middle swaps in its picture.
  Phones get the plain stacked text.
*/
export function Interests() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLElement>(null);
  const list = useRef<HTMLDListElement>(null);
  const dial = useRef<Dial | null>(null);
  const [active, setActive] = useState("roots");
  const [dialing, setDialing] = useState(false);
  const [track, setTrack] = useState<number | null>(null);

  const introY = useMotionValue(0);
  const introOpacity = useMotionValue(1);
  const frameY = useMotionValue(0);
  const listY = useMotionValue(0);
  const { scrollY } = useScroll();

  const run = useCallback(() => {
    const d = dial.current;
    if (!d || !section.current || !frame.current || !list.current) return;
    const navH = document.querySelector("nav")?.offsetHeight ?? 52;
    const s = navH - section.current.getBoundingClientRect().top;
    const p = ease(clamp(s / d.lead));
    const turned = Math.max(0, Math.min(d.roll, (s - d.lead) / d.slow));
    introY.set(-p * (d.introH + 80));
    introOpacity.set(1 - clamp(p * 1.4));
    frameY.set(d.frameFrom + (d.frameTo - d.frameFrom) * p);
    const enter = ease(clamp((p - 0.3) / 0.7));
    listY.set(d.listTo + (1 - enter) * (d.stageH - d.listTo) - turned);
    // Smell takes over the moment its row lines up with the photo's middle
    const fr = frame.current.getBoundingClientRect();
    const first = list.current.querySelector("div")!.getBoundingClientRect();
    const on = Math.abs(first.top + first.height / 2 - (fr.top + fr.height / 2)) < 14 || turned > 0;
    setDialing(on);
    if (!on) { setActive("roots"); return; }
    const at = d.centers[0] + turned;
    let best = 0;
    d.centers.forEach((c, k) => { if (Math.abs(c - at) < Math.abs(d.centers[best] - at)) best = k; });
    setActive(LIKES[best].key);
  }, [introY, introOpacity, frameY, listY]);

  const layout = useCallback(() => {
    const root = document.documentElement;
    if (!matchMedia("(min-width: 921px)").matches) {
      root.classList.remove("dial");
      dial.current = null;
      setTrack(null);
      setActive("roots");
      [introY, frameY, listY].forEach((v) => v.set(0));
      introOpacity.set(1);
      return;
    }
    root.classList.add("dial");
    root.style.setProperty("--nav-h", (document.querySelector("nav")?.offsetHeight ?? 52) + "px");
    const stageH = stage.current!.clientHeight;
    const f = frame.current!;
    const h = Math.min(stageH * 0.64, (f.parentElement as HTMLElement).clientWidth * 1.25);
    f.style.height = h + "px";
    f.style.width = h * 0.8 + "px";
    const introTop = 48;
    const introH = intro.current!.offsetHeight;
    const rows = Array.from(list.current!.querySelectorAll<HTMLElement>(":scope > div"));
    const centers = rows.map((r) => r.offsetTop + r.offsetHeight / 2);
    const roll = centers[centers.length - 1] - centers[0];
    dial.current = {
      introH,
      frameFrom: introTop + introH + 28,
      frameTo: (stageH - h) / 2,
      listTo: stageH / 2 - centers[0],
      centers,
      stageH,
      lead: stageH * 0.9,   // scroll spent lifting the intro and centring the photo
      roll,                 // dial travel from Smell to Wander
      slow: 1.6,            // scroll per pixel of dial travel
    };
    setTrack(stageH + stageH * 0.9 + roll * 1.6 + stageH * 0.35); // plus a beat on Wander
    requestAnimationFrame(run);
  }, [run, introY, introOpacity, frameY, listY]);

  useLayoutEffect(() => {
    layout();
    addEventListener("resize", layout);
    document.fonts?.ready.then(layout);
    return () => {
      removeEventListener("resize", layout);
      document.documentElement.classList.remove("dial");
    };
  }, [layout]);

  useEffect(() => { run(); }, [track, run]);
  useMotionValueEvent(scrollY, "change", run);

  const isDial = track !== null;
  return (
    <section id="interests" ref={section} style={isDial ? ({ "--track": track + "px" } as React.CSSProperties) : undefined}>
      <div className="likes-stage" ref={stage}>
        <div className="wrap story">
          <div className="story-text">
            <motion.div className="likes-intro" ref={intro} style={isDial ? { y: introY, opacity: introOpacity } : undefined}>
              <h3>Off the clock</h3>
              <p className="heart"><b>At heart, I&apos;m <span>Wuhanese</span>.</b>Nothing beats a bowl of <strong>热干面</strong> (reganmian): hot dry noodles coated in an equally dry sesame paste, born on the Hankou docks in the 1930s as a quick, filling breakfast for dockworkers.</p>
              <p>From there, most of what I love comes down to exploring: new scents, new flavours, new places.</p>
            </motion.div>
            <motion.figure className="frame" ref={frame} aria-hidden="true" style={isDial ? { y: frameY } : undefined}>
              {PHOTOS.map((p) => (
                <motion.img
                  key={p.key}
                  src={p.img}
                  alt=""
                  width={640}
                  height={800}
                  style={{ opacity: 0 }}
                  initial={false}
                  animate={active === p.key ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
                  transition={{ opacity: { duration: 0.5 }, scale: { duration: 1.1, ease: [0.2, 0.7, 0.2, 1] } }}
                />
              ))}
            </motion.figure>
          </div>
          <div className="story-media">
            <motion.dl className={`likes${dialing ? " dialing" : ""}`} ref={list} style={isDial ? { y: listY } : undefined}>
              {LIKES.map((l) => (
                <div key={l.key} className={active === l.key ? "on" : undefined}>
                  <dt>{l.label}</dt>
                  <dd>{l.text}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  );
}
