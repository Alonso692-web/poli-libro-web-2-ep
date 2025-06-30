import React from 'react';
import { FaBook, FaYoutube, FaLink, FaLightbulb, FaTools, FaLock, FaExchangeAlt, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';

const BookOpenIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);

const GlobeAltIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
);

const ContentSection = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="text-xl font-bold text-purple-700 mb-3 flex items-center">
            <FaLightbulb className="mr-2" /> {title}
        </h3>
        <div className="pl-6 border-l-2 border-purple-200">
            {children}
        </div>
    </div>
);

const ImageWithCaption = ({ src, alt, caption, width = 500, height = 300 }) => (
    <div className="my-6 text-center">
        <div className="inline-block bg-gray-100 p-2 rounded-lg shadow">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="rounded-lg border border-gray-200"
            />
            {caption && <p className="mt-2 text-sm text-gray-600 italic">{caption}</p>}
        </div>
    </div>
);

const ResourceItem = ({ type, children }) => {
    const icons = {
        video: <FaYoutube className="text-red-500" />,
        article: <FaLink className="text-blue-500" />,
        book: <FaBook className="text-green-500" />,
        tool: <FaTools className="text-yellow-500" />,
        security: <FaLock className="text-gray-700" />,
        protocol: <FaExchangeAlt className="text-indigo-500" />
    };

    return (
        <li className="flex items-start mb-2">
            <span className="mr-2 mt-1">{icons[type] || <FaLink />}</span>
            <span>{children}</span>
        </li>
    );
};

const ResourceItemURL = ({ type, children, url }) => {
    const icons = {
        video: <FaYoutube className="text-red-500 mr-2" />,
        article: <FaLink className="text-blue-500 mr-2" />,
        book: <FaBook className="text-green-500 mr-2" />,
        course: <FaGraduationCap className="text-purple-500 mr-2" />,
        documentation: <FaBook className="text-indigo-500 mr-2" />
    };

    return (
        <li className="flex items-start mb-2 bg-gray-50 p-3 rounded hover:bg-gray-100 transition">
            {type === 'video' ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center">
                        {icons[type]}
                        {children}
                    </span>
                </a>
            ) : (
                <span className="flex items-center">
                    <span className="mt-1">{icons[type] || <FaLink className="mr-2" />}</span>
                    <span>{children}</span>
                </span>
            )}
        </li>
    );
};

