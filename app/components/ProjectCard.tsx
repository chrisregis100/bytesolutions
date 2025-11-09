import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  sector: string;
  badges: string[];
  image: string;
  href?: string;
  className?: string;
};

export function ProjectCard({
  title,
  sector,
  badges,
  image,
  href,
  className,
}: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="relative">
        <Image
          src={image}
          alt={`${title} – projet ${sector}`}
          width={640}
          height={480}
          className="h-48 w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-secondary shadow"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-(--dark-50)">
          {sector}
        </span>
        <h3 className="text-xl font-semibold text-(--dark)">{title}</h3>
        <p className="mt-auto text-sm text-(--dark-75)">
          Projet livré avec un focus sur l&apos;expérience utilisateur et la
          performance.
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "card-elevated group flex h-full flex-col overflow-hidden rounded-3xl bg-white/95 text-left transition-transform hover:-translate-y-1",
          className
        )}
        aria-label={`${title} (${sector})`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "card-elevated group flex h-full flex-col overflow-hidden rounded-3xl bg-white/95 text-left",
        className
      )}
    >
      {cardContent}
    </div>
  );
}
