import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { courseData } from '@/courseData';
import InfoTabs from '@/components/InfoTabs';
import { FaListAlt, FaInfoCircle, FaTasks } from 'react-icons/fa';

// --- CONTENIDO ESPECÍFICO PARA CADA PÁGINA ---
// Estos son Server Components, no necesitan "use client".

const FeatureIcon = ({ icon }) => (
    <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32 flex items-center justify-center">
            <div className="absolute w-full h-full bg-purple-100 rounded-lg transform rotate-45"></div>
            <div className="relative text-5xl text-purple-600">{icon}</div>
        </div>
    </div>
);

const OrganizationPage1 = () => (
    <div className="bg-slate-100 border border-slate-200 rounded-lg p-6 text-left shadow-inner">
        <div className="flex items-start gap-4 mb-4">
            <span className="text-xl text-blue-500 mt-1 flex-shrink-0"><FaInfoCircle /></span>
            <p className="text-gray-800">
                <strong>El Polilibro está diseñado por unidades.</strong> Cada una corresponde con los temas del programa autorizado de la unidad de aprendizaje. Para su estudio se cubren los temas de Introducción al Desarrollo Web, Frameworks de Cliente, Desarrollo en Servidor, Seguridad y Despliegue en la Nube.
            </p>
        </div>
        <div className="pl-6 ml-4 border-l-4 border-slate-300">
            <p className="text-gray-600 italic">
                En cada unidad temática se proponen actividades de acuerdo al grado de comprensión que se requiere. Las actividades son: lecturas sugeridas, presentaciones, videos, ejercicios prácticos y proyectos que simulan escenarios del mundo real.
            </p>
        </div>
    </div>
);

const OrganizationPage2 = () => (
    <div className="bg-slate-100 border border-slate-200 rounded-lg p-6 text-left shadow-inner">
        <div className="flex items-start gap-4 mb-4">
            <span className="text-xl text-blue-500 mt-1 flex-shrink-0"><FaTasks /></span>
            <p className="text-gray-800">
                Este material didáctico está estructurado para abordar de manera progresiva los conceptos esenciales del desarrollo web tanto en el cliente como en el servidor. <strong>Actividades 30%. </strong> y <strong>Practicas: 70%.</strong></p>
        </div>
        <div className="pl-6 ml-4 border-l-4 border-slate-300">
            <p className="text-gray-600 italic">
                La evaluación se basa en un portafolio de evidencias que incluye reportes, programas funcionales, el proyecto final y una evaluación escrita, asegurando una acreditación integral de las competencias.
            </p>
        </div>
    </div>
);

// --- Componente principal de la página (es un Server Component) ---
export default async function InfoGeneralPage({ searchParams }) {
    const info = courseData.generalInfo;

    // Leemos los parámetros de la URL en el servidor
    const activeTabId = searchParams.tab || info.tabs[0].id;
    const currentPage = await parseInt(searchParams.page || '1', 10);

    // Reemplazamos el contenido de la pestaña "Organización" dinámicamente
    const dynamicTabs = info.tabs.map(tab => {
        if (tab.id === 'organizacion') {
            return {
                ...tab,
                content: (
                    <div className="text-center">
                        <h4 className="text-2xl font-bold text-purple-700 mb-4">¿Cómo está organizado el Polilibro?</h4>
                        <FeatureIcon icon={<FaListAlt />} />

                        {/* Mostramos el contenido correcto basado en la URL */}
                        {currentPage === 1 && <OrganizationPage1 />}
                        {currentPage === 2 && <OrganizationPage2 />}

                        {/* Navegación con Links que cambian el parámetro 'page' */}
                        <div className="flex justify-between items-center mt-6 pt-4 text-gray-500 font-semibold">
                            <Link
                                href="/info-general?tab=organizacion&page=1"
                                className={`text-2xl hover:text-black transition-colors ${currentPage === 1 ? 'text-gray-300 pointer-events-none' : ''}`}
                            >
                                ←
                            </Link>
                            <span>Pág. {currentPage}/2</span>
                            <Link
                                href="/info-general?tab=organizacion&page=2"
                                className={`text-2xl hover:text-black transition-colors ${currentPage === 2 ? 'text-gray-300 pointer-events-none' : ''}`}
                            >
                                →
                            </Link>
                        </div>
                    </div>
                )
            };
        }
        return tab;
    });

    const breadcrumbItems = [
        { name: 'Cursos', href: '/' },
        { name: 'Polilibro', href: '/' },
        { name: courseData.title, href: '/' },
        { name: info.title, href: `/${info.slug}` }
    ];

    return (
        <div className="container mx-auto px-6 py-8 flex gap-8">
            <Sidebar />
            <div className="w-full">
                <Breadcrumb items={breadcrumbItems} />
                <div className="bg-white p-6 shadow-sm rounded-md">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4 ml-4">Antes de comenzar</h2>
                    <InfoTabs tabs={dynamicTabs} />
                </div>
                <nav className="flex justify-between items-center mt-8">
                    <Link href="/" className="text-blue-600 hover:underline">‹ SECCIÓN ANTERIOR</Link>
                    <Link href="/unidad-1" className="text-blue-600 hover:underline text-right">SECCIÓN SIGUIENTE ›<br />Unidad I</Link>
                </nav>
            </div>
        </div>
    );
};