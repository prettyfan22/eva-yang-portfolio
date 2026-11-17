"use client";

import { motion } from "motion/react";

// Each page fades up on arrival. Opacity only, so pinned (sticky) sections keep working mid-transition
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}>
      {children}
    </motion.main>
  );
}
