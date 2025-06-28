import { courseData } from '@/courseData';
import Link from 'next/link';
import { FaHome, FaPrint, FaBookOpen } from 'react-icons/fa';

// Componente para la nueva barra lateral
const TopicSidebar = ({ unit }) => (
    <aside className="w-1/4 flex-shrink-0 space-y-8">
        <div>
            <h3 className="text-lg font-bold border-b pb-2 mb-3">Tabla de Contenidos</h3>
            <ul className="space-y-2 text-sm">
                {unit.content.map(topic => (
                    <li key={topic.id}>
                        <Link href={`/${unit.slug}/${topic.slug}`} className="hover:underline">{topic.title}</Link>
                        {topic.subtopics && (
                            <ul className="pl-4 mt-1 space-y-1">
                                {topic.subtopics.map(sub => (
                                    <li key={sub.id}><Link href={`/${unit.slug}/${sub.slug}`} className="text-gray-600 hover:underline">{sub.title}</Link></li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
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

export default async function TopicDetailPage({ params }) {
    const { topicSlug } = params;
    const unit = courseData.units.find(u => u.slug === 'unidad-1');

    // Buscar tanto en temas principales como en subtemas
    let currentTopic = null;
    for (const topic of unit.content) {
        if (topic.slug === topicSlug) {
            currentTopic = topic;
            break;
        }
        if (topic.subtopics) {
            const foundSubtopic = topic.subtopics.find(sub => sub.slug === topicSlug);
            if (foundSubtopic) {
                currentTopic = foundSubtopic;
                break;
            }
        }
    }

    if (!unit || !currentTopic) {
        return <div>Contenido no encontrado.</div>;
    }

    const breadcrumbItems = [
        { name: "Cursos", href: "/" },
        { name: "Polilibros", href: "/" },
        { name: courseData.title, href: "/" },
        { name: unit.title, href: `/${unit.slug}` },
        { name: currentTopic.title, href: `/${unit.slug}/${currentTopic.slug}` }
    ];

    return (
        <div className="container mx-auto px-6 py-8">
            {/* Breadcrumb de navegación */}
            <nav className="text-sm text-gray-600 mb-6">
                {breadcrumbItems.map((item, index) => (
                    <span key={index}>
                        {index > 0 && <span className="mx-2">›</span>}
                        <Link href={item.href} className="hover:underline">{item.name}</Link>
                    </span>
                ))}
            </nav>

            <div className="flex gap-8">
                <TopicSidebar unit={unit} />
                <main className="w-3/4">
                    <h1 className="text-2xl font-bold mb-6">{currentTopic.title}</h1>
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <div className="flex items-center gap-4 text-purple-700 font-semibold mb-4 border-b pb-4">
                            <FaBookOpen className="text-3xl" />
                            <h2 className="text-xl">Recurso</h2>
                        </div>
                        {/* Aquí se renderiza el contenido específico del tema */}
                        {currentTopic.component}
                    </div>
                </main>
            </div>
        </div>
    );
}