export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <section className="bg-gradient-to-br from-secondary via-neutral to-black text-secondary-content">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 md:py-32">
          <span className="w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold uppercase text-primary-content shadow-lg">
            ByteSolutions
          </span>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Accélérez vos solutions numériques avec une équipe engagée.
          </h1>
          <p className="max-w-2xl text-lg text-secondary-content/80 md:text-xl">
            Notre palette affirme une identité audacieuse : un rouge vibrant
            pour l&apos;impact, un bleu sarcelle pour la fiabilité et un vert
            lumineux pour l&apos;innovation durable.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="btn btn-primary btn-lg text-primary-content">
              Nous contacter
            </button>
            <button className="btn btn-outline btn-secondary btn-lg">
              Découvrir nos offres
            </button>
          </div>
        </div>
      </section>

      <section className="-mt-16 px-6 pb-16 md:px-0">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              name: "Rouge énergie",
              description:
                "Accent principal pour mettre en avant l'action, les appels à l'engagement et les éléments critiques.",
              className: "bg-primary text-primary-content",
            },
            {
              name: "Bleu confiance",
              description:
                "Idéal pour les sections de fond, les bandeaux et les composants qui inspirent fiabilité et expertise.",
              className: "bg-secondary text-secondary-content",
            },
            {
              name: "Vert innovation",
              description:
                "Couleur accent pour les indicateurs de réussite, les badges produits et les signaux positifs.",
              className: "bg-accent text-accent-content",
            },
          ].map((swatch) => (
            <article
              key={swatch.name}
              className={`rounded-3xl p-6 shadow-xl ring-1 ring-black/5 ${swatch.className}`}
            >
              <h2 className="text-2xl font-semibold">{swatch.name}</h2>
              <p className="mt-4 text-sm opacity-80">{swatch.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-neutral text-neutral-content">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:gap-12">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Une identité cohérente sur tous vos supports
            </h2>
            <p className="text-base opacity-80">
              Le thème DaisyUI est entièrement aligné sur la charte graphique :
              boutons, cartes, notifications et arrière-plans tirent parti des
              variables de couleur pour rester harmonisés.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-3 rounded-3xl bg-base-100 p-6 text-base-content shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-wide text-neutral">
                Palettes
              </span>
              <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary">
                100% style system
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {["#db1d39", "#1daad8", "#000000", "#19b328"].map((hex) => (
                <div key={hex} className="space-y-2 text-center">
                  <div
                    className="h-16 w-full rounded-2xl border border-black/5"
                    style={{ backgroundColor: hex }}
                  />
                  <span className="block text-xs font-semibold">{hex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
