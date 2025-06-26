// src/app/unidad-2/page.js
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import { courseData } from '@/courseData';
import { FaReact, FaExclamationCircle } from 'react-icons/fa';

export default function Unidad2Page() {
    // ¡¡SOLO CAMBIA ESTA LÍNEA!!
    const unit = courseData.units.find(u => u.slug === 'unidad-2');
    if (!unit) return <div>Unidad no encontrada</div>;

    const breadcrumbItems = [
        { name: 'Cursos', href: '/' },
        { name: courseData.title, href: '/' },
        { name: `Unidad ${unit.id}: ${unit.title}`, href: `/${unit.slug}` }
    ];

    return (
        <div className="container mx-auto px-6 py-8 flex gap-8">
            <Sidebar />
            <div className="w-full">
                <Breadcrumb items={breadcrumbItems} />
                <div className="relative mb-6">
                    <Image src={unit.banner} alt={unit.title} width={900} height={200} className="rounded-lg w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                        <h1 className="text-white text-4xl font-extrabold text-center">Unidad {unit.id}<br />{unit.title}</h1>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-md shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">Temas de la Unidad</h2>
                    <ul className="space-y-3">
                        {unit.content.map((item, index) => (
                            <li key={index} className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 ${item.startsWith('Ejercicio:') ? 'font-bold' : ''}`}>
                                {item.startsWith('Ejercicio:') ? <FaExclamationCircle className="text-orange-500 text-lg" /> : <FaReact className="text-blue-500 text-lg" />}
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <nav className="flex justify-between items-center mt-8">
                    <Link href="/unidad-1" className="text-blue-600 hover:underline">‹ SECCIÓN ANTERIOR<br />Unidad 1</Link>
                    <Link href="/unidad-3" className="text-blue-600 hover:underline text-right">SECCIÓN SIGUIENTE ›<br />Unidad 3</Link>
                </nav>
            </div>
        </div>
    );
}