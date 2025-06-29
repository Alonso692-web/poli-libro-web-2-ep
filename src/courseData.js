import { FaBookmark, FaBookOpen, FaCertificate, FaBook, FaCog, FaLightbulb, FaBullseye, FaListAlt, FaTable, FaCheckCircle, FaInfoCircle, FaRegLightbulb, FaTasks } from 'react-icons/fa';
import { VscSymbolStructure } from "react-icons/vsc";
import { MdPending } from "react-icons/md";
import Image from 'next/image';
import * as ContentUnit3 from "./components/ContentUnit3";
import * as TableContentInfoGen from "./components/TableToolsInfoGen";

const FeatureIcon = ({ icon }) => (
    <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32 flex items-center justify-center">
            { }
            <div className="absolute w-full h-full bg-purple-100 rounded-lg transform rotate-45"></div>
            { }
            <div className="relative text-5xl text-purple-600">{icon}</div>
        </div>
    </div>
);

const bibliographyData = [
    { author: 'Holmes, S.', year: '2019', title: 'Getting MEAN with Mongo, Express, Angular, and Node', publisher: 'Manning/ 978-1617294754' },
    { author: 'Ottinger, J. y Linwood, J.', year: '2022', title: 'Beginning Hibernate 6: Java Persistence from Beginner to Pro', publisher: 'Apress/ 978-1-4842-7336-4' },
    { author: 'Shmeling, B. y Dargatz, M.', year: '2022', title: 'Kubernetes Native Development', publisher: 'Apress/ 978-1-4842-7941-0' },
    { author: 'Varanasi, B. y Bartkov, M.', year: '2022', title: 'Spring REST: Building Java Microservices and Cloud Applications', publisher: 'Apress/ 978-1-4842-7476-7' },
    { author: 'Zammeti, F.', year: '2020', title: 'Modern Full-Stack Development: Using TypeScript, React, Node.js, Webpack, and Docker', publisher: 'Apress/ 978-1484257371' },
];

const BienvenidaContent = () => (
    <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="text-gray-700 space-y-4 flex-1 prose max-w-none">
            <h4 className="text-xl font-bold text-purple-700">Comunidad estudiantil del Instituto Politécnico Nacional (IPN)</h4>
            <p>La Academia de Sistemas Computacionales de la Unidad Profesional Interdisciplinaria de Ingeniería Campus Zacatecas (UPIIZ) les da la más cordial bienvenida.</p>
            <p>El siguiente material didáctico de la unidad de aprendizaje Web Client and Backend Development Frameworks ha sido creado con la finalidad de apoyar su formación en la Ingeniería en Sistemas Computacionales, dentro del sistema escolarizado.</p>
            <p>El desarrollo web en cliente y servidor tiene una relación estrecha y ambos son fundamentales para entender los principios básicos que rigen las aplicaciones digitales en nuestra vida cotidiana. Desde el acceso a información en la web hasta la interacción en redes sociales y plataformas de comercio electrónico, estos conceptos han permitido la modernidad y el avance tecnológico en el que vivimos hoy en día.</p>
            <p>Este recurso en forma de polilibro pretende ser sencillo en su lenguaje y con explicaciones claras, sin perder rigor académico. Su objetivo es guiar al lector a través de los fundamentos y aplicaciones prácticas del desarrollo web, abordando tanto el lado del cliente como el del servidor, facilitando el aprendizaje de herramientas y técnicas esenciales en este campo.</p>
        </div>
        <div className="flex-shrink-0">
            <Image src="/images/bienvenidos.jpg" alt="Bienvenidos" width={400} height={250} className="rounded-md shadow-lg" />
        </div>
    </div>
);

// Placeholder para otros contenidos
const PlaceholderContent = ({ title }) => (
    <div className="text-center py-12 text-gray-500">
        <h3 className="text-2xl font-bold mb-2">Contenido para &quot;{title}&quot;</h3>
        <p>Este recurso está en construcción.</p>
    </div>
);

