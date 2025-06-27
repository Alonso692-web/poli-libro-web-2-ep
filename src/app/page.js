// src/app/page.js
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import { courseData } from '@/courseData';

export default function HomePage() {
  // Creamos una lista unificada de todas las secciones que queremos mostrar
  const courseSections = [
    courseData.generalInfo,
    ...courseData.units
  ];

  const breadcrumbItems = [
    { name: 'Cursos', href: '#' },
    { name: 'Polilibros', href: '#' },
    { name: courseData.title, href: '/' }
  ];

  return (
    <div className="container mx-auto px-6 py-8 flex gap-8">
      <Sidebar />
      <div className="w-full">
        <Breadcrumb items={breadcrumbItems} />

        {/* Banner principal del libro (como en la imagen) */}
        <div className="relative mb-12">
          <Image
            src="/banners/main-banner.jpg"
            alt="Banner principal"
            width={900}
            height={300}
            className="rounded-lg w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
            <div className="text-center text-white p-4">
              <p className="text-lg">Polilibro</p>
              <h1 className="text-4xl font-extrabold">{courseData.title}</h1>
            </div>
          </div>
        </div>

        {/* Contenedor para la lista de secciones del curso */}
        <div className="space-y-10">
          {courseSections.map((section) => (
            <div key={section.slug}>
              {/* Título de la sección (ej. "Información General", "Unidad I") */}
              <h2 className="text-lg font-semibold text-gray-600 mb-1">{section.title}</h2>
              {/* Subtítulo (ej. "Antes de comenzar", "Introducción al Desarrollo Web") */}
              <h3 className="text-2xl text-purple-800 mb-3">{section.subtitle}</h3>

              {/* El banner de la sección es un enlace a la página de detalles */}
              <Link href={section.slug}>
                <div className="block group">
                  <Image
                    src={section.banner}
                    alt={section.subtitle}
                    width={900}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover shadow-md group-hover:opacity-90 transition-opacity"
                  />
                </div>
              </Link>
              {/* Texto pequeño debajo del banner */}
              <p className="text-right text-xs text-gray-500 mt-1 px-2">{section.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}