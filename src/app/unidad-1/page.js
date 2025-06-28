import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import { courseData } from '@/courseData';
import { FaCodeBranch, FaChevronRight, FaPlay, FaBookOpen, FaTasks } from 'react-icons/fa';

export default function Unidad1Page() {
    const unit = courseData.units.find(u => u.slug === 'unidad-1');
    if (!unit) return <div>Unidad no encontrada</div>;

    const breadcrumbItems = [
        { name: 'Cursos', href: '/' },
        { name: 'Polilibros', href: "/" },
        { name: courseData.title, href: '/' },
        { name: `Unidad I: ${unit.subtitle}`, href: `/${unit.slug}` }
    ];

    return (
        <div className="container mx-auto px-6 py-8 flex gap-8">
            <Sidebar />
            <div className="w-full">
                <Breadcrumb items={breadcrumbItems} />
                <div className="relative mb-8">
                    <Image src={unit.banner} alt={unit.title} width={900} height={200} className="rounded-lg w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                        <h1 className="text-white text-4xl font-extrabold text-center">{unit.title}<br />{unit.subtitle}</h1>
                    </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-300 border-dotted rounded-lg p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Objetivo</h3>
                        <p className="text-gray-700">{unit.objective}</p>
                    </div>
                    <div className="w-full md:w-1/3 h-48 bg-black rounded-lg flex items-center justify-center">
                        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center opacity-70 cursor-pointer hover:opacity-90 transition-opacity">
                            <FaPlay className="text-white text-2xl ml-1" />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-md shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 text-purple-800">Contenido Temático</h2>
                    <div className="space-y-6">
                        {unit.content.map((topic) => (
                            <div key={topic.id}>
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="bg-purple-600 text-white p-3 rounded-md text-sm font-bold">{topic.id} Tema</div>
                                    <h3 className="text-2xl font-light text-gray-800">{topic.title.replace(`${topic.id}. `, "")}</h3>
                                </div>
                                <ul className="space-y-3 ml-8">
                                    <li className="flex items-center gap-3">
                                        <FaBookOpen className="text-blue-500 text-lg" />
                                        <Link href={`/${unit.slug}/${topic.slug}`} className="text-blue-600 hover:underline">{topic.title}</Link>
                                    </li>
                                    {topic.subtopics?.map((subtopic) => (
                                        <li key={subtopic.id} className="flex items-center gap-3">
                                            <FaTasks className="text-green-500 text-lg" />
                                            <Link href={`/${unit.slug}/${subtopic.slug}`} className="text-blue-600 hover:underline">{subtopic.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <nav className="flex justify-between items-center mt-8">
                    <Link href="/info-general" className="text-blue-600 hover:underline">‹ SECCIÓN ANTERIOR<br />Información General</Link>
                    <Link href="/unidad-2" className="text-blue-600 hover:underline text-right">SECCIÓN SIGUIENTE ›<br />Unidad II</Link>
                </nav>
            </div>
        </div>
    );
}