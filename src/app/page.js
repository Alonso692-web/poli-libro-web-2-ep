import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import { courseData } from '@/courseData';

export default function HomePage() {
  const courseSections = [
    courseData.generalInfo,
    ...courseData.units
  ];

  const breadcrumbItems = [
    { name: 'Cursos', href: '#' },
    { name: 'Polilibros', href: '/' },
    { name: courseData.title, href: '/' }
  ];

  return (
    <div className="container mx-auto px-6 py-8 flex gap-8">
      <Sidebar />
      <div className="w-full">
        <Breadcrumb items={breadcrumbItems} />

        { }
        <div className="relative mb-12 h-[220px]">
          <Image
            src="/banners/main-banner.jpg"
            alt="Banner principal"
            width={200}
            height={50}
            className="rounded-lg w-full h-64 object-cover shadow-md group-hover:opacity-90 transition-opacity"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-lg">
            <div className="text-center text-white p-4">
              <p className="text-white text-2xl font-bold">Polilibro</p>
              <h1 className="text-white text-4xl font-extrabold">{courseData.title}</h1>
            </div>
          </div>
        </div>

        <div className="mb-10"></div>
        <div className="space-y-10">
          {courseSections.map((section) => (
            <div key={section.slug}>
              { }
              <h2 className="text-lg font-semibold text-gray-600 mb-1">{section.title}</h2>
              { }
              <h3 className="text-2xl text-purple-800 mb-3">{section.subtitle}</h3>

              { }
              <Link href={section.slug}>
                <div className="block group max-h-64 h-68 pb-1">
                  <Image
                    src={section.banner}
                    alt={section.subtitle}
                    width={900}
                    height={200}
                    className="rounded-lg h-full object-cover shadow-md group-hover:opacity-90 transition-opacity border border-black"
                  />
                </div>
              </Link>
              { }
              <p className="text-right text-xs text-gray-500 mt-1 px-2">{section.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}