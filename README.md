# TareaFinal - Test Automation Mercado Libre

## Descripción
Este proyecto automatiza la búsqueda de "playstation 5" en Mercado Libre México, aplicando los siguientes filtros:

1. Condición: Nuevos
2. Ubicación: Ciudad de México (CDMX)
3. Orden: Mayor a menor precio

El test obtiene el **nombre y precio de los primeros 5 productos** y genera un reporte con capturas de cada paso en la carpeta `output/`.

---

## Requisitos
- Node.js instalado (v16 o superior recomendada)
- CodeceptJS
- Playwright

---

## Instalación de dependencias
En la carpeta raíz del proyecto (`TareaFinal/`) ejecuta:

```bash
npm install
npx playwright install chromium
