"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [label, setLabel] = useState("Copy email");
  function flash(text: string) {
    setLabel(text);
    setTimeout(() => setLabel("Copy email"), 1600);
  }
  return (
    <Button
      type="button"
      className={className}
      onClick={() => {
        // Fall back to showing the address when the clipboard is blocked
        if (navigator.clipboard) navigator.clipboard.writeText(email).then(() => flash("Copied"), () => flash(email));
        else flash(email);
      }}
    >
      {label}
    </Button>
  );
}
