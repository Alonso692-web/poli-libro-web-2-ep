import { FaNodeJs, FaGitAlt, FaDocker, FaDatabase } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const toolsData = [
    {
        icon: <VscCode />,
        name: "Editor de Código",
        description: "Se recomienda Visual Studio Code. Es un editor gratuito, potente y altamente personalizable con miles de extensiones para desarrollo web (ESLint, Prettier, Live Server, etc.)."
    },
    {
        icon: <FaGitAlt />,
        name: "Control de Versiones",
        description: "Git es indispensable para rastrear cambios en el código y colaborar. Se debe tener una cuenta en GitHub, GitLab o un servicio similar para alojar los repositorios."
    },
    {
        icon: <FaNodeJs />,
        name: "Entorno de Ejecución de JavaScript",
        description: "Node.js (versión LTS recomendada) es esencial para ejecutar JavaScript en el servidor (backend con Express.js) y para el ecosistema de herramientas de frontend (React, Webpack)."
    },
    {
        icon: <FaDocker />,
        name: "Contenedores de Aplicación",
        description: "Docker permite empaquetar y distribuir aplicaciones en contenedores aislados, garantizando que funcionen de manera consistente en cualquier entorno. Se recomienda Docker Desktop."
    },
    {
        icon: <FaDatabase />,
        name: "Sistemas de Bases de Datos",
        description: "Se necesitará acceso a sistemas de bases de datos tanto SQL (como PostgreSQL o MySQL) como NoSQL (como MongoDB Community Server) para las prácticas del lado del servidor."
    }
];


// --- NUEVO COMPONENTE PARA LA PESTAÑA DE TECNOLOGÍA ---
export const TechToolsContent = () => (
    <div>
        <h4 className="text-xl font-bold text-purple-700 mb-2">Complementos tecnológicos para trabajar en la plataforma</h4>
        <p className="text-gray-600 mb-6">Para comenzar, identifica las necesidades y/o requerimientos tecnológicos que puedas presentar, tomando como base la tabla de recomendaciones técnicas que se muestra abajo.</p>

        <div className="w-full max-w-4xl mx-auto">
            {/* Cabecera de la tabla */}
            <div className="bg-purple-700 text-white font-bold p-3 rounded-t-lg">
                Para el uso de la plataforma, éstas son las recomendaciones técnicas
            </div>
            {/* Cuerpo de la tabla */}
            <div className="border border-gray-300 rounded-b-lg">
                {toolsData.map((tool, index) => (
                    <div key={tool.name} className={`flex items-center p-4 gap-4 ${index > 0 ? 'border-t border-gray-200' : ''}`}>
                        <div className="w-16 text-4xl text-purple-600 flex justify-center items-center">
                            {tool.icon}
                        </div>
                        <div className="flex-1">
                            <p className="text-gray-800">{tool.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);