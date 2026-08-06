/* eslint-disable prettier/prettier */
import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";

const designs = [
  {
    id: 1,
    title: "Diseño Simple",
    description: "Elegancia para tu gran día.",
    videoUrl: "/video1.mp4" 
  },
  {
    id: 2,    
    title: "Diseño Premium",
    description: "Estilo limpio y contemporáneo. Verde oliva, blanco y negro",
    videoUrl: "/video2.mp4" 
  },
  {
    id: 3,
    title: "Diseño Premium",
    description: "Elegante y formal. Blanco, negro y dorado",
    videoUrl: "/video3.mp4" 
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

function DesignCard({ design }: { design: typeof designs[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Ahora arranca en FALSE para que inicie pausado
  const [isPlaying, setIsPlaying] = useState(false); 

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="aspect-[9/16] w-full bg-muted relative group">
<video
  ref={videoRef}
  src={design.videoUrl}
  title={design.title}
  className="h-full w-full object-cover"
  loop
  muted
  playsInline
  preload="metadata" // <--- Esta línea es clave para no saturar la red
/>
        
        {/* Botón dinámico: cambia de clases según isPlaying */}
        <button
          onClick={togglePlay}
          className={`absolute z-10 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all duration-500 ease-in-out hover:bg-black/70 focus:outline-none ${
            isPlaying
              ? "bottom-4 right-4 h-10 w-10 shadow-md" // Reproduciendo: chiquito, abajo a la derecha
              : "left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 shadow-xl" // Pausado: grande, justo al medio
          }`}
          aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
        >
          {isPlaying ? (
            // Icono de Pausa chiquito
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          ) : (
            // Icono de Play más grande (con un margencito a la izquierda para que el triángulo se vea bien centrado)
            <svg className="ml-1 h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
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
  );
}

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
          <DesignCard key={design.id} design={design} />
        ))}
      </section>
    </main>
  );
}