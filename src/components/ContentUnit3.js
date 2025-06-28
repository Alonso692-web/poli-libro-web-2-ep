import Image from "next/image";

export const Content_3_1 = () => (
    <div>
        <Image
            src="/images/orm.jpg"
            alt="Banner principal"
            width={400}
            height={100}
            className="rounded-lg object-cover"
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
        <p>Una entidad es una clase en tu código que se corresponde directamente con una tabla en la base de datos. Cada objeto (o instancia) de esa clase representa una fila en la tabla. Por ejemplo, una clase <code>Usuario</code> se mapearía a una tabla <code>usuarios</code> en la base de datos.</p>
    </div>
);

export const Content_3_1_2 = () => (
    <div>
        <h4>3.1.2. Mapeo de atributos persistentes</h4>
        <p>Cada propiedad o atributo de tu clase (entidad) se mapea a una columna específica en la tabla de la base de datos. Se definen el tipo de dato, el nombre de la columna y otras restricciones (como si puede ser nulo o si es una clave primaria).</p>
        <p>Por ejemplo, el atributo <code>nombre</code> de la clase <code>Usuario</code> se mapearía a la columna <code>nombre</code> en la tabla <code>usuarios</code>.</p>
    </div>
);

export const Content_3_1_3 = () => (
    <div>
        <h4>3.1.3. Mapeo de atributos no persistentes</h4>
        <p>Son atributos que existen en tu clase pero que no quieres guardar en la base de datos. Se marcan explícitamente para que el ORM los ignore. Son útiles para cálculos temporales, datos derivados o información de estado que no necesita persistir.</p>
        <p>Por ejemplo, un atributo <code>edadCalculada</code> en la clase <code>Usuario</code> que se calcula a partir de la fecha de nacimiento.</p>
    </div>
);

export const Content_3_1_4 = () => (
    <div>
        <h4>3.1.4. Mapeo de asociaciones</h4>
        <p>Define cómo se relacionan las diferentes entidades entre sí. Estas son las relaciones clásicas de las bases de datos, pero representadas a nivel de objetos:</p>
        <ul>
            <li><strong>Uno a uno (One-to-One):</strong> Un usuario tiene un solo perfil.</li>
            <li><strong>Uno a muchos (One-to-Many):</strong> Un usuario puede escribir muchas publicaciones.</li>
            <li><strong>Muchos a muchos (Many-to-Many):</strong> Muchos estudiantes pueden inscribirse en muchos cursos.</li>
        </ul>
        <p>El ORM gestiona estas relaciones a través de claves foráneas y tablas de unión de forma automática.</p>
    </div>
);

export const Content_3_1_5 = () => (
    <div>
        <h4>3.1.5. Estrategias de recuperación de asociaciones</h4>
        <p>Esta configuración le dice al ORM cómo y cuándo debe cargar los datos de las entidades relacionadas. Las dos estrategias principales son:</p>
        <ul>
            <li><strong>Eager Loading (Carga Ansiosa):</strong> Carga los datos de la entidad relacionada al mismo tiempo que la entidad principal. Es útil cuando sabes que siempre necesitarás los datos relacionados, pero puede ser ineficiente si no los usas.</li>
            <li><strong>Lazy Loading (Carga Perezosa):</strong> Carga los datos de la entidad relacionada solo cuando se acceden a ellos por primera vez. Es más eficiente en términos de recursos, pero puede causar consultas adicionales a la base de datos más adelante.</li>
        </ul>
    </div>
);

// 3.2 Tecnologías para la generación de servicios
export const Content_3_2 = () => (
    <div>
        <p>Para que las aplicaciones se comuniquen entre sí, se utilizan servicios web y APIs. Estas tecnologías y modelos definen un conjunto de reglas y herramientas para export construir interfaces de comunicación robustas, escalables y fáciles de entender.</p>
    </div>
);

export const Content_3_2_1 = () => (
    <div>
        <h4>3.2.1. Modelo de madurez de Richardson</h4>
        <p>Este modelo, propuesto por Leonard Richardson, clasifica las APIs web en cuatro niveles para medir qué tan bien cumplen con los principios de REST. No es una regla estricta, sino una guía para evaluar la calidad de una API.</p>
        <ul>
            <li><strong>Nivel 0: El pantano de POX (Plain Old XML).</strong> Utiliza HTTP como un simple mecanismo de transporte para llamar a procedimientos remotos. Generalmente, hay un único endpoint y se usan métodos POST para todas las operaciones.</li>
            <li><strong>Nivel 1: Recursos.</strong> Introduce el concepto de recursos, donde cada recurso tiene una URI única. En lugar de un solo endpoint, hay múltiples URIs para identificar diferentes entidades de negocio.</li>
            <li><strong>Nivel 2: Verbos HTTP.</strong> Utiliza los métodos (o &quot;verbos&quot;) del protocolo HTTP para realizar acciones sobre los recursos. Se usan <code>GET</code> para obtener, <code>POST</code> para crear, <code>PUT</code> para actualizar y <code>DELETE</code> para eliminar, alineándose con las operaciones CRUD.</li>
            <li><strong>Nivel 3: Controles de Hipermedia (HATEOAS).</strong> Es el nivel más alto. La respuesta de la API incluye enlaces (hipermedia) que le indican al cliente qué acciones puede realizar a continuación. La API se vuelve auto-documentada y más fácil de explorar para los clientes.</li>
        </ul>
    </div>
);

