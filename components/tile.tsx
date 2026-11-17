"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const MotionLink = motion.create(Link);
const ease = [0.2, 0.7, 0.2, 1] as const;

type TileProps = { href: string; title: string; tags: string; flag?: string; children: React.ReactNode; artClass?: string };

// A project card: on hover the artwork drifts larger and the caption lifts
export function Tile({ href, title, tags, flag, children, artClass = "" }: TileProps) {
  return (
    <MotionLink className="tile reveal" href={href} initial="rest" whileHover="hover" whileFocus="hover" animate="rest">
      <motion.span className={`art ${artClass}`} variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }} transition={{ duration: 0.9, ease }}>
        {children}
      </motion.span>
      {flag && <Badge className="flag h-auto rounded-full border-0 bg-[var(--f-lime)] px-3 py-1.5 text-[13px] font-semibold text-[#10120e]">{flag}</Badge>}
      <motion.span className="cap" variants={{ rest: { y: 0 }, hover: { y: -6 } }} transition={{ duration: 0.5, ease }}>
        <b>{title}</b>
        <span>{tags}</span>
      </motion.span>
    </MotionLink>
  );
}