// 2.1 Servicios Web
export const Content_2_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.1. Servicios Web</h2>

        <ContentSection title="Introducción">
            <p>
                Los servicios web son un conjunto de tecnologías que permiten la comunicación e
                interoperabilidad entre sistemas distribuidos, usualmente sobre la web. Permiten que
                aplicaciones escritas en diferentes lenguajes y ejecutadas en distintas plataformas puedan
                intercambiar información a través de redes como Internet o intranets.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen1.jpg"
                alt="Servicios Web"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Un servicio web expone una funcionalidad que puede ser invocada remotamente por otras
                aplicaciones. Para esto, utiliza protocolos de red (comúnmente HTTP o HTTPS) y formatos de
                datos estandarizados (como XML o JSON). Los dos principales estilos para construir servicios
                web son:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800">SOAP</h4>
                    <p>Protocolo estrictamente definido que usa XML para mensajes y WSDL para describir el servicio. Admite estándares como WS-Security.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800">REST</h4>
                    <p>Estilo arquitectónico basado en recursos accesibles mediante URIs y verbos HTTP. Su formato preferido es JSON.</p>
                </div>
            </div>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                Antes del auge de los servicios web, la integración entre sistemas era compleja y dependía de
                protocolos propietarios o métodos de comunicación como RPC o CORBA. A finales de los años 90
                surgió SOAP, y posteriormente, con el crecimiento de la web 2.0, REST se popularizó por su
                simplicidad y eficiencia.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>Plataforma de banca en línea utiliza servicios web SOAP para operaciones transaccionales</li>
                <li>Aplicación de comercio electrónico usa servicios REST para obtener datos de productos</li>
                <li>Sistema de información universitaria permite consumir servicios web para acceder a registros académicos</li>
                <li>Aplicaciones móviles consumen servicios web para autenticarse y sincronizar datos</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    Web Services: Principles and Technology – Michael Papazoglou
                </ResourceItem>
                <ResourceItem type="article">
                    W3C Web Services Architecture
                </ResourceItem>
                <ResourceItem type="article">
                    SOAP vs REST – MDN
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman, SOAP UI, Swagger
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.1.1 SOAP
export const Content_2_1_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.1.1. SOAP (Simple Object Access Protocol)</h2>

        <ContentSection title="Introducción">
            <p>
                SOAP es un protocolo de mensajería que permite el intercambio estructurado de información
                entre aplicaciones distribuidas en una red. Fue desarrollado por Microsoft e IBM, y
                estandarizado por el W3C como una solución robusta y extensible para integrar servicios
                entre plataformas heterogéneas.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen2.jpg"
                alt="Protocolo SOAP"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                SOAP utiliza el formato XML para codificar sus mensajes, los cuales viajan generalmente
                sobre HTTP o HTTPS. La estructura básica de un mensaje SOAP incluye:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
                <li><span className="font-mono">&lt;Envelope&gt;</span>: delimita el inicio y fin del mensaje</li>
                <li><span className="font-mono">&lt;Header&gt;</span> (opcional): contiene información de control</li>
                <li><span className="font-mono">&lt;Body&gt;</span>: contiene el mensaje o la invocación del método remoto</li>
            </ul>
            <p className="mt-4">
                Los servicios SOAP están descritos mediante un archivo WSDL que especifica qué operaciones
                están disponibles, los tipos de datos requeridos y el protocolo de transporte.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                SOAP fue una de las primeras propuestas formales para permitir la interoperabilidad entre
                sistemas distribuidos. Antes de su aparición, los sistemas usaban tecnologías como CORBA,
                DCOM o RMI, que eran difíciles de escalar y no compatibles con HTTP.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>Instituciones financieras para transacciones seguras y registro de auditoría</li>
                <li>Gobiernos y agencias de salud por políticas de interoperabilidad</li>
                <li>Sistemas legacy empresariales como SAP u Oracle</li>
                <li>Firmas electrónicas y servicios de certificados digitales</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    Web Services Essentials – Ethan Cerami
                </ResourceItem>
                <ResourceItem type="book">
                    SOA: Principles of Service Design – Thomas Erl
                </ResourceItem>
                <ResourceItem type="article">
                    SOAP 1.2 Specification (W3C)
                </ResourceItem>
                <ResourceItem type="tool">
                    SOAP UI, Apache CXF, Axis2, Microsoft WCF
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.1.2 REST
export const Content_2_1_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.1.2. REST (Representational State Transfer)</h2>

        <ContentSection title="Introducción">
            <p>
                REST es un estilo arquitectónico para el diseño de servicios web, propuesto por Roy Fielding
                en su tesis doctoral en el año 2000. A diferencia de SOAP, REST no es un protocolo, sino un
                conjunto de principios que guían cómo deben construirse las interfaces entre sistemas
                distribuidos.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen3.jpg"
                alt="Arquitectura REST"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                REST define una arquitectura centrada en recursos, que se identifican mediante URIs. Cada
                recurso puede ser manipulado usando los métodos HTTP estándar:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="bg-blue-100 p-3 rounded">
                    <span className="font-bold">GET:</span> obtener recursos
                </div>
                <div className="bg-green-100 p-3 rounded">
                    <span className="font-bold">POST:</span> crear recursos
                </div>
                <div className="bg-yellow-100 p-3 rounded">
                    <span className="font-bold">PUT:</span> actualizar recursos
                </div>
                <div className="bg-purple-100 p-3 rounded">
                    <span className="font-bold">PATCH:</span> actualizar parcialmente
                </div>
                <div className="bg-red-100 p-3 rounded">
                    <span className="font-bold">DELETE:</span> eliminar recursos
                </div>
            </div>
            <p className="mt-4">
                Las respuestas se intercambian comúnmente en formato JSON. Una API RESTful es sin estado
                (stateless) lo que favorece la escalabilidad y simplicidad.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                REST emergió como una alternativa más ligera, flexible y natural a SOAP. Mientras que SOAP
                requería contratos WSDL y validación XML, REST simplificaba la integración aprovechando los
                mecanismos existentes del protocolo HTTP.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>APIs REST de Facebook, Twitter e Instagram para acceder a perfiles y publicaciones</li>
                <li>Tiendas en línea como Mercado Libre o Amazon para consultar productos y manejar pagos</li>
                <li>Aplicaciones móviles y web que se comunican con backends RESTful</li>
                <li>Microservicios en arquitecturas distribuidas</li>
                <li>Dispositivos IoT para enviar métricas o recibir comandos</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    RESTful Web APIs – Leonard Richardson y Mike Amundsen
                </ResourceItem>
                <ResourceItem type="book">
                    REST API Design Rulebook – Mark Masse
                </ResourceItem>
                <ResourceItem type="article">
                    MDN – REST APIs
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman, Insomnia, Express.js, Spring Boot
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.2 Intercambio de datos
export const Content_2_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.2. Intercambio de datos entre sistemas heterogéneos</h2>

        <ContentSection title="Introducción">
            <p>
                Para garantizar la interoperabilidad entre sistemas implementados en diferentes lenguajes y
                plataformas, se requieren mecanismos estandarizados para el intercambio de datos. Dichos
                mecanismos deben ser capaces de codificar, transportar y representar información de manera
                comprensible para todos los participantes.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen4.jpg"
                alt="Intercambio de datos"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Los formatos de intercambio de datos definen cómo se estructura la información para que
                pueda ser serializada y deserializada. Los formatos más comunes son:
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex-1 bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800">XML</h4>
                    <p>Lenguaje de marcado jerárquico, extensible y autoexplicativo, muy usado en entornos empresariales.</p>
                </div>
                <div className="flex-1 bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800">JSON</h4>
                    <p>Formato de texto ligero, fácil de leer y escribir, ampliamente adoptado por APIs REST.</p>
                </div>
            </div>
            <p className="mt-4">
                El intercambio también depende del protocolo de transporte (HTTP, WebSockets), codificación
                del contenido y negociación de contenido.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                Durante los inicios de la web, el intercambio se realizaba mediante archivos planos (CSV, INI),
                bases de datos compartidas o protocolos propietarios. Con el surgimiento de XML en los 90s,
                se estableció un primer estándar para estructurar información de manera jerárquica y validable.
                Posteriormente, la necesidad de formatos más ligeros llevó al desarrollo de JSON.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>Sistema de facturación (Java) se comunica con cliente web (JavaScript) usando JSON</li>
                <li>Servicio gubernamental expone archivos XML para declaraciones fiscales</li>
                <li>Integración entre ERP (Oracle) y aplicación móvil mediante API REST en JSON</li>
                <li>Aplicaciones de salud (HL7 v3) que usan XML para historias clínicas</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    Learning XML – Erik T. Ray
                </ResourceItem>
                <ResourceItem type="book">
                    JSON at Work – Tom Marrs
                </ResourceItem>
                <ResourceItem type="article">
                    XML 1.0 Specification – W3C
                </ResourceItem>
                <ResourceItem type="article">
                    RFC 8259 – The JSON Data Interchange Format
                </ResourceItem>
                <ResourceItem type="tool">
                    Validadores: XML Validator, JSONLint
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.2.1 XML
export const Content_2_2_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.2.1. XML (eXtensible Markup Language)</h2>

        <ContentSection title="Introducción">
            <p>
                XML es un lenguaje de marcado diseñado para almacenar, transportar y estructurar datos de
                manera que puedan ser compartidos entre diferentes sistemas informáticos. Su principal
                característica es que es auto-descriptivo, extensible y legible tanto por humanos como por
                máquinas.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen5.jpg"
                alt="XML"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                XML permite definir estructuras de datos a través de etiquetas personalizadas. Un documento
                XML válido tiene una estructura en forma de árbol con un único elemento raíz. Puede
                validarse usando:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
                <li><span className="font-bold">DTD (Document Type Definition)</span>: define la estructura y reglas del documento</li>
                <li><span className="font-bold">XSD (XML Schema Definition)</span>: permite validar tipos de datos más complejos</li>
            </ul>
            <p className="mt-4">
                XML puede combinarse con tecnologías asociadas para manipular o transformar datos:
                XSLT, XPath, SOAP.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                XML fue desarrollado por el W3C en 1998 como una evolución del SGML. Durante los primeros
                años de la web, XML fue el formato estándar para la integración entre sistemas. Su uso se
                consolidó en sectores como banca, salud, telecomunicaciones y administración pública.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>Declaraciones fiscales electrónicas en formato XML estructurado y firmado digitalmente</li>
                <li>Configuración de aplicaciones empresariales (Spring applicationContext.xml)</li>
                <li>Comunicación entre sistemas ERP (SAP, Oracle)</li>
                <li>Intercambio de información en salud (HL7 v3)</li>
                <li>Almacenamiento de metadatos en bibliotecas digitales</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    Learning XML – Erik T. Ray
                </ResourceItem>
                <ResourceItem type="book">
                    Beginning XML – Joe Fawcett, Danny Ayers
                </ResourceItem>
                <ResourceItem type="article">
                    XML 1.0 Specification – W3C
                </ResourceItem>
                <ResourceItem type="tool">
                    XMLSpy, Oxygen XML Editor
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.2.2 JSON
export const Content_2_2_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.2.2. JSON (JavaScript Object Notation)</h2>

        <ContentSection title="Introducción">
            <p>
                JSON es un formato ligero de intercambio de datos, fácil de leer y escribir para los humanos, y
                simple de analizar y generar por las máquinas. Fue diseñado originalmente para representar
                estructuras de datos en JavaScript, pero actualmente es un estándar ampliamente adoptado.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen6.jpg"
                alt="JSON"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                JSON representa datos como una colección de pares clave-valor (objetos) y listas ordenadas
                de valores (arrays). Utiliza una sintaxis muy similar a la de los objetos de JavaScript:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    {`// Objeto JSON\n{\n  "nombre": "Juan",\n  "edad": 30,\n  "activo": true\n}`}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    {`// Arreglo JSON\n[\n  "manzana",\n  "banana",\n  "naranja"\n]`}
                </div>
            </div>
            <p className="mt-4">
                JSON se ha convertido en el formato de facto para las APIs REST debido a su menor sobrecarga
                comparado con XML y su facilidad de uso en JavaScript.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                JSON fue propuesto por Douglas Crockford a principios de los años 2000 como una alternativa
                simple a XML, especialmente para aplicaciones web que necesitaban intercambiar datos entre
                el navegador y el servidor de manera más eficiente.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>APIs RESTful de GitHub, Twitter, Stripe o Firebase</li>
                <li>Aplicaciones móviles (Flutter, React Native) que consumen servicios en JSON</li>
                <li>Configuración de herramientas (package.json en Node.js)</li>
                <li>Transmisión de datos en tiempo real con WebSockets</li>
                <li>Sistemas de monitoreo y análisis (ELK Stack)</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    JSON at Work – Tom Marrs
                </ResourceItem>
                <ResourceItem type="book">
                    JavaScript: The Good Parts – Douglas Crockford
                </ResourceItem>
                <ResourceItem type="article">
                    RFC 8259 – The JSON Data Interchange Format
                </ResourceItem>
                <ResourceItem type="tool">
                    Validadores: JSONLint, FreeFormatter
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.3 Principios RESTful
export const Content_2_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.3. Principios arquitectónicos de una API RESTful</h2>

        <ContentSection title="Introducción">
            <p>
                Las APIs RESTful siguen un conjunto de principios arquitectónicos que permiten construir
                servicios web escalables, mantenibles y fáciles de usar. Estos principios aprovechan las
                características del protocolo HTTP para gestionar recursos de forma uniforme y coherente.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen7.jpg"
                alt="API RESTful"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Los principios principales que rigen una API RESTful incluyen:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
                <li><span className="font-bold">URIs significativas:</span> Cada recurso debe estar identificado con un URI único, claro y legible</li>
                <li><span className="font-bold">Uso adecuado de verbos HTTP:</span> GET, POST, PUT, DELETE para operaciones sobre recursos</li>
                <li><span className="font-bold">Representación de recursos:</span> Datos en JSON, XML u otros formatos</li>
                <li><span className="font-bold">Sin estado:</span> Cada petición es independiente</li>
                <li><span className="font-bold">Códigos de respuesta HTTP:</span> Señalan el resultado de la operación</li>
                <li><span className="font-bold">Endpoints organizados:</span> Rutas que reflejen jerarquía y funcionalidad</li>
            </ul>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                Roy Fielding definió REST en el año 2000 como una alternativa a arquitecturas orientadas a
                servicios pesadas y complejas. El principio fundamental es la abstracción del estado y la
                manipulación de recursos a través de HTTP.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800">URIs</h4>
                    <p className="font-mono">/api/v1/usuarios/123</p>
                    <p>Representa el recurso usuario con ID 123</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800">Verbo GET</h4>
                    <p className="font-mono">GET /productos/45</p>
                    <p>Retorna detalles del producto</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-800">Verbo POST</h4>
                    <p className="font-mono">POST /ordenes</p>
                    <p>Crea una nueva orden con JSON</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800">Verbo DELETE</h4>
                    <p className="font-mono">DELETE /productos/45</p>
                    <p>Elimina un producto</p>
                </div>
            </div>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    REST API Design Rulebook – Mark Masse
                </ResourceItem>
                <ResourceItem type="book">
                    RESTful Web APIs – Leonard Richardson & Mike Amundsen
                </ResourceItem>
                <ResourceItem type="article">
                    RFC 7231: HTTP/1.1 Semantics and Content
                </ResourceItem>
                <ResourceItem type="tool">
                    Swagger / OpenAPI, Postman
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.3.1 URIs
export const Content_2_3_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.3.1. URIs</h2>

        <ContentSection title="Introducción">
            <p>
                Las URIs (Uniform Resource Identifiers) son la piedra angular de las APIs RESTful, ya que
                identifican de manera única cada recurso que puede ser accedido o manipulado. La
                estructura de las URIs debe ser clara, lógica y predecible para facilitar su uso y
                mantenimiento.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen8.jpg"
                alt="URIs RESTful"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Una URI debe representar recursos, no acciones, por lo que es recomendable usar
                sustantivos y evitar verbos. La jerarquía en las URIs refleja la relación entre recursos.
                Además, deben ser consistentes, legibles y en minúsculas para evitar confusiones.
            </p>
            <p className="mt-4">
                Ejemplo: <span className="font-mono">/api/v1/usuarios/123/perfiles</span> donde se accede a los perfiles del usuario 123.
            </p>
            <p className="mt-3">
                Se recomienda evitar parámetros que no sean filtros o paginación en la ruta principal.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                El uso de URIs como identificadores únicos viene de los principios de la web y HTTP. REST
                adoptó esta idea para que cada recurso sea un objeto único y accesible. Antes de REST,
                algunas APIs usaban URIs que incluían verbos o estructuras poco intuitivas, lo que dificultaba
                su uso.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-mono">/productos</span> — Lista todos los productos</li>
                <li><span className="font-mono">/productos/45</span> — Detalle del producto con ID 45</li>
                <li><span className="font-mono">/usuarios/123/pedidos</span> — Pedidos realizados por el usuario 123</li>
                <li><span className="font-mono">/ordenes?estado=pendiente</span> — Filtra órdenes con estado pendiente</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Best Practices for Designing a Pragmatic RESTful API – Vinay Sahni
                </ResourceItem>
                <ResourceItem type="article">
                    RESTful API URI Design – REST API Tutorial
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman, Insomnia para probar URIs
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.3.2 Verbo GET
export const Content_2_3_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.3.2. Verbo GET para obtener un recurso</h2>

        <ContentSection title="Introducción">
            <p>
                El verbo GET es el método HTTP más utilizado para recuperar información de un servidor sin
                modificar el estado del recurso. Es seguro y idempotente, lo que significa que múltiples
                llamadas no cambian el recurso.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                GET debe devolver una representación del recurso solicitado, normalmente en JSON o XML.
                No debe modificar datos ni tener efectos secundarios. Además, puede soportar consultas
                con parámetros para filtrar, ordenar o paginar resultados.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                GET es uno de los métodos originales definidos en HTTP/1.1, diseñado para la recuperación
                segura de recursos. En REST, su uso se enfatiza para la obtención de datos, a diferencia de
                POST o PUT que modifican.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-mono">GET /usuarios</span> — Obtiene la lista completa de usuarios</li>
                <li><span className="font-mono">GET /productos/123</span> — Obtiene detalles del producto 123</li>
                <li><span className="font-mono">GET /pedidos?fecha=2025-01-01</span> — Lista pedidos realizados en una fecha específica</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    RFC 7231: Especificación de métodos HTTP
                </ResourceItem>
                <ResourceItem type="article">
                    Using HTTP GET Requests – MDN Web Docs
                </ResourceItem>
                <ResourceItem type="tool">
                    Curl, Postman
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.3.3 Verbo POST
export const Content_2_3_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.3.3. Verbo POST para crear un recurso</h2>

        <ContentSection title="Introducción">
            <p>
                POST se utiliza para crear nuevos recursos en el servidor. Es un método no idempotente, lo
                que significa que múltiples solicitudes POST pueden crear múltiples recursos.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Con POST, el cliente envía un cuerpo con la representación del recurso a crear. El servidor
                procesa esta información, crea el recurso y responde usualmente con el URI del nuevo
                recurso y un código 201 Created.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                POST se definió originalmente para enviar datos al servidor que podrían generar efectos
                secundarios, incluyendo creación de recursos. REST lo adoptó para operaciones de creación
                por su naturaleza flexible.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-mono">POST /usuarios</span> con JSON que contiene datos de un nuevo usuario</li>
                <li><span className="font-mono">POST /productos</span> para añadir un nuevo producto al catálogo</li>
                <li><span className="font-mono">POST /ordenes</span> para generar una nueva orden de compra</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    RFC 7231: HTTP POST Method
                </ResourceItem>
                <ResourceItem type="article">
                    How to use HTTP POST – REST API Tutorial
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman para enviar solicitudes POST con payload JSON
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.3.4 Verbo PUT
export const Content_2_3_4 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.3.4. Verbo PUT para actualizar un recurso</h2>

        <ContentSection title="Introducción">
            <p>
                PUT se usa para actualizar o reemplazar completamente un recurso existente. Es
                idempotente, por lo que múltiples llamadas con la misma carga producen el mismo
                resultado.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                El cliente envía la representación completa del recurso actualizado al URI correspondiente. Si
                el recurso no existe, algunos servidores permiten crear el recurso (upsert). PUT reemplaza el
                estado completo del recurso.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                El método PUT fue definido para permitir actualizaciones de recursos de forma explícita y
                completa, a diferencia de POST que puede ser más genérico.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-mono">PUT /usuarios/123</span> con el JSON completo del usuario actualizado</li>
                <li><span className="font-mono">PUT /productos/45</span> para modificar todos los atributos del producto</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    RFC 7231: HTTP PUT Method
                </ResourceItem>
                <ResourceItem type="article">
                    RESTful PUT vs PATCH – REST API Tutorial
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman para pruebas de actualización
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.3.5 Verbo DELETE
export const Content_2_3_5 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.3.5. Verbo DELETE para eliminar un recurso</h2>

        <ContentSection title="Introducción">
            <p>
                DELETE se utiliza para eliminar un recurso identificado por su URI. También es idempotente:
                eliminar un recurso varias veces produce el mismo efecto que eliminarlo una vez.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Al enviar una solicitud DELETE, el servidor borra el recurso y generalmente responde con un
                código 204 No Content si la eliminación fue exitosa, o 404 Not Found si el recurso no existe.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                DELETE es uno de los métodos originales HTTP, diseñado para gestionar la eliminación de
                recursos de manera clara y estándar.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-mono">DELETE /usuarios/123</span> elimina el usuario con ID 123</li>
                <li><span className="font-mono">DELETE /productos/45</span> elimina un producto del inventario</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    RFC 7231: HTTP DELETE Method
                </ResourceItem>
                <ResourceItem type="article">
                    Using HTTP DELETE in REST APIs – REST API Tutorial
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman, Curl para enviar DELETE requests
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.3.6 Códigos de respuesta
export const Content_2_3_6 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.3.6. Códigos de respuesta</h2>

        <ContentSection title="Introducción">
            <p>
                Los códigos de respuesta HTTP permiten al cliente entender el resultado de su solicitud. Son
                esenciales para manejar flujos y errores correctamente en APIs REST.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen9.jpg"
                alt="Códigos HTTP"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Los códigos se dividen en categorías:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
                <li><span className="font-bold">1xx:</span> Informativos</li>
                <li><span className="font-bold">2xx:</span> Éxito (200 OK, 201 Created, 204 No Content)</li>
                <li><span className="font-bold">3xx:</span> Redirección</li>
                <li><span className="font-bold">4xx:</span> Errores del cliente (400 Bad Request, 401 Unauthorized, 404 Not Found)</li>
                <li><span className="font-bold">5xx:</span> Errores del servidor (500 Internal Server Error)</li>
            </ul>
            <p className="mt-4">
                El uso correcto de estos códigos ayuda a estandarizar la comunicación y facilitar la
                depuración.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                HTTP definió estos códigos en sus primeras versiones, y REST los adoptó como un estándar
                para el control de flujo entre cliente y servidor.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-bold">200 OK:</span> respuesta exitosa con datos</li>
                <li><span className="font-bold">201 Created:</span> recurso creado</li>
                <li><span className="font-bold">400 Bad Request:</span> solicitud inválida</li>
                <li><span className="font-bold">401 Unauthorized:</span> falta autenticación</li>
                <li><span className="font-bold">404 Not Found:</span> recurso inexistente</li>
                <li><span className="font-bold">500 Internal Server Error:</span> falla del servidor</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    RFC 7231 – HTTP/1.1 Semantics
                </ResourceItem>
                <ResourceItem type="article">
                    HTTP Status Codes for REST APIs – REST API Tutorial
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman para observar códigos en respuestas
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.3.7 Endpoints
export const Content_2_3_7 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.3.7. Endpoints</h2>

        <ContentSection title="Introducción">
            <p>
                Un endpoint es una URL concreta donde se expone un recurso o servicio en una API RESTful.
                La correcta organización y diseño de endpoints es clave para la usabilidad y escalabilidad.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen10.jpg"
                alt="Endpoints REST"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Los endpoints deben seguir una estructura lógica y consistente que refleje la jerarquía y
                relación entre recursos. Se recomienda versionar las APIs y usar rutas claras. Se pueden
                agregar parámetros para filtros, ordenamientos o paginación.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                Con la evolución de las APIs REST, se reconoció la necesidad de estructurar endpoints que
                fueran intuitivos, facilitando así la adopción por parte de desarrolladores y mejorando el
                mantenimiento.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-mono">/api/v1/usuarios</span></li>
                <li><span className="font-mono">/api/v1/usuarios/&#123;id&#125;/ordenes</span></li>
                <li><span className="font-mono">/api/v1/productos?categoria=electronica&page=2&limit=10</span></li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    REST API Design Rulebook – Mark Masse
                </ResourceItem>
                <ResourceItem type="article">
                    API Endpoint Design Best Practices – Nordic APIs
                </ResourceItem>
                <ResourceItem type="tool">
                    Swagger para documentar endpoints y sus parámetros
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.4 Herramientas de depuración
export const Content_2_4 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.4. Herramientas de depuración</h2>

        <ContentSection title="Introducción">
            <p>
                En el desarrollo y mantenimiento de aplicaciones que consumen APIs, la depuración es
                esencial para identificar errores, validar respuestas y mejorar la integración. Las herramientas
                de depuración facilitan el análisis de las peticiones y respuestas HTTP.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen11.jpg"
                alt="Herramientas de depuración"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Las herramientas de depuración para APIs ofrecen funcionalidades como:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Envío manual de solicitudes HTTP con diferentes métodos (GET, POST, PUT, DELETE)</li>
                <li>Visualización y análisis de códigos de respuesta, encabezados y cuerpos</li>
                <li>Simulación de escenarios de error y autenticación</li>
                <li>Automatización de pruebas con colecciones de endpoints</li>
                <li>Inspección detallada de logs y tráfico HTTP</li>
            </ul>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                En etapas iniciales, la depuración de APIs se realizaba con herramientas genéricas como
                telnet o comandos curl en consola. La creciente complejidad de las APIs llevó a la creación
                de aplicaciones especializadas.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800">Postman</h4>
                    <p>Permite construir, enviar y guardar solicitudes HTTP, automatizar pruebas y generar documentación</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800">SOAP UI</h4>
                    <p>Especializado en servicios SOAP, soporta pruebas funcionales, de carga y seguridad</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800">Insomnia</h4>
                    <p>Cliente REST moderno y ligero con características de depuración avanzada</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800">Fiddler/Charles Proxy</h4>
                    <p>Proxy que captura todo el tráfico HTTP para analizar peticiones</p>
                </div>
            </div>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Postman Learning Center
                </ResourceItem>
                <ResourceItem type="article">
                    SOAP UI Documentation
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman, SOAP UI, Insomnia, Fiddler
                </ResourceItem>
                <ResourceItemURL type="video" url="https://youtu.be/CLG0ha_a0q8?si=QN5a-Rv0L9149WLK">
                    API Testing and Debugging with Postman – YouTube
                </ResourceItemURL>
            </ul>
        </ContentSection>
    </div>
);

