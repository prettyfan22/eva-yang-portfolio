import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Airbnb Budget Cuts", description: "How a marketing manager explains layoffs and budget cuts without losing the team's trust, using Airbnb's 2020 decisions." };

export default function Airbnb() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link className="back" href="/#work">← All work</Link>
          <h1>Cutting budgets, not trust</h1>
          <p className="lede">How a marketing manager explains layoffs and budget cuts without losing the team, built on Airbnb&apos;s 2020 decisions during COVID-19.</p>
          <dl className="meta"><div><dt>Context</dt><dd>Team presentation · GSBA 542 Communication for Management</dd></div><div><dt>My part</dt><dd>Rebuilding morale and stakeholder trust; the retained employee in our live scene</dd></div><div><dt>Timeline</dt><dd>Fall 2026 · Group 6 · nine minutes</dd></div></dl>
        </div>
      </header>

      <section id="airbnb">
        <div className="wrap story">
          <div className="story-text">
            <p>In 2020 travel collapsed, and Airbnb cut about a quarter of its workforce and most of its performance marketing. Our talk asked the manager&apos;s question: your team has just read the announcement, and you&apos;re about to walk into the room. What do you say first?</p>
            <p>My section covered the people who stayed and everyone else the decision touched. Later I stepped into a short scene as a remaining employee asking the question every smaller team has: are four of us expected to do the work of six?</p>
            <div className="stats">
              <div><b>75%</b><span>of employees stayed and needed a reason to trust the plan</span></div>
              <div><b>$540.5M</b><span>less spent on performance marketing in 2020 than 2019</span></div>
              <div><b>~91%</b><span>of 2020 traffic came from direct or unpaid channels</span></div>
            </div>
          </div>
          <div className="story-media">
            <div className="chapter-l reveal">
              <h4>75% stayed. Now what?</h4>
              <p className="bigq">After layoffs, the people who stay quietly ask two questions: <em>am I next, and what happens to my workload?</em> A manager can explain what&apos;s decided, admit what&apos;s still uncertain, and say when the team will hear more.</p>
            </div>
            <div className="chapter-l reveal">
              <h4>One decision, four audiences.</h4>
              <div className="pgrid two">
                <div className="pcard"><h5>Guests</h5><p>Needed flexibility to cancel trips they could no longer take.</p></div>
                <div className="pcard"><h5>Hosts</h5><p>Worried about losing the booking income they relied on.</p></div>
                <div className="pcard"><h5>Employees</h5><p>Needed clarity about their roles and what would change.</p></div>
                <div className="pcard"><h5>Investors</h5><p>Wanted to see how Airbnb would manage spending.</p></div>
              </div>
            </div>
            <div className="chapter-l reveal">
              <h4>The trust triangle.</h4>
              <div className="pgrid">
                <div className="pcard"><h5>Logic</h5><p>Explain why the decision was made.</p></div>
                <div className="pcard"><h5>Authenticity</h5><p>Be honest about what you can and can&apos;t promise.</p></div>
                <div className="pcard"><h5>Empathy</h5><p>Acknowledge how it lands for the person hearing it.</p></div>
              </div>
              <p className="note-l">Framework from Frei and Morriss, &ldquo;Begin with Trust,&rdquo; Harvard Business Review.</p>
            </div>
            <div className="chapter-l reveal">
              <h4>Don&apos;t ask four people to do the work of six.</h4>
              <ol className="timeline-l">
                <li><b>Stop</b><span>Pause non-essential campaigns, so the smaller team&apos;s calendar actually gets lighter.</span></li>
                <li><b>Continue</b><span>Keep supporting the hosts and guests at the core of the business.</span></li>
                <li><b>Reassign</b><span>Give the remaining work clear owners, then check in one-on-one on what each person can take on.</span></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap next"><Link href="/channels"><span><small>Next project</small><b>Audience lab</b></span><span className="arrow" aria-hidden="true">→</span></Link></div>
    </>
  );
}
