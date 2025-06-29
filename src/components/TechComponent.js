import { FaGitAlt, FaDocker, FaAngular } from 'react-icons/fa';
import { VscCode, VscSymbolStructure } from 'react-icons/vsc';
import { SiIntellijidea, SiSpringboot, SiXampp, SiPhpmyadmin } from 'react-icons/si';

// --- ARRAY DE DATOS DE LA TABLA DE HERRAMIENTAS (ACTUALIZADO) ---
const toolsData = [
    {
        icon: <VscCode />,
        name: "Editor de Código: VS Code",
        description: "Una opción ligera y potente. Es gratuito, altamente personalizable y cuenta con miles de extensiones para desarrollo web (ESLint, Prettier, etc.)."
    },
    {
        icon: <SiIntellijidea />,
        name: "IDE: IntelliJ IDEA",
        description: "Una alternativa recomendada, especialmente para el desarrollo en Java con Spring Boot. La versión Ultimate ofrece una integración profunda y herramientas de productividad avanzadas."
    },
    {
        icon: <FaGitAlt />,
        name: "Control de Versiones: Git",
        description: "Git es indispensable para rastrear cambios en el código y colaborar. Se debe tener una cuenta en GitHub, GitLab o un servicio similar para alojar los repositorios."
    },
    {
        icon: <SiXampp />,
        name: "Entorno de Servidor Local: XAMPP",
        description: "XAMPP proporciona un entorno de servidor local completo que incluye Apache, y lo más importante, una base de datos MySQL que se gestionará a través de phpMyAdmin."
    },
    {
        icon: <SiSpringboot />,
        name: "Framework de Backend: Spring Boot",
        description: "Se utilizará Spring Boot para construir el backend. Es un framework basado en Java que simplifica la creación de microservicios y APIs REST robustas, seguras y listas para producción."
    },
    {
        icon: <FaAngular />,
        name: "Framework de Frontend: Angular",
        description: "Se trabajará con Angular (versión 19 o superior) para desarrollar la interfaz de usuario del cliente, creando aplicaciones de una sola página (SPA) interactivas y de alto rendimiento."
    },
    {
        icon: <FaDocker />,
        name: "Contenedores: Docker",
        description: "Docker permite empaquetar y distribuir aplicaciones en contenedores aislados, garantizando que funcionen de manera consistente en cualquier entorno. Se recomienda Docker Desktop."
    },
    {
        icon: <SiPhpmyadmin />,
        name: "Gestión de Base de Datos: phpMyAdmin",
        description: "Se utilizará MySQL como sistema de base de datos relacional. La gestión y manipulación de la base de datos se realizará a través de la interfaz web phpMyAdmin."
    }
];

// --- COMPONENTE PARA LA PESTAÑA DE TECNOLOGÍA (ACTUALIZADO) ---
export const TechToolsContent = () => (
    <div>
        <h4 className="text-xl font-bold text-purple-700 mb-2">Complementos tecnológicos para trabajar en la plataforma</h4>
        <p className="text-gray-600 mb-6">Para comenzar, identifica los requerimientos tecnológicos que puedas presentar, tomando como base la tabla de recomendaciones técnicas que se muestra abajo.</p>

        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-purple-700 text-white font-bold p-3 text-center rounded-t-lg">
                Recomendaciones Técnicas para el Desarrollo de la Unidad de Aprendizaje
            </div>
            <div className="border border-gray-300 rounded-b-lg">
                {toolsData.map((tool) => (
                    <div key={tool.name} className="flex items-start md:items-center p-4 gap-4 border-t border-gray-200 first:border-t-0">
                        <div className="w-16 text-4xl text-purple-600 flex justify-center pt-1 md:pt-0">
                            {tool.icon}
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-800 font-semibold">{tool.name}</p>
                            <p className="text-gray-600 text-sm">{tool.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);