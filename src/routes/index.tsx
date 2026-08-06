import { createFileRoute } from "@tanstack/react-router";

const designs = [
  {
    id: 1,
    title: "Diseño Clásico",
    description: "Elegancia atemporal para tu gran día.",
  },
  {
    id: 2,
    title: "Diseño Moderno",
    description: "Estilo limpio y contemporáneo.",
  },
  {
    id: 3,
    title: "Diseño Floral",
    description: "Romance natural en cada detalle.",
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CATALOGO invitaciones digitales para bodas" },
      {
        name: "description",
        content:
          "Catálogo mobile-first de invitaciones digitales para bodas. Explora diseños clásicos, modernos y florales.",
      },
      {
        property: "og:title",
        content: "CATALOGO invitaciones digitales para bodas",
      },
      {
        property: "og:description",
        content:
          "Catálogo mobile-first de invitaciones digitales para bodas. Explora diseños clásicos, modernos y florales.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background px-5 py-8 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <h1 className="font-display text-4xl font-semibold leading-none tracking-tight text-foreground sm:text-5xl">
          CATALOGO
        </h1>
        <span className="mt-2 block font-display text-xl font-medium text-primary sm:text-2xl">
          invitaciones digitales para bodas
        </span>
        <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
          Elige el diseño que mejor cuente tu historia de amor.
        </p>
      </header>

      <section
        aria-label="Galería de diseños"
        className="mx-auto flex max-w-md flex-col gap-8"
      >
        {designs.map((design) => (
          <article
            key={design.id}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div className="aspect-[9/16] w-full bg-muted">
              <iframe
                src="PEGAR_LINK_DE_DRIVE_AQUI"
                title={design.title}
                className="h-full w-full border-0"
                allow="autoplay"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h2 className="font-display text-xl font-medium text-card-foreground">
                {design.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {design.description}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
