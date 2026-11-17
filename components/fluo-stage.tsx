"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CountUp } from "@/components/count-up";

const ease = [0.2, 0.7, 0.2, 1] as const;
const cssVar = (name: string, value: string) => ({ [name]: value }) as React.CSSProperties;

const STEPS = [
  ["f-research", "Research"],
  ["f-position", "Positioning"],
  ["f-product", "Product demo"],
  ["f-model", "Business model"],
  ["f-launch", "Launch plan"],
] as const;

// Highlights the step whose chapter sits in the middle of the screen
function useActiveChapter() {
  const [active, setActive] = useState<string>(STEPS[0][0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    STEPS.forEach(([id]) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return active;
}

// Money Buddy chat: the conversation types itself out once the phone is on screen
const CHAT_PLAN = [0, 600, 1900, 2400, 2700, 3000, 3400];

function ChatScreen() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const [step, setStep] = useState(-1);
  useEffect(() => {
    if (!seen) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setStep(CHAT_PLAN.length); return; }
    const timers = CHAT_PLAN.map((t, i) => setTimeout(() => setStep(i), t));
    return () => timers.forEach(clearTimeout);
  }, [seen]);
  const show = (at: number) => (step >= at ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 });
  const t = { duration: 0.45, ease };
  return (
    <div ref={ref} className="screen">
      <motion.div className="bubble me" initial={{ opacity: 0, y: 8 }} animate={show(0)} transition={t}>Where&apos;s the best matcha near me?</motion.div>
      {step === 1 && (
        <motion.div className="typing" aria-hidden="true" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={t}><i></i><i></i><i></i></motion.div>
      )}
      <motion.div className="bubble bot" initial={{ opacity: 0, y: 8 }} animate={show(2)} transition={t}>Three spots within a 12-minute walk. Dulce is the one. It&apos;s a Fluo partner, so you get <b>10% off</b>.</motion.div>
      <motion.div className="spot top" initial={{ opacity: 0, y: 8 }} animate={show(3)} transition={t}><span className="tag">Top pick · Fluo partner</span><b>Dulce</b><small>USC Village · 3 min walk · 10% off</small></motion.div>
      <motion.div className="spot" initial={{ opacity: 0, y: 8 }} animate={show(4)} transition={t}><b>Matcha bar on Figueroa</b><small>9 min walk · 4.6 rating</small></motion.div>
      <motion.div className="spot" initial={{ opacity: 0, y: 8 }} animate={show(5)} transition={t}><b>Tea house on Jefferson</b><small>12 min walk · In-store only</small></motion.div>
      <motion.div className="order" initial={{ opacity: 0, y: 8 }} animate={show(6)} transition={t}>Order from Dulce</motion.div>
    </div>
  );
}

const TAB_TRIGGER =
  "h-auto flex-none flex-col items-start justify-start gap-0.5 whitespace-normal rounded-2xl border border-[rgba(242,244,236,.14)] bg-transparent px-[18px] py-[14px] text-left transition-colors hover:border-[rgba(242,244,236,.3)] data-active:border-[var(--f-lime)] data-active:bg-[var(--f-surface)] data-active:shadow-none group-data-[variant=default]/tabs-list:data-active:shadow-none dark:data-active:border-[var(--f-lime)] dark:data-active:bg-[var(--f-surface)] after:hidden";

function Funnel() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.4 });
  const rows = [["Sign-ups", "100%", "1,000"], ["Connect", "40%", "400"], ["First action", "24%", "240"], ["Repeat", "12%", "120"]];
  return (
    <div className="funnel" ref={ref}>
      {rows.map(([label, w, n], i) => (
        <div key={label}>
          <span>{label}</span>
          <span className="track">
            <motion.span className="fill" style={{ ...cssVar("--w", w), originX: 0 }} initial={{ scaleX: 0 }} animate={{ scaleX: seen ? 1 : 0 }} transition={{ duration: 1.1, delay: i * 0.12, ease }} />
          </span>
          <b>{n}</b>
        </div>
      ))}
    </div>
  );
}

