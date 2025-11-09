import { ContactForm } from "@/app/components/ContactForm";
import { Metadata } from "next";
import { Section } from "../components/Section";

export const metadata: Metadata = {
  title: "Contact · byteSolutions",
  description:
    "Parlez-nous de votre projet digital. Première consultation offerte et réponse sous 24 heures.",
};

export default function ContactPage() {
  return (
    <Section
      align="left"
      eyebrow="Contact"
      title="Parlez-nous de votre projet"
      description="Notre équipe répond sous 24h. En prime, nous offrons une séance de cadrage gratuite pour clarifier vos besoins."
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <ContactForm />
          <p className="mt-6 text-sm text-(--dark-75)">
            Première consultation offerte. Réponse sous 24h.
          </p>
        </div>
        <div className="rounded-3xl bg-white/90 p-8 shadow-lg shadow-secondary/15">
          <h3 className="text-xl font-semibold text-(--dark)">
            Contactez-nous
          </h3>
          <dl className="mt-6 space-y-4 text-base text-(--dark-75)">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-(--dark-50)">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:contact@bytesolutions.bj"
                  className="text-primary underline"
                >
                  contact@bytesolutions.bj
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-(--dark-50)">
                WhatsApp
              </dt>
              <dd className="mt-1">
                <a
                  href="https://wa.me/22900000000"
                  className="text-primary underline"
                >
                  +229 00 00 00 00
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-(--dark-50)">
                Localisation
              </dt>
              <dd className="mt-1">100% remote — basé à Cotonou, Bénin</dd>
            </div>
          </dl>
          <div className="mt-6 flex gap-4">
            <a
              href="https://linkedin.com"
              className="inline-flex items-center rounded-full bg-secondary/15 px-4 py-2 text-sm font-semibold text-secondary"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              className="inline-flex items-center rounded-full bg-secondary/15 px-4 py-2 text-sm font-semibold text-secondary"
              aria-label="X Twitter"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