// 2.4.1 Consumir API de terceros
export const Content_2_4_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.4.1. Consumir servicios de una API de terceros</h2>

        <ContentSection title="Introducción">
            <p>
                Muchas aplicaciones dependen de APIs públicas o privadas externas para extender sus
                funcionalidades. Consumir estos servicios de terceros requiere entender cómo interactuar
                correctamente, manejar autenticaciones y adaptarse a sus formatos y protocolos.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen12.jpg"
                alt="API de terceros"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Consumir una API de terceros implica:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Leer y comprender la documentación del proveedor de la API</li>
                <li>Configurar autenticación (API keys, OAuth, tokens)</li>
                <li>Realizar llamadas HTTP a los endpoints adecuados, enviando los parámetros requeridos</li>
                <li>Manejar respuestas, errores y límites de uso (rate limiting)</li>
                <li>Integrar los datos o servicios recibidos en la propia aplicación</li>
            </ul>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                Desde el auge de las APIs públicas, la necesidad de consumir servicios externos creció
                exponencialmente. Plataformas como Twitter, Google Maps o Stripe popularizaron la
                integración externa, lo que generó la demanda de herramientas y técnicas para facilitar la
                interacción y depuración.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>Una aplicación móvil que muestra mapas y utiliza la API de Google Maps</li>
                <li>Un sitio web de comercio electrónico que usa la API de PayPal para procesar pagos</li>
                <li>Un dashboard que consume la API pública de OpenWeather para mostrar el clima</li>
                <li>Integración con APIs de redes sociales para autenticación y publicación automática</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    Google Maps API Documentation
                </ResourceItem>
                <ResourceItem type="article">
                    Stripe API Reference
                </ResourceItem>
                <ResourceItem type="article">
                    Getting Started with Third-Party APIs – freeCodeCamp
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman, Insomnia, Curl
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.5 Buenas prácticas
export const Content_2_5 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.5. Buenas prácticas para la creación de API&apos;s</h2>

        <ContentSection title="Introducción">
            <p>
                La creación de APIs efectivas y mantenibles es crucial para el éxito de cualquier sistema
                distribuido. Las buenas prácticas en diseño, implementación y documentación garantizan
                que la API sea segura, fácil de usar, escalable e integrable.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen13.jpg"
                alt="Buenas prácticas API"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Las buenas prácticas abarcan varios aspectos:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
                <li><span className="font-bold">Diseño claro y consistente:</span> URIs legibles, coherentes y siguiendo estándares REST</li>
                <li><span className="font-bold">Uso correcto de métodos HTTP:</span> aplicar GET, POST, PUT, DELETE, PATCH según el caso</li>
                <li><span className="font-bold">Versionado:</span> mantener versiones estables para evitar rupturas</li>
                <li><span className="font-bold">Manejo adecuado de errores:</span> devolver códigos de estado HTTP precisos y mensajes explicativos</li>
                <li><span className="font-bold">Seguridad:</span> implementar autenticación, autorización, HTTPS y protección contra ataques</li>
                <li><span className="font-bold">Documentación completa:</span> uso de herramientas como Swagger/OpenAPI</li>
                <li><span className="font-bold">Limitación de tasa:</span> para proteger recursos y evitar abusos</li>
                <li><span className="font-bold">Paginación y filtros:</span> en respuestas con grandes volúmenes de datos</li>
                <li><span className="font-bold">Idempotencia:</span> diseñar operaciones que puedan repetirse sin efectos adversos</li>
            </ul>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                Con el auge de los servicios web, muchas organizaciones desarrollaron APIs sin estándares
                claros, lo que llevó a problemas de interoperabilidad y mantenimiento. La comunidad ha
                recopilado buenas prácticas que se han convertido en guías de diseño ampliamente aceptadas.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>GitHub API: estructura clara de endpoints, excelente documentación</li>
                <li>Stripe API: uso riguroso de HTTPS, tokens para autenticación</li>
                <li>Twitter API: límites de tasa bien definidos</li>
                <li>APIs internas en grandes empresas con políticas estrictas de diseño</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    API Design Patterns – JJ Geewax
                </ResourceItem>
                <ResourceItem type="book">
                    REST API Design Rulebook – Mark Masse
                </ResourceItem>
                <ResourceItem type="article">
                    REST API Design Best Practices – Microsoft
                </ResourceItem>
                <ResourceItem type="article">
                    API Security Best Practices – OWASP
                </ResourceItem>
                <ResourceItem type="tool">
                    Swagger / OpenAPI, Postman
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.6 Seguridad de servicios
export const Content_2_6 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.6. Seguridad de servicios</h2>

        <ContentSection title="Introducción">
            <p>
                La seguridad en servicios web y APIs es fundamental para proteger los datos, garantizar la
                integridad y privacidad de la información, y asegurar que solo usuarios y sistemas
                autorizados puedan acceder a los recursos.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen14.jpg"
                alt="Seguridad de servicios"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                La seguridad en servicios web se aborda con diversas técnicas:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
                <li><span className="font-bold">Gestión de sesiones:</span> control de estados y usuarios autenticados</li>
                <li><span className="font-bold">Autenticación básica:</span> uso de credenciales simples</li>
                <li><span className="font-bold">Autenticación implícita:</span> integración con flujos de autenticación OAuth2</li>
                <li><span className="font-bold">Seguridad basada en certificados:</span> uso de SSL/TLS</li>
                <li><span className="font-bold">Tokens de seguridad:</span> JWT para autenticación sin estado</li>
                <li><span className="font-bold">Estándares de autorización:</span> OAuth2, OpenID Connect</li>
            </ul>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                Inicialmente, la seguridad se basaba en sesiones gestionadas en el servidor y autenticación
                básica. Con el aumento de APIs distribuidas y microservicios, se han adoptado métodos más
                flexibles y escalables como tokens JWT y protocolos estándares de autorización.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800">Seguridad basada en Sesiones</h4>
                    <p>Almacenamiento de identificadores de sesión en cookies para mantener estado</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800">Autenticación HTTP Básica</h4>
                    <p>Envío de usuario y contraseña codificados en base64</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-800">Autenticación Implícita</h4>
                    <p>Uso en aplicaciones SPA con OAuth2</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800">Autenticación basada en tokens</h4>
                    <p>JWT para autenticación stateless</p>
                </div>
            </div>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="book">
                    OAuth 2 in Action – Justin Richer & Antonio Sanso
                </ResourceItem>
                <ResourceItem type="book">
                    API Security in Action – Neil Madden
                </ResourceItem>
                <ResourceItem type="protocol">
                    OAuth 2.0 Framework – RFC 6749
                </ResourceItem>
                <ResourceItem type="security">
                    OWASP API Security Top 10
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman, OpenSSL
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.6.1 Seguridad basada en Sesiones
export const Content_2_6_1 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.6.1. Seguridad basada en Sesiones</h2>

        <ContentSection title="Introducción">
            <p>
                La seguridad basada en sesiones es un método tradicional para gestionar la autenticación y autorización en aplicaciones web. Consiste en mantener un estado en el servidor que identifica a un usuario autenticado durante un período de tiempo.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen15.jpg"
                alt="Sesiones"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Cuando un usuario inicia sesión, el servidor crea una sesión y asigna un identificador único
                (ID de sesión), que se almacena en una cookie en el navegador del cliente. En cada solicitud
                subsecuente, el cliente envía esta cookie para que el servidor reconozca al usuario y permita
                o deniegue el acceso a recursos según sus permisos.
            </p>
            <p className="mt-4">
                Las sesiones suelen almacenar información de autenticación, roles, y preferencias del
                usuario. La comunicación normalmente se protege con HTTPS para evitar la
                interceptación de cookies.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                Este método ha sido ampliamente usado desde los inicios de aplicaciones web dinámicas
                para manejar usuarios autenticados. Su simplicidad y compatibilidad con navegadores la
                hicieron estándar, aunque tiene limitaciones para aplicaciones distribuidas o móviles.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>Sistemas de gestión de contenido (CMS) como WordPress</li>
                <li>Plataformas educativas donde los estudiantes inician sesión</li>
                <li>Aplicaciones bancarias web que controlan sesiones para operaciones seguras</li>
                <li>Portales empresariales con acceso basado en roles</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    MDN Web Docs: HTTP Cookies
                </ResourceItem>
                <ResourceItem type="article">
                    OWASP: Session Management Cheat Sheet
                </ResourceItem>
                <ResourceItem type="article">
                    Managing Sessions in Web Applications – TutorialsPoint
                </ResourceItem>
                <ResourceItem type="tool">
                    Frameworks como Express.js, Django o Spring que gestionan sesiones
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.6.2 Autenticación HTTP Básica
export const Content_2_6_2 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.6.2. Autenticación HTTP Básica</h2>

        <ContentSection title="Introducción">
            <p>
                La autenticación HTTP Básica es un método simple y estandarizado para que un cliente
                provea credenciales (usuario y contraseña) en cada solicitud HTTP, permitiendo al servidor
                validar el acceso a recursos protegidos.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen16.jpg"
                alt="Autenticación Básica"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                En HTTP Básico, el cliente envía las credenciales codificadas en base64 en la cabecera
                Authorization de la solicitud HTTP. Por ejemplo:
            </p>
            <div className="bg-gray-800 text-white p-4 rounded mt-3 font-mono text-sm">
                Authorization: Basic dXN1YXJpbzp0dXRv
            </div>
            <p className="mt-3">
                donde <span className="font-mono">dXN1YXJpbzp0dXRv</span> es el resultado de codificar &quot;usuario:tuto&quot; en base64.
            </p>
            <p className="mt-3">
                Este método no cifra las credenciales, por lo que debe usarse exclusivamente sobre
                conexiones seguras HTTPS para evitar que sean interceptadas.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                HTTP Básico fue definido en el estándar HTTP/1.0 y ampliamente adoptado por su
                simplicidad. Sin embargo, su falta de cifrado inherente y limitaciones de seguridad llevaron a
                la creación de métodos más robustos como OAuth y autenticación basada en tokens.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>APIs internas o privadas que no requieren complejos sistemas de autenticación</li>
                <li>Servicios REST que usan autenticación sencilla para entornos controlados</li>
                <li>Algunos servicios de administración remota o servidores web básicos</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    RFC 7617 – The &quot;Basic&quot; HTTP Authentication Scheme
                </ResourceItem>
                <ResourceItem type="article">
                    MDN Web Docs: HTTP Authentication
                </ResourceItem>
                <ResourceItem type="article">
                    Using HTTP Basic Authentication – REST API Tutorial
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman para probar autenticación básica
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.6.3 Autenticación Implícita
export const Content_2_6_3 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.6.3. Autenticación Implícita</h2>

        <ContentSection title="Introducción">
            <p>
                La autenticación implícita es un flujo de autorización dentro del protocolo OAuth 2.0
                diseñado especialmente para aplicaciones web de una sola página (SPA) y clientes que no
                pueden mantener de manera segura un secreto.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen17.jpg"
                alt="Autenticación Implícita"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                En este flujo, el cliente (por ejemplo, una SPA en JavaScript) redirige al usuario al servidor de
                autorización. Luego, el servidor devuelve directamente un token de acceso al
                cliente mediante la URL, sin necesidad de un intercambio adicional de código.
            </p>
            <p className="mt-4">
                Este método evita almacenar secretos en el cliente, pero implica que el token de acceso
                queda expuesto en la URL, lo que requiere implementar medidas de seguridad como HTTPS y
                almacenamiento seguro en memoria o almacenamiento local temporal.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                OAuth 2.0 definió el flujo implícito para facilitar la autorización en entornos donde no es
                posible usar un backend seguro para intercambiar códigos de autorización. Sin embargo, con
                la evolución de mejores prácticas, el flujo implícito ha sido desaconsejado por cuestiones de seguridad.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>Aplicaciones web SPA que necesitan acceso rápido a APIs protegidas sin backend</li>
                <li>Aplicaciones móviles híbridas que funcionan principalmente en el cliente</li>
                <li>Servicios donde se prioriza la simplicidad sobre el máximo nivel de seguridad</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    OAuth 2.0 Authorization Framework – RFC 6749
                </ResourceItem>
                <ResourceItem type="article">
                    Understanding OAuth 2.0 Implicit Flow – Auth0 Blog
                </ResourceItem>
                <ResourceItem type="article">
                    Why Implicit Flow is being deprecated – Okta Developer
                </ResourceItem>
                <ResourceItem type="tool">
                    Herramientas para implementar OAuth 2.0 como IdentityServer, Auth0, Okta
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.6.4 Seguridad basada en certificados
export const Content_2_6_4 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.6.4. Seguridad basada en certificados</h2>

        <ContentSection title="Introducción">
            <p>
                La seguridad basada en certificados utiliza infraestructuras de clave pública (PKI) para autenticar y cifrar la comunicación entre clientes y servidores, asegurando la integridad, confidencialidad y autenticidad de los datos transmitidos en servicios web y APIs.
            </p>
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Este enfoque se basa en el uso de certificados digitales emitidos por autoridades certificadoras (CA) que validan la identidad de las partes involucradas. Los certificados contienen claves públicas y firmas digitales que permiten establecer conexiones seguras mediante protocolos como TLS/SSL.
            </p>
            <p className="mt-4">
                En aplicaciones web y APIs, se usa principalmente para:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
                <li><span className="font-bold">Cifrar la comunicación</span> usando HTTPS, evitando que terceros intercepten o modifiquen la información</li>
                <li><span className="font-bold">Autenticación mutua:</span> donde tanto servidor como cliente presentan certificados para verificar su identidad</li>
                <li><span className="font-bold">Firma digital de mensajes:</span> garantizando que los datos no hayan sido alterados y provienen de una fuente confiable</li>
            </ul>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                La adopción de TLS/SSL comenzó en la década de 1990 para proteger las transacciones en internet. Con el crecimiento de las APIs y servicios distribuidos, el uso de certificados para cifrar y autenticar se convirtió en estándar de seguridad.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-bold">HTTPS:</span> todos los servicios web modernos usan certificados TLS</li>
                <li><span className="font-bold">Autenticación mutua en APIs:</span> APIs financieras que requieren certificados</li>
                <li><span className="font-bold">Firma de mensajes SOAP:</span> usando WS-Security para asegurar integridad</li>
                <li><span className="font-bold">VPNs y comunicaciones internas:</span> usan certificados para asegurar conexiones privadas</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    RFC 5246 – TLS Protocol Version 1.2
                </ResourceItem>
                <ResourceItem type="article">
                    Introduction to Public Key Infrastructure (PKI)
                </ResourceItem>
                <ResourceItem type="article">
                    How TLS Works – Cloudflare Learning Center
                </ResourceItem>
                <ResourceItem type="tool">
                    OpenSSL para creación y manejo de certificados
                </ResourceItem>
                <ResourceItem type="tool">
                    Let&apos;s Encrypt para certificados gratuitos
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.6.5 Autenticación basada en tokens
export const Content_2_6_5 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.6.5. Autenticación basada en tokens</h2>

        <ContentSection title="Introducción">
            <p>
                La autenticación basada en tokens es un método moderno y escalable para validar usuarios y
                servicios sin necesidad de mantener sesiones en el servidor. Consiste en emitir un token
                seguro que representa la identidad y permisos del usuario.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen18.jpg"
                alt="Autenticación por tokens"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Al autenticarse, el servidor genera un token (usualmente un JSON Web Token - JWT) que
                contiene información codificada y firmada digitalmente. Este token es enviado al cliente, que
                lo almacena (en memoria, localStorage o cookies seguras) y lo incluye en la cabecera
                Authorization de futuras solicitudes, típicamente con el esquema Bearer.
            </p>
            <p className="mt-4">
                La verificación del token permite al servidor autenticar sin necesidad de consultar una base
                de datos para cada petición, lo que mejora el rendimiento y escalabilidad. Además, los
                tokens pueden incluir información sobre roles, permisos y tiempos de expiración.
            </p>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                El uso de tokens ganó popularidad con la llegada de aplicaciones móviles y arquitecturas sin
                estado (stateless), donde mantener sesiones es complejo. JWT fue estandarizado para
                proveer un formato compacto, seguro y fácil de verificar para estos tokens.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>APIs RESTful que usan JWT para autenticar usuarios</li>
                <li>Servicios que integran OAuth 2.0 donde el token de acceso es un JWT</li>
                <li>Sistemas sin estado que requieren escalabilidad horizontal</li>
                <li>Microservicios que verifican tokens para autorización delegada</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    JWT.io
                </ResourceItem>
                <ResourceItem type="article">
                    RFC 7519 – JSON Web Token
                </ResourceItem>
                <ResourceItem type="article">
                    Implementing JWT Authentication – Auth0 Docs
                </ResourceItem>
                <ResourceItem type="tool">
                    Bibliotecas JWT para múltiples lenguajes (JavaScript, Python, Java, etc.)
                </ResourceItem>
                <ResourceItem type="tool">
                    Postman para enviar tokens en peticiones HTTP
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

