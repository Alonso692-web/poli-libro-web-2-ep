// src/app/info-general/page.js
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { courseData } from '@/courseData';
import InfoTabs from '@/components/InfoTabs'; // ¡Importamos nuestro nuevo componente!

export default function InfoGeneralPage() {
    const info = courseData.generalInfo;

    const breadcrumbItems = [
        { name: 'Cursos', href: '/' },
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
                    {/* Usamos el componente de pestañas y le pasamos los datos */}
                    <InfoTabs tabs={info.tabs} />
                </div>

                {/* Navegación entre secciones */}
                <nav className="flex justify-between items-center mt-8">
                    <Link href="/" className="text-blue-600 hover:underline">‹ SECCIÓN ANTERIOR</Link>
                    <Link href="/unidad-1" className="text-blue-600 hover:underline text-right">SECCIÓN SIGUIENTE ›<br />Unidad I</Link>
                </nav>
            </div>
        </div>
    );
}