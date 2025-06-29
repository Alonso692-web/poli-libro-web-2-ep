import { FaInbox, FaFilePdf } from 'react-icons/fa';
import Image from "next/image";

export const Content_3_1 = () => (
    <div>
        <Image
            src="/images/unidad3/orm.jpg"
            alt="Qué es un orm"
            width={400}
            height={200}
            className="rounded-lg object-cover mx-auto"
        />
        &nbsp;
        <p>
            El Mapeo Objeto-Relacional (ORM, por sus siglas en inglés) es una técnica de programación que crea un &quot;puente&quot; entre un lenguaje orientado a objetos y una base de datos relacional. Permite a los desarrolladores interactuar con la base de datos usando objetos y clases en lugar de escribir consultas SQL directamente, lo que agiliza el desarrollo y reduce errores.
        </p>
    </div>
);

export const Content_3_1_1 = () => (
    <div>
        <h4>3.1.1. Mapeo de entidades</h4>
        &nbsp;
        <p>Una entidad es una clase en tu código que se corresponde directamente con una tabla en la base de datos. Cada objeto (o instancia) de esa clase representa una fila en la tabla. Por ejemplo, una clase <code>Usuario</code> se mapearía a una tabla <code>usuarios</code> en la base de datos.</p>
        &nbsp;
        <Image
            src="/images/unidad3/mapeo_entidades.jpg"
            alt="Mapeod entidades"
            width={400}
            height={200}
            className="rounded-lg object-cover mx-auto"
        />
    </div>
);

export const Content_3_1_2 = () => (
    <div>
        <h4>3.1.2. Mapeo de atributos persistentes</h4>
        &nbsp;
        <p>Cada propiedad o atributo de tu clase (entidad) se mapea a una columna específica en la tabla de la base de datos. Se definen el tipo de dato, el nombre de la columna y otras restricciones (como si puede ser nulo o si es una clave primaria).</p>
        &nbsp;
        <p>Por ejemplo, el atributo <code>nombre</code> de la clase <code>Usuario</code> se mapearía a la columna <code>nombre</code> en la tabla <code>usuarios</code>.</p>
        &nbsp;
        <Image
            src="/images/unidad3/mapeo_atributos.jpg"
            alt="Mapeo de atributos persistentes"
            width={400}
            height={200}
            className="rounded-lg object-cover mx-auto"
        />
    </div>
);

export const Content_3_1_3 = () => (
    <div>
        <h4>3.1.3. Mapeo de atributos no persistentes</h4>
        &nbsp;
        <p>Son atributos que existen en tu clase pero que no quieres guardar en la base de datos. Se marcan explícitamente para que el ORM los ignore. Son útiles para cálculos temporales, datos derivados o información de estado que no necesita persistir.</p>
        <p>Por ejemplo, un atributo <code>edadCalculada</code> en la clase <code>Usuario</code> que se calcula a partir de la fecha de nacimiento.</p>
        &nbsp;
        <Image
            src="/images/unidad3/mapeo_no_persistentes.jpg"
            alt="Mapeo de atributos no persistentes"
            width={400}
            height={200}
            className="rounded-lg object-cover mx-auto"
        />
    </div>
);

export const Content_3_1_4 = () => (
    <div className="flex flex-row justify-between mb-4">
        <div className="w-2/3">
            <h4>3.1.4. Mapeo de asociaciones</h4>
            &nbsp;
            <p>Define cómo se relacionan las diferentes entidades entre sí. Estas son las relaciones clásicas de las bases de datos, pero representadas a nivel de objetos:</p>
            &nbsp;
            <ul>
                <li><strong>Uno a uno (One-to-One):</strong> Un usuario tiene un solo perfil.</li>
                &nbsp;
                <li><strong>Uno a muchos (One-to-Many):</strong> Un usuario puede escribir muchas publicaciones.</li>
                &nbsp;
                <li><strong>Muchos a muchos (Many-to-Many):</strong> Muchos estudiantes pueden inscribirse en muchos cursos.</li>
            </ul>
            &nbsp;
            <p>El ORM gestiona estas relaciones a través de claves foráneas y tablas de unión de forma automática.</p>
        </div>
        <div className="w-1/3">
            <Image
                src="/images/unidad3/relaciones.jpg"
                alt="Tipos de relaciones"
                width={400}
                height={200}
                className="rounded-lg object-cover"
            />
        </div>
    </div>
);

