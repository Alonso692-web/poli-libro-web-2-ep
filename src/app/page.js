// src/app/page.js
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import { courseData } from '@/courseData';

// Migas de pan para la página principal
const breadcrumbItems = [
  { name: 'Cursos', href: '#' },
  { name: 'Polilibros', href: '#' },
  { name: courseData.title, href: '/' }
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-8 flex gap-8">
      <Sidebar />
      <div className="w-full">
        <Breadcrumb items={breadcrumbItems} />

        {/* Banner principal del libro */}
        <div className="relative mb-8">
          <Image
            src="/banners/main-banner.jpg" // Necesitarás una imagen principal en public/banners/
            alt="Banner principal del curso de Desarrollo Web"
            width={900}
            height={350}
            className="rounded-lg w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
            <div className="text-center text-white p-4">
              <p className="text-lg">Polilibro</p>
              <h1 className="text-4xl font-extrabold">{courseData.title}</h1>
            </div>
          </div>
        </div>

        {/* Navegación a la siguiente sección */}
        <div className="text-right">
          <Link href="/info-general" className="text-blue-600 hover:underline">
            SECCIÓN SIGUIENTE <br />
            Información General ›
          </Link>
        </div>
      </div>
    </div>
  );
}