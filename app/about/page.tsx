/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Interests } from "@/components/interests";

export const metadata: Metadata = { title: "About Eva Yang", description: "About Eva Yang: background, experience and life off the clock." };

export default function About() {
  return (
    <>
      <header className="about-hero">
        <div className="wrap">
          <div className="copy">
            <h1>Hello, I&apos;m Eva.</h1>
            <p className="lede">I work where research meets the market: finding out what customers actually want, deciding where a brand should stand, and building the plan that gets it there.</p>
            <p>My background mixes science and business. I studied Food, Nutrition &amp; Health with a Commerce minor at UBC, advised product launches across four markets at Daiya Foods, and led a rebrand for a Vancouver tea shop. Five years of running bilingual channels on Xiaohongshu and Douyin taught me how audiences in North America and China decide what deserves their attention.</p>
          </div>
          <figure><img src="/img/contact.jpg" alt="Eva Yang holding a bouquet against a sunlit wall" width="768" height="1024" /></figure>
        </div>
      </header>

      <section id="experience" style={{background: 'var(--surface)'}}>
        <div className="wrap">
          <div className="xp">
            <h2>From science<br />to strategy</h2>
            <ol>
              <li><span className="when">2026 – 2027</span><div><h4>MS Marketing, Analytics</h4><div className="org">USC Marshall School of Business</div><p>VP, Student Advising Committee. Marketing Case Competition semi-finalist (Fluo).</p></div></li>
              <li><span className="when">2025 – now</span><div><h4>Business Research Assistant</h4><div className="org">UBC Sauder School of Business</div><p>Family business succession study, being written up as a Harvard Business case study.</p></div></li>
              <li><span className="when">2025</span><div><h4>Marketing &amp; Branding Lead</h4><div className="org">Nü Tea (Top Gain Kao Ltd.), Vancouver</div></div></li>
              <li><span className="when">2024 – 2025</span><div><h4>Regulatory Affairs Intern</h4><div className="org">Daiya Foods, Burnaby</div><p>Advised product launches across Canada, the U.S., the EU and Southeast Asia. Automated a 50,000+ data point allergen and certification database, cutting SKU review time 3x.</p></div></li>
              <li><span className="when">2020 – now</span><div><h4>Digital Content Creator</h4><div className="org">Xiaohongshu &amp; Douyin</div></div></li>
              <li><span className="when">2020 – 2026</span><div><h4>BSc Food, Nutrition &amp; Health, Commerce minor</h4><div className="org">University of British Columbia</div></div></li>
            </ol>
          </div>
          <div className="skills">
            <div><h4>Research &amp; analytics</h4><p>Survey design, in-depth interviews, regression modeling, thematic analysis, data visualization. Python, Stata, Excel, Qualtrics, NVivo</p></div>
            <div><h4>Marketing tools</h4><p>HubSpot, Salesforce, Google Analytics, Google Trends, Figma, Canva</p></div>
            <div><h4>Certifications</h4><p>Google Digital Marketing &amp; E-commerce, PwC Management Consulting simulation, LVMH Insider, Storytelling for Digital Marketing (Santander)</p></div>
          </div>
        </div>
      </section>

      <Interests />
    </>
  );
}