export const Content_3_1_5 = () => (
    <div>
        <h4>3.1.5. Estrategias de recuperación de asociaciones</h4>
        &nbsp;
        <p>Esta configuración le dice al ORM cómo y cuándo debe cargar los datos de las entidades relacionadas. Las dos estrategias principales son:</p>
        &nbsp;
        <ul>
            <li><strong>Eager Loading (Carga Ansiosa):</strong> Carga los datos de la entidad relacionada al mismo tiempo que la entidad principal. Es útil cuando sabes que siempre necesitarás los datos relacionados, pero puede ser ineficiente si no los usas.</li>
            &nbsp;
            <li><strong>Lazy Loading (Carga Perezosa):</strong> Carga los datos de la entidad relacionada solo cuando se acceden a ellos por primera vez. Es más eficiente en términos de recursos, pero puede causar consultas adicionales a la base de datos más adelante.</li>
        </ul>
        <Image
            src="/images/unidad3/estrategias_carga.jpg"
            alt="Eager vs Lazy Loading"
            width={400}
            height={200}
            className="rounded-lg object-cover mx-auto"
        />
    </div>
);

// 3.2 Tecnologías para la generación de servicios
export const Content_3_2 = () => (
    <div>
        <p>Para que las aplicaciones se comuniquen entre sí, se utilizan servicios web y APIs. Estas tecnologías y modelos definen un conjunto de reglas y herramientas para export construir interfaces de comunicación robustas, escalables y fáciles de entender.</p>
        &nbsp;
        <div className="flex flex-row justify-around mb-4">
            <Image
                src="/images/unidad3/web_service.jpg"
                alt="Servicio web"
                width={200}
                height={200}
                className="rounded-lg object-cover w-2/5 h-auto"
            />
            <Image
                src="/images/unidad3/api.jpg"
                alt="API"
                width={200}
                height={200}
                className="rounded-lg object-cover w-2/5 h-auto"
            />
        </div>
    </div>
);

export const Content_3_2_1 = () => (
    <div>
        <h4>3.2.1. Modelo de madurez de Richardson</h4>
        &nbsp;
        <p>Este modelo, propuesto por Leonard Richardson, clasifica las APIs web en cuatro niveles para medir qué tan bien cumplen con los principios de REST. No es una regla estricta, sino una guía para evaluar la calidad de una API.</p>
        &nbsp;
        <ul>
            <li><strong>Nivel 0: El pantano de POX (Plain Old XML).</strong> Utiliza HTTP como un simple mecanismo de transporte para llamar a procedimientos remotos. Generalmente, hay un único endpoint y se usan métodos POST para todas las operaciones.</li>
            &nbsp;
            <li><strong>Nivel 1: Recursos.</strong> Introduce el concepto de recursos, donde cada recurso tiene una URI única. En lugar de un solo endpoint, hay múltiples URIs para identificar diferentes entidades de negocio.</li>
            &nbsp;
            <li><strong>Nivel 2: Verbos HTTP.</strong> Utiliza los métodos (o &quot;verbos&quot;) del protocolo HTTP para realizar acciones sobre los recursos. Se usan <code>GET</code> para obtener, <code>POST</code> para crear, <code>PUT</code> para actualizar y <code>DELETE</code> para eliminar, alineándose con las operaciones CRUD.</li>
            &nbsp;
            <li><strong>Nivel 3: Controles de Hipermedia (HATEOAS).</strong> Es el nivel más alto. La respuesta de la API incluye enlaces (hipermedia) que le indican al cliente qué acciones puede realizar a continuación. La API se vuelve auto-documentada y más fácil de explorar para los clientes.</li>
        </ul>
        &nbsp;
        <Image
            src="/images/unidad3/modelo_madurez.jpg"
            alt="Modelo de madurez de Richardson"
            width={700}
            height={500}
            className="rounded-lg object-cover mx-auto"
        />
    </div>
);

