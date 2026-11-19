/* eslint-disable @next/next/no-img-element */
import { Tile } from "@/components/tile";

export default function Home() {
  return (
    <>
      <header className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <h1>Eva Yang</h1>
              <p className="lede">I turn customer research into <strong>positioning, launch plans and campaigns that move numbers.</strong> MS Marketing (Analytics) at USC Marshall.</p>
            </div>
            <figure>
              <img src="/img/hero.jpg" alt="Eva Yang at a café table in Vancouver" width="825" height="1100" />
            </figure>
          </div>
          <div className="proof">
            <div><b>Semi-finalist</b><span>USC Marshall MSMKT Case Competition, Fluo</span></div>
            <div><b>+18%</b><span>Sales growth from a seasonal strategy at Nü Tea</span></div>
            <div><b>30+</b><span>Small businesses interviewed for UBC Sauder research</span></div>
            <div><b>12M+</b><span>Views across my own bilingual social channels</span></div>
          </div>
        </div>
      </header>

      <section id="work" style={{paddingTop: '0'}}>
        <div className="wrap">
          <div className="work-head">
            <h2>Selected work</h2>
            <p className="lede">From the first interview to the launch plan: a fintech launch at USC, a small-business rebrand in Vancouver, audience strategy on my own channels and qualitative research at the University of British Columbia&apos;s Sauder School of Business.</p>
          </div>
          <div className="tiles">
            <Tile href="/fluo" title="Fluo" tags="Research · Positioning · Business model · Launch plan" flag="Semi-finalist" artClass="fluo-art">
              <span className="fluo-mark" aria-hidden="true">fluo<i>.</i></span>
            </Tile>
            <Tile href="/nutea" title="Nü Tea" tags="Brand audit · Segmentation · Repositioning · Promotions" artClass="logo-art" artStyle={{ background: "#f4f0e6" }} light>
              <img src="/img/logo-nutea.png" alt="" width="759" height="243" />
            </Tile>
            <Tile href="/channels" title="Audience lab" tags="Bilingual content strategy · Douyin · Xiaohongshu" artClass="logo-art icon" artStyle={{ background: "#fbe9eb" }} light>
              <img src="/img/logo-xhs.png" alt="" width="256" height="256" />
            </Tile>
            <Tile href="/research" title="Passing the torch" tags="Qualitative research · UBC Sauder" artClass="logo-art" artStyle={{ background: "#eef1f5" }} light>
              <img src="/img/logo-sauder.png" alt="" width="716" height="174" />
            </Tile>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <h2>What I do</h2>
          <ul className="do-list">
            <li>Customer interviews &amp; surveys</li>
            <li>Positioning &amp; brand strategy</li>
            <li>Go-to-market &amp; launch planning</li>
            <li>Business models &amp; partnerships</li>
            <li>Segmentation &amp; promotions</li>
            <li>Channel strategy, EN &amp; CN</li>
          </ul>
        </div>
      </section>
    </>
  );
}
