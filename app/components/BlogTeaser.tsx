import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface BlogTeaserProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href?: string;
}

export function BlogTeaser({
  title,
  excerpt,
  date,
  category,
  href = "/blog",
}: BlogTeaserProps) {
  return (
    <Link
      href={href}
      className="card-elevated group flex h-full flex-col rounded-3xl bg-white/95 p-6 text-left transition-transform hover:-translate-y-1"
      aria-label={`Lire ${title}`}
    >
      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.3em] text-(--dark-50)">
        <span>{category}</span>
        <span>{date}</span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold leading-tight text-(--dark)">
        {title}
      </h3>
      <p className="mt-4 flex-1 text-base text-(--dark-75)">{excerpt}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
        Lire l&apos;article
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
