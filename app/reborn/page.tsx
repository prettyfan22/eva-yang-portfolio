import type { Metadata } from "next";
import Link from "next/link";
import { ZoomImage } from "@/components/zoom-image";

export const metadata: Metadata = { title: "Reborn by Louis Vuitton", description: "A boardroom pitch to turn empty Louis Vuitton fragrance bottles into made-to-order candles, and lapsed clients into returning ones." };

const SLIDES: [string, string][] = [
  ["01", "Title slide: Reborn by Louis Vuitton"],
  ["03", "The hook: a bottle on my desk for six months, sold online in one week"],
  ["05", "What clients want: 59% want refillable, 42% pay more for personal, 13.2% niche fragrance growth"],
  ["06", "The proposal: your scent, a second life, from $159 per 7 oz candle, in six client steps"],
  ["07", "The candle: leather handle, gold coaster lid, colour-matched wick, beeswax or soy, Marc Newson vessel"],
  ["08", "The designer: Marc Newson, creator of Louis Vuitton's Horizon luggage"],
  ["11", "Why now: win back lost value, own the white space, get ahead of the rules"],
  ["12", "Next steps: New York launch event, six-month pilot, scale to 15 boutiques"],
  ["13", "The ask: $300,000 and the board's endorsement of the New York launch"],
];

export default function Reborn() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link className="back" href="/#work">← All work</Link>
          <h1>Reborn by Louis Vuitton</h1>
          <p className="lede">A boardroom pitch to turn the fragrance bottles clients have moved on from into made-to-order candles, and lapsed clients into returning ones.</p>
          <dl className="meta"><div><dt>Context</dt><dd>Boardroom pitch to the LVMH board · GSBA 542</dd></div><div><dt>My part</dt><dd>Solo: concept, research, deck, script and delivery</dd></div><div><dt>Timeline</dt><dd>Fall 2026 · five minutes</dd></div></dl>
        </div>
      </header>

      <section id="reborn">
        <div className="wrap story">
          <div className="story-text">
            <p>I played Louis Vuitton&apos;s Product Marketing Manager for fragrance, pitching LVMH&apos;s board. The idea started with my own Imagination bottle: half empty on my desk for six months, then sold on Facebook Marketplace in a week. That sale never touched Louis Vuitton.</p>
            <p>Reborn brings the bottle back. An advisor invites the client in, they choose wax and finish, and artisans pour their scent into a Marc Newson ceramic candle. Every visit is another reason to walk back into the boutique.</p>
            <div className="stats">
              <div><b>59%</b><span>of luxury consumers prefer refillable or modular packaging</span></div>
              <div><b>$159</b><span>entry price per 7 oz candle</span></div>
              <div><b>15</b><span>boutiques by year five, from one New York pilot</span></div>
              <div><b>$300K</b><span>the ask: launch and a six-month pilot</span></div>
            </div>
            <p className="note-l">Revenue and spend figures in the deck are my projections for the pitch.</p>
          </div>
          <div className="story-media slides">
            {SLIDES.map(([n, alt]) => (
              <ZoomImage key={n} className="reveal" src={`/img/reborn/slide-${n}.jpg`} alt={alt} loading="lazy" width={960} height={540} />
            ))}
          </div>
        </div>
      </section>

      <div className="wrap next"><Link href="/earthmeal"><span><small>Next project</small><b>Earthmeal</b></span><span className="arrow" aria-hidden="true">→</span></Link></div>
    </>
  );
}