export const Content_3_2_2 = () => (
    <div>
        <h4>3.2.2. Métodos del protocolo HTTP</h4>
        <p>Son los &quot;verbos&quot; que indican la acción que se desea realizar sobre un recurso. Los más importantes en el contexto de las APIs REST son:</p>
        <ul>
            <li><code>GET</code>: Recupera un recurso. Es una operación segura e idempotente.</li>
            <li><code>POST</code>: Envía datos para crear un nuevo recurso. No es idempotente (múltiples llamadas crean múltiples recursos).</li>
            <li><code>PUT</code>: Actualiza un recurso existente o lo crea si no existe. Es idempotente.</li>
            <li><code>DELETE</code>: Elimina un recurso. Es idempotente.</li>
            <li><code>PATCH</code>: Aplica una modificación parcial a un recurso. No es necesariamente idempotente.</li>
        </ul>
    </div>
);

export const Content_3_2_3 = () => (
    <div>
        <h4>3.2.3. Códigos de estado del protocolo HTTP</h4>
        <p>Son códigos numéricos que el servidor devuelve en una respuesta HTTP para indicar el resultado de la petición. Se agrupan en cinco clases:</p>
        <ul>
            <li><strong>Respuestas informativas (1xx):</strong> La solicitud fue recibida, continuando el proceso.</li>
            <li><strong>Respuestas satisfactorias (2xx):</strong> La solicitud fue recibida, entendida y aceptada con éxito (Ej: <code>200 OK</code>, <code>201 Created</code>).</li>
            <li><strong>Redirecciones (3xx):</strong> Se necesita tomar una acción adicional para completar la solicitud.</li>
            <li><strong>Errores de cliente (4xx):</strong> La solicitud tiene una sintaxis incorrecta o no puede ser procesada (Ej: <code>400 Bad Request</code>, <code>404 Not Found</code>, <code>403 Forbidden</code>).</li>
            <li><strong>Errores de servidor (5xx):</strong> El servidor falló al intentar cumplir con una solicitud aparentemente válida (Ej: <code>500 Internal Server Error</code>).</li>
        </ul>
    </div>
);

export const Content_3_2_4 = () => (
    <div>
        <h4>3.2.4. Manejo de errores</h4>
        <p>Un buen manejo de errores es crucial para una API usable. Implica utilizar los códigos de estado HTTP correctos (como 4xx y 5xx) y, a menudo, devolver un cuerpo de respuesta en formato JSON con detalles adicionales sobre el error, como un mensaje legible, un código de error interno y, opcionalmente, los campos que causaron el problema.</p>
    </div>
);

// 3.3 Servicios, APIs y endpoints
export const Content_3_3 = () => (
    <div>
        <p>Un servicio es una funcionalidad expuesta por una aplicación. Una API (Interfaz de Programación de Aplicaciones) es el contrato que define cómo otros sistemas pueden interactuar con ese servicio. Un endpoint es una URL específica donde la API puede ser accedida para realizar una operación concreta.</p>
    </div>
);

export const Content_3_3_1 = () => (
    <div>
        <h4>3.3.1. Generación y publicación</h4>
        <p>Este es el proceso de llevar una API desde el diseño hasta producción:</p>
        <ol>
            <li><strong>Diseño:</strong> Definir los recursos, endpoints, métodos HTTP y formatos de datos.</li>
            <li><strong>Implementación:</strong> Escribir el código del servidor que ejecuta la lógica de la API.</li>
            <li><strong>Pruebas:</strong> Verificar que la API funciona como se espera y maneja los errores correctamente.</li>
            <li><strong>Publicación (Despliegue):</strong> Poner la aplicación en un servidor (o plataforma en la nube) para que sea accesible a los clientes a través de internet.</li>
        </ol>
    </div>
);

export const Content_3_3_2 = () => (
    <div>
        <h4>3.3.2. Control de acceso HTTP (CORS)</h4>
        <p><strong>Cross-Origin Resource Sharing (CORS)</strong> es una política de seguridad del navegador que restringe las solicitudes HTTP que se realizan desde un dominio diferente al del servidor de la API. Para permitir que una aplicación web (ej. un frontend en React) consuma una API alojada en otro dominio, el servidor de la API debe incluir cabeceras HTTP específicas (como <code>Access-Control-Allow-Origin</code>) que indiquen explícitamente qué orígenes están permitidos.</p>
    </div>
);

export const Content_3_3_3 = () => (
    <div>
        <h4>3.3.3. Documentación</h4>
        <p>Una API es tan buena como su documentación. Una buena documentación es esencial para que otros desarrolladores puedan entender y utilizar tu API. Debe explicar claramente:</p>
        <ul>
            <li>Los endpoints disponibles y los métodos HTTP que aceptan.</li>
            <li>Los parámetros requeridos y opcionales.</li>
            <li>La estructura de los cuerpos de solicitud y respuesta.</li>
            <li>Los posibles códigos de estado y errores.</li>
            <li>Cómo manejar la autenticación y autorización.</li>
        </ul>
        <p>Herramientas como <strong>Swagger (OpenAPI)</strong> son el estándar de la industria para generar documentación interactiva y legible por máquina.</p>
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