export const courseData = {
    title: "Web Client and Backend Development Frameworks",
    instructor: "Efraín Arredondo Morales",
    generalInfo: {
        slug: "info-general",
        title: "Información General",
        subtitle: "Antes de comenzar",
        banner: "/banners/info.jpg",
        subtext: "Introducción al curso y conceptos clave.",
        tabs: [
            {
                id: 'bienvenida',
                icon: <FaBookmark />,
                title: "Bienvenida",
                content: <BienvenidaContent />
            },
            {
                id: 'tecnologia',
                icon: <FaCog />,
                title: "Complementos tecnológicos",
                content: <TableContentInfoGen.TechToolsContent />
            },
            {
                id: 'concepto',
                icon: <FaLightbulb />,
                title: "Concepto Clave",
                content: (
                    <div className="prose max-w-none">
                        <h4 className="text-xl font-bold text-purple-700">El concepto de Desarrollo Web en Cliente y Servidor</h4>
                        <p>El desarrollo web moderno se basa en la interacción entre el cliente y el servidor para ofrecer experiencias dinámicas y funcionales a los usuarios. Desde la carga de una simple página web hasta la implementación de complejas aplicaciones en línea, la comunicación entre estos dos componentes es fundamental. El cliente, representado por navegadores y aplicaciones, solicita información, mientras que el servidor procesa dichas solicitudes y devuelve respuestas, permitiendo la interacción eficiente y segura entre usuarios y sistemas.</p>
                        &nbsp;
                        <p>Los frameworks de desarrollo en cliente y servidor han revolucionado la creación de aplicaciones web, facilitando la programación, mejorando la seguridad y optimizando el rendimiento. Tecnologías como React, Angular y Vue.js dominan el desarrollo del lado del cliente, mientras que frameworks como Express.js, Django, Laravel y Spring Boot lideran el backend, proporcionando estructuras robustas para la gestión de datos y la autenticación.</p>
                        &nbsp;
                        <p>El uso de estos frameworks permite desarrollar aplicaciones escalables y seguras, integrando bases de datos, APIs y otros servicios esenciales para el funcionamiento del ecosistema digital actual.</p>
                        &nbsp;
                        &nbsp;
                        <h4 className="text-xl font-bold text-purple-700">A cerca del polilibro</h4>
                        <ul className="list-none p-0 m-0">
                            <li className="py-2 px-4 border-b border-gray-200 last:border-b-0">Este material did&aacute;ctico est&aacute; estructurado para abordar de manera progresiva los conceptos esenciales del desarrollo web tanto en el cliente como en el servidor.</li>
                            <li className="py-2 px-4 border-b border-gray-200 last:border-b-0">Se iniciar&aacute; con una introducci&oacute;n a la arquitectura cliente-servidor, explicando los protocolos HTTP y WebSockets, fundamentales para la comunicaci&oacute;n entre ambos entornos. Nota: Agregar informaci&oacute;n sobre arquitecturas. **</li>
                            <li className="py-2 px-4 border-b border-gray-200 last:border-b-0">En cuanto al backend, se abordar&aacute; el uso de frameworks como Node.js con Express, Django con Python, Laravel con PHP y Spring Boot con Java. Se estudiar&aacute; la implementaci&oacute;n de controladores, modelos de datos y seguridad, as&iacute; como la conexi&oacute;n con bases de datos SQL y NoSQL.</li>
                            <li className="py-2 px-4 border-b border-gray-200 last:border-b-0">Posteriormente, se revisar&aacute;n los frameworks de desarrollo en el cliente, explorando las ventajas y caracter&iacute;sticas de bibliotecas como React, Angular y Vue.js. Se analizar&aacute; c&oacute;mo gestionan el estado, la interactividad y el rendimiento, as&iacute; como su integraci&oacute;n con APIs REST y GraphQL.</li>
                            <li className="py-2 px-4 border-b border-gray-200 last:border-b-0">Tambi&eacute;n se analizar&aacute; la gesti&oacute;n de autenticaci&oacute;n y autorizaci&oacute;n mediante JWT, OAuth y OpenID Connect, garantizando la protecci&oacute;n de la informaci&oacute;n y el acceso seguro a los recursos del sistema.</li>
                            <li className="py-2 px-4 border-b border-gray-200 last:border-b-0">Finalmente, se revisar&aacute;n los principios de despliegue y escalabilidad en la nube, cubriendo servicios como AWS, Azure y Google Cloud, as&iacute; como la implementaci&oacute;n de CI/CD para la automatizaci&oacute;n de pruebas y despliegue continuo. (Nota: agregar informaci&oacute;n sobre Contenedores.).</li>
                            <li className="py-2 px-4 border-b border-gray-200 last:border-b-0">Este material proporciona una gu&iacute;a completa para el aprendizaje del desarrollo web moderno, permitiendo a los estudiantes adquirir habilidades fundamentales para la creaci&oacute;n de aplicaciones eficientes y seguras en el entorno digital actual.</li>
                        </ul>
                    </div>
                )
            },
            {
                id: 'objetivo',
                icon: <FaBullseye />,
                title: "Objetivo General",
                content: (
                    <div className="prose max-w-none">
                        <h4 className="text-xl font-bold text-purple-700">Objetivo General del Polilibro</h4>
                        <p>Aplicar los conceptos y modelos de los frameworks de desarrollo web más populares para crear aplicaciones robustas, escalables y seguras, diferenciando claramente las responsabilidades del lado del cliente y del lado del servidor.</p>
                        <p>El apoyo didáctico de la unidad de aprendizaje de &quot;Web Client and Backend Development Frameworks&quot; tiene la finalidad complementar y reforzar el curso en su modalidad presencial.</p>
                    </div>
                )
            },
            {
                id: 'contenido',
                icon: <VscSymbolStructure />,
                title: "Contenido Temático",
                content: (
                    <div>
                        <h4 className="text-xl font-bold text-purple-700 mb-4 text-center">Contenido Temático del Polilibro</h4>
                        <iframe
                            src="/documents/VII sem Web Client And Backend Development Frameworks_.pdf" // La ruta pública a tu PDF
                            className="w-full h-[80vh] rounded-md border shadow-lg"
                            title="Contenido Temático del Polilibro PDF"
                        >
                            Tu navegador no soporta la visualización de PDFs. Puedes <a href="/documents/polilibro.pdf">descargarlo aquí</a>.
                        </iframe>
                    </div>
                )
            },
            {
                id: 'organizacion',
                icon: <FaListAlt />,
                title: "Organización del Polilibro",
                /*content: <OrganizationContent />*/
                content: (
                    <div className="text-center">
                        { }
                        <h4 className="text-2xl font-bold text-purple-700 mb-4">¿Cómo está organizado el Polilibro?</h4>

                        { }
                        <FeatureIcon icon={<FaListAlt />} />

                        { }
                        <div className="bg-slate-100 border border-slate-200 rounded-lg p-6 text-left shadow-inner">
                            { }
                            <div className="flex items-start gap-4 mb-4">
                                <span className="text-xl text-blue-500 mt-1 flex-shrink-0"><FaInfoCircle /></span>
                                <p className="text-gray-800">
                                    <strong>El Polilibro está diseñado por unidades.</strong> Cada una corresponde con los temas del programa autorizado de la unidad de aprendizaje. Para su estudio se cubren los temas de Introducción al Desarrollo Web, Frameworks de Cliente, Desarrollo en Servidor, Seguridad y Despliegue en la Nube.
                                </p>
                            </div>

                            { }
                            <div className="pl-6 ml-4 border-l-4 border-slate-300">
                                <p className="text-gray-600 italic">
                                    En cada unidad temática se proponen actividades de acuerdo al grado de comprensión que se requiere. Las actividades son: lecturas sugeridas, presentaciones, videos, ejercicios prácticos y proyectos que simulan escenarios del mundo real.
                                </p>
                            </div>

                            { }
                            <div className="flex justify-between items-center mt-6 border-t border-slate-200 pt-4 text-gray-500 font-semibold">
                                <button className="text-2xl hover:text-black transition-colors" title="Anterior">←</button>
                                <span>Pág. 1/2</span>
                                <button className="text-2xl hover:text-black transition-colors" title="Siguiente">→</button>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: 'evaluacion',
                icon: <FaCheckCircle />,
                title: "Tabla de Evaluación",
                content: (<div className="prose max-w-none">Tabla de evaluación</div>)
            },
            {
                id: 'actividades',
                icon: <FaTable />,
                title: "Rúbrica de Actividades",
                content: (<div className="prose max-w-none">Rúbrica de actividades</div>)
            },
            {
                id: 'bibliografia',
                icon: <FaBook />,
                title: "Bibliografía recomendada",
                content: (
                    <div className="text-left">
                        <h4 className="text-2xl font-bold text-purple-700 mb-4 text-center">Bibliografía recomendada para el estudio del Polilibro</h4>

                        <FeatureIcon icon={<FaBookOpen />} />

                        <ul className="space-y-5">
                            {bibliographyData.map((item, index) => (
                                <li key={index} className="border-b-2 border-dotted border-gray-200 pb-5">
                                    <div className="flex items-start gap-4">
                                        <span className="text-purple-500 text-lg mt-1"><FaCertificate /></span>
                                        <div>
                                            <p className="text-gray-800">
                                                <span className="font-semibold">{item.author} ({item.year}).</span>
                                                <em className="ml-1">{item.title}.</em>
                                            </p>
                                            <p className="text-gray-600">Editorial / ISBN: {item.publisher}.</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            },
            {
                id: 'acerca',
                icon: <MdPending />,
                title: "Acerca del polilibro",
                content: (<div className="prose max-w-none">Acerda del autor</div>)
            },

        ]
    },
    units:
        [
            {
                id: 1,
                slug: "unidad-1",
                title: "Unidad I",
                subtitle: "Arquitecturas de desarrollo web",
                banner: "/banners/intro.jpg",
                subtext: "Fundamentos, arquitecturas y principios del desarrollo web moderno.",
                objective: "Diseña una aplicación web con base en la arquitectura de microservicios, aplicando los principios comunes y los diferentes modelos arquitectónicos para una solución robusta y escalable.",
                content: [
                    {
                        id: "1.1",
                        slug: "1-1-principios-comunes-para-las-arquitecturas",
                        title: "1.1. Principios comunes para las arquitecturas",
                        component: <PlaceholderContent title="1.1. Principios comunes para las arquitecturas" />,
                        subtopics: []
                    },
                    {
                        id: "1.2",
                        slug: "1-2-arquitectura-monolitica",
                        title: "1.2. Arquitectura monolítica",
                        component: <PlaceholderContent title="1.2. Arquitectura monolítica" />,
                        subtopics: [
                            {
                                id: "1.2.1",
                                slug: "1-2-1-contenedores",
                                title: "1.2.1. Contenedores",
                                component: <PlaceholderContent title="1.2.1. Contenedores" />
                            }
                        ]
                    },
                    {
                        id: "1.3",
                        slug: "1-3-arquitectura-tradicional-de-n-capas",
                        title: "1.3. Arquitectura tradicional de n-capas",
                        component: <PlaceholderContent title="1.3. Arquitectura tradicional de n-capas" />,
                        subtopics: [
                            {
                                id: "1.3.1",
                                slug: "1-3-1-capa-de-acceso-a-datos",
                                title: "1.3.1. Capa de acceso a datos",
                                component: <PlaceholderContent title="1.3.1. Capa de acceso a datos" />
                            },
                            {
                                id: "1.3.2",
                                slug: "1-3-2-capa-de-logica-de-negocios",
                                title: "1.3.2. Capa de lógica de negocios",
                                component: <PlaceholderContent title="1.3.2. Capa de lógica de negocios" />
                            },
                            {
                                id: "1.3.3",
                                slug: "1-3-3-interfaz-de-usuario",
                                title: "1.3.3. Interfaz de usuario",
                                component: <PlaceholderContent title="1.3.3. Interfaz de usuario" />
                            }
                        ]
                    },
                    {
                        id: "1.4",
                        slug: "1-4-arquitectura-de-cebolla-arquitectura-limpia",
                        title: "1.4. Arquitectura de cebolla (arquitectura limpia)",
                        component: <PlaceholderContent title="1.4. Arquitectura de cebolla (arquitectura limpia)" />,
                        subtopics: [
                            {
                                id: "1.4.1",
                                slug: "1-4-1-modelo-del-dominio",
                                title: "1.4.1. Modelo del dominio",
                                component: <PlaceholderContent title="1.4.1. Modelo del dominio" />
                            },
                            {
                                id: "1.4.2",
                                slug: "1-4-2-interfaz-de-usuario",
                                title: "1.4.2. Interfaz de usuario",
                                component: <PlaceholderContent title="1.4.2. Interfaz de usuario" />
                            },
                            {
                                id: "1.4.3",
                                slug: "1-4-3-infraestructura",
                                title: "1.4.3. Infraestructura",
                                component: <PlaceholderContent title="1.4.3. Infraestructura" />
                            },
                            {
                                id: "1.4.4",
                                slug: "1-4-4-pruebas",
                                title: "1.4.4. Pruebas",
                                component: <PlaceholderContent title="1.4.4. Pruebas" />
                            }
                        ]
                    },
                    {
                        id: "1.5",
                        slug: "1-5-arquitectura-hexagonal",
                        title: "1.5. Arquitectura hexagonal",
                        component: <PlaceholderContent title="1.5. Arquitectura hexagonal" />,
                        subtopics: [
                            {
                                id: "1.5.1",
                                slug: "1-5-1-dominio-de-la-aplicacion",
                                title: "1.5.1. Dominio de la aplicación",
                                component: <PlaceholderContent title="1.5.1. Dominio de la aplicación" />
                            },
                            {
                                id: "1.5.2",
                                slug: "1-5-2-puertos",
                                title: "1.5.2. Puertos",
                                component: <PlaceholderContent title="1.5.2. Puertos" />
                            },
                            {
                                id: "1.5.3",
                                slug: "1-5-3-capa-de-servicios",
                                title: "1.5.3. Capa de servicios",
                                component: <PlaceholderContent title="1.5.3. Capa de servicios" />
                            },
                            {
                                id: "1.5.4",
                                slug: "1-5-4-adaptadores",
                                title: "1.5.4. Adaptadores",
                                component: <PlaceholderContent title="1.5.4. Adaptadores" />
                            }
                        ]
                    },
                    {
                        id: "1.6",
                        slug: "1-6-arquitectura-de-microservicios",
                        title: "1.6. Arquitectura de microservicios",
                        component: <PlaceholderContent title="1.6. Arquitectura de microservicios" />,
                        subtopics: [
                            {
                                id: "1.6.1",
                                slug: "1-6-1-fundamentos-de-microservicios",
                                title: "1.6.1. Fundamentos de microservicios",
                                component: <PlaceholderContent title="1.6.1. Fundamentos de microservicios" />
                            },
                            {
                                id: "1.6.2",
                                slug: "1-6-2-arquitectura-del-dominio",
                                title: "1.6.2. Arquitectura del dominio",
                                component: <PlaceholderContent title="1.6.2. Arquitectura del dominio" />
                            },
                            {
                                id: "1.6.3",
                                slug: "1-6-3-modelo-de-referencia",
                                title: "1.6.3. Modelo de referencia",
                                component: <PlaceholderContent title="1.6.3. Modelo de referencia" />
                            },
                            {
                                id: "1.6.4",
                                slug: "1-6-4-modelo-de-implementacion",
                                title: "1.6.4. Modelo de implementación",
                                component: <PlaceholderContent title="1.6.4. Modelo de implementación" />
                            },
                            {
                                id: "1.6.5",
                                slug: "1-6-5-modelo-de-despliegue",
                                title: "1.6.5. Modelo de despliegue",
                                component: <PlaceholderContent title="1.6.5. Modelo de despliegue" />
                            },
                            {
                                id: "1.6.6",
                                slug: "1-6-6-diseno-de-aplicaciones-web",
                                title: "1.6.6. Diseño de aplicaciones web",
                                component: <PlaceholderContent title="1.6.6. Diseño de aplicaciones web" />
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                slug: "unidad-2",
                title: "Unidad II",
                subtitle: "Desarrollo de APIs y servicios web",
                banner: "/banners/unidad2.jpg",
                subtext: "Principios, seguridad y buenas prácticas en la creación de APIs.",
                objective: "Desarrolla un sistema de servicios web con base en los principios arquitectónicos REST y APIs RESTful para la comunicación entre sistemas heterogéneos.",
                content: [
                    {
                        id: "2.1",
                        slug: "2-1-servicios-web",
                        title: "2.1. Servicios web",
                        component: <PlaceholderContent title="2.1. Servicios web" />,
                        subtopics: [
                            {
                                id: "2.1.1",
                                slug: "2-1-1-soap",
                                title: "2.1.1. SOAP",
                                component: <PlaceholderContent title="2.1.1. SOAP" />
                            },
                            {
                                id: "2.1.2",
                                slug: "2-1-2-rest",
                                title: "2.1.2. REST",
                                component: <PlaceholderContent title="2.1.2. REST" />
                            }
                        ]
                    },
                    {
                        id: "2.2",
                        slug: "2-2-intercambio-de-datos-entre-sistemas-heterogeneos",
                        title: "2.2. Intercambio de datos entre sistemas heterogéneos",
                        component: <PlaceholderContent title="2.2. Intercambio de datos entre sistemas heterogéneos" />,
                        subtopics: [
                            {
                                id: "2.2.1",
                                slug: "2-2-1-xml",
                                title: "2.2.1. XML",
                                component: <PlaceholderContent title="2.2.1. XML" />
                            },
                            {
                                id: "2.2.2",
                                slug: "2-2-2-json",
                                title: "2.2.2. JSON",
                                component: <PlaceholderContent title="2.2.2. JSON" />
                            }
                        ]
                    },
                    {
                        id: "2.3",
                        slug: "2-3-principios-arquitectonicos-de-una-api-restful",
                        title: "2.3. Principios arquitectónicos de una API RESTful",
                        component: <PlaceholderContent title="2.3. Principios arquitectónicos de una API RESTful" />,
                        subtopics: [
                            {
                                id: "2.3.1",
                                slug: "2-3-1-uris",
                                title: "2.3.1. URIs",
                                component: <PlaceholderContent title="2.3.1. URIs" />
                            },
                            {
                                id: "2.3.2",
                                slug: "2-3-2-verbo-get-para-obtener-un-recurso",
                                title: "2.3.2. Verbo GET para obtener un recurso",
                                component: <PlaceholderContent title="2.3.2. Verbo GET para obtener un recurso" />
                            },
                            {
                                id: "2.3.3",
                                slug: "2-3-3-verbo-post-para-crear-un-recurso",
                                title: "2.3.3. Verbo POST para crear un recurso",
                                component: <PlaceholderContent title="2.3.3. Verbo POST para crear un recurso" />
                            },
                            {
                                id: "2.3.4",
                                slug: "2-3-4-verbo-put-para-actualizar-un-recurso",
                                title: "2.3.4. Verbo PUT para actualizar un recurso",
                                component: <PlaceholderContent title="2.3.4. Verbo PUT para actualizar un recurso" />
                            },
                            {
                                id: "2.3.5",
                                slug: "2-3-5-verbo-delete-para-eliminar-un-recurso",
                                title: "2.3.5. Verbo DELETE para eliminar un recurso",
                                component: <PlaceholderContent title="2.3.5. Verbo DELETE para eliminar un recurso" />
                            },
                            {
                                id: "2.3.6",
                                slug: "2-3-6-codigos-de-respuesta",
                                title: "2.3.6. Códigos de respuesta",
                                component: <PlaceholderContent title="2.3.6. Códigos de respuesta" />
                            },
                            {
                                id: "2.3.7",
                                slug: "2-3-7-endpoints",
                                title: "2.3.7. Endpoints",
                                component: <PlaceholderContent title="2.3.7. Endpoints" />
                            }
                        ]
                    },
                    {
                        id: "2.4",
                        slug: "2-4-herramientas-de-depuracion",
                        title: "2.4. Herramientas de depuración",
                        component: <PlaceholderContent title="2.4. Herramientas de depuración" />,
                        subtopics: [
                            {
                                id: "2.4.1",
                                slug: "2-4-1-consumir-servicios-de-una-api-de-terceros",
                                title: "2.4.1. Consumir servicios de una API de terceros",
                                component: <PlaceholderContent title="2.4.1. Consumir servicios de una API de terceros" />
                            }
                        ]
                    },
                    {
                        id: "2.5",
                        slug: "2-5-buenas-practicas-para-la-creacion-de-apis",
                        title: "2.5. Buenas prácticas para la creación de API's",
                        component: <PlaceholderContent title="2.5. Buenas prácticas para la creación de API's" />,
                        subtopics: []
                    },
                    {
                        id: "2.6",
                        slug: "2-6-seguridad-de-servicios",
                        title: "2.6. Seguridad de servicios",
                        component: <PlaceholderContent title="2.6. Seguridad de servicios" />,
                        subtopics: [
                            {
                                id: "2.6.1",
                                slug: "2-6-1-seguridad-basada-en-sesiones",
                                title: "2.6.1. Seguridad basada en Sesiones",
                                component: <PlaceholderContent title="2.6.1. Seguridad basada en Sesiones" />
                            },
                            {
                                id: "2.6.2",
                                slug: "2-6-2-autenticacion-http-basica",
                                title: "2.6.2. Autenticación HTTP Básica",
                                component: <PlaceholderContent title="2.6.2. Autenticación HTTP Básica" />
                            },
                            {
                                id: "2.6.3",
                                slug: "2-6-3-autenticacion-implicita",
                                title: "2.6.3. Autenticación Implícita",
                                component: <PlaceholderContent title="2.6.3. Autenticación Implícita" />
                            },
                            {
                                id: "2.6.4",
                                slug: "2-6-4-seguridad-basada-en-certificados",
                                title: "2.6.4. Seguridad basada en certificados",
                                component: <PlaceholderContent title="2.6.4. Seguridad basada en certificados" />
                            },
                            {
                                id: "2.6.5",
                                slug: "2-6-5-autenticacion-basada-en-tokens",
                                title: "2.6.5. Autenticación basada en tokens",
                                component: <PlaceholderContent title="2.6.5. Autenticación basada en tokens" />
                            },
                            {
                                id: "2.6.6",
                                slug: "2-6-6-estandares-para-autorizacion-de-apis",
                                title: "2.6.6. Estándares para autorización de APIs",
                                component: <PlaceholderContent title="2.6.6. Estándares para autorización de APIs" />
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                slug: "unidad-3",
                title: "Unidad III",
                subtitle: "Desarrollo de aplicaciones del lado del servidor",
                banner: "/banners/unidad3.jpg",
                subtext: "Mapeo, tecnologías y servicios para el backend.",
                objective: "Desarrolla aplicaciones del lado del servidor a partir del mapeo objeto-relacional, tecnologías y servicios APIs y endpoints para una gestión de datos eficiente.",
                content: [
                    {
                        id: "3.1",
                        slug: "3-1-mapeo-objeto-relacional",
                        title: "3.1. Mapeo objeto relacional",
                        component: <ContentUnit3.Content_3_1 />,
                        subtopics: [
                            {
                                id: "3.1.1",
                                slug: "3-1-1-mapeo-de-entidades",
                                title: "3.1.1. Mapeo de entidades",
                                component: <ContentUnit3.Content_3_1_1 />
                            },
                            {
                                id: "3.1.2",
                                slug: "3-1-2-mapeo-de-atributos-persistentes",
                                title: "3.1.2. Mapeo de atributos persistentes",
                                component: <ContentUnit3.Content_3_1_2 />
                            },
                            {
                                id: "3.1.3",
                                slug: "3-1-3-mapeo-de-atributos-no-persistentes",
                                title: "3.1.3. Mapeo de atributos no persistentes",
                                component: <ContentUnit3.Content_3_1_3 />
                            },
                            {
                                id: "3.1.4",
                                slug: "3-1-4-mapeo-de-asociaciones",
                                title: "3.1.4. Mapeo de asociaciones",
                                component: <ContentUnit3.Content_3_1_4 />
                            },
                            {
                                id: "3.1.5",
                                slug: "3-1-5-estrategias-de-recuperacion-de-asociaciones",
                                title: "3.1.5. Estrategias de recuperación de asociaciones",
                                component: <ContentUnit3.Content_3_1_5 />
                            }
                        ],
                        activities: [
                            { id: "act-3-1", slug: "actividad-modelado-orm", title: "Actividad 1: Modelado y mapeo ORM", component: <ContentUnit3.Activity_U3_ORM /> }
                        ]
                    },
                    {
                        id: "3.2",
                        slug: "3-2-tecnologias-para-la-generacion-de-servicios",
                        title: "3.2. Tecnologías para la generación de servicios",
                        component: <ContentUnit3.Content_3_2 />,
                        subtopics: [ /* ... subtemas 3.2 ... */],
                        activities: [
                            { id: "act-3-2", slug: "actividad-manejo-errores", title: "Actividad 3: Manejo de errores y códigos HTTP", component: <ContentUnit3.Activity_U3_Errors /> }
                        ]
                    },
                    {
                        id: "3.3",
                        slug: "3-3-servicios-apis-y-endpoints",
                        title: "3.3. Servicios, APIS y endpoints",
                        component: <ContentUnit3.Content_3_3 />,
                        subtopics: [
                            {
                                id: "3.3.1",
                                slug: "3-3-1-generacion-y-publicacion",
                                title: "3.3.1. Generación y publicación",
                                component: <ContentUnit3.Content_3_3_1 />
                            },
                            {
                                id: "3.3.2",
                                slug: "3-3-2-control-de-acceso-http-cors",
                                title: "3.3.2. Control de acceso HTTP (CORS)",
                                component: <ContentUnit3.Content_3_3_2 />
                            },
                            {
                                id: "3.3.3",
                                slug: "3-3-3-documentacion",
                                title: "3.3.3. Documentación",
                                component: <ContentUnit3.Content_3_3_3 />
                            }
                        ],
                        activities: [
                            { id: "act-3-3", slug: "actividad-crud-rest", title: "Actividad 2: Implementación de un CRUD REST básico", component: <ContentUnit3.Activity_U3_CRUD /> },
                            { id: "act-3-4", slug: "actividad-seguridad-jwt", title: "Actividad 4: Seguridad de la API con JWT", component: <ContentUnit3.Activity_U3_JWT /> },
                            { id: "act-3-5", slug: "actividad-swagger-openapi", title: "Actividad 5: Documentación automática con Swagger/OpenAPI", component: <ContentUnit3.Activity_U3_Swagger /> },
                            { id: "act-3-6", slug: "actividad-cors-despliegue", title: "Actividad 6: Configuración de CORS y despliegue local", component: <ContentUnit3.Activity_U3_CORS /> }
                        ]
                    },
                    {
                        id: "3.4",
                        slug: "3-4-referencias",
                        title: "Referencias",
                        component: <ContentUnit3.References_U3 />,
                        subtopics: []
                    }
                ]
            },
        ],
};