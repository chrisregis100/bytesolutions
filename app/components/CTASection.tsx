import { Button } from "./Button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-linear-to-r from-primary to-secondary px-6 py-16 text-white shadow-2xl sm:px-10">
      <div
        className="absolute left-10 top-10 h-24 w-24 rounded-full bg-white/20 blur-2xl"
        aria-hidden
      />
      <div
        className="absolute right-16 bottom-12 h-32 w-32 rounded-full bg-black/20 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
            Parlons de votre idée
          </span>
          <h2 className="text-balance text-3xl font-semibold md:text-4xl">
            {title}
          </h2>
          <p className="text-lg text-white/85">{description}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* <button className="bg-white text-primary rounded-full w-52 font-bold hover:text-secondary">
            {primaryLabel}
          </button> */}
          {secondaryLabel && secondaryHref ? (
            <Button
              href={secondaryHref}
              size="lg"
              variant="ghost"
              className="text-white hover:text-white"
            >
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
