// src/app/unidad-1/page.js
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import { courseData } from '@/courseData';
import { FaBookOpen } from 'react-icons/fa';

export default function Unidad1Page() {
    const unit = courseData.units.find(u => u.slug === 'unidad-1');
    if (!unit) return <div>Unidad no encontrada</div>;

    const breadcrumbItems = [
        { name: 'Cursos', href: '/' },
        { name: courseData.title, href: '/' },
        { name: `Unidad I`, href: `/unidad-1` }
    ];

    return (
        <div className="container mx-auto px-6 py-8 flex gap-8">
            <Sidebar />
            <div className="w-full">
                <Breadcrumb items={breadcrumbItems} />
                <h2 className="text-xl font-semibold text-gray-600 text-center mb-4">Unidad I</h2>

                {/* Banner de la unidad */}
                <div className="relative mb-8">
                    <Image src={unit.banner} alt={unit.title} width={900} height={200} className="rounded-lg w-full h-40 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                        <h1 className="text-white text-4xl font-extrabold">{unit.title}</h1>
                    </div>
                </div>

                {/* Contenido de la unidad */}
                <div className="bg-white p-8 rounded-md shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-purple-700">Temas de la Unidad</h3>
                    <ul className="space-y-4">
                        {unit.content.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <FaBookOpen className="text-blue-500 text-xl flex-shrink-0" />
                                <a href="#" className="text-blue-700 hover:underline">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <nav className="flex justify-between items-center mt-8">
                    <Link href="/info-general" className="text-blue-600 hover:underline">‹ SECCIÓN ANTERIOR<br />Información General</Link>
                    <span className="text-gray-400">SECCIÓN SIGUIENTE ›</span>
                </nav>
            </div>
        </div>
    );
}