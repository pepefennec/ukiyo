# Ukiyo

Aplicación web personal para desconexión, descanso y recuperación después de la jornada laboral.

Ukiyo V1 es una aplicación estática construida con HTML, CSS y módulos ES nativos. No necesita instalar paquetes, compilar recursos ni configurar servicios externos. El archivo `ukiyo_prototipo.html` se conserva como referencia del prototipo original.

## Ejecutar en local

Desde la raíz del repositorio:

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000/` en un navegador moderno. Es necesario usar un servidor HTTP porque la aplicación carga módulos ES.

## Estructura

```text
index.html
assets/
  css/styles.css
  icons/favicon.svg
  js/
    app.js
    data.js
    recommendations.js
    state.js
    ui.js
ukiyo_prototipo.html
```

- `data.js`: catálogo inicial y opciones de la interfaz.
- `state.js`: estado temporal de la aplicación.
- `recommendations.js`: reglas de recomendación.
- `ui.js`: renderizado, navegación y eventos.
- `app.js`: punto de entrada.

## Estado de los datos

Esta etapa mantiene los datos únicamente en memoria. Las actividades, imágenes, notas, sesiones e historial se reinician al recargar o cerrar la página. La persistencia local con IndexedDB pertenece a la Etapa 2 y todavía no está implementada.

## Validación de la Etapa 1

Se verificó con Chromium en modo headless:

- carga mediante servidor estático y módulos sin recursos fallidos;
- navegación y recomendaciones;
- creación de actividades y validación de enlaces HTTP/HTTPS;
- archivo y restauración sin duplicados;
- inicio, pausa, reanudación y finalización de sesiones;
- registro de notas e historial;
- resumen limitado al mes actual;
- ausencia de desbordamiento horizontal a 390 px;
- ausencia de errores JavaScript durante el recorrido.

También se comprobó la sintaxis de todos los módulos con `node --check`.

No se ejecutaron pruebas en dispositivos físicos, Safari/iOS ni Firefox. El repositorio aún no incluye una suite automatizada persistente; el recorrido anterior se ejecutó como prueba funcional durante la implementación.
