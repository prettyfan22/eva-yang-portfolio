import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Archer Aviation Plan", description: "An integrated marketing plan that uses LA28 to turn an unfamiliar air taxi into something Angelenos understand, trust and remember." };

export default function Archer() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link className="back" href="/#work">← All work</Link>
          <h1>Meet Me at Midnight</h1>
          <p className="lede">An integrated marketing plan for Archer Aviation that uses the LA28 Games to turn an unfamiliar air taxi into something Angelenos understand, trust and want to ride.</p>
          <dl className="meta"><div><dt>Context</dt><dd>Archer Aviation client brief · GSBA 528 Marketing Management</dd></div><div><dt>My part</dt><dd>Company and market analysis, SWOT, the pitch&apos;s hook and insight</dd></div><div><dt>Timeline</dt><dd>Fall 2026 · Team 10</dd></div></dl>
        </div>
      </header>

      <section id="archer">
        <div className="wrap story">
          <div className="story-text">
            <p>Archer is building Midnight, a piloted, all-electric air taxi, and it is the official air taxi provider of LA28. The brief: use the Games to turn a technology most people have never seen into a brand they understand, trust, want and remember.</p>
            <p>I wrote our company and market analysis, including the SWOT, and opened our pitch video with the hook and the human insight the whole campaign rests on.</p>
            <div className="stats">
              <div><b>58%</b><span>of US flyers want to try an air taxi; most can&apos;t say what one is</span></div>
              <div><b>87 hrs</b><span>a year each LA driver loses to traffic</span></div>
              <div><b>$8M</b><span>proposed budget, 35% on live experiences</span></div>
              <div><b>50K</b><span>target waitlist sign-ups by the end of 2028</span></div>
            </div>
          </div>
          <div className="story-media">
            <div className="chapter-l reveal">
              <h4>People don&apos;t trust what they&apos;ve never seen.</h4>
              <p className="bigq">Angelenos accept losing 87 hours a year to traffic because it&apos;s familiar. Flying feels risky because it&apos;s new. <em>Until people see Midnight for themselves, they picture a loud, risky helicopter only the rich can afford.</em></p>
            </div>
            <div className="chapter-l reveal">
              <h4>The big idea: an invitation, not an ad.</h4>
              <div className="pcard feature">
                <h5>Meet Me at Midnight</h5>
                <p className="tagline">Meet it before you ride it.</p>
                <p>Before anyone is asked to ride, they see Midnight fly, hear how quiet it is and sit in the cabin next to the pilot. Every channel and activation does one job: get people to meet it.</p>
                <ul className="chips"><li>See it fly</li><li>Hear how quiet</li><li>Sit inside</li></ul>
              </div>
            </div>
            <div className="chapter-l reveal">
              <h4>Three people Archer has to win over.</h4>
              <div className="pgrid">
                <div className="pcard"><h5>First riders</h5><p>Daniel, 44, Santa Monica. Values the time saved, but needs proof it&apos;s safe.</p></div>
                <div className="pcard"><h5>Amplifiers</h5><p>Maya, 26, Silver Lake. Excited to share a new LA experience, unsure it&apos;s meant for people like her.</p></div>
                <div className="pcard"><h5>Neighbours</h5><p>Hannah, 38, Van Nuys. Curious about the technology and how flights may affect her street.</p></div>
              </div>
            </div>
            <div className="chapter-l reveal">
              <h4>One invitation, before, during and after the Games.</h4>
              <ol className="timeline-l">
                <li><b>Before</b><span><strong>Open Saturdays at Hawthorne.</strong> Free monthly days at Archer&apos;s base from April 2027: watch it fly, sit in the cabin, meet the pilot and engineers. Neighbours get the first Saturday.</span></li>
                <li><b>During</b><span><strong>The Flight Board at L.A. LIVE.</strong> A departures-style board in the fan zone showing every real Midnight flight for Team USA, NBC and LA28, with a cabin to step into. If flights slip, it shows certification progress instead.</span></li>
                <li><b>After</b><span><strong>Your Next Flight.</strong> The board moves to people&apos;s phones: explore planned LA routes and join the waitlist for a first ride.</span></li>
              </ol>
            </div>
            <div className="chapter-l reveal">
              <h4>How we&apos;d know it worked.</h4>
              <div className="kpis">
                <div><b>+20 pts</b><span>Angelenos who can explain what Midnight is, by the Opening Ceremony</span></div>
                <div><b>+15 pts</b><span>who&apos;d feel safe riding it, by the end of the Games</span></div>
                <div><b>50K</b><span>waitlist sign-ups by December 2028</span></div>
              </div>
              <div className="pcard">
                <p>$8M budget</p>
                <div className="alloc" aria-label="Budget split: experiential 35%, paid 25%, earned 15%, shared 15%, owned 10%">
                  <i style={{ width: "35%", background: "var(--figure)" }} /><i style={{ width: "25%", background: "var(--sage)" }} /><i style={{ width: "15%", background: "#8a9a7c" }} /><i style={{ width: "15%", background: "#b9b39f" }} /><i style={{ width: "10%", background: "var(--ink-2)" }} />
                </div>
                <div className="legend-l">
                  <span style={{ "--c": "var(--figure)" } as React.CSSProperties}>Experiential 35%</span>
                  <span style={{ "--c": "var(--sage)" } as React.CSSProperties}>Paid 25%</span>
                  <span style={{ "--c": "#8a9a7c" } as React.CSSProperties}>Earned 15%</span>
                  <span style={{ "--c": "#b9b39f" } as React.CSSProperties}>Shared 15%</span>
                  <span style={{ "--c": "var(--ink-2)" } as React.CSSProperties}>Owned 10%</span>
                </div>
              </div>
              <p className="note-l">All activations, routes and partnerships are proposals, not Archer plans.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap next"><Link href="/reborn"><span><small>Next project</small><b>Reborn by Louis Vuitton</b></span><span className="arrow" aria-hidden="true">→</span></Link></div>
    </>
  );
}
