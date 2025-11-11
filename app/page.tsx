import { CTASection } from "./components/CTASection";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { ServiceCard } from "./components/ServiceCard";
import { TeamCard } from "./components/TeamCard";
import { ValueCard } from "./components/ValueCard";

const valueHighlights = [
  {
    icon: "Heart" as const,
    color: "primary" as const,
    title: "Humain d'abord",
    description:
      "Des interfaces accessibles et inclusives, testées auprès de vrais utilisateurs, pour générer de l'engagement durable.",
  },
  {
    icon: "BrainCircuit" as const,
    color: "secondary" as const,
    title: "IA utile",
    description:
      "Automatisation, chatbots et personnalisation propulsés par l'IA pour des gains business mesurables.",
  },
  {
    icon: "Scale" as const,
    color: "accent" as const,
    title: "Prix justes",
    description:
      "Des offres modulaires et transparentes pour avancer vite, même avec un budget maîtrisé.",
  },
];

const featuredServices = [
  {
    icon: "Globe" as const,
    title: "Sites vitrine",
    description:
      "Une présence premium en 7 jours pour raconter votre histoire et convertir.",
    link: "/contact?service=vitrine",
  },
  {
    icon: "Code2" as const,
    title: "Apps sur mesure",
    description:
      "De l'idée au MVP, nous construisons des outils métier performants.",
    link: "/contact?service=app",
  },
  {
    icon: "Lightbulb" as const,
    title: "Conseil idées",
    description:
      "Des ateliers gratuits pour clarifier votre vision et prioriser les premières fonctionnalités.",
    link: "/contact?service=conseil",
  },
  {
    icon: "Brain" as const,
    title: "Intégration IA",
    description:
      "Chatbots, recommandations et automatisation pour booster l'expérience client.",
    link: "/contact?service=ia",
  },
];

const showcaseProjects = [
  {
    title: "Clinique Santé Plus",
    sector: "Santé",
    badges: ["IA", "UX Premium"],
    image: "/images/project-clinic.svg",
    href: "/portfolio",
  },
  {
    title: "AfrikTrade B2B",
    sector: "Commerce",
    badges: ["MVP", "Product Design"],
    image: "/images/project-trade.svg",
    href: "/portfolio",
  },
  {
    title: "EduTech Nova",
    sector: "Éducation",
    badges: ["Accessibilité", "Web App"],
    image: "/images/project-edu.svg",
    href: "/portfolio",
  },
];

const teamPreview = [
  {
    name: "Régis. A. R. KIKI",
    role: "Engineering",
    skill: "Full-Stack & IA",
    image: "/images/team-jean.svg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Obed S. AGBOHOUN",
    role: "Engineering",
    skill: "Full-Stack & UX",
    image: "/images/team-aicha.svg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Fidelien ..",
    role: "Backend Developer",
    skill: "Backend Development",
    image: "/images/team-lucas.svg",
    linkedin: "https://linkedin.com",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Valeur ajoutée"
        title="Une équipe africaine connectée au monde"
        description="Nous apportons une expertise internationale avec une sensibilité locale. Notre méthodologie met les utilisateurs au cœur du processus pour lancer des produits utiles et mémorables."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {valueHighlights.map((value) => (
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

      <Section
        eyebrow="Nos expertises"
        title="Des solutions digitales pensées pour convertir"
        description="Du branding à l'intégration IA, notre équipe couvre chaque étape pour accélérer votre croissance."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Nos réalisations"
        title="Des projets en production qui prouvent notre impact"
        description="Chaque livrable est pensé pour performer, être accessible et facile à faire évoluer."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {showcaseProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="L'équipe"
        title="On code, design et conseille avec le sourire"
        description="byteSolutions, ce sont des profils complémentaires pour propulser vos idées : devs full-stack, designers, spécialistes IA et chefs de projet."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {teamPreview.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Prêts à co-créer une solution digitale utile et rentable ?"
        description="Réservez un temps d'échange gratuit avec nos experts pour clarifier vos objectifs et obtenir une roadmap concrète."
        primaryLabel="Réserver un appel"
        primaryHref="/contact"
        secondaryLabel="Réserver un appel"
        secondaryHref="/services"
      />
    </>
  );
}
