# 💼 Fintech Product Catalog

Una landing page moderna y responsiva para una fintech o banco digital, construida con **Next.js 13+ (App Router)**.  
Permite visualizar productos financieros mockeados, filtrarlos por categoría, y ver sus detalles junto con una visualización gráfica de riesgo.

---

## 🚀 Tecnologías utilizadas

- **Next.js (App Router)**
- **TypeScript**
- **TailwindCSS** (estructura)
- **Styled Components** (componentes visuales reutilizables)
- **Recharts** (visualización de datos)
- **Lucide React** (iconografía moderna)

---

## 🖥️ ¿Cómo correr el proyecto localmente?

1. Clona el repositorio:

```bash
git clone https://github.com/aotalvaros/fintech-product-catalog.git
cd fintech-product-catalog
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
``` 

## 🧠 Decisiones técnicas

- **¿Qué criterios seguí para diseñar la UI de productos financieros?**

    Se muestra solo la información más relevante en la card (nombre, tipo, categoría y nivel de riesgo). Los detalles más específicos se visualizan solo al hacer clic en “Saber más”.

    Uso de colores (azul, blanco, gris) que evocan estabilidad y seriedad, muy común en el sector financiero.

    Todo el layout está construido pensando primero en pantallas pequeñas y luego adaptado a desktop, gracias a las utilidades de TailwindCSS.

    Animaciones suaves en los cards, hover con efecto visual, y un botón CTA claro.

- **¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?**

    Usé Tailwind principalmente para:
    - Su velocidad para crear interfaces sin salir del HTML
    - Fáciles ajustes visuales sin necesidad de CSS adicional
    - Estructura del layout (márgenes, paddings, grids, flexbox, etc.)
    - Diseño responsivo rápido con clases como sm:grid-cols-2, p-4, etc.

- **¿Qué harías para escalar este proyecto en una aplicación real de banca digital?**

    Para llevar este prototipo a una app bancaria real, aplicaría varias estrategias de escalabilidad técnica y funcional

    - Conexión con APIs reales
    - Gestión de estado global
    - Autenticación y seguridad
    - DevOps, testing y despliegue

## ✅ Pruebas unitarias

Aunque la prueba técnica no solicitaba explícitamente pruebas unitarias, decidí implementarlas como valor agregado para garantizar la calidad del código y la robustez de los componentes.

    Se utilizaron:

- **Vitest** como test runner moderno y rápido.
- **Testing Library** para pruebas enfocadas en la experiencia del usuario.
- Mocking de componentes con lógica más compleja para mantener los tests aislado

Para ejutar las pruebas en una terminal dentro del proyecto, con el comando **npm run test**