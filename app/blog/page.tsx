import { Metadata } from "next";
import { BlogTeaser } from "../components/BlogTeaser";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Blog · byteSolutions",
  description:
    "Analyses, retours d’expérience et conseils pratiques sur l’IA, le design, le développement et la croissance produit pour les PME.",
};

const posts = [
  {
    title: "Comment l’IA améliore l’expérience client",
    excerpt:
      "Les 3 usages concrets pour votre PME et comment démarrer sans dépasser votre budget.",
    date: "5 nov 2025",
    category: "IA",
  },
  {
    title: "Accessibilité web : 5 quick wins",
    excerpt:
      "Nos conseils pour atteindre le niveau WCAG AA dès la phase de conception.",
    date: "22 oct 2025",
    category: "UX",
  },
  {
    title: "Lancer un MVP en 6 semaines",
    excerpt:
      "Notre méthode testée sur 8 projets en 2024 pour valider un marché rapidement.",
    date: "2 oct 2025",
    category: "Produit",
  },
];

export default function BlogPage() {
  return (
    <Section
      eyebrow="Blog"
      title="On partage ce qu’on maîtrise"
      description="Passez du buzzword aux actions concrètes : nos experts décryptent la tech pour les équipes business."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogTeaser key={post.title} {...post} />
        ))}
      </div>
    </Section>
  );
}
