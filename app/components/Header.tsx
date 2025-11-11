"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "L'équipe" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  const isHeroRoute = pathname === "/";

  const backgroundClasses =
    isHeroRoute && !isScrolled
      ? "bg-transparent"
      : "bg-white/85 backdrop-blur-xl shadow-lg shadow-black/5";

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 ${backgroundClasses}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="byteSolutions - retour à l'accueil"
        >
          <Image
            src="/logo-bytesolutions.png"
            alt="Logo byteSolutions"
            width={48}
            height={48}
            className="h-12 w-12 rounded-2xl shadow-lg shadow-secondary/40"
            priority
          />
          <div className="leading-tight">
            <span className="font-semibold uppercase tracking-[0.18em] text-xs text-(--dark-50)">
              byte
            </span>
            <p className="text-lg font-semibold text-(--dark)">Solutions</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 transition-colors ${
                isActive(item.href)
                  ? "bg-secondary text-white"
                  : "text-dark-50 hover:bg-secondary/10 hover:text-dark"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 rounded-full bg-primary px-4 py-2 font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
          >
            Démarrer un projet
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-dark md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="md:hidden"
      >
        <div className="space-y-3 px-4 pb-6 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-secondary text-white"
                  : "bg-white/60 text-dark hover:bg-secondary/10"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-white shadow-lg shadow-primary/25"
          >
            Démarrer un projet
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
