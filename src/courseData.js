// src/courseData.js
export const courseData = {
    title: "Web Client and Backend Development Frameworks",
    instructor: "Efraín Arredondo Morales",
    units: [
        {
            id: 1,
            slug: "unidad-1",
            title: "Introducción al Desarrollo Web",
            banner: "/banners/intro.jpg", // Asegúrate de tener esta imagen en public/banners/
            content: [
                "Arquitectura cliente-servidor",
                "Protocolos HTTP y WebSockets",
                "Diferencias entre desarrollo frontend y backend",
            ]
        },
        // No necesitamos las otras unidades por ahora
    ],
    generalInfo: {
        title: "Información General",
        conceptTitle: "El concepto: Desarrollo Web en Cliente y Servidor",
        introduction: "El desarrollo web moderno se basa en la interacción entre el cliente y el servidor para ofrecer experiencias dinámicas y funcionales a los usuarios. Desde la carga de una simple página web hasta la implementación de complejas aplicaciones en línea, la comunicación entre estos dos componentes es fundamental.",
        about: "Este material didáctico está estructurado para abordar de manera progresiva los conceptos esenciales del desarrollo web tanto en el cliente como en el servidor. Se iniciará con una introducción a la arquitectura cliente-servidor, explicando los protocolos HTTP y WebSockets, fundamentales para la comunicación entre ambos entornos."
    }
};