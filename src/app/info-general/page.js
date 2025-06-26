// src/app/info-general/page.js
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { courseData } from '@/courseData';
import Image from 'next/image';

const breadcrumbItems = [
    { name: 'Cursos', href: '/' },
    { name: courseData.title, href: '/' },
    { name: 'Información General', href: '/info-general' }
];

export default function InfoGeneralPage() {
    const info = courseData.generalInfo;

    return (
        <div className="container mx-auto px-6 py-8 flex gap-8">
            <Sidebar />
            <div className="w-full">
                <Breadcrumb items={breadcrumbItems} />

                <div className="bg-white p-8 shadow-sm rounded-md border-t-4 border-blue-500">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">{info.title}</h2>

                    <div className="border-b-2 border-dotted pb-6 mb-6">
                        <h3 className="text-xl font-bold text-purple-700 mb-4">Antes de comenzar</h3>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{info.conceptTitle}</h4>
                        <p className="text-gray-600">{info.introduction}</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="text-gray-700 space-y-4 flex-1">
                            <h4 className="text-lg font-semibold text-gray-800">Acerca del Polilibro</h4>
                            <p>{info.about}</p>
                        </div>
                        <div className="flex-shrink-0">
                            <Image src="/images/bienvenidos.jpg" alt="Bienvenidos" width={400} height={250} className="rounded-md shadow-lg" />
                        </div>
                    </div>
                </div>

                {/* Navegación */}
                <nav className="flex justify-between items-center mt-8">
                    <Link href="/" className="text-blue-600 hover:underline">‹ SECCIÓN ANTERIOR</Link>
                    <Link href="/unidad-1" className="text-blue-600 hover:underline text-right">SECCIÓN SIGUIENTE ›<br />Unidad I</Link>
                </nav>
            </div>
        </div>
    );
}