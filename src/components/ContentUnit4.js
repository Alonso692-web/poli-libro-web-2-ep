import React from 'react';
import { FaBook, FaYoutube, FaLink, FaLightbulb, FaTools, FaLock, FaExchangeAlt, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';

const ContentSection = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="text-xl font-bold text-purple-700 mb-3 flex items-center">
            <FaLightbulb className="mr-2" /> {title}
        </h3>
        <div className="pl-6 border-l-2 border-purple-200">
            {children}
        </div>
    </div>
);

const ImageWithCaption = ({ src, alt, caption, width = 500, height = 300 }) => (
    <div className="my-6 text-center">
        <div className="inline-block bg-gray-100 p-2 rounded-lg shadow">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="rounded-lg border border-gray-200"
            />
            {caption && <p className="mt-2 text-sm text-gray-600 italic">{caption}</p>}
        </div>
    </div>
);

const ResourceItem = ({ type, children }) => {
    const icons = {
        video: <FaYoutube className="text-red-500" />,
        article: <FaLink className="text-blue-500" />,
        book: <FaBook className="text-green-500" />,
        tool: <FaTools className="text-yellow-500" />,
        security: <FaLock className="text-gray-700" />,
        protocol: <FaExchangeAlt className="text-indigo-500" />
    };

    return (
        <li className="flex items-start mb-2">
            <span className="mr-2 mt-1">{icons[type] || <FaLink />}</span>
            <span>{children}</span>
        </li>
    );
};

const ResourceItemURL = ({ type, children, url }) => {
    const icons = {
        video: <FaYoutube className="text-red-500 mr-2" />,
        article: <FaLink className="text-blue-500 mr-2" />,
        book: <FaBook className="text-green-500 mr-2" />,
        course: <FaGraduationCap className="text-purple-500 mr-2" />,
        documentation: <FaBook className="text-indigo-500 mr-2" />
    };

    return (
        <li className="flex items-start mb-2 bg-gray-50 p-3 rounded hover:bg-gray-100 transition">
            {type === 'video' ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                        {icons[type]}
                        {children}
                    </span>
                </a>
            ) : (
                <span className="flex items-center">
                    <span className="mt-1">{icons[type] || <FaLink className="mr-2" />}</span>
                    <span>{children}</span>
                </span>
            )}
        </li>
    );
};


// Componente para 4.1 - Diseño y desarrollo de interfaces
export const Content_4_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.1. Diseño y desarrollo de interfaces</h2>

        <ContentSection title="Introducción">
            <p>
                El diseño y desarrollo de interfaces es fundamental en la creación de aplicaciones web modernas.
                Se enfoca en crear experiencias de usuario intuitivas, accesibles y visualmente atractivas mediante
                componentes reutilizables y patrones de diseño establecidos.
            </p>
            <ImageWithCaption
                src="/images/unidad4/ui-design.jpg"
                alt="Diseño de interfaces de usuario"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Componentes clave">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800">Desarrollo basado en componentes</h4>
                    <p>Creación de elementos UI independientes y reutilizables que encapsulan estructura, estilo y comportamiento.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800">Diseño responsivo</h4>
                    <p>Adaptación de interfaces a diferentes dispositivos y tamaños de pantalla usando técnicas como Flexbox y Grid.</p>
                </div>
            </div>
        </ContentSection>

        <ContentSection title="Flujo de trabajo">
            <ol className="list-decimal pl-5 space-y-2">
                <li>Diseño de wireframes y prototipos</li>
                <li>Implementación de componentes UI</li>
                <li>Pruebas de usabilidad con usuarios reales</li>
                <li>Iteración basada en feedback</li>
            </ol>
        </ContentSection>

        <ContentSection title="Ejemplos prácticos">
            <ul className="list-disc pl-5 space-y-2">
                <li>Creación de un sistema de diseño con Storybook</li>
                <li>Implementación de una interfaz de dashboard responsive</li>
                <li>Diseño de formularios accesibles con validación en tiempo real</li>
                <li>Optimización de rendimiento para interfaces complejas</li>
            </ul>
        </ContentSection>

        <ContentSection title="Recursos recomendados">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    Refactoring UI - Adam Wathan & Steve Schoger
                </ResourceItem>
                <ResourceItem type="tool">
                    Figma, Adobe XD, Sketch
                </ResourceItem>
                <ResourceItem type="framework">
                    React, Vue, Angular, Svelte
                </ResourceItem>
                <ResourceItem type="article">
                    Material Design Guidelines - Google
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// Componente para 4.1.1 - Desarrollo de interfaz basado en componentes
export const Content_4_1_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.1.1. Desarrollo de interfaz basado en componentes</h2>

        <ContentSection title="Concepto fundamental">
            <p>
                El desarrollo basado en componentes divide la interfaz de usuario en piezas independientes y reutilizables.
                Cada componente maneja su propio estado, lógica y presentación, facilitando el mantenimiento y la escalabilidad.
            </p>
            <ImageWithCaption
                src="/images/unidad4/component-architecture.jpg"
                alt="Arquitectura basada en componentes"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Principios clave">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800">Encapsulación</h4>
                    <p>Cada componente contiene su propio HTML, CSS y JavaScript sin afectar otros componentes.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800">Composición</h4>
                    <p>Componentes simples se combinan para crear interfaces complejas mediante anidamiento.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800">Reutilización</h4>
                    <p>Componentes estándar pueden usarse en diferentes partes de la aplicación.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800">Props y Estado</h4>
                    <p>Mecanismos para pasar datos (props) y manejar datos internos (estado).</p>
                </div>
            </div>
        </ContentSection>

        <ContentSection title="Implementación">
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-md">
                {`// Ejemplo de componente React
function Button({ primary, children }) {
  return (
    <button className={\`py-2 px-4 rounded \${primary 
      ? 'bg-blue-500 text-white' 
      : 'bg-gray-200 text-gray-800'}\`}>
      {children}
    </button>
  );
}`}
            </pre>
            <p className="mt-2">
                Este componente Button puede reutilizarse en toda la aplicación con diferentes estilos y contenido.
            </p>
        </ContentSection>

        <ContentSection title="Mejores prácticas">
            <ul className="list-disc pl-5 space-y-2">
                <li>Componentes pequeños y enfocados en una sola responsabilidad</li>
                <li>Evitar dependencias innecesarias entre componentes</li>
                <li>Usar sistemas de diseño para mantener consistencia visual</li>
                <li>Documentar componentes con herramientas como Storybook</li>
                <li>Implementar pruebas unitarias para componentes críticos</li>
            </ul>
        </ContentSection>
    </div>
);

