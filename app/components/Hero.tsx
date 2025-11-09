"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";

const title = "byteSolutions";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-(--light) via-white to-[color-mix(in_srgb,var(--secondary)_10%,white_90%)] pb-28 pt-40">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute right-20 top-10 h-60 w-60 rounded-full bg-primary/15 blur-3xl"
          aria-hidden
        />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-secondary shadow-lg shadow-secondary/15"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Agence digitale
        </motion.span>
        <div className="mt-6 space-y-4">
          <motion.h1
            className="text-balance font-semibold leading-tight text-(--dark)"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.03 }}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              {title.split("").map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  custom={index}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="mt-4 block text-3xl text-secondary sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              Solutions digitales
            </motion.span>
            <motion.span
              className="mt-2 block text-xl text-(--dark-75) sm:text-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6, ease: "easeOut" }}
            >
              pensées pour les humains
            </motion.span>
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-(--dark-75)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          >
            Sites vitrine · Applications sur mesure · IA · UX premium
            <br />
          </motion.p>
        </div>
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
        >
          <Button size="lg">Lancer mon projet</Button>
          <Button variant="outline" size="lg">
            Consultation gratuite
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
