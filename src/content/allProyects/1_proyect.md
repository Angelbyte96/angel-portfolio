---
title: Pad Notes
description: Una aplicación web moderna para crear y gestionar notas personales, con autenticación segura y base de datos distribuida edge-first. ¡Captura y gestiona tus pensamientos al instante!
img: https://res.cloudinary.com/ddinz4ewu/image/upload/v1746399001/Recursos/PadNotes/Home.png
tags: [Astro, Tailwind, React, Turso, Clerk, python]
imgSize: '695/400'
styleBody: flex flex-col my-1 items-center min-h-screen bg-scroll md:bg-fixed font-serif bgProyect-1 body-proyect-1
url: https://pad-notes-omega.vercel.app/
---

# Pad Notes

¡Bienvenido a Pad Notes, tu espacio para organizar ideas de forma simple, rápida y segura!

## Descripción

Pad Notes es una aplicación web moderna y minimalista diseñada para escribir, guardar y administrar tus notas de forma intuitiva. Con un rediseño enfocado en rendimiento (edge-first), permite a los usuarios concentrarse en capturar ideas importantes sin distracciones. La aplicación integra un sistema de autenticación seguro gestionado por Clerk (incluyendo inicio de sesión con Google OAuth y correo electrónico). Además, almacena los datos de forma global y ultrarrápida a través de Turso (libSQL) y emplea Upstash Redis para garantizar una protección anti-abuso robusta (Rate Limiting) con una experiencia de usuario sobresaliente.

## Tecnologías Utilizadas

El proyecto se apoya en un stack técnico de vanguardia para asegurar eficiencia y escalabilidad:

- **Astro y React**: Para construir una interfaz dinámica, modular y de alto rendimiento.
- **Tailwind CSS 4**: Para un diseño responsivo, minimalista y completamente personalizable.
- **TypeScript**: Para añadir tipado estático y robustez al código.
- **Turso (libSQL) y Drizzle ORM**: Como base de datos edge distribuida y ORM type-safe, simplificando y acelerando la gestión de datos.
- **Clerk**: Para gestionar de manera segura la autenticación y las sesiones de usuario.
- **Upstash Redis**: Para el control e implementación de Rate Limiting.
- **Zod**: Validaciones type-safe, asegurando la integridad de los datos provistos en el backend y frontend.

## Funcionalidades Clave

Entre las características más destacadas de Pad Notes se incluyen:

1. **Autenticación Segura y Sin Fricciones**
   - Registro e inicio de sesión integrados con Google OAuth o credenciales de email y contraseña.

2. **Gestión Completa de Notas (CRUD)**
   - Creación instantánea de apuntes con título y contenido.
   - Seguridad garantizada: Cada usuario solamente tiene y mantendrá acceso a sus propias notas.
   - Búsqueda en tiempo real con filtrado interactivo e instantáneo.

3. **Protección Anti-Abuso (Rate Limit)**
   - Límite de peticiones a la API gestionado por Redis (por ejemplo: máximo permitido para crear notas o refrescar el dashboard), evitando el uso abusivo del servidor.

4. **Diseño Responsivo e Interactivo**
   - Interfaz que se adapta perfectamente a cualquier tamaño de pantalla asegurando una experiencia óptima en móviles o computadoras de escritorio.

## Capturas de Pantalla

![Login](https://res.cloudinary.com/ddinz4ewu/image/upload/v1746399212/Recursos/PadNotes/Login.png)
![Dashboard](https://res.cloudinary.com/ddinz4ewu/image/upload/v1746399417/Recursos/PadNotes/Dashboard.png)
![Lista de Notas](https://res.cloudinary.com/ddinz4ewu/image/upload/v1746399523/Recursos/PadNotes/Lista_de_notas.png)

## Estado del Proyecto

Pad Notes está en una fase estable y optimizada, habiendo revolucionado su infraestructura para escalar gracias a herramientas Edge. Sus bases de datos rápidas, robusta autenticación y control anti-abuso lo posicionan como un entorno ideal muy sólido. Explora ahora y descubre la manera más sencilla de organizar tus apuntes de forma eficiente.

## Comentarios

Si tienes alguna sugerencia, idea o comentario para mejorar Pad Notes, ¡me gustaría escucharte! Tu feedback es fundamental para seguir perfeccionando la experiencia.

---

_Este es el espacio de Pad Notes, una aplicación creada con pasión para ayudarte a organizar tus pensamientos de manera efectiva. ¡Gracias por tu interés y mantente atento a las próximas actualizaciones!_
