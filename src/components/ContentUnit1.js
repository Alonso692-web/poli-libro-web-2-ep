// src/components/ContentUnit1.js
import React from 'react';
import { FaBook, FaYoutube, FaLink, FaLightbulb, FaListOl, FaCode, FaHistory, FaLaptopCode, FaGraduationCap, FaShieldAlt, FaCube, FaServer, FaMobileAlt, FaDatabase, FaCogs, FaSyncAlt, FaCloudUploadAlt, FaLayerGroup, FaObjectGroup, FaPlug, FaCubes, FaSitemap, FaChartLine, FaPalette, FaTools } from 'react-icons/fa';
import Image from 'next/image';

const ContentSection = ({ title, children, icon }) => {
    const getIcon = () => {
        if (icon) return icon;
        switch (title) {
            case 'Introducción': return <FaLightbulb className="text-yellow-500" />;
            case 'Descripción del tema': return <FaCode className="text-blue-500" />;
            case 'Antecedentes': return <FaHistory className="text-purple-500" />;
            case 'Ejemplos de aplicación': return <FaLaptopCode className="text-green-500" />;
            case 'Información de apoyo': return <FaGraduationCap className="text-red-500" />;
            default: return <FaCode />;
        }
    };

    return (
        <div className="mb-8 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="text-xl mr-2">{getIcon()}</span>
                {title}
            </h3>
            <div className="pl-1 border-l-2 border-gray-200 ml-2">
                {children}
            </div>
        </div>
    );
};

const ResourceItem = ({ type, children }) => {
    const icons = {
        video: <FaYoutube className="text-red-500 mr-2" />,
        article: <FaLink className="text-blue-500 mr-2" />,
        book: <FaBook className="text-green-500 mr-2" />,
        course: <FaGraduationCap className="text-purple-500 mr-2" />,
        documentation: <FaBook className="text-indigo-500 mr-2" />
    };

    return (
        <li className="flex items-start mb-2 bg-gray-50 p-3 rounded hover:bg-gray-100 transition">
            <span className="mt-1">{icons[type] || <FaLink className="mr-2" />}</span>
            <span>{children}</span>
        </li>
    );
};

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