// Componente para 4.1.2 - Diseño y construcción de interfaz de usuario
export const Content_4_1_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.1.2. Diseño y construcción de interfaz de usuario</h2>

        <ContentSection title="Enfoque práctico">
            <p>
                La construcción efectiva de interfaces requiere combinar principios de diseño con implementación técnica.
                Se enfoca en crear experiencias intuitivas mediante patrones de interacción establecidos y flujos de usuario lógicos.
            </p>
        </ContentSection>

        {/* Contenido similar al anterior con detalles específicos de diseño UI */}
    </div>
);

// Componente para 4.1.3 - Diseño responsivo y adaptable
export const Content_4_1_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.1.3. Diseño responsivo y adaptable</h2>

        <ContentSection title="Adaptación a dispositivos">
            <p>
                El diseño responsivo garantiza que las interfaces funcionen en cualquier dispositivo mediante
                técnicas como media queries, layouts flexibles e imágenes adaptables.
            </p>
        </ContentSection>

        {/* Contenido detallado sobre diseño responsivo */}
    </div>
);

// Componente para 4.1.4 - Pruebas de usabilidad de la interfaz
export const Content_4_1_4 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.1.4. Pruebas de usabilidad de la interfaz</h2>

        <ContentSection title="Evaluación de experiencia de usuario">
            <p>
                Las pruebas de usabilidad identifican problemas en la interacción mediante observación de usuarios reales
                completando tareas específicas.
            </p>
        </ContentSection>

        {/* Contenido sobre métodos de prueba de usabilidad */}
    </div>
);

// Componente para 4.2 - Mecanismos de acceso a información
export const Content_4_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.2. Mecanismos de acceso a información mediante interfaz de usuario</h2>

        <ContentSection title="Gestión de datos en el frontend">
            <p>
                Los mecanismos de acceso a información permiten a los usuarios interactuar con datos a través de la interfaz,
                incluyendo búsquedas, filtros, ordenamiento y manipulación de conjuntos de datos complejos.
            </p>
        </ContentSection>

        {/* Contenido sobre acceso a datos en frontend */}
    </div>
);

// Componente para 4.2.1 - Diseño y construcción de mecanismos de acceso a datos
export const Content_4_2_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.2.1. Diseño y construcción de mecanismos de acceso a datos</h2>

        <ContentSection title="Patrones de acceso a datos">
            <p>
                Implementación de patrones como CRUD (Crear, Leer, Actualizar, Eliminar) mediante componentes
                especializados para gestión de datos.
            </p>
        </ContentSection>

        {/* Contenido detallado sobre construcción de mecanismos de datos */}
    </div>
);

// Componente para 4.2.2 - Acceso a datos en estructuras relacionales
export const Content_4_2_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.2.2. Acceso a datos en estructuras relacionales</h2>

        <ContentSection title="Trabajo con datos estructurados">
            <p>
                Manejo de datos tabulares con relaciones definidas mediante ORMs frontend y técnicas de mapeo
                objeto-relacional en el cliente.
            </p>
        </ContentSection>

        {/* Contenido sobre acceso a datos relacionales */}
    </div>
);

