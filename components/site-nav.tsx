"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteNav() {
  const path = usePathname();
  const onAbout = path === "/about";
  return (
    <nav aria-label="Main">
      <div className="wrap">
        <Link className="brand" href="/">Eva Yang</Link>
        <ul>
          <li><Link className="pill" href="/#work" aria-current={!onAbout && path !== "/" ? "page" : undefined}>Work</Link></li>
          <li><Link className="pill" href="/about" aria-current={onAbout ? "page" : undefined}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
}
