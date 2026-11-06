# Ukiyo B3

Aplicación web local-first para disfrutar el tiempo libre de forma consciente, sin rachas, puntuaciones ni presión productiva.

## Ejecutar en local

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000/`. La primera visita guarda el shell para que las siguientes puedan funcionar sin conexión.

## Estado de B3

Este primer corte funcional incorpora:

- cinco módulos: Inicio, Explorar, Planes, Memorias y Mi espacio;
- Inicio para día ocupado o libre;
- catálogo precargado y biblioteca personal;
- búsqueda, familias, favoritos e intereses;
- check-in opcional y propuesta ritual editable;
- ritual secuencial con pausa, extensiones, continuación libre y cierre factual;
- recuperación del ritual después de recargar;
- planes con fecha opcional y cuatro plantillas;
- memorias espontáneas, sesiones, destacados y álbumes básicos;
- proyectos y colecciones básicos;
- persistencia con IndexedDB;
- migración automática de datos del prototipo V2 cuando están en el mismo origen;
- respaldo y restauración JSON;
- service worker y manifiesto instalable.

## Arquitectura

- `assets/js/data.js`: catálogo y plantillas semilla.
- `assets/js/state.js`: esquema B3, estado y migración V2.
- `assets/js/storage.js`: persistencia IndexedDB.
- `assets/js/ui.js`: pantallas e interacciones de este corte.
- `assets/css/styles.css`: tokens y componentes provisionales.
- `sw.js`: shell offline.

Los prototipos anteriores permanecen como referencia y no forman parte del punto de entrada publicado.

## Alcance visual

B3 usa la paleta terracota y crema confirmada, tipografías del sistema e iconos provisionales. Fraunces, Montserrat, Lucide, logotipo, ilustraciones, tema oscuro definitivo y pulido de identidad se reservan para B4.

## Pendiente dentro de B3

- editor visual completo del itinerario por días;
- filtros combinables avanzados y asignación de elementos a colecciones;
- detalle y edición completa de álbumes, proyectos y memorias;
- excepciones y pausas del calendario personal;
- reglas de recencia del recomendador;
- tratamiento completo de adjuntos e imágenes en respaldos;
- pruebas permanentes y validación en dispositivos físicos.

## Validación realizada

- sintaxis de módulos y manifiesto;
- navegación por cinco módulos;
- catálogo, copia personal y persistencia tras recarga;
- ritual, pausa, recuperación y cierre;
- respaldo descargable;
- migración V2 de biblioteca y memorias;
- recarga sin conexión mediante service worker;
- viewport móvil de 390 px sin desbordamiento horizontal.
