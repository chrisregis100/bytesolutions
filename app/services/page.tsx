import { Metadata } from "next";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { ServiceCard } from "../components/ServiceCard";
import { ValueCard } from "../components/ValueCard";

export const metadata: Metadata = {
  title: "Nos services · byteSolutions",
  description:
    "Sites vitrine, applications web sur mesure, ateliers d’idéation et intégrations IA. Découvrez l’offre byteSolutions conçue pour les PME ambitieuses.",
};

const services = [
  {
    icon: "Globe" as const,
    title: "Sites vitrine premium",
    description:
      "Création ou refonte responsive, SEO-ready, livrée en 7 à 14 jours avec un système de gestion facile.",
    link: "/contact?service=vitrine",
  },
  {
    icon: "Code2" as const,
    title: "Applications web sur mesure",
    description:
      "Du prototype au produit complet : MVP, SaaS, plateformes métiers avec une stack moderne et sécurisée.",
    link: "/contact?service=app",
  },
  {
    icon: "Lightbulb" as const,
    title: "Ateliers porteurs d’idées",
    description:
      "Coaching stratégique, définition du MVP, priorisation et maquette interactive pour convaincre vos parties prenantes.",
    link: "/contact?service=conseil",
  },
  {
    icon: "Brain" as const,
    title: "Intégrations IA utiles",
    description:
      "Chatbots, personnalisation, automatisation avec suivi des KPIs et respect de vos contraintes RGPD.",
    link: "/contact?service=ia",
  },
];

const process = [
  {
    icon: "Lightbulb" as const,
    color: "secondary" as const,
    title: "Découverte",
    description:
      "Atelier de cadrage, cartographie des besoins et définition des indicateurs de succès.",
  },
  {
    icon: "BrainCircuit" as const,
    color: "primary" as const,
    title: "Co-conception",
    description:
      "UX research, prototypes cliquables, guidelines d’accessibilité et tests utilisateurs ciblés.",
  },
  {
    icon: "Scale" as const,
    color: "accent" as const,
    title: "Développement & lancement",
    description:
      "Stack moderne (Next.js, Node, IA) avec QA continue, documentation et plan de transfert.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-24">
      <Section
        eyebrow="Nos services"
        title="Des solutions prêtes à scaler"
        description="Chaque mission est pilotée par un lead dédié et s’appuie sur une équipe pluridisciplinaire."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Méthodologie"
        title="Un accompagnement end-to-end"
        description="Notre approche met l’humain au centre, avec des sprints courts, des feedbacks fréquents et des livrables actionnables."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {process.map((step) => (
            <ValueCard
              key={step.title}
              icon={step.icon}
              color={step.color}
              title={step.title}
            >
              {step.description}
            </ValueCard>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-lg text-(--dark-75)">
            Vous avez une idée ou un besoin précis ? Préparez un court briefing
            et nous revenons vers vous avec un plan d’action sous 48h.
          </p>
          <Button href="/contact" size="lg">
            Démarrer un projet
          </Button>
        </div>
      </Section>
    </div>
  );
}
