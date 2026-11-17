import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CopyEmail } from "@/components/copy-email";

export const EMAIL = "yangeva0616@gmail.com";

// Pill buttons on the sage band: shadcn's button, restyled to the band
export const bandButton = (solid = false) =>
  cn(
    buttonVariants({ variant: "outline", size: "lg" }),
    "h-auto rounded-full px-[22px] py-3 text-[15px] font-semibold border-[rgba(244,242,232,.55)] bg-transparent text-[var(--on-band)] hover:bg-[rgba(244,242,232,.12)] hover:text-[var(--on-band)] hover:border-[var(--on-band)] dark:bg-transparent dark:border-[rgba(244,242,232,.55)] focus-visible:ring-[rgba(244,242,232,.5)]",
    solid && "bg-[var(--on-band)] text-[#23251f] border-[var(--on-band)] hover:bg-[var(--on-band)] hover:text-[#23251f] dark:bg-[var(--on-band)]",
  );

export function Band() {
  return (
    <>
      <section className="band" id="contact">
        <div className="wrap">
          <h2 className="reveal">Let&apos;s talk.</h2>
          <p className="lede">Open to brand strategy, marketing and consumer insights roles.</p>
          <div className="actions">
            <a className={bandButton(true)} href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <CopyEmail className={bandButton()} email={EMAIL} />
            <a className={bandButton()} href="https://www.linkedin.com/in/evayang02/" target="_blank" rel="noopener">LinkedIn ↗</a>
          </div>
        </div>
      </section>
      <footer><div className="wrap"><span>© 2026 Eva (Fan) Yang</span><span>Los Angeles · Vancouver</span></div></footer>
    </>
  );
}
