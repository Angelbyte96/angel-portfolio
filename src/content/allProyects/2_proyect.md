---
title: SpendList
description: Aplicación web para crear y gestionar listas de compras con cálculo automático de gastos en tiempo real.
img: https://res.cloudinary.com/ddinz4ewu/image/upload/v1757182123/Recursos/SpendList/HomeDescrip_owsnkv.webp
tags: [Astro, React, TypeScript, Tailwind]
imgSize: '695/400'
styleBody: flex flex-col items-center min-h-screen bg-scroll md:bg-fixed font-monda body-proyect-2
url: https://spend-list-rouge.vercel.app/
github: https://github.com/Angelbyte96/SpendList
---

# SpendList

Aplicación web para gestionar listas de compras con control de gastos en tiempo real.

## ¿Qué resuelve?

Planificar compras sin perder el hilo del presupuesto. SpendList calcula automáticamente el total a medida que agregás artículos, registra fechas, distingue entre ítems comprados y pendientes, y funciona sin necesidad de cuenta gracias al modo demo con `localStorage`.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Astro 6 + React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Componentes | Radix UI (Dialog, Select) + Lucide React |
| Base de datos | Astro DB + Turso (SQLite) |
| Auth | Clerk *(en desarrollo)* |
| Deploy | Vercel + Vercel Analytics |
| Notificaciones | @pheralb/toast |
| Fechas | @formkit/tempo |

## Funcionalidades

**Gestión de listas**
- Crear, editar y eliminar listas con nombre personalizado
- Registro automático de fecha de creación y última modificación

**Artículos**
- Agregar ítems con nombre, precio y cantidad
- Marcar artículos como comprados o pendientes
- Eliminación individual o limpieza completa

**Control de gastos**
- Total calculado en tiempo real al modificar cualquier ítem
- Estadísticas de cantidad de artículos y monto acumulado

**Modos de almacenamiento**
- **Demo** — `localStorage`, sin registro, disponible ahora
- **Persistente** — Astro DB + Turso, requiere cuenta *(en desarrollo)*

## Rutas

```
/                    → Página de inicio
/demo                → App principal (modo demo)
/demo/nueva-lista    → Crear nueva lista
/demo/mis-listas     → Ver todas las listas
/demo/editar/[id]    → Editar lista existente
/auth                → Autenticación (en desarrollo)
```

## API

```
GET    /api/list     → Obtener listas
POST   /api/finalize → Crear lista
PATCH  /api/list     → Actualizar lista
DELETE /api/list     → Eliminar lista
POST   /api/items    → Gestionar artículos
```

## Capturas

### Página Principal

![Página Principal](https://res.cloudinary.com/ddinz4ewu/image/upload/v1757170900/Recursos/SpendList/ListaCompras_cdvreo.webp)

### Nueva Lista

![Nueva Lista](https://res.cloudinary.com/ddinz4ewu/image/upload/v1757171070/Recursos/SpendList/NuevaLista_ophh2f.webp)

### Mis Listas

![Mis Listas](https://res.cloudinary.com/ddinz4ewu/image/upload/v1757172175/Recursos/SpendList/MisListas_zbqief.webp)

## Estado

El modo demo está completamente funcional. El trabajo en curso está enfocado en completar la integración con **Turso DB** para persistencia en la nube y en conectar **Clerk** para autenticación de usuarios.