export function FluoStage() {
  const active = useActiveChapter();
  const [panel, setPanel] = useState("ask");
  return (
    <section className="fluo-stage" id="fluo" aria-label="Fluo case study">
      <div className="wrap story">
        <div className="story-text">
          <Badge className="badge h-auto rounded-full border-0 bg-[var(--f-lime)] px-3.5 py-[7px] text-[13px] font-semibold text-[#10120e]">Semi-finalist</Badge>
          <p>Fluo is a money app for socially active college students. For the USC Marshall MS Marketing Case Competition, our team of five had <strong>two weeks</strong> to build its launch strategy: research, positioning, product, business model and go-to-market.</p>
          <p>We lost a lot of sleep, and complained about it in the group chat every night. We kept going anyway, and the plan made the semi-finals.</p>
          <p><strong>My part:</strong> the business model, the roadmap and the launch recommendation, plus a working website demo of the product.</p>
          <a className="link-out" href="https://fluo-usc-website.vercel.app" target="_blank" rel="noopener">Open the full website demo ↗</a>
          <ol className="steps" aria-label="Case study sections">
            {STEPS.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className={active === id ? "on" : undefined}>{label}</a></li>
            ))}
          </ol>
        </div>

        <div className="story-media">
          <div className="chapter" id="f-research">
            <h4>Students want help paying for the fun.</h4>
            <div className="sample"><span><b>14</b> in-depth interviews</span><span><b>99</b> survey responses</span></div>
            <div className="big-stats">
              <div className="card"><CountUp to={72} suffix="%" /><span>can&apos;t see where their money goes</span></div>
              <div className="card"><CountUp to={9} suffix="%" /><span>use a budgeting app</span></div>
              <div className="card"><CountUp to={85} suffix="%" /><span>would try Fluo to spend smarter or earn rewards</span></div>
            </div>
            <p className="note">Budgeting apps ask students to cut back. What students wanted was permission: to know what they could spend this weekend without guilt.</p>
          </div>

          <div className="chapter" id="f-position">
            <h4>Budgeting is restrictive. Fluo is permissive.</h4>
            <div className="map" role="img" aria-label="Perceptual map. Horizontal axis from logs the past to plans the future, vertical axis from discipline first to lifestyle first. Venmo, Bilt and Cleo sit in lifestyle first but log the past. Bank apps and Rocket Money log the past with discipline first. PocketGuard and YNAB plan the future with discipline first. Fluo stands alone in plans the future and lifestyle first.">
              <span className="ax h"></span><span className="ax v"></span>
              <span className="al" style={{ left: "51.5%", top: "5%" }}>Lifestyle first</span>
              <span className="al" style={{ left: "51.5%", bottom: "5%" }}>Discipline first</span>
              <span className="al" style={{ left: "5%", top: "52.5%" }}>Logs the past</span>
              <span className="al" style={{ right: "5%", top: "52.5%" }}>Plans the future</span>
              <span className="dot" style={{ left: "15%", top: "20%" }}>Venmo</span>
              <span className="dot" style={{ left: "24%", top: "30%" }}>Bilt</span>
              <span className="dot" style={{ left: "36%", top: "39%" }}>Cleo</span>
              <span className="dot" style={{ left: "17%", top: "66%" }}>Bank apps</span>
              <span className="dot" style={{ left: "30%", top: "82%" }}>Rocket Money</span>
              <span className="dot" style={{ left: "70%", top: "65%" }}>PocketGuard</span>
              <span className="dot" style={{ left: "80%", top: "82%" }}>YNAB</span>
              <motion.span
                className="dot me"
                style={{ left: "82%", top: "26%" }}
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <span>fluo.</span>
              </motion.span>
            </div>
            <p className="quote">For socially active students, Fluo is the only money companion that gives <em>responsible spending permissions</em>, so they can enjoy college now and still reach their goals.</p>
          </div>

          <div className="chapter" id="f-product">
            <h4>A Money Buddy that says yes, within reason.</h4>
            <Tabs value={panel} onValueChange={(v) => setPanel(String(v))} className="demo grid grid-cols-[auto_minmax(0,1fr)] items-center gap-[clamp(24px,4vw,48px)] max-[680px]:grid-cols-1 max-[680px]:justify-items-center">
              <div className="phone" aria-live="polite">
                <span className="island"></span>
                <div className="head"><span className="f">f.</span><div><b>Money Buddy</b><small>Near USC Village</small></div></div>
                <TabsContent value="ask" className="flex-1 text-[13px]"><ChatScreen /></TabsContent>
                <TabsContent value="friday" className="flex-1 text-[13px]">
                  <motion.div className="screen" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }}>
                    <div className="fri">
                      <span className="t">FRIDAY 4:00 PM · THIS WEEKEND</span>
                      <span className="n">$86</span>
                      <span className="y">Yours to spend.</span>
                      <div className="aside">
                        <div><span>Rent</span><span>Set aside</span></div>
                        <div><span>Phone bill</span><span>Set aside</span></div>
                        <div><span>Spring break goal</span><span>On track</span></div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="archetype" className="flex-1 text-[13px]">
                  <motion.div className="screen arch" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }}>
                    <span className="t">YOUR ARCHETYPE</span>
                    <h5>The Curator</h5>
                    <span style={{ color: "#5f6458", fontSize: "12px", lineHeight: "1.4" }}>Taste first. You spend on experiences and favorite spots, and save steadily in between.</span>
                    <div className="bar">
                      {[["54%", "#4f7a1f"], ["22%", "#b9e35b"], ["14%", "#7fb0b0"], ["10%", "#cbb6e6"]].map(([w, c], i) => (
                        <motion.i key={c} style={{ width: w, background: c, originX: 0 }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease }} />
                      ))}
                    </div>
                    <div className="legend"><span>Curator 54%</span><span>Explorer 22%</span><span>Host 14%</span><span>Planner 10%</span></div>
                    <div className="tiles">
                      <div><small>Spent in October</small><b>$1,064</b></div>
                      <div><small>Saved</small><b>$142</b></div>
                      <div><small>Top category</small><b>Dining · 28%</b></div>
                      <div><small>Favorite spot</small><b>Dulce · 9 visits</b></div>
                    </div>
                  </motion.div>
                </TabsContent>
              </div>
              <TabsList aria-label="Demo screens" className="tabs grid h-auto w-full items-stretch justify-stretch gap-2 rounded-none bg-transparent p-0 text-inherit group-data-horizontal/tabs:h-auto">
                <TabsTrigger value="ask" className={TAB_TRIGGER}><b>Just ask</b><span>Finds the spot, applies the partner discount</span></TabsTrigger>
                <TabsTrigger value="friday" className={TAB_TRIGGER}><b>The Friday Number</b><span>What&apos;s safe to spend this weekend</span></TabsTrigger>
                <TabsTrigger value="archetype" className={TAB_TRIGGER}><b>Money archetype</b><span>Spending habits as a personality, not a lecture</span></TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="chapter" id="f-model">
            <h4>Free for students, paid by merchants.</h4>
            <div className="card ledger">
              <div><b>$230</b><p><span className="lab">A student&apos;s month</span>Matcha, boba, lunch, fitness and a Target run, paid with FluoWallet at partner merchants.</p></div>
              <div className="hi"><b>$23</b><div><p><span className="lab">Merchants pay 10%</span>Cheaper than ads, and they only pay for real student sales.</p>
                <div className="split"><div><b>$6.90</b><span>back to the student as FluoCoins</span></div><div><b>$16.10</b><span>kept by Fluo</span></div></div></div>
              </div>
              <div><b>$4.99<small>/mo</small></b><p><span className="lab">Later · Fluo+</span>Bigger squads, custom stash rules, detailed analytics, more reward drops.</p></div>
            </div>
          </div>

          <div className="chapter" id="f-launch">
            <h4>Launch at USC this December. Small commitments first.</h4>
            <div className="card ask">
              <div><b>100</b><p><strong>Founding members</strong><span>Club leaders, Greek life, international student leaders, micro-creators</span></p></div>
              <div><b>10</b><p><strong>Partner merchants</strong><span>Matcha, boba, bowls and studios near campus, 10% on Fluo sales</span></p></div>
              <div><b>1</b><p><strong>Financial credibility proof</strong><span>A named bank partner or FDIC coverage, because 72% of students worry about privacy</span></p></div>
            </div>
            <div className="road">
              <div className="card"><small>Now · USC</small><b>The Fluo bundle</b><span>FluoState, Stash, FluoCoins and FluoSquad at local partners</span></div>
              <div className="card"><small>Next · LA campuses</small><b>Big bills through Fluo</b><span>Rent and phone bills paid on Fluo, with only what&apos;s left as the yes</span></div>
              <div className="card"><small>Later · National</small><b>Grows with you</b><span>Student to first-job professional, with partners at each stage</span></div>
            </div>
            <div className="card">
              <h5>Waitlist to word of mouth</h5>
              <Funnel />
              <p className="note" style={{ marginTop: "16px" }}>Target funnel from the pitch, with each repeat user&apos;s referrals feeding the next round of sign-ups.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
