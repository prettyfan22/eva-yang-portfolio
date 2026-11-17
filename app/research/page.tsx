import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Small Business Research", description: "How small businesses pass the torch: a grounded-theory study of family business succession." };

export default function Research() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link className="back" href="/#work">← All work</Link>
          <h1>Passing the torch</h1>
          <p className="lede">How small businesses pass the torch: a grounded-theory study of family business succession.</p>
          <dl className="meta"><div><dt>Role</dt><dd>Business Research Assistant</dd></div><div><dt>When</dt><dd>2025 – now</dd></div><div><dt>Where</dt><dd>UBC Sauder School of Business</dd></div></dl>
        </div>
      </header>

      <section id="research">
        <div className="wrap research">
          <div className="copy reveal">
            <p>As a Business Research Assistant at UBC Sauder, I recruit and interview local small business owners for a grounded-theory study of family business succession. I also designed the AI transcription pipeline the team now uses.</p>
            <p>The findings are being written up as a Harvard Business case study.</p>
          </div>
          <div className="copy reveal">
            <div className="stats">
              <div><b>30+</b><span>Businesses interviewed</span></div>
              <div><b>80+</b><span>Hours of manual work saved</span></div>
              <div><b>500+</b><span>Qualitative codes</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap next"><Link href="/fluo"><span><small>Next project</small><b>Fluo</b></span><span className="arrow" aria-hidden="true">→</span></Link></div>
    </>
  );
}