// ==============================
// 1.1 Principios comunes para las arquitecturas
// ==============================
export const Content_1_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaShieldAlt className="text-purple-600 mr-3" />
            1.1. Principios comunes para las arquitecturas
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Las arquitecturas de software son fundamentales para organizar el desarrollo de aplicaciones
                de manera eficiente y escalable. Existen principios comunes que guían la forma en que se
                diseñan estos sistemas.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen1.jpg"
                alt="Arquitectura de software"
                caption="Principios fundamentales de arquitectura de software"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Este tema aborda conceptos generales que aplican a cualquier tipo de arquitectura, como la
                separación de responsabilidades, modularidad, reutilización de código, escalabilidad,
                mantenibilidad y acoplamiento bajo. Aplicar estos principios mejora la calidad del software y
                reduce los errores a largo plazo.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Desde la evolución de la programación estructurada hacia la programación orientada a
                objetos y luego hacia arquitecturas distribuidas, estos principios han guiado la creación de
                buenas prácticas de desarrollo, como SOLID, DRY y KISS.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Separar la interfaz de usuario de la lógica de negocio en una app web</li>
                <li>Reutilizar módulos de autenticación en distintas aplicaciones</li>
                <li>Usar interfaces para desacoplar componentes</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="video">
                    Principios SOLID - Fazt Code
                </ResourceItem>
                <ResourceItem type="article">
                    Principios de diseño de software - FreeCodeCamp
                </ResourceItem>
                <ResourceItem type="book">
                    Clean Architecture - Robert C. Martin
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.2 Arquitectura monolítica
// ==============================
export const Content_1_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCube className="text-purple-600 mr-3" />
            1.2. Arquitectura monolítica
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La arquitectura monolítica fue una de las primeras formas de estructurar aplicaciones.
                Aún se usa en proyectos pequeños o con necesidades básicas.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen2.jpg"
                alt="Arquitectura monolítica"
                caption="Diagrama de arquitectura monolítica"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Una aplicación monolítica agrupa todos sus componentes (UI, lógica, acceso a datos) en una
                sola unidad desplegable. Si una parte falla o cambia, afecta a todo el sistema. Aunque puede
                ser simple al inicio, no escala bien en sistemas grandes.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Durante décadas, las aplicaciones empresariales se construyeron como monolitos. Con la llegada
                de aplicaciones más complejas y distribuidas, surgieron arquitecturas más modulares como los
                microservicios.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Sistemas de gestión escolar donde todo está en una sola app</li>
                <li>Aplicaciones de escritorio clásicas como sistemas contables</li>
                <li>Sitios web pequeños con lógica incrustada en el servidor</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="video">
                    Monolithic vs Microservices - TechWorld
                </ResourceItem>
                <ResourceItem type="article">
                    Arquitectura monolítica - RedHat
                </ResourceItem>
                <ResourceItem type="book">
                    The Art of Scalability - Martin Abbott
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.2.1 Contenedores
// ==============================
export const Content_1_2_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaServer className="text-purple-600 mr-3" />
            1.2.1. Contenedores
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Los contenedores han revolucionado la forma en que se desarrollan, prueban y despliegan aplicaciones.
                Permiten empaquetar una aplicación con todas sus dependencias en un entorno aislado, asegurando que
                se ejecute de manera uniforme en distintos sistemas.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen3.jpg"
                alt="Contenedores"
                caption="Arquitectura de contenedores"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Un contenedor es una unidad ligera, autónoma y ejecutable que incluye todo lo necesario para ejecutar
                una aplicación: código, bibliotecas, dependencias y configuración. A diferencia de las máquinas virtuales,
                los contenedores comparten el mismo sistema operativo del host, lo que los hace más eficientes y rápidos.
            </p>
            <p className="text-gray-700 mt-3">
                Se utilizan comúnmente junto con arquitecturas monolíticas o microservicios, facilitando el despliegue,
                la escalabilidad y la portabilidad de las aplicaciones.
            </p>
            <p className="text-gray-700 mt-3">
                Entre las herramientas más populares para gestionar contenedores se encuentra Docker, mientras que
                Kubernetes se emplea para su orquestación.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Antes del uso de contenedores, los desarrolladores enfrentaban el problema de &quot;funciona en mi máquina pero
                no en producción&quot;. Esto ocurría por diferencias en los entornos de ejecución. La virtualización intentó
                resolver esto, pero con un alto costo de recursos. Los contenedores, introducidos masivamente en 2013 con
                Docker, ofrecieron una solución más ligera, portable y ágil.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Una aplicación Java empaquetada en un contenedor Docker con su JDK y librerías necesarias</li>
                <li>Despliegue de un servidor web Nginx en un contenedor aislado</li>
                <li>Sistema monolítico en Docker que luego puede migrarse a microservicios más fácilmente</li>
                <li>Uso en CI/CD: integración continua donde los contenedores se crean automáticamente al hacer cambios de código</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="video">
                    ¿Qué es Docker y para qué sirve? - Fazt
                </ResourceItem>
                <ResourceItem type="documentation">
                    Documentación oficial de Docker: https://docs.docker.com/
                </ResourceItem>
                <ResourceItem type="article">
                    Contenedores vs Máquinas Virtuales - RedHat
                </ResourceItem>
                <ResourceItem type="course">
                    Docker desde cero - OpenBootcamp
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.3 Arquitectura tradicional de n-capas
// ==============================
export const Content_1_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaLayerGroup className="text-purple-600 mr-3" />
            1.3. Arquitectura tradicional de n-capas
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La arquitectura en capas permite dividir las responsabilidades del sistema, facilitando el
                mantenimiento, las pruebas y la escalabilidad del software.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen5.jpg"
                alt="Arquitectura n-capas"
                caption="Modelo tradicional de n-capas"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                En esta arquitectura, el sistema se organiza típicamente en tres capas:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-3">
                <li><strong>Capa de presentación (UI):</strong> Interfaz de usuario</li>
                <li><strong>Capa de lógica de negocio:</strong> Reglas y procesos del negocio</li>
                <li><strong>Capa de acceso a datos:</strong> Interacción con bases de datos</li>
            </ul>
            <p className="text-gray-700 mt-3">
                Cada capa tiene un rol específico y se comunica con las adyacentes.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Este enfoque surgió para solucionar los problemas de los sistemas monolíticos, promoviendo
                una mejor organización del código y una separación clara de responsabilidades. Fue
                ampliamente adoptado con el auge de las aplicaciones cliente-servidor.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Aplicaciones web tradicionales usando Java (Spring), .NET, PHP con MVC</li>
                <li>Sistemas bancarios donde las reglas de negocio están separadas de la interfaz</li>
                <li>Aplicaciones móviles que se conectan a servicios backend bien estructurados</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="video">
                    Arquitectura en capas explicada - Código Facilito
                </ResourceItem>
                <ResourceItem type="article">
                    3-tier architecture - IBM Cloud Docs
                </ResourceItem>
                <ResourceItem type="book">
                    Software Architecture Patterns - Mark Richards
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.3.1 Capa de acceso a datos
// ==============================
export const Content_1_3_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaDatabase className="text-purple-600 mr-3" />
            1.3.1. Capa de acceso a datos
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La capa de acceso a datos es la encargada de la interacción entre la aplicación y las fuentes
                de datos, como bases de datos relacionales o no relacionales. Su objetivo es aislar la lógica
                de negocio del almacenamiento físico.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen6.jpg"
                alt="Capa de acceso a datos"
                caption="Diagrama de capa de acceso a datos"
                width={600}
                height={400}
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Esta capa contiene todo el código necesario para realizar operaciones CRUD (crear, leer, actualizar, eliminar).
                También se encarga de abrir conexiones, ejecutar consultas, mapear resultados a objetos del sistema y cerrar recursos.
            </p>
            <p className="text-gray-700 mt-3">
                Se suele implementar con herramientas como JDBC, JPA (Java), Entity Framework (.NET),
                o bibliotecas como Sequelize (Node.js).
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Antes de que se aplicaran arquitecturas por capas, el acceso a datos estaba mezclado con la lógica de negocio,
                lo que dificultaba el mantenimiento. Con el surgimiento de patrones como DAO (Data Access Object),
                se estandarizó la separación de estas responsabilidades.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Método en Java usando JPA para obtener todos los estudiantes de una tabla alumnos</li>
                <li>Repositorio en .NET que recupera datos desde una base SQL Server</li>
                <li>Uso de un ORM como Sequelize para mapear tablas a objetos en Node.js</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Patrón DAO en Java - Baeldung
                </ResourceItem>
                <ResourceItem type="video">
                    Capa de acceso a datos - Píldoras Informáticas
                </ResourceItem>
                <ResourceItem type="book">
                    Patterns of Enterprise Application Architecture - Martin Fowler
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.3.2 Capa de lógica de negocios
// ==============================
export const Content_1_3_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCogs className="text-purple-600 mr-3" />
            1.3.2. Capa de lógica de negocios
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La lógica de negocios representa las reglas del sistema: cómo debe comportarse la aplicación ante ciertas acciones, procesos o condiciones.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen7.jpg"
                alt="Capa de lógica de negocios"
                caption="Arquitectura de tres capas"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Esta capa se encarga de procesar los datos obtenidos desde la capa de datos y de tomar decisiones basadas en las reglas definidas por el negocio o la organización. Debe estar aislada de la presentación y del almacenamiento. Se implementa en forma de servicios, controladores, clases o funciones.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Durante el desarrollo de sistemas empresariales complejos, se hizo evidente que mezclar la lógica de negocio con la interfaz de usuario dificultaba el mantenimiento. Esto llevó al uso de capas intermedias para contener reglas y procesos internos.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Calcular el promedio final de un alumno en un sistema escolar</li>
                <li>Validar si un usuario tiene permisos para realizar cierta acción</li>
                <li>Aplicar reglas de negocio para promociones en un sistema de ventas</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Separar lógica de negocio - Stack Overflow
                </ResourceItem>
                <ResourceItem type="video">
                    Lógica de negocios vs lógica de presentación
                </ResourceItem>
                <ResourceItem type="book">
                    Domain-Driven Design - Eric Evans
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.3.3 Interfaz de usuario
// ==============================
export const Content_1_3_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaMobileAlt className="text-purple-600 mr-3" />
            1.3.3. Interfaz de usuario
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La interfaz de usuario (UI) es la capa responsable de permitir la interacción entre el usuario y
                la aplicación. Es lo que el usuario ve y manipula.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen8.jpg"
                alt="Interfaz de usuario"
                caption="Componentes de una interfaz de usuario moderna"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Su función es mostrar datos y recibir entradas del usuario para enviarlas a las capas
                inferiores. Puede construirse usando tecnologías web (HTML, CSS, JS), de escritorio (JavaFX,
                .NET WinForms) o móviles (Android, Flutter).
            </p>
            <p className="text-gray-700 mt-3">
                Debe ser intuitiva, accesible, y adaptarse a las necesidades del usuario.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Inicialmente, la lógica de negocio y la interfaz estaban juntas en aplicaciones monolíticas.
                Con la adopción de arquitecturas en capas y el patrón MVC, se promovió la separación para
                mejorar la experiencia de usuario y el mantenimiento del sistema.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Formulario web para registrar nuevos usuarios</li>
                <li>Pantalla móvil que muestra calificaciones de un estudiante</li>
                <li>Interfaz de escritorio para consultar inventario y generar reportes</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Diseño de interfaces de usuario - Nielsen Norman Group
                </ResourceItem>
                <ResourceItem type="video">
                    Diseño UI/UX básico - Código Facilito
                </ResourceItem>
                <ResourceItem type="book">
                    Don&apos;t Make Me Think - Steve Krug
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.4 Arquitectura de cebolla (Arquitectura limpia)
// ==============================
export const Content_1_4 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaObjectGroup className="text-purple-600 mr-3" />
            1.4. Arquitectura de cebolla (Arquitectura limpia)
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La arquitectura de cebolla, también llamada arquitectura limpia, busca organizar el código de
                forma que sea independiente de frameworks, base de datos, UI y cualquier tecnología
                externa. El objetivo es que el núcleo del sistema (el modelo de dominio) esté libre de
                dependencias.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen9.jpg"
                alt="Arquitectura de cebolla"
                caption="Capas concéntricas de la arquitectura limpia"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Se estructura en capas concéntricas, donde la parte más interna representa el modelo del
                <strong> dominio</strong> (las reglas y entidades del negocio) y la parte más externa contiene la
                <strong> infraestructura</strong> (frameworks, bases de datos, controladores, interfaces gráficas, etc.).
            </p>
            <p className="text-gray-700 mt-3">
                Las capas solo pueden depender de las más internas, nunca al revés. Esta arquitectura
                facilita pruebas, mantenimiento y portabilidad.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Robert C. Martin (Uncle Bob) introdujo el concepto de arquitectura limpia como una
                evolución de patrones como Hexagonal y Onion Architecture. Su objetivo era aislar la lógica
                del negocio de los detalles técnicos y reducir el acoplamiento del software.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Aplicaciones Java con el núcleo en paquetes independientes y uso de Spring solo en la capa externa</li>
                <li>Proyecto en .NET donde el modelo de dominio no depende ni de Entity Framework ni de la UI</li>
                <li>Sistema que puede cambiar su interfaz web por una móvil sin afectar la lógica</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    Clean Architecture - Robert C. Martin
                </ResourceItem>
                <ResourceItem type="video">
                    Clean Architecture explicada - Código Facilito
                </ResourceItem>
                <ResourceItem type="article">
                    Clean Architecture - Medium (en español)
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.4.1 Modelo del dominio
// ==============================
export const Content_1_4_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCube className="text-purple-600 mr-3" />
            1.4.1. Modelo del dominio
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                El modelo del dominio representa el corazón de la aplicación: sus entidades, objetos de valor
                y reglas de negocio.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen10.jpg"
                alt="Modelo del dominio"
                caption="Ejemplo de modelo de dominio para sistema de préstamos"
                width={600}
                height={400}
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Esta capa contiene las clases y estructuras que definen el comportamiento del negocio,
                como Usuario, Producto, Orden, etc. Debe ser completamente independiente de
                frameworks, bases de datos y librerías externas. Es reutilizable y fácil de probar.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                En DDD (Domain-Driven Design), se hace énfasis en que el modelo del dominio debe reflejar
                el lenguaje y lógica del negocio real. La arquitectura limpia hereda esta idea.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Clase Alumno con atributos y métodos como calcularPromedio() sin importar si se usa MySQL o MongoDB</li>
                <li>Clase Pedido con validaciones internas sobre stock o estado</li>
                <li>Objeto de valor Email que valida su formato dentro del modelo</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Modelo del Dominio - baeldung
                </ResourceItem>
                <ResourceItem type="book">
                    Domain-Driven Design - Eric Evans
                </ResourceItem>
                <ResourceItem type="video">
                    Clean Architecture y modelo del dominio
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.4.2 Interfaz de usuario
// ==============================
export const Content_1_4_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaMobileAlt className="text-purple-600 mr-3" />
            1.4.2. Interfaz de usuario
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La interfaz de usuario en arquitectura limpia es una capa externa que se comunica con el núcleo del sistema, pero sin imponerle dependencias.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Puede ser una aplicación web, móvil, de escritorio, o incluso una API REST. Solo debe llamar a los casos de uso definidos en las capas internas, como los controladores en una app web o los eventos de un botón.
            </p>
            <p className="text-gray-700 mt-3">
                La idea es que la UI pueda cambiarse sin afectar el resto del sistema.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                En arquitecturas antiguas, la lógica de negocio se mezclaba con la UI. La arquitectura limpia permite desacoplar estos componentes y aplicar principios de diseño como MVC o MVVM desde una perspectiva más modular.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Una app móvil Flutter que consume los casos de uso de la lógica de negocio</li>
                <li>Una interfaz React que invoca servicios alojados en la capa de aplicación</li>
                <li>Cambiar una UI de consola por una web sin alterar el modelo de dominio</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="video">
                    Arquitectura Limpia + React
                </ResourceItem>
                <ResourceItem type="book">
                    Implementing Clean Architecture - Jason Taylor
                </ResourceItem>
                <ResourceItem type="article">
                    Separar la UI de la lógica
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.4.3 Infraestructura
// ==============================
export const Content_1_4_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaServer className="text-purple-600 mr-3" />
            1.4.3. Infraestructura
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La infraestructura en la arquitectura limpia representa todo lo relacionado con tecnologías externas: bases de datos, redes, almacenamiento, envío de correos, etc.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen11.jpg"
                alt="Infraestructura"
                caption="Componentes de infraestructura en arquitectura limpia"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Esta capa se encuentra <strong>fuera del núcleo</strong> del sistema y se conecta con él mediante interfaces. Es la responsable de implementar servicios como repositorios, controladores web, conexiones a API externas o acceso a archivos.
            </p>
            <p className="text-gray-700 mt-3">
                La infraestructura <strong>depende del dominio</strong>, nunca al revés.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Antes se integraba directamente la base de datos o el servidor web con la lógica, dificultando su prueba y reemplazo. Este modelo permite abstraer esas dependencias y sustituir tecnologías sin modificar el dominio.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Implementación concreta de una interfaz RepositorioDeUsuarios usando PostgreSQL</li>
                <li>Adaptador de almacenamiento que conecta con Amazon S3 o Google Drive</li>
                <li>Cliente HTTP que llama a una API externa y transforma datos para los casos de uso</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Infraestructura en Clean Architecture - The Pragmatic Engineer
                </ResourceItem>
                <ResourceItem type="video">
                    Limpieza de infraestructura con interfaces - DevTalles
                </ResourceItem>
                <ResourceItem type="book">
                    Clean Architecture - Cap. 22, Implementing Infrastructure
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.4.4 Pruebas
// ==============================
export const Content_1_4_4 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaTools className="text-purple-600 mr-3" />
            1.4.4. Pruebas
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Una ventaja clave de la arquitectura limpia es su capacidad para facilitar las pruebas de
                software gracias a su bajo acoplamiento.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen12.jpg"
                alt="Pruebas de software"
                caption="Tipos de pruebas en arquitecturas limpias"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Se pueden aplicar distintos tipos de pruebas:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-3">
                <li><strong>Unitarias:</strong> (a clases del dominio)</li>
                <li><strong>De integración:</strong> (probando infraestructura)</li>
                <li><strong>De aceptación:</strong> (probando el sistema desde la UI)</li>
            </ul>
            <p className="text-gray-700 mt-3">
                Las pruebas se realizan fuera del dominio, pero apuntan a verificar el comportamiento de
                cada capa. Gracias a la inversión de dependencias, se pueden usar mocks y stubs.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                En arquitecturas monolíticas o acopladas, probar el sistema era complicado y lento. La
                arquitectura limpia fomenta el desarrollo guiado por pruebas (TDD) y mejora la calidad del
                software desde el diseño.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Prueba unitaria de la clase Alumno verificando el método calcularPromedio()</li>
                <li>Pruebas con JUnit y Mockito para verificar el comportamiento de casos de uso</li>
                <li>Pruebas de integración que simulan un acceso a base de datos en memoria</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="video">
                    Clean Architecture + Testing - Fernando Herrera
                </ResourceItem>
                <ResourceItem type="article">
                    Test en arquitecturas limpias - Dev.to
                </ResourceItem>
                <ResourceItem type="book">
                    Test-Driven Development: By Example - Kent Beck
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.5 Arquitectura hexagonal
// ==============================
export const Content_1_5 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaPlug className="text-purple-600 mr-3" />
            1.5. Arquitectura hexagonal
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La arquitectura hexagonal, también conocida como arquitectura de puertos y adaptadores, fue propuesta para facilitar la independencia de la lógica de negocio respecto a los detalles técnicos, como bases de datos, frameworks o interfaces de usuario.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen13.jpg"
                alt="Arquitectura hexagonal"
                caption="Diagrama de arquitectura hexagonal"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Su idea central es dividir el sistema en un núcleo de negocio (dentro del hexágono) y múltiples adaptadores (fuera del hexágono), los cuales se conectan mediante puertos. Esto permite que la aplicación sea fácilmente modificable, probada y mantenida, sin importar qué tecnología la rodea.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Fue propuesta por Alistair Cockburn en 2005, como respuesta a la creciente complejidad y
                acoplamiento en las arquitecturas tradicionales. Su propósito era crear software más flexible
                y resistente al cambio tecnológico.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Un sistema de pedidos donde la lógica es la misma, sin importar si recibe órdenes desde una web, una app móvil o una API REST</li>
                <li>Reemplazar una base de datos PostgreSQL por MongoDB sin tocar el núcleo de negocio</li>
                <li>Aplicaciones con múltiples interfaces: CLI, Web, API, todas conectadas a la misma lógica</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Hexagonal Architecture - Alistair Cockburn (original)
                </ResourceItem>
                <ResourceItem type="video">
                    Arquitectura Hexagonal explicada - DevTalles
                </ResourceItem>
                <ResourceItem type="book">
                    Clean Architecture - Robert C. Martin, capítulo sobre puertos y adaptadores
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.5.1 Dominio de la aplicación
// ==============================
export const Content_1_5_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCube className="text-purple-600 mr-3" />
            1.5.1. Dominio de la aplicación
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                El dominio de la aplicación representa las reglas de negocio, entidades, y comportamientos
                esenciales del sistema, independientes de entradas/salidas.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen14.jpg"
                alt="Dominio de la aplicación"
                caption="Componentes del dominio en arquitectura hexagonal"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Esta es la parte más interna de la arquitectura hexagonal. Incluye los casos de uso, las
                <strong> entidades del negocio</strong> y las interfaces que definen qué necesita el sistema externo
                <strong> proporcionar</strong>, sin importar cómo se implemente (bases de datos, servicios, interfaces
                gráficas, etc.).
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Derivado de principios de Domain-Driven Design (DDD), esta capa busca reflejar el
                comportamiento del sistema desde el punto de vista del negocio y no de la tecnología.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Entidad Cliente con métodos como realizarCompra()</li>
                <li>Caso de uso RegistrarAlumno que define qué debe ocurrir, sin depender de una base de datos</li>
                <li>Interface RepositorioDePedidos definida en el dominio</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    Domain-Driven Design - Eric Evans
                </ResourceItem>
                <ResourceItem type="article">
                    Hexagonal Architecture en la práctica - Baeldung
                </ResourceItem>
                <ResourceItem type="video">
                    Dominio en arquitectura hexagonal
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.5.2 Puertos
// ==============================
export const Content_1_5_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaPlug className="text-purple-600 mr-3" />
            1.5.2. Puertos
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Los puertos son interfaces que definen puntos de entrada y salida para comunicarse con el
                dominio sin acoplarse directamente a tecnologías externas.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen15.jpg"
                alt="Puertos en arquitectura hexagonal"
                caption="Comunicación mediante puertos"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Hay dos tipos de puertos:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-3">
                <li><strong>Puertos de entrada:</strong> Definen cómo se interactúa con el dominio desde el exterior (por ejemplo, casos de uso)</li>
                <li><strong>Puertos de salida:</strong> Interfaces que necesita el dominio para comunicarse hacia afuera (por ejemplo, repositorios, servicios externos)</li>
            </ul>
            <p className="text-gray-700 mt-3">
                Los adaptadores concretan estos puertos con implementaciones reales.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                El concepto proviene de los puertos físicos en hardware: lo que importa es lo que entra y sale,
                no cómo está hecho internamente. En software, permite desacoplar la lógica del negocio de
                detalles tecnológicos.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Puerto de entrada: CrearCuentaService invocado desde una API o una consola</li>
                <li>Puerto de salida: NotificadorEmail definido en el dominio y luego implementado con SMTP o SendGrid</li>
                <li>Puerto de salida: RepositorioEstudiante implementado con JPA, Mongo, o cualquier otro motor</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Ports & Adapters explicado - Dev.to
                </ResourceItem>
                <ResourceItem type="video">
                    Puertos en Hexagonal Architecture - Java Brains
                </ResourceItem>
                <ResourceItem type="book">
                    Arquitectura Hexagonal - Manuel Rivero (español)
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.5.3 Capa de servicios
// ==============================
export const Content_1_5_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCogs className="text-purple-600 mr-3" />
            1.5.3. Capa de servicios
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Es la capa que coordina los casos de uso y conecta los puertos de entrada con el dominio.
                Actúa como &quot;puente&quot; entre los adaptadores de entrada (por ejemplo, un controlador HTTP) y
                la lógica de negocio.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen16.jpg"
                alt="Capa de servicios"
                caption="Estructura de capas de servicio"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Estos servicios son <strong>invocados desde los adaptadores de entrada</strong> (UI, API) y se encargan de validar datos, transformar objetos, ejecutar lógica y coordinar tareas. También se comunican con los puertos de salida definidos en el dominio.
            </p>
            <p className="text-gray-700 mt-3">
                Es una capa orquestadora, no contiene lógica de negocio en sí.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                En el patrón de arquitectura en capas, esto equivale a la &quot;aplicación&quot; o &quot;servicio de aplicación&quot;. En Clean Architecture se le conoce como &quot;casos de uso&quot;. Aquí también se aplica el principio de inversión de dependencias.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>ServicioRegistrarAlumno que recibe datos de un formulario, los valida, y llama a RepositorioAlumnos.guardar()</li>
                <li>Coordinación entre la lógica de cobros, descuentos y notificaciones al realizar una venta</li>
                <li>Llamado a múltiples adaptadores: base de datos + API externa</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    Aplicaciones empresariales con arquitectura hexagonal - Herberto Granja
                </ResourceItem>
                <ResourceItem type="video">
                    Capa de servicios en Clean/Hexagonal Architecture
                </ResourceItem>
                <ResourceItem type="article">
                    Application Service Layer - Martin Fowler
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.5.4 Adaptadores
// ==============================
export const Content_1_5_4 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaSyncAlt className="text-purple-600 mr-3" />
            1.5.4. Adaptadores
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Los adaptadores son <strong>implementaciones concretas</strong> que conectan los puertos definidos en el dominio con tecnologías específicas, como bases de datos, APIs, interfaces gráficas, entre otros.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen17.jpg"
                alt="Adaptadores"
                caption="Funcionamiento de los adaptadores"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Existen dos tipos:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-3">
                <li><strong>Adaptadores de entrada:</strong> Reciben solicitudes externas (HTTP, consola, eventos) y las convierten en comandos o peticiones al dominio</li>
                <li><strong>Adaptadores de salida:</strong> Implementan interfaces (puertos de salida) y permiten que el dominio interactúe con servicios reales</li>
            </ul>
            <p className="text-gray-700 mt-3">
                Su función es permitir que el dominio funcione de manera agnóstica, sin importar el medio de entrada/salida.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Inspirados en el patrón Adapter (GoF), permiten traducir la &quot;forma&quot; del mundo exterior a una
                forma que el dominio pueda entender, y viceversa.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Adaptador de entrada: un controlador Spring REST que recibe una petición POST y llama al caso de uso</li>
                <li>Adaptador de salida: clase que implementa RepositorioDeAlumnos con acceso a MongoDB</li>
                <li>Adaptador de entrada: aplicación de consola o app móvil que interactúa con la lógica del sistema</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="video">
                    Adaptadores en arquitectura hexagonal - DevTalles
                </ResourceItem>
                <ResourceItem type="article">
                    Hexagonal Architecture - Baeldung
                </ResourceItem>
                <ResourceItem type="book">
                    The Hexagonal Architecture - Alistair Cockburn
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.6 Arquitectura de microservicios
// ==============================
export const Content_1_6 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCubes className="text-purple-600 mr-3" />
            1.6. Arquitectura de microservicios
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La arquitectura de microservicios es un enfoque moderno para el diseño de aplicaciones
                distribuidas, donde cada componente del sistema es un servicio independiente que ejecuta
                una funcionalidad específica del negocio.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen18.jpg"
                alt="Arquitectura de microservicios"
                caption="Diagrama lógico de microservicios"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Cada microservicio es una pequeña aplicación autónoma que se comunica con otros a
                través de protocolos ligeros (como HTTP o mensajería). Este modelo mejora la escalabilidad,
                facilita el mantenimiento, y permite desarrollar y desplegar funcionalidades de forma
                independiente.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                La arquitectura monolítica dominó durante décadas, pero al crecer las aplicaciones, sus
                limitaciones llevaron al surgimiento de microservicios. Empresas como Amazon y Netflix
                adoptaron este modelo para escalar rápidamente.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Un sistema de compras donde el servicio de usuarios, el de pagos y el de inventario son microservicios independientes</li>
                <li>Cada microservicio con su propia base de datos y lógica</li>
                <li>Aplicaciones que se comunican usando REST, gRPC o colas de mensajes como RabbitMQ</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="video">
                    ¿Qué son los microservicios? - Fazt Code
                </ResourceItem>
                <ResourceItem type="article">
                    Microservices architecture - Microsoft Learn
                </ResourceItem>
                <ResourceItem type="book">
                    Building Microservices - Sam Newman
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.6.1 Fundamentos de microservicios
// ==============================
export const Content_1_6_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaSitemap className="text-purple-600 mr-3" />
            1.6.1. Fundamentos de microservicios
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Los fundamentos son los principios básicos que hacen posible la creación y gestión de
                sistemas distribuidos mediante microservicios.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen19.jpg"
                alt="Fundamentos de microservicios"
                caption="Principios fundamentales de los microservicios"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Los microservicios se caracterizan por:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-3">
                <li><strong>Autonomía:</strong> cada servicio se ejecuta y despliega por separado</li>
                <li><strong>Desacoplamiento:</strong> cambios en uno no afectan a otros</li>
                <li><strong>Escalabilidad independiente:</strong> se puede escalar solo el servicio necesario</li>
                <li><strong>Organización alrededor del negocio:</strong> cada microservicio representa una funcionalidad concreta</li>
            </ul>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                El diseño orientado a servicios (SOA) fue la base. La evolución del desarrollo ágil y la
                necesidad de despliegues rápidos llevó a un enfoque más ligero y flexible.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Servicio de autenticación independiente que otros servicios consumen</li>
                <li>Separación de servicios de notificación, facturación, y pedidos</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    12 factores de microservicios - The Twelve-Factor App
                </ResourceItem>
                <ResourceItem type="video">
                    Microservicios desde cero - Deivcho Dev
                </ResourceItem>
                <ResourceItem type="book">
                    Microservice Patterns - Chris Richardson
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.6.2 Arquitectura del dominio
// ==============================
export const Content_1_6_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaChartLine className="text-purple-600 mr-3" />
            1.6.2. Arquitectura del dominio
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                En microservicios, el dominio debe estar bien delimitado para que cada servicio represente
                una unidad coherente de negocio.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen20.jpg"
                alt="Arquitectura del dominio"
                caption="Modelo de dominio en microservicios"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Se basa en el enfoque de Domain-Driven Design (DDD), donde se identifican subdominios o
                <strong> bounded contexts</strong>, y cada microservicio opera sobre uno de ellos.
            </p>
            <p className="text-gray-700 mt-3">
                Esto evita duplicidad, acoplamiento excesivo y permite escalar servicios de forma
                independiente.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                El DDD, propuesto por Eric Evans, fue adoptado como base conceptual para diseñar
                sistemas centrados en el conocimiento del dominio, facilitando su división en microservicios.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Subdominio de &quot;Alumnos&quot;, otro de &quot;Calificaciones&quot;, otro de &quot;Docentes&quot;</li>
                <li>Servicio de &quot;Pedidos&quot; que no depende directamente del servicio de &quot;Inventario&quot;, pero se comunica con él por eventos o API</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    Domain-Driven Design - Eric Evans
                </ResourceItem>
                <ResourceItem type="article">
                    Bounded Contexts - Martin Fowler
                </ResourceItem>
                <ResourceItem type="video">
                    DDD aplicado a microservicios - DevTalles
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.6.3 Modelo de referencia
// ==============================
export const Content_1_6_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaSitemap className="text-purple-600 mr-3" />
            1.6.3. Modelo de referencia
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                El modelo de referencia representa la estructura conceptual general que guía el diseño de
                un sistema basado en microservicios.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen21.jpg"
                alt="Modelo de referencia"
                caption="Modelo de referencia para microservicios"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Incluye componentes como:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-3">
                <li>Servicios independientes</li>
                <li>API Gateway</li>
                <li>Service discovery</li>
                <li>Balanceo de carga</li>
                <li>Bases de datos distribuidas</li>
                <li>Mensajería y eventos</li>
            </ul>
            <p className="text-gray-700 mt-3">
                Este modelo actúa como “mapa” para visualizar cómo interactúan todos los
                elementos en un ecosistema de microservicios.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Modelos como el de Netflix y AWS sirvieron de ejemplo. Se busca estandarizar cómo se
                estructuran microservicios para evitar caos en sistemas complejos.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Diagrama donde cada servicio tiene su propia base de datos y se comunica a través de un bus de eventos (Kafka, RabbitMQ)</li>
                <li>Uso de Eureka para descubrimiento de servicios</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Reference Architecture for Microservices - Microsoft
                </ResourceItem>
                <ResourceItem type="video">
                    Modelo de referencia para microservicios
                </ResourceItem>
                <ResourceItem type="documentation">
                    Documentación: Spring Cloud Netflix
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.6.4 Modelo de implementación
// ==============================
export const Content_1_6_4 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCogs className="text-purple-600 mr-3" />
            1.6.4. Modelo de implementación
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Este modelo define cómo se construyen técnicamente los microservicios, su estructura
                interna y los principios que guían su desarrollo.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Cada microservicio se implementa como un proceso o contenedor autónomo, con su propia
                lógica, API, y almacenamiento. Se utilizan tecnologías como REST, GraphQL, gRPC, bases de
                datos NoSQL o SQL, contenedores (Docker), y frameworks específicos (Spring Boot, Express,
                etc.).
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                El avance en contenedores y DevOps permitió que los microservicios pudieran desarrollarse
                e implementarse de forma más rápida y aislada. Herramientas modernas automatizan gran
                parte del ciclo de vida.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Microservicio UserService en Node.js que expone una API REST y usa MongoDB</li>
                <li>OrdersService en Java con Spring Boot, PostgreSQL y documentación Swagger</li>
                <li>Contenedores independientes para cada microservicio usando Docker</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="course">
                    Microservicios con Spring Boot - Udemy
                </ResourceItem>
                <ResourceItem type="article">
                    Implementación con Spring Cloud
                </ResourceItem>
                <ResourceItem type="video">
                    Microservicios con Docker
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.6.5 Modelo de despliegue
// ==============================
export const Content_1_6_5 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCloudUploadAlt className="text-purple-600 mr-3" />
            1.6.5. Modelo de despliegue
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                El modelo de despliegue describe cómo se distribuyen y ejecutan los microservicios en un
                entorno real (producción, staging, testing).
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen22.jpg"
                alt="Modelo de despliegue"
                caption="Diagrama de despliegue de microservicios"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Cada microservicio puede desplegarse por separado en:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-3">
                <li>Contenedores (Docker)</li>
                <li>Orquestadores (Kubernetes)</li>
                <li>Máquinas virtuales o servicios serverless</li>
            </ul>
            <p className="text-gray-700 mt-3">
                Este modelo permite alta disponibilidad, escalabilidad horizontal y automatización del ciclo de despliegue con CI/CD.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Antes, los despliegues eran monolíticos y difíciles de automatizar. Con los contenedores y la nube, surgieron estrategias modernas de despliegue como rolling updates, blue-green y canary releases.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Despliegue automático en Kubernetes de microservicios en clústeres</li>
                <li>Pipelines de CI/CD con GitHub Actions o GitLab para cada microservicio</li>
                <li>Uso de Docker Compose para entornos locales</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="video">
                    Despliegue de microservicios con Docker y Kubernetes
                </ResourceItem>
                <ResourceItem type="course">
                    CI/CD con microservicios - Platzi / Udemy
                </ResourceItem>
                <ResourceItem type="article">
                    Estrategias de despliegue en microservicios - RedHat
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// ==============================
// 1.6.6 Diseño de aplicaciones web
// ==============================
export const Content_1_6_6 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaPalette className="text-purple-600 mr-3" />
            1.6.6. Diseño de aplicaciones web
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                El diseño de aplicaciones web en microservicios requiere una arquitectura que permita dividir
                el frontend y backend por responsabilidades, reflejando la modularidad de los servicios.
            </p>
            <ImageWithCaption
                src="/images/unidad1/imagen23.jpg"
                alt="Diseño de aplicaciones web"
                caption="Diseño moderno de aplicaciones web"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                En este enfoque, la interfaz web consume APIs que provienen de distintos microservicios. El
                frontend puede ser monolítico o también modular (micro frontends). Se requiere una
                estrategia de integración, seguridad, autenticación y manejo de errores.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Inicialmente, las aplicaciones web estaban estrechamente acopladas al backend. Con
                microservicios y SPAs (Single Page Applications), surgió la necesidad de separar UI y lógica
                por completo.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>App en React que consume datos de varios servicios REST</li>
                <li>Micro frontend para el módulo de usuarios, separado del de pagos</li>
                <li>Integración de autenticación (OAuth2/JWT) desde el frontend hacia el gateway</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Micro Frontends - Martin Fowler
                </ResourceItem>
                <ResourceItem type="video">
                    Aplicaciones web desacopladas - Midudev
                </ResourceItem>
                <ResourceItem type="book">
                    Designing Web APIs - Brenda Jin
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// Exportar todos los componentes
const ContentUnit1Components = {
    Content_1_1,
    Content_1_2,
    Content_1_2_1,
    Content_1_3,
    Content_1_3_1,
    Content_1_3_2,
    Content_1_3_3,
    Content_1_4,
    Content_1_4_1,
    Content_1_4_2,
    Content_1_4_3,
    Content_1_4_4,
    Content_1_5,
    Content_1_5_1,
    Content_1_5_2,
    Content_1_5_3,
    Content_1_5_4,
    Content_1_6,
    Content_1_6_1,
    Content_1_6_2,
    Content_1_6_3,
    Content_1_6_4,
    Content_1_6_5,
    Content_1_6_6
};

export default ContentUnit1Components;