import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TeamCardProps = {
  name: string;
  role: string;
  skill: string;
  image: string;
  linkedin?: string;
  className?: string;
};

export function TeamCard({
  name,
  role,
  skill,
  image,
  linkedin,
  className,
}: TeamCardProps) {
  return (
    <article
      className={cn(
        "card-elevated rounded-3xl bg-white/95 p-6 text-left",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={`${name}, ${role}`}
          width={480}
          height={540}
          className="h-64 w-full object-cover"
          priority={false}
        />
        {linkedin ? (
          <Link
            href={linkedin}
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-secondary/25"
            aria-label={`LinkedIn de ${name}`}
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>
        ) : null}
      </div>
      <div className="mt-6 space-y-2">
        <h3 className="text-xl font-semibold text-(--dark)">{name}</h3>
        <p className="text-sm font-medium uppercase tracking-wide text-(--dark-50)">
          {role}
        </p>
        <p className="text-sm text-(--dark-75)">{skill}</p>
      </div>
    </article>
  );
}
