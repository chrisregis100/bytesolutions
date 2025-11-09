import { cn } from "@/lib/utils";
import {
  Brain,
  Code2,
  Globe,
  Lightbulb,
  LucideIcon,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Code2,
  Lightbulb,
  Brain,
  Sparkles,
};

type ServiceCardProps = {
  icon: keyof typeof iconMap;
  color?: "primary" | "secondary" | "accent" | "dark";
  title: string;
  description: string;
  link: string;
};

export function ServiceCard({
  icon,
  color = "primary",
  title,
  description,
  link,
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Sparkles;
  return (
    <Link
      href={link}
      className={cn(
        "gradient-border flex h-full flex-col rounded-3xl bg-white/90 p-6 text-left transition-transform hover:-translate-y-1",
        color === "primary" && "hover:shadow-lg hover:shadow-primary/20",
        color === "secondary" && "hover:shadow-lg hover:shadow-secondary/20",
        color === "accent" && "hover:shadow-lg hover:shadow-(--accent)/20",
        color === "dark" && "hover:shadow-lg hover:shadow-black/20"
      )}
      aria-label={`${title} - ${description}`}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-(--dark)">{title}</h3>
      <p className="mt-3 flex-1 text-base text-(--dark-75)">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
        Découvrir
        <svg
          aria-hidden
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