export const Content_3_2_2 = () => (
    <div>
        <h4>3.2.2. Métodos del protocolo HTTP</h4>
        &nbsp;
        <p>Son los <strong>verbos</strong> que indican la acción que se desea realizar sobre un recurso. Los más importantes en el contexto de las APIs REST son:</p>

        &nbsp;
        <ul>
            <li><strong><code>GET</code></strong>: Recupera un recurso. Es una operación segura e idempotente.</li>
            <li><strong><code>POST</code></strong>: Envía datos para crear un nuevo recurso. No es idempotente (múltiples llamadas crean múltiples recursos).</li>
            <li><strong><code>PUT</code></strong>: Actualiza un recurso existente o lo crea si no existe. Es idempotente.</li>
            <li><strong><code>DELETE</code></strong>: Elimina un recurso. Es idempotente.</li>
            <li><strong><code>PATCH</code></strong>: Aplica una modificación parcial a un recurso. No es necesariamente idempotente.</li>
        </ul>
        <Image
            src="/images/unidad3/http.jpg"
            alt="Métodos del protocolo HTTP"
            width={500}
            height={400}
            className="rounded-lg object-cover mx-auto"
        />
    </div>
);

export const Content_3_2_3 = () => (
    <div className="flex flex-col">
        <h4>3.2.3. Códigos de estado del protocolo HTTP</h4>
        <div className="flex flex-row mt-4">
            <div className="w-1/2">
                <Image
                    src="/images/unidad3/codigos_http.jpg"
                    alt="Códigos de estado del protocolo HTTP"
                    width={700}
                    height={600}
                    className="rounded-lg object-cover"
                />
            </div>
            <div className="w-1/2 pl-4">
                <p>Son códigos numéricos que el servidor devuelve en una respuesta HTTP para indicar el resultado de la petición. Se agrupan en cinco clases:</p>
                &nbsp;
                <ul>
                    <li><strong>Respuestas informativas (1xx):</strong> La solicitud fue recibida, continuando el proceso.</li>
                    <li><strong>Respuestas satisfactorias (2xx):</strong> La solicitud fue recibida, entendida y aceptada con éxito (Ej: <code>200 OK</code>, <code>201 Created</code>).</li>
                    <li><strong>Redirecciones (3xx):</strong> Se necesita tomar una acción adicional para completar la solicitud.</li>
                    <li><strong>Errores de cliente (4xx):</strong> La solicitud tiene una sintaxis incorrecta o no puede ser procesada (Ej: <code>400 Bad Request</code>, <code>404 Not Found</code>, <code>403 Forbidden</code>).</li>
                    <li><strong>Errores de servidor (5xx):</strong> El servidor falló al intentar cumplir con una solicitud aparentemente válida (Ej: <code>500 Internal Server Error</code>).</li>
                </ul>
            </div>
        </div>
    </div>
);

export const Content_3_2_4 = () => (
    <div>
        <h4>3.2.4. Manejo de errores</h4>
        &nbsp;
        <p>Un buen manejo de errores es crucial para una API usable. Implica utilizar los códigos de estado HTTP correctos (como 4xx y 5xx) y, a menudo, devolver un cuerpo de respuesta en formato JSON con detalles adicionales sobre el error, como un mensaje legible, un código de error interno y, opcionalmente, los campos que causaron el problema.</p>
        <Image
            src="/images/unidad3/error_api.jpg"
            alt="Manejo de errores"
            width={500}
            height={300}
            className="rounded-lg object-cover mx-auto"
        />
    </div>
);

// 3.3 Servicios, APIs y endpoints
export const Content_3_3 = () => (
    <div>
        <p>Un servicio es una funcionalidad expuesta por una aplicación. Una API (Interfaz de Programación de Aplicaciones) es el contrato que define cómo otros sistemas pueden interactuar con ese servicio. Un endpoint es una URL específica donde la API puede ser accedida para realizar una operación concreta.</p>
        &nbsp;
        <Image
            src="/images/unidad3/que_es_api.jpg"
            alt="Qué es una API"
            width={700}
            height={500}
            className="rounded-lg object-cover mx-auto"
        />
    </div>
);

