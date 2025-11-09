"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  align = "center",
}: SectionProps) {
  const isCenter = align === "center";
  return (
    <section
      id={id}
      className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-auto max-w-3xl ${
          isCenter ? "text-center" : "text-left"
        }`}
      >
        {eyebrow ? (
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-(--secondary)">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-balance md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-lg text-(--dark-75)">{description}</p>
        ) : null}
      </motion.div>
      {children ? <div className="mt-12">{children}</div> : null}
    </section>
  );
}
