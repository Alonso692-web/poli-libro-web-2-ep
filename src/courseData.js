// src/courseData.js
// Las importaciones de iconos y de Image permanecen igual
import { FaBookmark, FaBook, FaCog, FaLightbulb, FaBullseye, FaListAlt, FaTable, FaCheckCircle } from 'react-icons/fa';
import { VscSymbolStructure } from "react-icons/vsc";
import { MdPending } from "react-icons/md";
import Image from 'next/image';

// BienvenidaContent no cambia
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
                content: (<div className="prose max-w-none">...</div>)
            },
            {
                id: 'concepto',
                icon: <FaLightbulb />,
                title: "Concepto Clave",
                content: (<div className="prose max-w-none">...</div>)
            },
            {
                id: 'objetivo',
                icon: <FaBullseye />,
                title: "Objetivo General",
                content: (<div className="prose max-w-none">...</div>)
            },
            {
                id: 'organizacion',
                icon: <VscSymbolStructure />,
                title: "contenido",
                content: (<div className="prose max-w-none">...</div>)
            },
            {
                id: 'estructura',
                icon: <FaListAlt />,
                title: "Organización del Polilibro",
                content: (<div className="prose max-w-none">...</div>)
            },
            {
                id: 'evaluacion',
                icon: <FaCheckCircle />,
                title: "Tabla de Evaluación",
                content: (<div className="prose max-w-none">...</div>)
            },
            {
                id: 'actividades',
                icon: <FaTable />,
                title: "Rúbrica de Actividades",
                content: (<div className="prose max-w-none">...</div>)
            },
            {
                id: 'bibliografia',
                icon: <FaBook />,
                title: "Bibliografía recomendada",
                content: (<div className="prose max-w-none">...</div>)
            },
            {
                id: 'acerca',
                icon: <MdPending />,
                title: "Acerca del polilibro",
                content: (<div className="prose max-w-none">...</div>)
            },

        ]
    },
    units: [
        {
            id: 1,
            slug: "unidad-1", // SIN BARRA
            title: "Unidad I",
            subtitle: "Introducción al Desarrollo Web",
            banner: "/banners/intro.jpg",
            subtext: "Arquitectura, protocolos y diferencias entre frontend y backend.",
            content: [
                "Arquitectura cliente-servidor",
                "Protocolos HTTP y WebSockets",
                "Diferencias entre desarrollo frontend y backend",
            ]
        },
        {
            id: 2,
            slug: "unidad-2",
            title: "Unidad II",
            subtitle: "Frameworks de Desarrollo en Cliente",
            banner: "/banners/frontend.jpg",
            subtext: "Arquitectura, protocolos y diferencias entre frontend y backend.",
            content: [
                "Arquitectura cliente-servidor",
                "Protocolos HTTP y WebSockets",
                "Diferencias entre desarrollo frontend y backend",
            ]
        },
        {
            id: 3,
            slug: "unidad-3",
            title: "Unidad III",
            subtitle: "Desarrollo en el Servidor",
            banner: "/banners/frontend.jpg",
            subtext: "Arquitectura, protocolos y diferencias entre frontend y backend.",
            content: [
                "Introducción a Node.js, Django, Laravel y Spring Boot",
                "Creación de controladores y modelos de datos",
                "Conexión con bases de datos SQL y NoSQL",
                "Ejercicio: Construir una API REST con Express.js y MongoDB",
            ]
        },
    ],
};

// Nota: He acortado el contenido de las pestañas por brevedad, pero la estructura es la misma.
// Asegúrate de que todo tu contenido esté dentro del JSX.