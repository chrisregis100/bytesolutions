import { Metadata } from "next";
import { Section } from "../components/Section";
import { TeamCard } from "../components/TeamCard";

export const metadata: Metadata = {
  title: "L'équipe · byteSolutions",
  description:
    "Découvrez l’équipe byteSolutions : développeurs, designers, experts produit et IA qui conçoivent des solutions digitales humaines et performantes.",
};

const teamMembers = [
  {
    name: "Régis KIKI.",
    role: "Lead Developer",
    skill: "Full-Stack · IA générative",
    image: "/images/team-jean.svg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Obed AGBOHOUN.",
    role: "Engineering",
    skill: "Fullstack · Design systems",
    image: "/images/team-aicha.svg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Fidélien FAGNIHOUN.",
    role: "Engineer et Spécialiste IA",
    skill: "LLM · Automatisation",
    image: "/images/team-lucas.svg",
    linkedin: "https://linkedin.com",
  },
];

export default function TeamPage() {
  return (
    <div className="space-y-24">
      <Section
        eyebrow="L'équipe"
        title="Derrière chaque ligne de code, une personne"
        description="Notre force est la diversité. Nous mêlons expertises tech, produit et créativité pour résoudre vos défis business avec le sourire."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Notre culture"
        title="Transparence, pédagogie et long terme"
        description="Nous travaillons dans une logique de partenariat : sessions de demo chaque semaine, documentation claire et transfert de compétences garantis."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white/90 p-6 shadow-lg shadow-secondary/10">
            <h3 className="text-xl font-semibold text-(--dark)">100% remote</h3>
            <p className="mt-3 text-base text-(--dark-75)">
              Présents entre Cotonou, Dakar, Paris et Montréal pour accompagner
              vos équipes sans décalage.
            </p>
          </div>
          <div className="rounded-3xl bg-white/90 p-6 shadow-lg shadow-(--accent)/10">
            <h3 className="text-xl font-semibold text-(--dark)">
              Formation continue
            </h3>
            <p className="mt-3 text-base text-(--dark-75)">
              Veille hebdomadaire, participation à des conférences et partage
              d’outils pour rester à jour.
            </p>
          </div>
          <div className="rounded-3xl bg-white/90 p-6 shadow-lg shadow-primary/10">
            <h3 className="text-xl font-semibold text-(--dark)">
              Partenaires engagés
            </h3>
            <p className="mt-3 text-base text-(--dark-75)">
              Nous co-designons vos produits, du MVP à la roadmap long terme, en
              mettant l’accent sur l’impact humain.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
