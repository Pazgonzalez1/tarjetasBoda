/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";

const designs = [
  {
    id: 1,
    title: "Diseño Simple",
    description: "Elegancia para tu gran día.",
    // Extraemos el ID (1iFI64TtGXoMSHFAlAoTDNL1zrfyYRldq) y usamos este formato:
    videoUrl: "https://drive.google.com/uc?export=download&id=1iFI64TtGXoMSHFAlAoTDNL1zrfyYRldq" 
  },
  {
    id: 2,    
    title: "Diseño Premium",
    description: "Estilo limpio y contemporáneo. Verde oliva, blanco y negro",
    videoUrl: "https://drive.google.com/uc?export=download&id=1uXLhn7EV5PDEGtj2OcOh4D0PyjhihVnn" 
  },
  {
    id: 3,
    title: "Diseño Premium",
    description: "Elegante y formal. Blanco, negro y dorado",
    videoUrl: "https://drive.google.com/uc?export=download&id=1miNwTwZoYwB5OE8kBwAPD0A2FSOB2XSf" 
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CATALOGO Invitaciones digitales para bodas" },
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
    <main className="romantic-bg min-h-screen px-5 py-8 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <h1 className="font-display text-4xl font-semibold leading-none tracking-tight text-foreground sm:text-5xl">
          CATALOGO
        </h1>
        <span className="mt-2 block font-display text-xl font-medium text-primary sm:text-2xl">
          Invitaciones digitales para bodas
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
            <div className="aspect-[9/16] w-full bg-muted relative">
              <video
                src={design.videoUrl}
                title={design.title}
                className="h-full w-full object-cover"
                controls // Agrega controles nativos limpios
                playsInline // Crucial para que no se abra en pantalla completa automático en iOS
                controlsList="nodownload" // Oculta el botón de descargar
                preload="metadata"
                // Si querés que parezcan Reels que se reproducen solos sin botones, 
                // sacá "controls" y poné: autoPlay loop muted
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
