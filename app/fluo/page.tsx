import type { Metadata } from "next";
import Link from "next/link";
import { FluoStage } from "@/components/fluo-stage";

export const metadata: Metadata = { title: "Fluo Case Study", description: "A money app for socially active college students, taken from research to launch plan in a two-week case competition." };

export default function Fluo() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link className="back" href="/#work">← All work</Link>
          <h1>Launching <span className="wordmark">fluo<i>.</i></span></h1>
          <p className="lede">A money app for socially active college students, taken from research to launch plan in a two-week case competition.</p>
          <dl className="meta"><div><dt>Context</dt><dd>USC Marshall MSMKT Case Competition · Semi-finalist</dd></div><div><dt>My part</dt><dd>Business model, roadmap, launch plan, website demo</dd></div><div><dt>Timeline</dt><dd>Fall 2026 · two weeks · team of five</dd></div></dl>
        </div>
      </header>

      <FluoStage />

      <div className="wrap next"><Link href="/nutea"><span><small>Next project</small><b>Nü Tea</b></span><span className="arrow" aria-hidden="true">→</span></Link></div>
    </>
  );
}
