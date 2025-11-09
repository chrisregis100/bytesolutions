import { Metadata } from "next";
import Image from "next/image";
import { Section } from "../components/Section";
import { ValueCard } from "../components/ValueCard";

export const metadata: Metadata = {
  title: "À propos · ByteSolutions",
  description:
    "Nous sommes une agence digitale  qui conçoit des expériences web humaines, inclusives et performantes pour les PME du monde entier.",
};

const values = [
  {
    icon: "Heart" as const,
    color: "primary" as const,
    title: "Humain d'abord",
    description:
      "Nos décisions s'appuient sur la recherche utilisateur et l'empathie pour créer des expériences qui donnent envie de revenir.",
  },
  {
    icon: "BrainCircuit" as const,
    color: "secondary" as const,
    title: "Technologie utile",
    description:
      "Nous sélectionnons les outils et IA qui apportent une vraie valeur, pas des gadgets difficilement maintenables.",
  },
  {
    icon: "Scale" as const,
    color: "accent" as const,
    title: "Impact mesurable",
    description:
      "Nos livrables incluent des indicateurs de succès pour suivre votre ROI et itérer rapidement.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-24">
      <Section
        align="left"
        eyebrow="Notre ADN"
        title="Une agence humaine, connectée au monde"
        description="Nous développons des solutions digitales intuitives, performantes et accessibles. Nous aidons les entrepreneurs à transformer leurs idées en produits viables, avec une attention particulière à l’expérience utilisateur et à l’intelligence artificielle."
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-left text-lg text-(--dark-75)">
            <p>
              ByteSolutions est née d’une conviction : l’innovation numérique
              doit être inclusive et avoir un impact concret. Nous opérons 100%
              en remote, avec une équipe panafricaine ouverte sur le monde,
              habituée à collaborer avec des PME en Europe, en Amérique du Nord
              et en Afrique.
            </p>
            <p>
              Nous combinons stratégie, design, développement et intégration IA
              dans une même équipe. Chaque projet bénéficie d’un accompagnement
              produit, de prototypes interactifs et d’un plan de déploiement sur
              mesure.
            </p>
            <ul className="grid gap-3 text-base">
              <li className="rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                +15 projets livrés en 2024
              </li>
              <li className="rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                Temps de réponse moyen : 24h
              </li>
              <li className="rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                Approche multilingue : français, anglais, espagnol
              </li>
            </ul>
          </div>
          <div className="relative h-full rounded-4xl bg-linear-to-br from-(--secondary-25) via-white to-(--primary-25) p-1">
            <div className="rounded-[30px] bg-white p-6 shadow-2xl">
              <Image
                src="/images/project-edu.svg"
                alt="Équipe byteSolutions en atelier"
                width={640}
                height={480}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Nos piliers"
        title="Chaque collaboration se construit sur trois axes"
        description="Nous combinons empathie, rigueur technologique et pilotage business pour livrer des solutions vraiment utiles."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              color={value.color}
              title={value.title}
            >
              {value.description}
            </ValueCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
