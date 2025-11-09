import Image from "next/image";
import Link from "next/link";

const footerNav = [
  {
    title: "Solutions",
    links: [
      { href: "/services", label: "Services" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/about", label: "À propos" },
      { href: "/team", label: "L'équipe" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/contact?service=vitrine", label: "Sites vitrine" },
      { href: "/contact?service=app", label: "Applications web" },
      { href: "/contact?service=ia", label: "IA & Automatisation" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color-mix(in_srgb,var(--dark)_8%,transparent)] bg-(--light)">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="max-w-sm space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="byteSolutions"
            >
              <Image
                src="/logo-bytesolutions.svg"
                alt="Logo byteSolutions"
                width={48}
                height={48}
                className="h-12 w-12 rounded-2xl shadow-lg shadow-secondary/40"
              />
              <div className="leading-tight">
                <span className="font-semibold uppercase tracking-[0.18em] text-xs text-(--dark-50)">
                  byte
                </span>
                <p className="text-lg font-semibold text-(--dark)">Solutions</p>
              </div>
            </Link>
            <p className="text-sm text-[color-mix(in_srgb,var(--dark-75)_85%,white_15%)]">
              Solutions digitales pensées pour les humains. Nous accompagnons
              les PME du monde entier avec des produits utiles, inclusifs et
              performants.
            </p>
            <div className="flex items-center gap-3 text-sm text-(--dark-50)">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                +229 01 52 43 50 63
              </span>
              <span>Réponse sous 24h</span>
            </div>
          </div>

          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-(--dark-50)">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-(--dark-75)">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-[color-mix(in_srgb,var(--dark)_8%,transparent)] pt-6 text-sm text-(--dark-50) sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} ByteSolutions. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-secondary">
              Politique de confidentialité
            </Link>
            <Link href="/legal" className="hover:text-secondary">
              Mentions légales
            </Link>
            <a
              href="https://linkedin.com"
              className="hover:text-secondary"
              aria-label="LinkedIn byteSolutions"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-secondary"
              aria-label="Twitter byteSolutions"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
