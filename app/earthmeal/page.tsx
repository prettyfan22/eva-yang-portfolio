import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Earthmeal Earth Day", description: "An Earth Day event and social campaign that turns a sunrise breakfast on campus into first orders for an early-stage oat brand." };

export default function Earthmeal() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link className="back" href="/#work">← All work</Link>
          <h1>Grab Some Earth</h1>
          <p className="lede">An Earth Day event and social campaign for Earthmeal, a founder-led superfood oat brand, built to turn one sunrise breakfast on campus into first orders.</p>
          <dl className="meta"><div><dt>Context</dt><dd>Earthmeal brief with the founder · GSBA 528 Marketing Management</dd></div><div><dt>My part</dt><dd>The live social plan for Earth Day itself</dd></div><div><dt>Timeline</dt><dd>Fall 2026 · team of six · $5,000 budget</dd></div></dl>
        </div>
      </header>

      <section id="earthmeal">
        <div className="wrap story">
          <div className="story-text">
            <p>Earthmeal makes plant-based overnight oats that taste like dessert. With $5,000 and an early-stage brand, awareness alone wouldn&apos;t pay off, so we built every touchpoint around one goal: a first 5-pack order.</p>
            <p>Our event is a slow sunrise breakfast for USC grad students on April 22: a plogging run, a tasting flight, a planting bar and the founder&apos;s talk. I planned how the morning plays out on social, from the first Story at setup to the evening highlight Reel.</p>
            <div className="stats">
              <div><b>100</b><span>new customers targeted by May 6</span></div>
              <div><b>$5K</b><span>for the event and campaign, samples excluded</span></div>
              <div><b>20%</b><span>off a first 5-pack with GRABSOMEEARTH</span></div>
              <div><b>80%</b><span>of event waste kept out of landfill</span></div>
            </div>
          </div>
          <div className="story-media">
            <div className="chapter-l reveal">
              <h4>Feed yourself. Feed the earth.</h4>
              <div className="pcard feature">
                <h5>Grab Some Earth</h5>
                <p className="tagline">Earth Day, Thursday April 22 · 7:00 to 10:30am · beside USC Marshall</p>
                <p>A slow sunrise breakfast where you plog-run, taste the planet, plant a little California, and go home with tomorrow&apos;s breakfast already made. The name is a phrase Earthmeal already uses, so it felt on brand from the first post.</p>
                <ul className="chips"><li>Do: plog, plant, listen</li><li>Taste: the ingredient map flight</li><li>Take home: a full pouch and a planted pot</li></ul>
              </div>
            </div>
            <div className="chapter-l reveal">
              <h4>My part: the morning, live.</h4>
              <p className="bigq">Every post pairs a moment of the morning with <em>a number we measured</em>, so the sustainability story stays credible and sets up the recap.</p>
              <ol className="timeline-l">
                <li><b>6:30</b><span>Behind-the-scenes Story from setup: sunrise over the tent, the run club stretching. &ldquo;we&apos;re up. are you?&rdquo;</span></li>
                <li><b>7:00</b><span>The plogging run in Stories with a live litter counter; fast-cut TikTok of runners grabbing litter.</span></li>
                <li><b>8:00</b><span>The &ldquo;dessert or superfood?&rdquo; blind taste test, continuing the creator format from the pre-event weeks, plus a flavour poll.</span></li>
                <li><b>8:15</b><span>TikTok LIVE of the founder&apos;s &ldquo;food as medicine&rdquo; talk, so followers who can&apos;t come can still join.</span></li>
                <li><b>9:30</b><span>Story with a link sticker to the offer, and a live donation counter for the founder&apos;s Amazon nonprofit.</span></li>
                <li><b>10:30</b><span>Thank-you Story tagging every partner, with the zero-waste result. One highlight Reel and TikTok that evening.</span></li>
              </ol>
            </div>
            <div className="chapter-l reveal">
              <h4>Turning tasters into customers.</h4>
              <div className="pgrid">
                <div className="pcard"><h5>UGC prompt</h5><p>Film a friend&apos;s blind taste test with #grabsomeearth. Posting enters you to win a month of Earthmeal, shown at the order table.</p></div>
                <div className="pcard"><h5>The offer</h5><p>Order at the table before 10:30 for a bonus pouch; 20% off a first 5-pack through May 6.</p></div>
                <div className="pcard"><h5>The follow-up</h5><p>Planted pots become a #sproutcheck challenge, and three emails land on day 1, 7 and 13.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap next"><Link href="/airbnb"><span><small>Next project</small><b>Airbnb</b></span><span className="arrow" aria-hidden="true">→</span></Link></div>
    </>
  );
}
