// src/app/unidad-1/page.js
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import { courseData } from '@/courseData';
// Importamos los nuevos iconos que usaremos
import { FaCodeBranch, FaChevronRight } from 'react-icons/fa';

export default function Unidad1Page() {
    const unit = courseData.units.find(u => u.slug === 'unidad-1');
    if (!unit) return <div>Unidad no encontrada</div>;

    const breadcrumbItems = [
        { name: 'Cursos', href: '/' },
        { name: courseData.title, href: '/' },
        { name: `Unidad I: ${unit.subtitle}`, href: `/${unit.slug}` }
    ];

    return (
        <div className="container mx-auto px-6 py-8 flex gap-8">
            <Sidebar />
            <div className="w-full">
                <Breadcrumb items={breadcrumbItems} />
                <div className="relative mb-6">
                    <Image src={unit.banner} alt={unit.title} width={900} height={200} className="rounded-lg w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                        <h1 className="text-white text-4xl font-extrabold text-center">{unit.title}<br />{unit.subtitle}</h1>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-md shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 text-purple-800">Contenido Temático</h2>

                    {/* --- NUEVA LÓGICA PARA RENDERIZAR LA LISTA JERÁRQUICA --- */}
                    <ul className="space-y-4">
                        {unit.content.map((topic, index) => (
                            <li key={index} className="border-b border-gray-200 pb-3">
                                <div className="flex items-center gap-3">
                                    <FaCodeBranch className="text-blue-500 text-lg flex-shrink-0" />
                                    <span className="font-semibold text-gray-800">{topic.title}</span>
                                </div>

                                {/* Si el tema tiene subtemas, los mostramos en una lista anidada */}
                                {topic.subtopics && topic.subtopics.length > 0 && (
                                    <ul className="mt-2 ml-6 space-y-1">
                                        {topic.subtopics.map((subtopic, subIndex) => (
                                            <li key={subIndex} className="flex items-center gap-2">
                                                <FaChevronRight className="text-green-500 text-xs flex-shrink-0" />
                                                <span className="text-gray-700">{subtopic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <nav className="flex justify-between items-center mt-8">
                    <Link href="/info-general" className="text-blue-600 hover:underline">‹ SECCIÓN ANTERIOR<br />Información General</Link>
                    {/* Este enlace irá a la futura Unidad 2 */}
                    <span className="text-gray-400">SECCIÓN SIGUIENTE ›</span>
                </nav>
            </div>
        </div>
    );
}