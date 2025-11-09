"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-(--light) via-white to-[color-mix(in_srgb,var(--secondary)_12%,white_88%)] pb-28 pt-36">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/4 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-secondary/18 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute right-20 top-32 h-72 w-72 rounded-full bg-primary/18 blur-3xl"
          aria-hidden
        />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="mt-6 text-balance text-4xl font-semibold leading-tight text-(--dark) sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Déployez votre solution digitale pensée pour les humains
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg text-(--dark-75)"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          >
            Nous créons des sites vitrine, applications web et intégrations IA
            qui combinent performance, accessibilité et design premium.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          >
            <Button size="sm">Discutons de votre projet</Button>
            <Button variant="outline" size="sm">
              Demander un audit gratuit
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex flex-1 justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-xl">
            <div
              className="absolute -inset-6 rounded-4xl bg-linear-to-r from-secondary/20 via-transparent to-primary/20 blur-2xl"
              aria-hidden
            />
            <Image
              src="/images/hero-collaboration.svg"
              alt="Équipe byteSolutions collaborant sur une solution digitale"
              width={640}
              height={480}
              className="w-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
