---
title: Pad Notes
description: Una aplicación web edge-first para crear y gestionar notas personales, construida con Astro SSR, islands architecture y base de datos globalmente replicada. ¡Captura y organiza tus ideas al instante desde cualquier dispositivo!
img: https://res.cloudinary.com/ddinz4ewu/image/upload/v1746399001/Recursos/PadNotes/Home.png
tags: [Astro, React, TypeScript, Tailwind, Turso, Clerk, Upstash, Drizzle ORM]
imgSize: '1014/438'
styleBody: flex flex-col items-center min-h-screen bg-scroll md:bg-fixed font-monda body-proyect-1
url: https://padnotes.angelbyte.dev/
github: https://github.com/Angelbyte96/Pad-Notes
---

# Pad Notes

¡Bienvenido a Pad Notes, tu espacio para organizar ideas de forma simple, rápida y segura desde cualquier parte del mundo!

## Descripción

Pad Notes es una aplicación web moderna construida con **Astro 6 en modo SSR** (`output: server`) y desplegada en Vercel, lo que garantiza rendering dinámico y protección de rutas a nivel servidor. La arquitectura sigue el patrón de **islands**: componentes Astro estáticos para el layout y React únicamente donde existe interactividad real, manteniendo el bundle de JavaScript al mínimo indispensable. La autenticación con Clerk opera como middleware en el edge, interceptando cada request antes de que llegue a la base de datos. Los datos se almacenan en **Turso (libSQL)**, una base de datos SQLite distribuida y globalmente replicada, accedida mediante Drizzle ORM con tipado estático end-to-end. La protección anti-abuso utiliza **dos rate limiters independientes con algoritmo sliding window** sobre Upstash Redis: uno para lecturas (30 req/10s) y otro para escrituras (10 req/10s), con analytics habilitados para monitoreo en tiempo real.

## Tecnologías Utilizadas

El proyecto utiliza un stack técnico moderno centrado en rendimiento en el edge:

- **Astro 6 (SSR)**: Framework principal en modo `output: server` con Vercel adapter. Renders dinámicos y middleware de autenticación integrado.
- **React 18 + islands architecture**: React opera únicamente en los componentes interactivos (lista de notas, búsqueda, modales), reduciendo al máximo el JS enviado al cliente.
- **Tailwind CSS v4**: Nuevo enfoque Vite-first con `@tailwindcss/vite`. Sin `tailwind.config.js` — configuración puramente en CSS.
- **Turso (libSQL) + Drizzle ORM**: Base de datos SQLite distribuida y globalmente replicada con ORM type-safe. Tipos inferidos directamente del schema, sin duplicación.
- **Clerk (`@clerk/astro`)**: Autenticación con Google OAuth y email/contraseña. Middleware que protege rutas antes de cualquier acceso a la base de datos. UI localizada en español (esMX).
- **Upstash Redis**: Rate limiting con sliding window algorithm. Dos limiters independientes para lecturas y escrituras con `analytics: true`.
- **Zod v4**: Validaciones type-safe en backend y frontend. Tipos derivados con `z.infer<>` para eliminar duplicación de definiciones.
- **nanostores**: Estado compartido entre React islands sin prop-drilling ni la complejidad de Redux o Zustand.
- **Radix UI Dialog + lucide-react + @pheralb/toast**: Componentes accesibles para modales, iconografía consistente y notificaciones toast.

## Funcionalidades Clave

Pad Notes cubre el ciclo completo de gestión de notas con robustez técnica en cada capa:

1. **Autenticación segura y sin fricciones**
   - Inicio de sesión con Google OAuth o email/contraseña gestionado por Clerk.
   - Middleware edge intercepta requests no autenticados antes de tocar la base de datos.
   - Interfaz de Clerk en español con localización `esMX`.

2. **CRUD completo de notas con validación estricta**
   - Creación, edición y eliminación de notas con título (3–100 caracteres) y cuerpo (3–400 caracteres) validados con Zod.
   - Aislamiento por `userId` aplicado tanto en middleware como en cada handler de la API.
   - Edición inline mediante Radix UI Dialog para una experiencia fluida sin cambios de página.

3. **Búsqueda en tiempo real con resaltado**
   - Filtrado instantáneo sobre el estado de nanostores, sin requests adicionales al servidor.
   - Coincidencias resaltadas visualmente dentro del texto de cada nota.

4. **Rate limiting dual con sliding window**
   - Lecturas: 30 req/10s. Escrituras: 10 req/10s. Algoritmos independientes por tipo de operación.
   - Analytics habilitados en el dashboard de Upstash para detectar patrones de abuso.

5. **UX de calidad**
   - Selector de tema claro/oscuro.
   - Botón de copiar al portapapeles por nota.
   - Notificaciones toast en cada acción CRUD mediante `@pheralb/toast`.
   - Diseño responsivo adaptado a dispositivos móviles y de escritorio.

## Capturas de Pantalla

![Login](https://res.cloudinary.com/ddinz4ewu/image/upload/v1746399212/Recursos/PadNotes/Login.png)
![Dashboard](https://res.cloudinary.com/ddinz4ewu/image/upload/v1746399417/Recursos/PadNotes/Dashboard.png)
![Lista de Notas](https://res.cloudinary.com/ddinz4ewu/image/upload/v1746399523/Recursos/PadNotes/Lista_de_notas.png)

## Estado del Proyecto

Pad Notes está en producción y en fase estable. La infraestructura edge — SSR con Vercel, Turso replicado globalmente y rate limiting con analytics — está operativa y preparada para escalar sin cambios de arquitectura.

## Comentarios

Si tienes sugerencias, ideas o encontraste algo por mejorar, me gustaría escucharte — tu feedback es parte del proceso de mejora continua.

---

_Este es el espacio de Pad Notes, una aplicación construida con atención al detalle técnico para ayudarte a organizar tus ideas de manera eficiente. ¡Gracias por tu interés y mantente atento a las próximas actualizaciones!_
