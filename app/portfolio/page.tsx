import { Metadata } from "next";
import { Button } from "../components/Button";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Portfolio · byteSolutions",
  description:
    "Découvrez une sélection de projets signés byteSolutions : santé, éducation, finance, e-commerce, tous pensés pour performer et convertir.",
};

const projects = [
  {
    title: "Clinique Santé Plus",
    sector: "Santé",
    badges: ["IA", "UX Premium"],
    image: "/images/project-clinic.svg",
    href: "/contact",
  },
  {
    title: "AfrikTrade B2B",
    sector: "Commerce",
    badges: ["MVP", "Design System"],
    image: "/images/project-trade.svg",
    href: "/contact",
  },
  {
    title: "EduTech Nova",
    sector: "Éducation",
    badges: ["Accessibilité", "Web App"],
    image: "/images/project-edu.svg",
    href: "/contact",
  },
  {
    title: "Finwise",
    sector: "Finance",
    badges: ["Dashboard", "Automatisation"],
    image: "/images/project-trade.svg",
    href: "/contact",
  },
  {
    title: "OncoCare",
    sector: "Santé",
    badges: ["UX Research", "Branding"],
    image: "/images/project-clinic.svg",
    href: "/contact",
  },
  {
    title: "SolarConnect",
    sector: "Énergie",
    badges: ["IoT", "Application mobile"],
    image: "/images/project-edu.svg",
    href: "/contact",
  },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-24">
      <Section
        eyebrow="Portfolio"
        title="Nos réalisations"
        description="Des projets robustes, maintenables et orientés résultats. Chaque design est testé, chaque fonctionnalité mesurée."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <p className="mt-8 text-center text-base text-(--dark-75)">
          Plus de projets en cours —{" "}
          <a href="/contact" className="text-primary underline">
            contactez-nous
          </a>
        </p>
      </Section>

      <Section
        eyebrow="Approche"
        title="Design, test, itération : notre trio gagnant"
        description="Nous travaillons en cycles courts avec des points d’étape transparents. L’équipe reste mobilisée après le lancement pour itérer sur la base des retours utilisateurs."
      />

      <section className="mx-auto max-w-4xl rounded-4xl bg-white p-10 text-center shadow-2xl">
        <h3 className="text-2xl font-semibold text-(--dark)">
          Un projet à imaginer ?
        </h3>
        <p className="mt-4 text-lg text-(--dark-75)">
          Partagez-nous vos objectifs et nous revenons avec une proposition
          concrète.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" size="lg">
            Planifier une rencontre
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Voir nos services
          </Button>
        </div>
      </section>
    </div>
  );
}
