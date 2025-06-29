// src/components/TopicSidebar.js

"use client"; // ¡IMPORTANTE! Este es ahora un Client Component.

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPrint } from 'react-icons/fa';

// Este es el componente que renderizará la "Tabla de Contenidos"
const TopicSidebar = ({ unit }) => {
    // Obtenemos la ruta actual del navegador, ej: /unidad-1/1-2-arquitectura-monolitica
    const pathname = usePathname();

    return (
        <aside className="w-1/4 flex-shrink-0 space-y-8">
            <div>
                <h3 className="text-lg font-bold border-b pb-2 mb-3">Tabla de Contenidos</h3>
                <ul className="space-y-2 text-sm">
                    {unit.content.map(topic => {
                        const topicHref = `/${unit.slug}/${topic.slug}`;
                        const isTopicActive = pathname === topicHref;

                        return (
                            <li key={topic.id}>
                                <Link
                                    href={topicHref}
                                    className={isTopicActive ? "font-bold text-purple-600" : "hover:underline"}
                                >
                                    {topic.title}
                                </Link>

                                {topic.subtopics && (
                                    <ul className="pl-4 mt-1 space-y-1">
                                        {topic.subtopics.map(sub => {
                                            const subtopicHref = `/${unit.slug}/${sub.slug}`;
                                            const isSubtopicActive = pathname === subtopicHref;
                                            return (
                                                <li key={sub.id}>
                                                    <Link
                                                        href={subtopicHref}
                                                        className={isSubtopicActive ? "font-bold text-purple-600" : "text-gray-600 hover:underline"}
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold border-b pb-2 mb-3">Administración</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="flex items-center gap-2 hover:underline"><FaPrint /> Imprimir libro</a></li>
                    <li><a href="#" className="flex items-center gap-2 hover:underline"><FaPrint /> Imprimir este capítulo</a></li>
                </ul>
            </div>
        </aside>
    );
};

export default TopicSidebar;