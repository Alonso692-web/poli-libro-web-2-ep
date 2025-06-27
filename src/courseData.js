// src/courseData.js
// Las importaciones de iconos y de Image permanecen igual
import { FaBookmark, FaBookOpen, FaCertificate, FaBook, FaCog, FaLightbulb, FaBullseye, FaListAlt, FaTable, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { VscSymbolStructure } from "react-icons/vsc";
import { MdPending } from "react-icons/md";
import Image from 'next/image';

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
            <p>El desarrollo de aplicaciones web y el uso de frameworks para clientes y servidores son fundamentales en el ámbito de la ingeniería de software. Estos conocimientos permiten diseñar, implementar y desplegar soluciones tecnológicas modernas, asegurando eficiencia, escalabilidad y seguridad en entornos digitales.</p>
            <p>Este recurso en forma de polilibro pretende ser sencillo en su lenguaje y con explicaciones claras, sin demeritar su nivel académico. A través de este material, explorarán arquitecturas de desarrollo web, la implementación de APIs, el desarrollo de aplicaciones del lado del cliente y del servidor, así como el uso de servidores y contenedores en la nube, con el objetivo de fortalecer sus competencias en el desarrollo de software.</p>
        </div>
        <div className="flex-shrink-0">
            <Image src="/images/bienvenidos.jpg" alt="Bienvenidos" width={400} height={250} className="rounded-md shadow-lg" />
        </div>
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
                content: (
                    <div className="prose max-w-none">
                        <h4 className="text-xl font-bold text-purple-700">Herramientas para la Plataforma Educativa</h4>
                        <p>Para comenzar, identifica las necesidades y/o requerimientos tecnológicos que puedas presentar. Para tener una experiencia de aprendizaje exitosa, es fundamental familiarizarse con las herramientas que utilizaremos.</p>
                        <ul>
                            <li><strong>Visual Studio Code:</strong> Un editor de código moderno y extensible.</li>
                            <li><strong>Node.js:</strong> El entorno de ejecución para JavaScript en el servidor.</li>
                            <li><strong>Git y una cuenta de GitHub:</strong> Para el control de versiones de nuestros proyectos.</li>
                        </ul>
                    </div >
                )
            },
            {
                id: 'concepto',
                icon: <FaLightbulb />,
                title: "Concepto Clave",
                content: (
                    <div className="prose max-w-none">
                        <h4 className="text-xl font-bold text-purple-700">El concepto de Desarrollo Web en Cliente y Servidor</h4>
                        <p>El desarrollo web moderno se basa en la interacción entre el <strong>cliente</strong> (tu navegador, que solicita información) y el <strong>servidor</strong> (una computadora remota que procesa la solicitud y devuelve una respuesta).</p>
                        <p>Frameworks como <strong>React</strong> se ejecutan en el cliente para crear interfaces de usuario dinámicas y ricas en interactividad, mientras que frameworks como <strong>Express.js</strong> o <strong>Django</strong> se ejecutan en el servidor para gestionar la lógica de negocio, el acceso a bases de datos y la seguridad.</p>
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
    units: [
        {
            id: 1,
            slug: "unidad-1",
            title: "Unidad I",
            subtitle: "Arquitecturas de desarrollo web",
            banner: "/banners/intro.jpg",
            subtext: "Fundamentos, arquitecturas y principios del desarrollo web moderno.",
            // --- CONTENIDO OFICIAL DE LA UNIDAD 1 ---
            content: [
                { title: "1.1. Principios comunes para las arquitecturas", subtopics: [] },
                { title: "1.2. Arquitectura monolítica", subtopics: ["1.2.1. Contenedores"] },
                {
                    title: "1.3. Arquitectura tradicional de n-capas", subtopics: [
                        "1.3.1. Capa de acceso a datos",
                        "1.3.2. Capa de lógica de negocios",
                        "1.3.3. Interfaz de usuario",
                    ]
                },
                {
                    title: "1.4. Arquitectura de cebolla (arquitectura limpia)", subtopics: [
                        "1.4.1. Modelo del dominio",
                        "1.4.2. Interfaz de usuario",
                        "1.4.3. Infraestructura",
                        "1.4.4. Pruebas",
                    ]
                },
                {
                    title: "1.5. Arquitectura hexagonal", subtopics: [
                        "1.5.1. Dominio de la aplicación",
                        "1.5.2. Puertos",
                        "1.5.3. Capa de servicios",
                        "1.5.4. Adaptadores",
                    ]
                },
                {
                    title: "1.6. Arquitectura de microservicios", subtopics: [
                        "1.6.1. Fundamentos de microservicios",
                        "1.6.2. Arquitectura del dominio",
                        "1.6.3. Modelo de referencia",
                        "1.6.4. Modelo de implementación",
                        "1.6.5. Modelo de despliegue",
                        "1.6.6. Diseño de aplicaciones web",
                    ]
                },
            ]
        },
        {
            id: 2,
            slug: "unidad-2",
            title: "Unidad II",
            subtitle: "Desarrollo de API's y servicios web",
            banner: "/banners/unidad2.jpg",
            subtext: "Principios, seguridad y buenas prácticas en la creación de API's.",
            content: [
                { title: "2.1. Servicios web", subtopics: ["2.1.1. SOAP", "2.1.2. REST"] },
                { title: "2.2. Intercambio de datos entre sistemas heterogéneos", subtopics: ["2.2.1. XML", "2.2.2. JSON"] },
                {
                    title: "2.3. Principios arquitectónicos de una API RESTful", subtopics: [
                        "2.3.1. URIs",
                        "2.3.2. Verbo GET para obtener un recurso",
                        "2.3.3. Verbo POST para crear un recurso",
                        "2.3.4. Verbo PUT para actualizar un recurso",
                        "2.3.5. Verbo DELETE para eliminar un recurso",
                        "2.3.6. Códigos de respuesta",
                        "2.3.7. Endpoints",
                    ]
                },
                {
                    title: "2.4. Herramientas de depuración", subtopics: [
                        "2.4.1. Consumir servicios de una API de terceros",
                    ]
                },
                { title: "2.5. Buenas prácticas para la creación de API's", subtopics: [] },
                {
                    title: "2.6. Seguridad de servicios", subtopics: [
                        "2.6.1. Seguridad basada en Sesiones",
                        "2.6.2. Autenticación HTTP Básica",
                        "2.6.3. Autenticación Implícita",
                        "2.6.4. Seguridad basada en certificados",
                        "2.6.5. Autenticación basada en tokens",
                        "2.6.6. Estándares para autorización de APIs",
                    ]
                },
            ]
        },

        // --- UNIDAD 3 ---
        {
            id: 3,
            slug: "unidad-3",
            title: "Unidad III",
            subtitle: "Desarrollo de aplicaciones del lado del servidor",
            banner: "/banners/unidad3.jpg",
            subtext: "Mapeo, tecnologías y servicios para el backend.",
            content: [
                {
                    title: "3.1. Mapeo objeto relacional", subtopics: [
                        "3.1.1. Mapeo de entidades",
                        "3.1.2. Mapeo de atributos persistentes",
                        "3.1.3. Mapeo de atributos no persistentes",
                        "3.1.4. Mapeo de asociaciones",
                        "3.1.5. Estrategias de recuperación de asociaciones",
                    ]
                },
                {
                    title: "3.2. Tecnologías para la generación de servicios", subtopics: [
                        "3.2.1. Modelo de madurez de Richardson",
                        "3.2.2. Métodos del protocolo HTTP",
                        "3.2.3. Códigos de estado del protocolo HTTP",
                        "3.2.4. Manejo de errores",
                    ]
                },
                {
                    title: "3.3. Servicios, APIS y endpoints", subtopics: [
                        "3.3.1. Generación y publicación",
                        "3.3.2. Control de acceso HTTP (CORS)",
                        "3.3.3. Documentación",
                    ]
                },
            ]
        }
    ],
};