// 2.6.6 Estándares para autorización
export const Content_2_6_6 = () => (
    <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">2.6.6. Estándares para autorización de APIs</h2>

        <ContentSection title="Introducción">
            <p>
                La autorización en APIs define qué acciones puede realizar un usuario o cliente una vez autenticado. Los estándares para autorización proporcionan protocolos y frameworks que permiten controlar y delegar permisos de manera segura y escalable.
            </p>
            <ImageWithCaption
                src="/images/unidad2/imagen19.jpg"
                alt="Autorización APIs"
                className="my-4 rounded-lg shadow-md w-full max-w-md"
            />
        </ContentSection>

        <ContentSection title="Descripción del tema">
            <p>
                Entre los estándares más importantes para autorización en APIs se encuentran:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
                <li><span className="font-bold">OAuth 2.0:</span> protocolo que permite a un usuario autorizar a aplicaciones de terceros a acceder a recursos sin compartir credenciales</li>
                <li><span className="font-bold">OpenID Connect (OIDC):</span> capa de identidad construida sobre OAuth 2.0 que permite autenticar usuarios</li>
                <li><span className="font-bold">JWT (JSON Web Tokens):</span> formato para representar claims de autorización</li>
                <li><span className="font-bold">Scopes y Roles:</span> mecanismos para definir el nivel de acceso y permisos granulares</li>
                <li><span className="font-bold">Policy-based Authorization:</span> modelos donde las políticas definen permisos basados en atributos</li>
            </ul>
        </ContentSection>

        <ContentSection title="Antecedentes">
            <p>
                Antes de OAuth, las aplicaciones compartían credenciales o usaban sistemas rígidos de
                autenticación y autorización. OAuth 2.0 surgió para resolver estos problemas, facilitando el
                acceso delegado y la autorización granular sin comprometer la seguridad del usuario.
            </p>
        </ContentSection>

        <ContentSection title="Ejemplos de aplicación">
            <ul className="list-disc pl-5 space-y-2">
                <li>Aplicaciones que permiten iniciar sesión con Google o Facebook usando OpenID Connect</li>
                <li>APIs que permiten a clientes acceder solo a ciertos recursos mediante scopes en OAuth 2.0</li>
                <li>Sistemas empresariales que implementan autorización basada en roles y políticas</li>
                <li>Plataformas que integran microservicios con autorización centralizada usando tokens JWT</li>
            </ul>
        </ContentSection>

        <ContentSection title="Información de apoyo">
            <ul className="space-y-3">
                <ResourceItem type="article">
                    OAuth 2.0 Framework – RFC 6749
                </ResourceItem>
                <ResourceItem type="article">
                    OpenID Connect Core 1.0
                </ResourceItem>
                <ResourceItem type="book">
                    OAuth 2 in Action – Justin Richer & Antonio Sanso
                </ResourceItem>
                <ResourceItem type="book">
                    Securing APIs with OAuth 2.0 – Prabath Sirivardena
                </ResourceItem>
                <ResourceItem type="tool">
                    Identity Providers como Auth0, Okta, Keycloak
                </ResourceItem>
            </ul>
        </ContentSection>
    </div>
);