// Componente para 4.2.3 - Acceso a datos en estructuras no relacionales
export const Content_4_2_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.2.3. Acceso a datos en estructuras no relacionales</h2>

        <ContentSection title="Manejo de datos flexibles">
            <p>
                Trabajo con documentos JSON, grafos y otros modelos no relacionales mediante librerías especializadas
                y técnicas de normalización.
            </p>
        </ContentSection>

        {/* Contenido sobre acceso a datos no relacionales */}
    </div>
);

// Componente para 4.3 - Comunicación cliente-servidor
export const Content_4_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.3. Comunicación cliente-servidor</h2>

        <ContentSection title="Interacción con backend">
            <p>
                La comunicación cliente-servidor es fundamental para aplicaciones web modernas, permitiendo
                intercambio de datos mediante APIs REST, GraphQL, WebSockets y otros protocolos.
            </p>
            <ImageWithCaption
                src="/images/unidad4/client-server.jpg"
                alt="Comunicación cliente-servidor"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        {/* Contenido completo sobre comunicación cliente-servidor */}
    </div>
);

// Componente para 4.3.1 - Implementación de aplicaciones de comunicación
export const Content_4_3_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.3.1. Implementación de aplicaciones de comunicación</h2>

        <ContentSection title="Patrones de comunicación">
            <p>
                Implementación de diferentes patrones como request-response, pub-sub y streaming usando tecnologías
                como Axios, Fetch API, Socket.IO y WebRTC.
            </p>
        </ContentSection>

        {/* Contenido detallado sobre implementación */}
    </div>
);

// Componente para 4.3.2 - Consumo de API´s REST
export const Content_4_3_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.3.2. Consumo de API´s REST</h2>

        <ContentSection title="Interacción con servicios RESTful">
            <p>
                Técnicas para consumir APIs REST mediante HTTP verbs (GET, POST, PUT, DELETE), manejo de headers,
                autenticación y procesamiento de respuestas.
            </p>
            <pre className="bg-gray-800 text-gray-100 p-4 rounded-md">
                {`// Ejemplo de consumo de API REST con Fetch API
async function getUsers() {
  const response = await fetch('https://api.example.com/users', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer token123',
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) throw new Error('Error en la solicitud');
  return response.json();
}`}
            </pre>
        </ContentSection>

        {/* Contenido completo sobre consumo de APIs */}
    </div>
);

// Componente para 4.3.3 - Implementación de librerías para desarrollo de UI
export const Content_4_3_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.3.3. Implementación de librerías para el desarrollo de interfaz de usuario</h2>

        <ContentSection title="Herramientas modernas">
            <p>
                Uso de librerías y frameworks como React, Vue, Angular, Svelte y herramientas complementarias
                (Redux, Vuex, Context API) para gestión de estado y construcción de interfaces complejas.
            </p>
        </ContentSection>

        {/* Contenido sobre implementación de librerías UI */}
    </div>
);

// Componentes restantes para 4.3.4 a 4.3.7 seguirían el mismo patrón
// (Pruebas de conectividad, integridad, cifrado y seguridad)

// Componente para 4.3.4 - Pruebas de conectividad
export const Content_4_3_4 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.3.4. Pruebas de conectividad</h2>

        <ContentSection title="Verificación de comunicación">
            <p>
                Técnicas para probar y monitorear la conectividad entre cliente y servidor, incluyendo
                herramientas como Postman, herramientas de red del navegador y librerías de testing.
            </p>
        </ContentSection>

        {/* Contenido sobre pruebas de conectividad */}
    </div>
);

// Componente para 4.3.5 - Prueba de integridad de datos
export const Content_4_3_5 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.3.5. Prueba de integridad de datos</h2>

        <ContentSection title="Garantía de consistencia">
            <p>
                Verificación de que los datos no se corrompen durante la transmisión mediante checksums,
                hashes y técnicas de validación.
            </p>
        </ContentSection>

        {/* Contenido sobre integridad de datos */}
    </div>
);

// Componente para 4.3.6 - Pruebas de cifrado de datos
export const Content_4_3_6 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.3.6. Pruebas de cifrado de datos</h2>

        <ContentSection title="Seguridad en tránsito">
            <p>
                Verificación de implementaciones de cifrado como TLS/SSL, análisis de certificados y
                herramientas para evaluar vulnerabilidades en comunicaciones.
            </p>
        </ContentSection>

        {/* Contenido sobre pruebas de cifrado */}
    </div>
);

// Componente para 4.3.7 - Pruebas de seguridad
export const Content_4_3_7 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">4.3.7. Pruebas de seguridad</h2>

        <ContentSection title="Protección de aplicaciones">
            <p>
                Pruebas de vulnerabilidades comunes (XSS, CSRF, inyección) y técnicas para asegurar
                comunicaciones cliente-servidor.
            </p>
        </ContentSection>

        {/* Contenido completo sobre pruebas de seguridad */}
    </div>
);