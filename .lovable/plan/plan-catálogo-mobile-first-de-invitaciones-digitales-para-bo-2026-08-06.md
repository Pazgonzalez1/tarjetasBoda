# Plan: Catálogo mobile-first de invitaciones digitales para bodas

## Objetivo
Reemplazar el placeholder de la ruta `/` con una página mobile-first que muestre un catálogo vertical de invitaciones digitales para bodas.

## Requisitos resueltos tras preguntas al usuario
- 3 tarjetas de ejemplo por defecto.
- Sin botón "Elegir este diseño".
- Paleta "Romántico Rosa".

## Cambios a realizar

### 1. Tokens de diseño en `src/styles.css`
- Añadir variables semánticas para el tema romántico rosa usando `oklch`.
- Mantener soporte claro/oscuro con `:root` y `.dark`.
- No hardcodear colores en los componentes; usar tokens.

### 2. Tipografía moderna
- Cargar una fuente display moderna (por ejemplo, Playfair Display o similar) mediante `<link>` en el `head()` de `src/routes/__root.tsx`.
- Registrar la familia en `@theme` de `src/styles.css`.

### 3. Ruta `/` (`src/routes/index.tsx`)
- Reemplazar el placeholder por la página del catálogo.
- Header elegente con el título exacto: **"CATALOGO invitaciones digitales para bodas"**.
- Galería en lista vertical de una sola columna, con márgenes laterales adecuados para móvil.
- Cada tarjeta:
  - Card minimalista con bordes redondeados y sombra suave.
  - Contenedor `aspect-video` (16:9).
  - `<iframe>` con atributos exactos: `src="PEGAR_LINK_DE_DRIVE_AQUI"`, `className="w-full h-full border-0"`, `allow="autoplay"`.
  - Texto de ejemplo debajo del video (p. ej., "Diseño Clásico").
- No incluir botón de acción, según respuesta del usuario.

### 4. Metadata de la ruta
- Añadir `head()` en `src/routes/index.tsx` con título, descripción, `og:title`, `og:description`, `og:type` y `twitter:card` propios del catálogo.

### 5. Verificación
- Revisar que el build pase y que la vista previa muestre correctamente las 3 tarjetas en formato móvil.