export const Content_3_3_1 = () => (
    <div>
        <h4>3.3.1. Generación y publicación</h4>
        &nbsp;
        <p>Este es el proceso de llevar una API desde el diseño hasta producción:</p>
        <ol>
            <li><strong>Diseño:</strong> Definir los recursos, endpoints, métodos HTTP y formatos de datos.</li>
            <li><strong>Implementación:</strong> Escribir el código del servidor que ejecuta la lógica de la API.</li>
            <li><strong>Pruebas:</strong> Verificar que la API funciona como se espera y maneja los errores correctamente.</li>
            <li><strong>Publicación (Despliegue):</strong> Poner la aplicación en un servidor (o plataforma en la nube) para que sea accesible a los clientes a través de internet.</li>
        </ol>
        &nbsp;
        <Image
            src="/images/unidad3/api_design.jpg"
            alt="Diseño de una API"
            width={700}
            height={500}
            className="rounded-lg object-cover mx-auto"
        />
    </div>
);

export const Content_3_3_2 = () => (
    <div>
        <h4>3.3.2. Control de acceso HTTP (CORS)</h4>
        &nbsp;
        <p><strong>Cross-Origin Resource Sharing (CORS)</strong> es una política de seguridad del navegador que restringe las solicitudes HTTP que se realizan desde un dominio diferente al del servidor de la API. Para permitir que una aplicación web (ej. un frontend en React) consuma una API alojada en otro dominio, el servidor de la API debe incluir cabeceras HTTP específicas (como <code>Access-Control-Allow-Origin</code>) que indiquen explícitamente qué orígenes están permitidos.</p>
        &nbsp;
        <Image
            src="/images/unidad3/cors.jpg"
            alt="Control de acceso HTTP (CORS)"
            width={700}
            height={500}
            className="rounded-lg object-cover mx-auto"
        />
    </div>
);

export const Content_3_3_3 = () => (
    <div>
        <h4>3.3.3. Documentación</h4>
        <p>Una API es tan buena como su documentación. Una buena documentación es esencial para que otros desarrolladores puedan entender y utilizar tu API.</p>
        <Image
            src="/images/unidad3/documentacion.jpg"
            alt="Documentación de una API"
            width={600}
            height={500}
            className="rounded-lg object-cover mx-auto"
        />
        &nbsp;
        <p>Una buenas documentación debe explicar claramente:</p>
        &nbsp;
        <ul>
            <li><strong>Endpoints y Métodos:</strong> Los endpoints disponibles y los métodos HTTP que aceptan.</li>
            <li><strong>Parámetros:</strong> Los parámetros requeridos y opcionales.</li>
            <li><strong>Estructura de Datos:</strong> La estructura de los cuerpos de solicitud y respuesta.</li>
            <li><strong>Erros y Códigos de Estado:</strong> Los posibles códigos de estado y errores.</li>
            <li><strong>Seguridad:</strong> Cómo manejar la autenticación y autorización.</li>
        </ul>
        &nbsp;
        <p>Herramientas como <strong>Swagger (OpenAPI)</strong> son el estándar de la industria para generar documentación interactiva y legible por máquina.</p>
        <p> <strong>Swagger</strong> es un estándar de descripción de API (Interfaz de Programación de Aplicaciones) que permite documentar, diseñar y desarrollar APIs de manera eficiente y estandarizada.</p>
        &nbsp;
        <Image
            src="/images/unidad3/swagger.jpg"
            alt="Documentación Swagger (OpenAPI)"
            width={600}
            height={500}
            className="rounded-lg object-cover mx-auto"
        />
    </div>
);

export const References_U3 = () => (
    <div>
        <h4>Bibliografía y Recursos Digitales</h4>
        <h5>Bibliografía Básica:</h5>
        <ul>
            <li>Ottinger, J. y Linwood, J. (2022). <em>Beginning Hibernate 6: Java Persistence from Beginner to Pro</em>. Apress.</li>
            <li>Varanasi, B. y Bartkov, M. (2022). <em>Spring REST: Building Java Microservices and Cloud Applications</em>. Apress.</li>
            <li>Massé, M. (2012). <em>REST API Design Rulebook</em>. O&apos;REILLY.</li>
        </ul>
        <h5>Recursos Digitales:</h5>
        <ul>
            <li>KODOTI (2020). <a href="https://www.youtube.com/watch?v=ZPA5ldaX1K4&list=PL9prAn3zOWZ6R-YY7uiW-NAazOw1RbBoj" target="_blank" rel="noopener noreferrer">Diseño de una API RESTFul</a> [Video]. YouTube.</li>
            <li>Peyrott, S. (2018). <a href="https://auth0.com/resources/ebooks/jwt-handbook" target="_blank" rel="noopener noreferrer">JWT HANDBOOK</a>. Auth0.</li>
        </ul>
    </div>
);