export const References_U2 = () => (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg my-8">
        <h4 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3 mb-6">
            Bibliografía y Recursos Digitales - Unidad 2
        </h4>

        <div className="space-y-8">
            {/* Sección Bibliografía Básica */}
            <div>
                <h5 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Bibliografía Básica
                </h5>
                <ul className="space-y-3 pl-2">
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Papazoglou, M. <span className="italic text-gray-700">Web Services: Principles and Technology</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Cerami, E. <span className="italic text-gray-700">Web Services Essentials</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Ert, T. <span className="italic text-gray-700">SOA: Principles of Service Design</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Richardson, L. y Amundsen, M. <span className="italic text-gray-700">RESTful Web APIs</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Masse, M. <span className="italic text-gray-700">REST API Design Rulebook</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Ray, E. T. <span className="italic text-gray-700">Learning XML</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Marrs, T. <span className="italic text-gray-700">JSON at Work</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Fawcett, J. y Ayers, D. <span className="italic text-gray-700">Beginning XML</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Crockford, D. <span className="italic text-gray-700">JavaScript: The Good Parts</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Geewax, J. J. <span className="italic text-gray-700">API Design Patterns</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Richer, J. y Sanso, A. <span className="italic text-gray-700">OAuth 2 in Action</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Madden, N. <span className="italic text-gray-700">API Security in Action</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Sirivardena, P. <span className="italic text-gray-700">Securing APIs with OAuth 2.0</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>W3C. <span className="italic text-gray-700">SOAP 1.2 Specification</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>W3C. <span className="italic text-gray-700">WSDL 1.1 Specification</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>W3C. <span className="italic text-gray-700">XML 1.0 Specification</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>W3C. <span className="italic text-gray-700">XSD Schema Language</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>IETF. <span className="italic text-gray-700">RFC 8259: The JSON Data Interchange Format</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>IETF. <span className="italic text-gray-700">RFC 7231: HTTP/1.1 Semantics and Content</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>IETF. <span className="italic text-gray-700">RFC 6749: OAuth 2.0 Framework</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>IETF. <span className="italic text-gray-700">RFC 7617: The &apos;Basic&apos; HTTP Authentication Scheme</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>IETF. <span className="italic text-gray-700">RFC 5246: TLS Protocol Version 1.2</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>IETF. <span className="italic text-gray-700">RFC 7519: JSON Web Token</span>.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>OpenID Foundation. <span className="italic text-gray-700">OpenID Connect Core 1.0</span>.</span>
                    </li>
                </ul>
            </div>

            {/* Sección Recursos Digitales */}
            <div>
                <h5 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Recursos Digitales
                </h5>
                <ul className="space-y-3 pl-2">
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>MDN Web Docs. <a
                            href="https://developer.mozilla.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            SOAP vs REST
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>REST API Tutorial. <a
                            href="https://www.restapitutorial.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            REST API Tutorial
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Nordic APIs. <a
                            href="https://nordicapis.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            SOAP vs REST - A Real World Comparison
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Mozilla Developer Network. <a
                            href="https://developer.mozilla.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            JSON vs XML: What&apos;s the Difference?
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>json.org. <a
                            href="https://www.json.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            JSON Official Documentation
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Microsoft. <a
                            href="https://docs.microsoft.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            API Style Guide
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>OWASP. <a
                            href="https://owasp.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            API Security Best Practices
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>OWASP. <a
                            href="https://owasp.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            API Security Top 10
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>JWT.io. <a
                            href="https://jwt.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            JSON Web Tokens Documentation
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Postman Learning Center. <a
                            href="https://learning.postman.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Postman Documentation
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>SOAP UI Documentation. <a
                            href="https://www.soapui.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            SOAP UI Documentation
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Guru99. <a
                            href="https://www.guru99.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            How to Use Postman for API Testing
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Insomnia Docs. <a
                            href="https://docs.insomnia.rest"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Debugging REST APIs with Insomnia
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Nordic APIs. <a
                            href="https://nordicapis.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Top API Testing Tools
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>YouTube. <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            API Testing and Debugging with Postman
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Google Maps API. <a
                            href="https://developers.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Google Maps API Documentation
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Stripe API. <a
                            href="https://stripe.com/docs/api"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Stripe API Reference
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>freeCodeCamp. <a
                            href="https://www.freecodecamp.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Getting Started with Third-Party APIs
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Medium. <a
                            href="https://medium.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            How to Consume External APIs in Your App
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>YouTube. <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Using APIs from Third Parties
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Nordic APIs. <a
                            href="https://nordicapis.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Top 10 Best Practices for REST API Design
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>REST API Tutorial. <a
                            href="https://restapitutorial.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            How to Design a REST API
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Auth0 Blog. <a
                            href="https://auth0.com/blog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Understanding OAuth 2.0 Implicit Flow
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Okta Developer. <a
                            href="https://developer.okta.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Why Implicit Flow is being deprecated
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Cloudflare Learning Center. <a
                            href="https://www.cloudflare.com/learning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            How TLS Works
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>AWS Docs. <a
                            href="https://docs.aws.amazon.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Implementing Mutual TLS Authentication
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Auth0 Docs. <a
                            href="https://auth0.com/docs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Implementing JWT Authentication
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>DigitalOcean. <a
                            href="https://www.digitalocean.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Token-based Authentication Explained
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Okta Developer. <a
                            href="https://developer.okta.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Getting Started with OAuth 2.0
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Auth0. <a
                            href="https://auth0.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            Introduction to OpenID Connect
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>YouTube. <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            OAuth 2.0 and OpenID Connect Explained
                        </a></span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Pluralsight. <a
                            href="https://www.pluralsight.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                            API Authorization Best Practices
                        </a></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

const ContentUnit2Components = {
    // Temas principales
    Content_2_1,
    Content_2_2,
    Content_2_3,
    Content_2_4,
    Content_2_5,
    Content_2_6,

    // Subtemas
    Content_2_1_1,
    Content_2_1_2,
    Content_2_2_1,
    Content_2_2_2,
    Content_2_3_1,
    Content_2_3_2,
    Content_2_3_3,
    Content_2_3_4,
    Content_2_3_5,
    Content_2_3_6,
    Content_2_3_7,
    Content_2_4_1,
    Content_2_6_1,
    Content_2_6_2,
    Content_2_6_3,
    Content_2_6_4,
    Content_2_6_5,
    Content_2_6_6,
    References_U2,
};

export default ContentUnit2Components;