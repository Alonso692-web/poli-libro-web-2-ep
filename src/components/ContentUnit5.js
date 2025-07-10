import React from 'react';
import Image from 'next/image';
import {
    FaCube,
    FaServer,
    FaCloud,
    FaCode,
    FaHistory,
    FaLaptopCode,
    FaGraduationCap,
    FaBox,
    FaDatabase,
    FaCogs,
    FaSyncAlt,
    FaLink,
    FaBook,
    FaYoutube
} from 'react-icons/fa';

// Componentes auxiliares (los mismos que proporcionaste)
const ContentSection = ({ title, children, icon }) => {
    const getIcon = () => {
        if (icon) return icon;
        switch (title) {
            case 'Introducción': return <FaCode className="text-yellow-500" />;
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

const ResourceItemURL = ({ type, url, children }) => {
    const icons = {
        video: <FaYoutube className="text-red-500 mr-2" />,
        article: <FaLink className="text-blue-500 mr-2" />,
        book: <FaBook className="text-green-500 mr-2" />,
        documentation: <FaBook className="text-indigo-500 mr-2" />
    };

    return (
        <li className="flex items-start mb-2 bg-gray-50 p-3 rounded hover:bg-gray-100 transition">
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                {icons[type] || <FaLink className="mr-2" />}
                {children}
            </a>
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

// Componentes de contenido para la Unidad V
export const Content_5_1_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCube className="text-purple-600 mr-3" />
            5.1.1. Entornos virtuales para desarrollo de aplicaciones
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Los entornos virtuales se han convertido en una herramienta esencial para los desarrolladores modernos,
                permitiéndoles aislar proyectos, gestionar dependencias y mantener un control preciso sobre las configuraciones
                del sistema. Estos entornos proporcionan una forma segura y flexible de desarrollar software sin interferir
                con otros proyectos o con la configuración global del sistema operativo.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Un entorno virtual para desarrollo de aplicaciones es un entorno aislado dentro del sistema operativo,
                donde se pueden instalar paquetes, bibliotecas y configuraciones específicas sin afectar al resto del sistema
                o a otros entornos. Este concepto es ampliamente utilizado en lenguajes como Python, Node.js o Ruby.
            </p>
            <div className="text-gray-700 mt-2">
                Ejemplos:
                <ul className="list-disc pl-5 mt-2">
                    <li>Python: venv o virtualenv</li>
                    <li>Node.js: npm para dependencias locales</li>
                    <li>Java: Maven o Gradle</li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Antes de los entornos virtuales, los desarrolladores instalaban dependencias globalmente, lo que causaba
                conflictos entre versiones de bibliotecas y dificultaba el mantenimiento de múltiples proyectos.
                El avance en herramientas de aislamiento permitió mayor eficiencia, especialmente con la popularización
                del desarrollo ágil y la integración continua.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Proyecto en Python con Django 3.2 coexiste con otro usando Flask 2.0</li>
                <li>Entorno virtual en Node.js evita conflictos entre proyectos con diferentes versiones de React</li>
                <li>Estudiantes replican proyectos usando entornos virtuales descritos en requirements.txt</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItemURL type="documentation" url="https://docs.python.org/3/library/venv.html">
                    Python venv
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://docs.npmjs.com/cli/v9/configuring-npm/folders">
                    Node.js y NPM
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://bundler.io/">
                    Ruby Bundler
                </ResourceItemURL>
                <ResourceItemURL type="article" url="https://realpython.com/python-virtualenvironments-a-primer/">
                    ¿Por qué usar entornos virtuales?
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

export const Content_5_1_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCube className="text-purple-600 mr-3" />
            5.1.2. Creación y edición de entornos virtuales
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La creación y edición de entornos virtuales permite configurar espacios de trabajo independientes que
                contienen solo las herramientas y dependencias necesarias para un proyecto específico. Esta práctica mejora
                la organización, evita conflictos y facilita el mantenimiento del código.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Crear un entorno virtual implica generar un espacio aislado del sistema principal donde se pueden instalar
                bibliotecas sin afectar el resto del sistema. La edición implica modificar configuraciones, instalar nuevas
                dependencias o actualizar existentes.
            </p>
            <div className="text-gray-700 mt-2">
                Herramientas por lenguaje:
                <ul className="list-disc pl-5 mt-2">
                    <li>Python: <code>python -m venv entorno</code></li>
                    <li>Node.js: <code>npm init</code> y package.json</li>
                    <li>Ruby: rvm o rbenv con Gemfile</li>
                    <li>Java: Maven/Gradle con pom.xml/build.gradle</li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Durante años, el desarrollo se realizaba directamente sobre el sistema operativo principal, generando
                conflictos y problemas de portabilidad. La necesidad de replicar entornos fácilmente llevó al desarrollo
                de herramientas impulsadas por la filosofía de &quot;ambientes reproducibles&quot;.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Creación de entorno Python para sistema de reconocimiento de voz</li>
                <li>Proyecto JavaScript con React y Redux usando package.json con versiones exactas</li>
                <li>Configuración de entorno de pruebas automatizadas con bibliotecas específicas</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItemURL type="article" url="https://realpython.com/python-virtual-environments-a-primer/">
                    Crear entorno virtual en Python
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://docs.python.org/3/tutorial/venv.html">
                    Edición de entornos en Python
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://docs.npmjs.com/about-package-json">
                    Gestión de paquetes en Node.js
                </ResourceItemURL>
                <ResourceItemURL type="article" url="https://towardsdatascience.com/virtualenv-vs-venv-59c671b7d5f4">
                    Virtualenv vs venv
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

export const Content_5_1_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCube className="text-purple-600 mr-3" />
            5.1.3. Gestión e instalación de herramientas en entornos virtuales
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Una vez creado un entorno virtual, el siguiente paso es instalar y gestionar herramientas dentro de él.
                Esto permite tener control total sobre bibliotecas, frameworks y utilidades necesarias, manteniendo el proyecto
                aislado del resto del sistema.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                La gestión de herramientas implica instalar, actualizar, listar o eliminar paquetes y dependencias.
                Cada entorno tiene su propio gestor:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>Python: pip (pip install numpy)</li>
                <li>Node.js: npm o yarn (npm install express)</li>
                <li>Ruby: gem y Bundler (bundle install)</li>
                <li>Java: Maven/Gradle con archivos declarativos</li>
            </ul>
            <p className="text-gray-700 mt-3">
                Es común registrar dependencias en archivos como requirements.txt (Python), package.json (Node.js)
                o Gemfile (Ruby) para replicación exacta del entorno.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                La evolución de entornos virtuales trajo la necesidad de automatizar la instalación. En el pasado,
                instalar librerías manualmente era propenso a errores. Hoy los gestores permiten instalación rápida,
                segura y controlada.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Científico de datos instala pandas, scikit-learn y matplotlib para análisis</li>
                <li>Desarrollador instala Django y gunicorn en entorno separado</li>
                <li>Aplicación Node.js usa npm install para express, cors y jsonwebtoken</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItemURL type="documentation" url="https://pip.pypa.io/en/stable/">
                    pip (Python)
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://docs.npmjs.com/">
                    npm (Node.js)
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://bundler.io/">
                    Bundler (Ruby)
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://maven.apache.org/guides/index.html">
                    Maven (Java)
                </ResourceItemURL>
                <ResourceItemURL type="article" url="https://www.activestate.com/resources/quick-reads/how-to-use-pip-and-requirements-txt/">
                    Cómo crear y usar requirements.txt
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

export const Content_5_2_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaServer className="text-blue-600 mr-3" />
            5.2.1. Características de los contenedores virtuales de aplicación
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Los contenedores virtuales de aplicación han transformado el desarrollo y despliegue de software
                al proporcionar entornos ligeros, portables y consistentes. Su popularidad crece por su capacidad
                para ejecutar aplicaciones de manera aislada y reproducible en cualquier infraestructura.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Un contenedor virtual es una unidad ejecutable que empaqueta código, dependencias, bibliotecas y
                configuraciones necesarias. A diferencia de máquinas virtuales, no requieren sistema operativo completo,
                siendo más livianos y eficientes.
            </p>
            <div className="text-gray-700 mt-2">
                Características principales:
                <ul className="list-disc pl-5 mt-2">
                    <li>Aislamiento: cada contenedor se ejecuta independientemente</li>
                    <li>Portabilidad: ejecutable en cualquier sistema con motor de contenedores</li>
                    <li>Eficiencia: menos recursos que máquina virtual tradicional</li>
                    <li>Escalabilidad: ideal para microservicios y despliegue en nube</li>
                    <li>Reproducibilidad: misma ejecución en desarrollo, pruebas y producción</li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                El concepto se originó en UNIX con herramientas como chroot y evolucionó con LXC (Linux Containers).
                Docker (2013) hizo accesible y estandarizó el uso de contenedores, siendo ampliamente adoptado.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Empresa despliega backend en contenedor Docker para consistencia entre entornos</li>
                <li>Arquitectura de microservicios con cada componente en su propio contenedor</li>
                <li>Estudiantes configuran ambientes con contenedores para practicar tecnologías</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItemURL type="documentation" url="https://www.docker.com/resources/what-container/">
                    ¿Qué es un contenedor? (Docker)
                </ResourceItemURL>
                <ResourceItemURL type="article" url="https://www.redhat.com/en/topics/containers/containers-vs-virtual-machines">
                    Contenedores vs Máquinas Virtuales
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://docs.docker.com/get-started/">
                    Introducción a Docker
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://kubernetes.io/docs/concepts/overview/what-is-container/">
                    Arquitectura de contenedores
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

export const Content_5_2_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaServer className="text-blue-600 mr-3" />
            5.2.2. Repositorios de aplicación en la Nube
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Los repositorios de aplicación en la nube permiten almacenar, distribuir y gestionar imágenes de contenedores,
                paquetes de software o código fuente de manera centralizada y accesible globalmente. Son clave para despliegue
                automatizado y colaboración en proyectos modernos.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Un repositorio en la nube es un servicio para guardar versiones empaquetadas de aplicaciones (contenedores,
                librerías o binarios). Pueden ser públicos o privados, con funciones como:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>Control de versiones</li>
                <li>Autenticación y autorización</li>
                <li>Escaneo de vulnerabilidades</li>
                <li>Integración con CI/CD</li>
                <li>Alta disponibilidad</li>
            </ul>
            <div className="text-gray-700 mt-3">
                Tipos según uso:
                <ul className="list-disc pl-5 mt-2">
                    <li>Contenedores: Docker Hub, GitHub Container Registry, Amazon ECR</li>
                    <li>Paquetes: npm, PyPI, Maven Central, RubyGems</li>
                    <li>Código y artefactos: GitHub, GitLab, Nexus, Artifactory</li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Antes del auge de contenedores y nube, los desarrolladores almacenaban binarios en servidores propios o
                distribuían manualmente. Con contenedores y entrega continua, surgieron plataformas especializadas para
                alojar imágenes de forma segura, escalable y automatizada.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Empresa sube imágenes Docker a Docker Hub para despliegue automático</li>
                <li>Proyecto open source publica paquetes en npm para facilitar instalación</li>
                <li>Equipo DevOps usa Amazon ECR como repositorio privado para microservicios</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItemURL type="website" url="https://hub.docker.com/">
                    Docker Hub
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry">
                    GitHub Container Registry
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://pypi.org/">
                    PyPI
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html">
                    Amazon ECR
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://www.sonatype.com/products/repository-oss">
                    Nexus Repository OSS
                </ResourceItemURL>
                <ResourceItemURL type="article" url="https://thenewstack.io/comparing-top-container-registries/">
                    Comparativa de registries de contenedores
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

export const Content_5_2_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaServer className="text-blue-600 mr-3" />
            5.2.3. Gestión de contenedores de aplicación
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La gestión de contenedores es fundamental en el ciclo de vida de aplicaciones modernas. Permite supervisar,
                escalar, actualizar y mantener contenedores en diferentes entornos, garantizando funcionamiento correcto
                de forma automatizada y eficiente.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                La gestión abarca todas las actividades para operar contenedores efectivamente:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>Creación y ejecución</li>
                <li>Supervisión del estado (monitoring)</li>
                <li>Escalado horizontal/vertical</li>
                <li>Actualización y despliegue continuo</li>
                <li>Orquestación de múltiples contenedores</li>
                <li>Manejo de redes, volúmenes y seguridad</li>
            </ul>
            <div className="text-gray-700 mt-3">
                Herramientas principales:
                <ul className="list-disc pl-5 mt-2">
                    <li>Docker CLI: gestión básica</li>
                    <li>Docker Compose: múltiples contenedores (archivos YAML)</li>
                    <li>Kubernetes: orquestación automatizada</li>
                    <li>Portainer: interfaz web visual</li>
                    <li>Rancher: gestión de clústeres Kubernetes</li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Inicialmente, los contenedores se gestionaban manualmente con comandos básicos de Docker. Al crecer
                sistemas en complejidad y número de contenedores, surgió la necesidad de herramientas más potentes para
                orquestación y automatización. Kubernetes, desarrollado por Google, se consolidó como estándar.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Desarrollador usa Docker Compose para app web con contenedores para frontend, backend y BD</li>
                <li>Empresa usa Kubernetes para administrar cientos de contenedores en producción</li>
                <li>Equipo DevOps monitoriza contenedores con Prometheus y Grafana</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItemURL type="documentation" url="https://docs.docker.com/engine/reference/commandline/docker/">
                    Docker CLI
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://docs.docker.com/compose/">
                    Docker Compose
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://kubernetes.io/docs/concepts/">
                    Kubernetes (conceptos)
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://www.portainer.io/">
                    Portainer
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://www.rancher.com/">
                    Rancher
                </ResourceItemURL>
                <ResourceItemURL type="article" url="https://www.redhat.com/en/topics/containers/docker-vs-kubernetes">
                    Comparativa Docker Swarm vs Kubernetes
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

export const Content_5_3_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCloud className="text-teal-600 mr-3" />
            5.3.1. Desarrollo de servicios y API
        </h2>

        <ContentSection title="Introducción">
            <div>
                <p className="text-gray-700">
                    El desarrollo de servicios y APIs es un pilar fundamental en sistemas modernos, especialmente en arquitecturas
                    basadas en nube y microservicios. Las APIs permiten que diferentes sistemas, módulos o aplicaciones se comuniquen
                    de manera estandarizada, segura y eficiente.
                </p>
            </div>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <div>
                <p className="text-gray-700">
                    Desarrollar servicios y APIs implica crear puntos de acceso que permiten a otros programas consumir funcionalidades o datos:
                </p>
                <div className="text-gray-700 mt-2">
                    Tipos de APIs:
                    <ul className="list-disc pl-5 mt-2">
                        <li>REST: usa HTTP, recursos en JSON/XML</li>
                        <li>SOAP: protocolo estricto basado en XML</li>
                        <li>GraphQL: cliente especifica datos necesarios</li>
                    </ul>
                </div>
                <div className="text-gray-700 mt-3">
                    Tipos de desarrollo:
                    <ul className="list-disc pl-5 mt-2">
                        <li>Backend personalizado (Node.js, Flask, Django)</li>
                        <li>Backend como servicio (BaaS: Firebase, Supabase)</li>
                    </ul>
                </div>
            </div>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Antes del auge de APIs, las aplicaciones eran monolíticas sin formas estandarizadas de interacción externa.
                Con internet y el modelo cliente-servidor, surgieron servicios web seguidos por APIs REST como forma más ligera,
                flexible y escalable de conectar aplicaciones.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Aplicación móvil consulta API REST para autenticación y datos personales</li>
                <li>Sistema de pagos usa API externa como Stripe o PayPal</li>
                <li>Plataforma educativa implementa servicio interno para horarios y calificaciones</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItemURL type="article" url="https://www.redhat.com/es/topics/api/what-are-application-programming-interfaces">
                    ¿Qué es una API?
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://restfulapi.net/">
                    RESTful APIs
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://graphql.org/learn/">
                    GraphQL
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://cloud.google.com/apis/design">
                    Guía de diseño de API de Google
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://firebase.google.com/docs/reference/rest/database">
                    Firebase REST API
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

export const Content_5_3_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCloud className="text-teal-600 mr-3" />
            5.3.2. Microservicios
        </h2>

        <ContentSection title="Introducción">
            <div>
                <p className="text-gray-700">
                    Los microservicios representan una arquitectura que divide una aplicación en múltiples servicios pequeños
                    e independientes, cada uno encargado de una función específica. Permite mayor flexibilidad, escalabilidad
                    y facilidad de mantenimiento en sistemas complejos y distribuidos.
                </p>
            </div>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <div>
                <p className="text-gray-700">
                    Cada microservicio cumple una única responsabilidad, tiene su propia lógica y puede desplegarse/escalarse
                    independientemente.
                </p>
                <div className="text-gray-700 mt-2">
                    Características principales:
                    <ul className="list-disc pl-5 mt-2">
                        <li>Desacoplamiento: cada servicio como proceso separado</li>
                        <li>Escalabilidad independiente</li>
                        <li>Despliegue autónomo</li>
                        <li>Tecnología heterogénea</li>
                        <li>Comunicación por API (HTTP/REST, gRPC, colas)</li>
                    </ul>
                </div>
                <p className="text-gray-700 mt-3">
                    Comúnmente gestionados con herramientas como Kubernetes y Docker.
                </p>
            </div>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <div>
                <p className="text-gray-700">
                    El modelo monolítico tradicional obligaba a desplegar toda la aplicación incluso por cambios pequeños,
                    provocando cuellos de botella. El término &quot;microservicios&quot; se popularizó en la década de 2010, adoptado por
                    empresas como Netflix, Amazon y Spotify para soluciones escalables y modulares.
                </p>
            </div>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Tienda en línea: microservicios para carrito, pagos, catálogo y autenticación</li>
                    <li>Empresa financiera: operaciones bancarias, notificaciones, verificación de identidad</li>
                    <li>Universidad: gestión de alumnos, materias, inscripciones y certificados</li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <div>
                <ul className="space-y-3">
                    <ResourceItemURL type="article" url="https://martinfowler.com/articles/microservices.html">
                        ¿Qué son los microservicios?
                    </ResourceItemURL>
                    <ResourceItemURL type="article" url="https://www.redhat.com/es/topics/microservices">
                        Microservices en Red Hat
                    </ResourceItemURL>
                    <ResourceItemURL type="article" url="https://aws.amazon.com/es/microservices/">
                        Microservicios vs Monolitos
                    </ResourceItemURL>
                    <ResourceItemURL type="article" url="https://learn.microsoft.com/es-es/azure/architecture/patterns/api-gateway">
                        Patrón API Gateway
                    </ResourceItemURL>
                    <ResourceItemURL type="website" url="https://microservices.io/">
                        Diseño de microservicios
                    </ResourceItemURL>
                </ul>
            </div>
        </ContentSection>
    </div>
);

export const Content_5_3_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCloud className="text-teal-600 mr-3" />
            5.3.3. Sistemas de comunicaciones entre microservicios
        </h2>

        <ContentSection title="Introducción">
            <div>
                <p className="text-gray-700">
                    En arquitecturas basadas en microservicios, donde múltiples servicios independientes interactúan,
                    es esencial establecer mecanismos eficaces de comunicación. Estos sistemas permiten intercambio de datos
                    y coordinación entre servicios distribuidos, asegurando funcionalidad completa.
                </p>
            </div>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <div>
                <p className="text-gray-700">
                    Los sistemas definen cómo los servicios se conectan y comparten información:
                </p>
            </div>
            <div className="text-gray-700 mt-2">
                Tipos de comunicación:
                <ul className="list-disc pl-5 mt-2">
                    <li>
                        <strong>Sincrónica (cliente-servidor):</strong>
                        <ul className="list-disc pl-5 mt-1">
                            <li>Protocolos: HTTP/REST, gRPC</li>
                            <li>Emisor espera respuesta inmediata</li>
                            <li>Ejemplo: API de pedidos consulta stock</li>
                        </ul>
                    </li>
                    <li className="mt-3">
                        <strong>Asincrónica (mensajes):</strong>
                        <ul className="list-disc pl-5 mt-1">
                            <li>Sistemas: RabbitMQ, Kafka, Amazon SQS</li>
                            <li>No requiere esperar respuesta</li>
                            <li>Ideal para desacoplar servicios</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="text-gray-700 mt-3">
                Patrones de administración:
                <ul className="list-disc pl-5 mt-2">
                    <li>API Gateway: punto de entrada único</li>
                    <li>Service Discovery: encontrar servicios dinámicamente</li>
                    <li>Event Bus/Event Streaming: manejo de eventos</li>
                </ul>
            </div>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <div>
                <p className="text-gray-700">
                    Inicialmente, sistemas distribuidos usaban SOAP o RPC. Con microservicios, surgieron necesidades como
                    tolerancia a fallos, escalabilidad horizontal y comunicación flexible, motivando soluciones asincrónicas
                    y herramientas como Kafka y gRPC.
                </p>
            </div>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>E-commerce usa event bus para servicio de facturación escuchar eventos de &quot;nuevo pedido&quot;</li>
                <li>API Gateway dirige solicitudes a microservicios de autenticación, pedidos y pagos</li>
                <li>Sistema educativo emplea RabbitMQ para interacción entre calificaciones y notificaciones</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItemURL type="website" url="https://microservices.io/patterns/communication-style/index.html">
                    Comunicación en microservicios
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://grpc.io/docs/">
                    gRPC
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://kafka.apache.org/">
                    Apache Kafka
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://www.rabbitmq.com/">
                    RabbitMQ
                </ResourceItemURL>
                <ResourceItemURL type="article" url="https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven">
                    Arquitectura basada en eventos
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

// Componente principal para 5.1: Entornos virtuales
export const Content_5_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCube className="text-purple-600 mr-3" />
            5.1. Entornos virtuales
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Los entornos virtuales son herramientas fundamentales para el desarrollo de software moderno,
                ya que permiten crear espacios aislados dentro de un sistema operativo donde se pueden instalar
                y gestionar dependencias sin afectar otras aplicaciones o el sistema global. Esto facilita la
                organización, portabilidad y reproducibilidad de proyectos, mejorando la eficiencia del desarrollo.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Un entorno virtual es un entorno de ejecución separado que contiene su propio conjunto de dependencias,
                librerías y configuraciones específicas para un proyecto o conjunto de proyectos. Esto evita conflictos
                entre versiones de paquetes y facilita el control sobre las herramientas usadas.
            </p>
            <p className="text-gray-700 mt-3">
                Los entornos virtuales son ampliamente utilizados en distintos lenguajes de programación:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li><strong>Python:</strong> venv, virtualenv</li>
                <li><strong>Node.js:</strong> npm para dependencias locales</li>
                <li><strong>Ruby:</strong> rvm, rbenv</li>
                <li><strong>Java:</strong> Maven, Gradle</li>
            </ul>
            <ImageWithCaption
                src="/images/unidad5/entornos-virtuales.jpg"
                alt="Diagrama de entornos virtuales"
                caption="Aislamiento de dependencias con entornos virtuales"
                width={600}
            />
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Tradicionalmente, las dependencias y bibliotecas se instalaban de manera global en el sistema,
                lo que ocasionaba problemas cuando múltiples proyectos requerían diferentes versiones del mismo paquete.
                Esto motivó la creación de soluciones para aislar ambientes de desarrollo, especialmente a medida que
                el software se volvió más complejo y se adoptaron metodologías ágiles que demandan entornos reproducibles.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Desarrollador crea entorno virtual en Python para probar proyecto con versión específica de Django</li>
                <li>Equipo en Node.js usa package.json para mantener dependencias exactas por proyecto</li>
                <li>En Ruby, se utilizan entornos virtuales para manejar distintas versiones de gems</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItemURL type="article" url="https://realpython.com/python-virtual-environments-a-primer/">
                    Introducción a entornos virtuales en Python
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://docs.npmjs.com/eli/v9/configuring-npm/folders">
                    Gestión de dependencias en Node.js
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://rvm.io/">
                    Ruby Version Manager (RVM)
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://maven.apache.org/guides/index.html">
                    Maven para Java
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

// Componente principal para 5.2: Contenedores virtuales de aplicación
export const Content_5_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaServer className="text-blue-600 mr-3" />
            5.2. Contenedores virtuales de aplicación
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                Los contenedores virtuales de aplicación representan una tecnología revolucionaria que permite
                empaquetar aplicaciones junto con todas sus dependencias y configuraciones en unidades ligeras,
                portables y eficientes. Esto facilita el desarrollo, despliegue y operación de software en entornos
                diversos con consistencia.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                Un contenedor virtual es un método para aislar aplicaciones y sus dependencias dentro de un sistema
                operativo, permitiendo que la aplicación se ejecute de forma consistente sin importar el entorno
                subyacente. A diferencia de las máquinas virtuales tradicionales, los contenedores comparten el núcleo
                del sistema operativo pero mantienen aislados los procesos y recursos necesarios para la ejecución.
            </p>
            <p className="text-gray-700 mt-3">
                Características clave:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li><strong>Portabilidad:</strong> ejecutable en cualquier plataforma compatible</li>
                <li><strong>Ligereza:</strong> consume menos recursos que una máquina virtual</li>
                <li><strong>Rapidez:</strong> tiempo de arranque mucho más rápido</li>
                <li><strong>Aislamiento:</strong> permite ejecutar múltiples contenedores sin interferencias</li>
            </ul>
            <ImageWithCaption
                src="/images/unidad5/contenedores.jpg"
                alt="Arquitectura de contenedores"
                caption="Comparación entre máquinas virtuales y contenedores"
                width={650}
            />
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                El concepto de contenedores no es nuevo; en sistemas UNIX existían herramientas como chroot que
                permitían aislar procesos. Sin embargo, el auge de los contenedores modernos comenzó con Linux
                Containers (LXC) y alcanzó popularidad con la aparición de Docker en 2013, que simplificó
                enormemente la creación y distribución de contenedores.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Desplegar aplicaciones web con Docker para consistencia entre entornos</li>
                <li>Utilizar Kubernetes para orquestar y escalar automáticamente contenedores en la nube</li>
                <li>En laboratorios de formación, usar contenedores para proporcionar entornos limpios y reproducibles</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItemURL type="documentation" url="https://docs.docker.com/get-started/">
                    Introducción a Docker
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://www.docker.com/resources/what-container/">
                    ¿Qué es un contenedor?
                </ResourceItemURL>
                <ResourceItemURL type="documentation" url="https://kubernetes.io/docs/concepts/overview/what-is-container/">
                    Kubernetes - Conceptos básicos
                </ResourceItemURL>
                <ResourceItemURL type="article" url="https://www.redhat.com/en/topics/containers/containers-vs-virtual-machines">
                    Historia y evolución de contenedores
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

// Componente principal para 5.3: Plataforma como servicio (PaaS)
export const Content_5_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCloud className="text-teal-600 mr-3" />
            5.3. La plataforma como servicio (Platform as a Service: PaaS)
        </h2>

        <ContentSection title="Introducción">
            <p className="text-gray-700">
                La Plataforma como Servicio (PaaS) es un modelo de computación en la nube que proporciona a los
                desarrolladores un entorno completo para construir, probar, desplegar y gestionar aplicaciones sin
                la complejidad de administrar la infraestructura subyacente. Esto permite acelerar el desarrollo y
                simplificar la operación de software.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p className="text-gray-700">
                PaaS ofrece servicios que incluyen servidores, almacenamiento, redes, sistemas operativos, bases de
                datos y herramientas de desarrollo como compiladores, bibliotecas y entornos de ejecución. Los
                desarrolladores pueden enfocarse en escribir código y desarrollar funcionalidades, mientras el
                proveedor de la plataforma gestiona la infraestructura, la escalabilidad y la seguridad.
            </p>
            <p className="text-gray-700 mt-3">
                Características clave:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>Entorno de desarrollo integrado</li>
                <li>Automatización del despliegue</li>
                <li>Escalabilidad automática</li>
                <li>Soporte para múltiples lenguajes y frameworks</li>
                <li>Gestión simplificada de bases de datos y middleware</li>
            </ul>
            <ImageWithCaption
                src="/images/unidad5/paas.jpg"
                alt="Modelo PaaS"
                caption="Arquitectura de Plataforma como Servicio (PaaS)"
                width={600}
            />
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p className="text-gray-700">
                Con la evolución de la computación en la nube, surgieron distintos modelos para ofrecer recursos
                como servicio: Infraestructura como Servicio (IaaS), Plataforma como Servicio (PaaS) y Software
                como Servicio (SaaS). PaaS nació para cubrir la necesidad de un entorno que facilitara el desarrollo
                y despliegue de aplicaciones sin necesidad de manejar detalles complejos de infraestructura,
                permitiendo a las empresas y desarrolladores ser más ágiles.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Startup usa Heroku para desplegar rápidamente su aplicación web</li>
                <li>Equipo de desarrollo emplea Google App Engine para escalar automáticamente su API REST</li>
                <li>Empresas usan Azure App Service para aplicaciones web con integración continua</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItemURL type="article" url="https://azure.microsoft.com/es-es/overview/what-is-paas/">
                    ¿Qué es PaaS? (Microsoft Azure)
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://cloud.google.com/appengine">
                    Google App Engine
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://www.heroku.com/">
                    Heroku
                </ResourceItemURL>
                <ResourceItemURL type="website" url="https://aws.amazon.com/elasticbeanstalk/">
                    AWS Elastic Beanstalk
                </ResourceItemURL>
                <ResourceItemURL type="article" url="https://www.ibm.com/cloud/learn/iaas-paas-saas">
                    Diferencias entre IaaS, PaaS y SaaS
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

export const References_U5 = () => (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg my-8">
        <h4 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3 mb-6">
            Bibliografía y Recursos Digitales - Unidad 5
        </h4>

        <div className="space-y-8">
            <div>
                <ul className="space-y-2 mt-6">
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Boettiger, C. (2015). <a
                            href="https://doi.org/10.1145/2723872.2723882"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            An introduction to Docker for reproducible research
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Burns, B., Grant, B., Oppenheimer, D., Brewer, E., & Wilkes, J. (2016). <a
                            href="https://doi.org/10.1145/2890784"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Borg, Omega, and Kubernetes
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Fowler, M. (2014). <a
                            href="https://martinfowler.com/articles/microservices.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Microservices
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>IBM Cloud Education. (2022). <a
                            href="https://www.ibm.com/cloud/learn/paas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Platform as a Service (PaaS)
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Kief Morris. (2016). <a
                            href="https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Infrastructure as Code: Managing Servers in the Cloud
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Merkel, D. (2014). <a
                            href="https://www.linuxjournal.com/content/docker-lightweight-linux-containers-consistent-development-and-deployment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Docker: lightweight Linux containers for consistent development and deployment
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Newman, S. (2015). <a
                            href="https://www.oreilly.com/library/view/building-microservices/9781491950340/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Building Microservices: Designing Fine-Grained Systems
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Pahl, C., & Xiong, H. (2019). <a
                            href="https://doi.org/10.1109/MS.2019.290111783"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Microservices: A Systematic Mapping Study
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Richardson, C. (2018). <a
                            href="https://www.manning.com/books/microservices-patterns"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Microservices Patterns: With examples in Java
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Shadle, M., & Jennings, R. (2019). <a
                            href="https://www.pearson.com/store/p/cloud-computing-concepts-technology-architecture/P100001672711"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Cloud Computing: Concepts, Technology & Architecture
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Turnbull, J. (2014). <a
                            href="https://dockerbook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            The Docker Book: Containerization is the new virtualization
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Zakhour, R., & Arora, A. (2020). <a
                            href="https://doi.org/10.1186/s13677-020-00177-x"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            A survey on container orchestration frameworks: Kubernetes, Docker Swarm, and Apache Mesos
                        </a></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);