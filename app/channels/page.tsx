import type { Metadata } from "next";
import Link from "next/link";
import { ZoomImage } from "@/components/zoom-image";

export const metadata: Metadata = { title: "Audience Lab", description: "Testing what audiences respond to, on my own bilingual channels." };

export default function Channels() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <Link className="back" href="/#work">← All work</Link>
          <h1>Audience lab</h1>
          <p className="lede">Testing what audiences respond to, on my own bilingual channels.</p>
          <dl className="meta"><div><dt>Role</dt><dd>Creator &amp; strategist, Eva爱喝美式</dd></div><div><dt>When</dt><dd>2020 – now</dd></div><div><dt>Platforms</dt><dd>Douyin · Xiaohongshu</dd></div></dl>
        </div>
      </header>

      <section id="channels">
        <div className="wrap story">
          <div className="story-text">
            <p>Since 2020 I&apos;ve run bilingual channels on Douyin and Xiaohongshu as Eva爱喝美式, and I use them as a lab. Each post tests a hook, a format or a segment, and the analytics show what earns attention with Gen Z audiences in China and North America.</p>
            <p>Relatable student stories travel furthest on Douyin, where one video passed 12 million views. On Xiaohongshu, practical city guides and restaurant reviews get saved and shared, and that audience has brought in 30+ brand partnerships.</p>
            <div className="stats">
              <div><b>12M+</b><span>Views on one Douyin video</span></div>
              <div><b>300K+</b><span>Likes on Douyin</span></div>
              <div><b>30+</b><span>Brand collaborations on Xiaohongshu</span></div>
              <div><b>14K+</b><span>Likes and saves on Xiaohongshu</span></div>
            </div>
            <a className="link-more" href="https://www.xiaohongshu.com/user/profile/5d670be20000000001002a9d" target="_blank" rel="noopener">See my Xiaohongshu ↗</a>
          </div>
          <div className="story-media">
            <ZoomImage className="reveal" src="/img/douyin-grid.jpg" alt="Douyin channel: five videos with 1.7 million, 12.3 million, 94 thousand, 3 thousand and 14 thousand views" loading="lazy" width="1400" height="398" />
            <div className="pair reveal">
              <ZoomImage style={{'--ar': '0.4600'} as React.CSSProperties} src="/img/douyin.jpg" alt="Douyin video with 12.4 million views" loading="lazy" width="506" height="1100" />
              <ZoomImage style={{'--ar': '0.6280'} as React.CSSProperties} src="/img/rb-montreal.jpg" alt="Xiaohongshu post: three-day Montreal food guide" loading="lazy" width="466" height="742" />
            </div>
            <div className="pair reveal">
              <ZoomImage style={{'--ar': '0.5858'} as React.CSSProperties} src="/img/rb-greek.jpg" alt="Xiaohongshu post: Greek skewers restaurant review" loading="lazy" width="444" height="758" />
              <ZoomImage style={{'--ar': '0.5914'} as React.CSSProperties} src="/img/rb-premiere.jpg" alt="Xiaohongshu post from a film premiere in Vancouver" loading="lazy" width="440" height="744" />
            </div>
          </div>
        </div>
      </section>

      <div className="wrap next"><Link href="/research"><span><small>Next project</small><b>Passing the torch</b></span><span className="arrow" aria-hidden="true">→</span></Link></div>
    </>
  );
}
