import type { Metadata } from "next";
import Link from "next/link";
import { ZoomImage } from "@/components/zoom-image";

export const metadata: Metadata = { title: "Nü Tea Rebrand", description: "Turning a neighbourhood tea shop that looked like everyone else into the one known for fresh, local ingredients." };

export default function Nutea() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link className="back" href="/#work">← All work</Link>
          <h1>Repositioning Nü Tea</h1>
          <p className="lede">Turning a neighbourhood tea shop that looked like everyone else into the one known for fresh, local ingredients.</p>
          <dl className="meta"><div><dt>Role</dt><dd>Marketing &amp; Branding Lead</dd></div><div><dt>When</dt><dd>2025 · Vancouver</dd></div><div><dt>Focus</dt><dd>Brand audit · Segmentation · Promotions</dd></div></dl>
        </div>
      </header>

      <section id="nutea">
        <div className="wrap story">
          <div className="story-text">
            <p>Vancouver&apos;s tea market is crowded, and Nü Tea looked like everyone else. As its Marketing &amp; Branding Lead in 2025, I ran a brand audit and segmented its customers, then repositioned the shop around what set it apart: fresh, clean ingredients from trusted local suppliers.</p>
            <p>I briefed international designers on the new identity, built a seasonal promotion calendar from the segmentation, and ran bilingual campaigns on Instagram and Xiaohongshu for the key segments.</p>
            <div className="stats">
              <div><b>+18%</b><span>Sales from the seasonal promotion strategy</span></div>
              <div><b>+11%</b><span>Average order value</span></div>
              <div><b>+1,300%</b><span>Social views</span></div>
              <div><b>+933%</b><span>Shares</span></div>
            </div>
            <a className="link-more" href="https://www.instagram.com/nutea_kerrisdale/" target="_blank" rel="noopener">See Nü Tea on Instagram ↗</a>
          </div>
          <div className="story-media">
            <ZoomImage className="reveal" src="/img/nutea-bags.jpg" alt="Nü Tea identity on cups and tote bags in white and deep green" loading="lazy" width="1098" height="700" />
            <div className="pair reveal">
              <ZoomImage style={{'--ar': '0.7505'} as React.CSSProperties} src="/img/nutea-mango.jpg" alt="Mango Cheese seasonal drink poster" loading="lazy" width="692" height="922" />
              <ZoomImage style={{'--ar': '0.8000'} as React.CSSProperties} src="/img/nutea-strawberry.jpg" alt="Strawberry Milk series poster" loading="lazy" width="648" height="810" />
            </div>
            <ZoomImage className="reveal" src="/img/nutea-menu.jpg" alt="Nü Tea menu: few categories, with icons for customizations" loading="lazy" width="1100" height="707" />
            <div className="pair reveal">
              <ZoomImage style={{'--ar': '1.7514'} as React.CSSProperties} src="/img/nutea-loyalty.jpg" alt="Nü Tea loyalty stamp card" loading="lazy" width="916" height="523" />
              <ZoomImage style={{'--ar': '1.7611'} as React.CSSProperties} src="/img/nutea-event.jpg" alt="Nü Tea event and catering card" loading="lazy" width="914" height="519" />
            </div>
            <ZoomImage className="reveal" src="/img/nutea-xhs.jpg" alt="Nü Tea Xiaohongshu posts: the rebranding day celebration and two seasonal drink launches" loading="lazy" width="1200" height="506" />
          </div>
        </div>
      </section>

      <div className="wrap next"><Link href="/channels"><span><small>Next project</small><b>Audience lab</b></span><span className="arrow" aria-hidden="true">→</span></Link></div>
    </>
  );
}
