import { cn } from "@/lib/utils";
import { BrainCircuit, Heart, LucideIcon, Scale } from "lucide-react";
import { ReactNode } from "react";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  BrainCircuit,
  Scale,
};

type ValueCardProps = {
  icon: keyof typeof iconMap;
  color?: "primary" | "secondary" | "accent";
  title: string;
  children: ReactNode;
};

export function ValueCard({
  icon,
  color = "primary",
  title,
  children,
}: ValueCardProps) {
  const Icon = iconMap[icon] ?? Heart;
  return (
    <article
      className={cn(
        "card-elevated relative h-full rounded-3xl border bg-white/95 p-6 text-left shadow-2xl transition-transform hover:-translate-y-1",
        color === "primary" && "shadow-primary/15",
        color === "secondary" && "shadow-secondary/15",
        color === "accent" && "shadow-(--accent)/15"
      )}
    >
      <div className="mb-5 inline-flex items-center justify-center rounded-2xl bg-secondary/10 p-3 text-secondary">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="text-xl font-semibold text-(--dark)">{title}</h3>
      <p className="mt-4 text-base text-(--dark-75)">{children}</p>
    </article>
  );
}
