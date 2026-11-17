"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type ZoomImageProps = React.ComponentProps<"img"> & { src: string; alt: string };

// A work sample that opens full size in a shadcn dialog
export function ZoomImage({ className, style, alt, ...img }: ZoomImageProps) {
  return (
    <Dialog>
      <DialogTrigger className={`zoom ${className ?? ""}`} style={style} aria-label={`Enlarge: ${alt}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={alt} {...img} />
      </DialogTrigger>
      <DialogContent className="w-auto max-w-[min(94vw,1200px)] gap-0 bg-transparent p-0 ring-0 sm:max-w-[min(94vw,1200px)] [&>[data-slot=dialog-close]]:bg-[rgba(12,13,11,.6)] [&>[data-slot=dialog-close]]:text-white">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img.src} alt={alt} className="max-h-[88vh] w-auto rounded-[var(--r-lg)]" />
      </DialogContent>
    </Dialog>
  );
}