export const ActivityLayout = ({ data }) => {
    return (
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-sm">
            {/* Título principal de la actividad */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">{data.fullTitle}</h1>

            {/* Banner "Buzón de Tareas" */}
            <div className="flex items-center gap-4 text-purple-700 font-semibold mb-8 p-4 bg-purple-50 rounded-lg">
                <FaInbox className="text-4xl" />
                <h2 className="text-3xl">Buzón de tareas</h2>
            </div>

            {/* Tabla de Características */}
            <div className="mb-8">
                <h3 className="w-full bg-purple-600 text-white font-bold p-3 text-center rounded-t-lg">Características de la actividad</h3>
                <div className="grid grid-cols-2 md:grid-cols-7 text-center border border-gray-300">
                    {/* Headers */}
                    <div className="font-semibold bg-purple-100 p-2 border-b">Individual/Grupal</div>
                    <div className="font-semibold bg-purple-100 p-2 border-b">Tiempo aprox.</div>
                    <div className="font-semibold bg-purple-100 p-2 border-b">Aula / A distancia</div>
                    <div className="font-semibold bg-purple-100 p-2 border-b">Evidencia</div>
                    <div className="font-semibold bg-purple-100 p-2 border-b col-span-2">Entrega / Ubicación</div>
                    <div className="font-semibold bg-purple-100 p-2 border-b">Valor</div>

                    {/* Datos */}
                    <div className="p-2 border-b">{data.type}</div>
                    <div className="p-2 border-b">{data.time}</div>
                    <div className="p-2 border-b">{data.location}</div>
                    <div className="p-2 border-b">{data.evidence}</div>
                    <div className="p-2 border-b col-span-2">{data.delivery}</div>
                    <div className="p-2 border-b">{data.value}%</div>
                </div>
            </div>

            {/* Sección de Objetivo */}
            <div className="mb-8">
                <h3 className="w-full bg-purple-600 text-white font-bold p-3 text-center rounded-t-lg">Objetivo de la actividad</h3>
                <div className="border border-gray-300 p-4 rounded-b-lg">
                    <p>{data.objective}</p>
                </div>
            </div>

            {/* Sección de Instrucciones */}
            <div>
                <h3 className="w-full bg-purple-600 text-white font-bold p-3 text-center rounded-t-lg">Instrucciones</h3>
                <div className="border border-gray-300 p-4 rounded-b-lg">
                    <ol className="list-decimal list-inside space-y-3">
                        {data.instructionsPdf && (
                            <div className="mb-6 text-center">
                                <a
                                    href={data.instructionsPdf}
                                    download  // Este atributo le dice al navegador que descargue el archivo
                                    target="_blank" // Abre el PDF en una nueva pestaña si el navegador no lo descarga directamente
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors"
                                >
                                    <FaFilePdf />
                                    Descargar Instrucciones en PDF
                                </a>
                            </div>
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export const Activity_U3_ORM = () => {
    const activityData = {
        fullTitle: "Actividad 1: Modelado y mapeo ORM con JPA/Hibernate",
        type: 'Individual', time: '3.0 hrs', location: 'A distancia',
        evidence: 'Diagrama y Proyecto Spring Boot',
        delivery: 'Buzón de Tareas', value: 10,
        objective: 'Crear las entidades Java que representen dos tablas relacionadas (por ejemplo, Usuario y Rol).',
        instructions: [
            "Definir las clases anotadas con @Entity, incluyendo atributos persistentes (@Column) y no persistentes (@Transient).",
            "Mapear una relación @OneToMany y su estrategia de carga (FetchType.LAZY vs. FetchType.EAGER).",
            "Probar en phpMyAdmin que el esquema generado coincide con lo esperado.",
        ],
        instructionsPdf: '/documents/unidad3/Actividad1_Modelado_ORM.pdf',
    };
    return <ActivityLayout data={activityData} />;
};

// Actividad 2: CRUD REST
export const Activity_U3_CRUD = () => {
    const activityData = {
        fullTitle: "Actividad 2: Implementación de un CRUD REST básico",
        type: 'Individual', time: '4.0 hrs', location: 'A distancia',
        evidence: 'Colección de Postman',
        delivery: 'Buzón de Tareas', value: 15,
        objective: 'Desarrollar un API REST para gestionar los Usuario creados.',
        instructions: [
            "Crear un @RestController con endpoints GET, POST, PUT y DELETE.",
            "Usar Spring Data JPA para el repositorio y conectar con la base MySQL.",
            "Verificar las operaciones desde Postman o Swagger UI.",
        ],
        instructionsPdf: '/documents/unidad3/Actividad2_CRUD_REST.pdf',
    };
    return <ActivityLayout data={activityData} />;
};

// Actividad 3: Manejo de Errores
export const Activity_U3_Errors = () => {
    const activityData = {
        fullTitle: "Actividad 3: Manejo de errores y códigos HTTP",
        type: 'Individual', time: '2.5 hrs', location: 'A distancia',
        evidence: 'Ejemplos de peticiones erróneas',
        delivery: 'Buzón de Tareas', value: 10,
        objective: 'Implementar un manejador global de excepciones que devuelva respuestas JSON con código y mensaje.',
        instructions: [
            "Crear una clase @ControllerAdvice que capture EntityNotFoundException, MethodArgumentNotValidException, etc.",
            "Mapear a los códigos HTTP adecuados (404, 400, 500).",
            "Diseñar un DTO de error con campos timestamp, status, error y message.",
        ],
        instructionsPdf: '/documents/unidad3/Actividad3_Manejo_Errores.pdf',
    };
    return <ActivityLayout data={activityData} />;
};

// Actividad 4: Seguridad JWT
export const Activity_U3_JWT = () => {
    const activityData = {
        fullTitle: "Actividad 4: Seguridad de la API con JWT",
        type: 'Individual', time: '4.0 hrs', location: 'A distancia',
        evidence: 'Capturas de pantalla (403)',
        delivery: 'Buzón de Tareas', value: 15,
        objective: 'Proteger los endpoints CRUD mediante autenticación basada en tokens JWT.',
        instructions: [
            "Configurar Spring Security y un endpoint /login que emita el token.",
            "Implementar un filtro que valide el JWT en cada petición.",
            "Asignar roles (ROLE_USER, ROLE_ADMIN) y restringir acceso a ciertos endpoints.",
        ],
        instructionsPdf: '/documents/unidad3/Actividad4_Seguridad_JWT.pdf',
    };
    return <ActivityLayout data={activityData} />;
};

// Actividad 5: Swagger
export const Activity_U3_Swagger = () => {
    const activityData = {
        fullTitle: "Actividad 5: Documentación automática con Swagger/OpenAPI",
        type: 'Individual', time: '1.5 hrs', location: 'A distancia',
        evidence: 'Captura de pantalla de Swagger UI',
        delivery: 'Buzón de Tareas', value: 5,
        objective: 'Generar documentación navegable de todos los endpoints.',
        instructions: [
            "Añadir la dependencia springdoc-openapi-ui.",
            "Configurar la información de la API (title, version, contact).",
            "Verificar la documentación en http://localhost:8080/swagger-ui.html.",
        ],
        instructionsPdf: '/documents/unidad3/Actividad5_Swagger_OpenAPI.pdf',

    };
    return <ActivityLayout data={activityData} />;
};

// Actividad 6: CORS
export const Activity_U3_CORS = () => {
    const activityData = {
        fullTitle: "Actividad 6: Configuración de CORS y despliegue local",
        type: 'Individual', time: '2.0 hrs', location: 'A distancia',
        evidence: 'Demo de cliente web y manual',
        delivery: 'Buzón de Tareas', value: 5,
        objective: 'Habilitar CORS para permitir llamadas desde un cliente web externo.',
        instructions: [
            "Configurar @CrossOrigin a nivel de controller o globalmente con WebMvcConfigurer.",
            "Probar desde una sencilla página HTML/JavaScript consumiendo el API.",
            "Documentar el proceso de despliegue en local (JAR ejecutable) y capturas en phpMyAdmin.",
        ],
        instructionsPdf: '/documents/unidad3/Actividad6_CORS_Despliegue.pdf',
    };
    return <ActivityLayout data={activityData} />;
};