# Polilibro: Web Client and Backend Development Frameworks

![Vercel Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Este proyecto es un recurso didáctico digital ("Polilibro") desarrollado para la unidad de aprendizaje **Web Client and Backend Development Frameworks** de la **UPIIZ - IPN** (Instituto Politécnico Nacional).

La plataforma sirve como guía interactiva para estudiantes, cubriendo desde arquitecturas web y servicios REST hasta el desarrollo frontend moderno y despliegue en la nube.

🔗 **Demo en vivo:** [https://polilibro-web-2.vercel.app/](https://polilibro-web-2.vercel.app/)

## 📖 Contenido del Curso

El material está organizado en 5 unidades temáticas principales:

1.  **Unidad I:** Arquitecturas de desarrollo web (Monolítica, N-capas, Microservicios, etc.).
2.  **Unidad II:** Desarrollo de APIs y servicios web (REST, SOAP, JSON, XML).
3.  **Unidad III:** Desarrollo del lado del servidor (ORM, JPA, Endpoints, Swagger).
4.  **Unidad IV:** Desarrollo del lado del cliente (UI Components, Consumo de APIs, Seguridad).
5.  **Unidad V:** Entornos virtuales y despliegue (Docker, PaaS, Microservicios).

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando tecnologías web modernas:

*   **Framework Principal:** [Next.js](https://nextjs.org/) (App Router).
*   **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Configuración inline en CSS).
*   **Base de Datos (Contador):** [Upstash Redis](https://upstash.com/) (Para el contador de visitas).
*   **Analíticas:** Vercel Analytics.
*   **Lenguaje:** JavaScript (ES6+).
*   **Iconos:** React Icons.

## 🚀 Instalación y Configuración Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/polilibro-web-2.git
    cd polilibro-web-2
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto para configurar la conexión a Redis (necesario para el contador de visitas).

    ```env
    UPSTASH_REDIS_REST_URL="tu_url_de_upstash"
    UPSTASH_REDIS_REST_TOKEN="tu_token_de_upstash"
    ```

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  **Abrir en el navegador:**
    Visita [http://localhost:3000](http://localhost:3000).

## 📂 Estructura del Proyecto

```text
├── src/
│   ├── app/                # Rutas y páginas (App Router)
│   │   ├── api/            # API Routes (contador de visitas)
│   │   ├── unidad-X/       # Páginas dinámicas por unidad
│   │   └── page.js         # Página de inicio
│   ├── components/         # Componentes reutilizables (Header, Sidebar, etc.)
│   └── courseData.js       # Fuente de verdad: Contenido, temas y estructura del curso
├── public/                 # Imágenes, banners y documentos PDF
└── ...config files