"use client";

import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { useMemo, useState } from "react";
import { Button } from "./Button";

const fields = [
  {
    name: "name",
    label: "Nom et prénom",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email professionnel",
    type: "email",
    required: true,
  },
  {
    name: "company",
    label: "Entreprise",
    type: "text",
    required: false,
  },
  {
    name: "service",
    label: "Service souhaité",
    type: "select" as const,
    required: true,
    options: [
      { value: "", label: "Sélectionnez une option" },
      { value: "vitrine", label: "Site vitrine" },
      { value: "app", label: "Application web" },
      { value: "conseil", label: "Conseil porteur d’idée" },
      { value: "ia", label: "Intégration IA" },
    ],
  },
];

export function ContactForm() {
  const [feedback, setFeedback] = useState(
    "Merci ! Nous revenons vers vous sous 24h."
  );
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const credentials = useMemo(
    () => ({
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    }),
    []
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("bot-field")) {
      return;
    }

    if (
      !credentials.serviceId ||
      !credentials.templateId ||
      !credentials.publicKey
    ) {
      setFeedback(
        "Configuration EmailJS manquante. Ajoutez vos identifiants dans NEXT_PUBLIC_EMAILJS_* pour activer l’envoi."
      );
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await emailjs.send(
        credentials.serviceId,
        credentials.templateId,
        Object.fromEntries(data.entries()),
        {
          publicKey: credentials.publicKey,
        }
      );
      setStatus("success");
      setFeedback("Votre message a bien été envoyé. À très vite !");
      form.reset();
    } catch (error) {
      console.error("EmailJS error", error);
      setStatus("error");
      setFeedback(
        "Une erreur est survenue. Réessayez plus tard ou contactez-nous directement via contact@bytesolutions.bj."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-3xl bg-white/95 p-8 shadow-xl shadow-secondary/10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.type === "select" ? "md:col-span-2" : undefined}
          >
            <label
              htmlFor={field.name}
              className="block text-sm font-semibold text-(--dark)"
            >
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                className="mt-2 w-full rounded-2xl border border-(--dark-25) bg-white px-4 py-3 text-base text-(--dark) focus:border-secondary"
                defaultValue=""
              >
                {field.options?.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.value === ""}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                className="mt-2 w-full rounded-2xl border border-(--dark-25) bg-white px-4 py-3 text-base text-(--dark) focus:border-secondary"
              />
            )}
          </div>
        ))}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-(--dark)"
        >
          Parlez-nous de vos objectifs
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-2xl border border-(--dark-25) bg-white px-4 py-3 text-base text-(--dark) focus:border-secondary"
        />
      </div>
      <input
        type="text"
        name="bot-field"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-(--dark-50)">
          En soumettant ce formulaire, vous acceptez notre politique de
          confidentialité.
        </p>
        <Button
          type="submit"
          size="lg"
          className="sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi…" : "Envoyer ma demande"}
        </Button>
      </div>
      {status !== "idle" ? (
        <div
          role="status"
          aria-live="polite"
          className={cn(
            "rounded-2xl px-4 py-3 text-sm font-medium",
            status === "success" &&
              "bg-[color-mix(in_srgb,var(--secondary)_15%,white_85%)] text-secondary",
            status === "error" &&
              "bg-[color-mix(in_srgb,var(--primary)_15%,white_85%)] text-primary"
          )}
        >
          {feedback}
        </div>
      ) : null}
    </form>
  );
}
