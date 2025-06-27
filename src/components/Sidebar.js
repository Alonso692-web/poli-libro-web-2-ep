// src/components/Sidebar.js
"use client";

import { useState, useEffect } from 'react';

const Sidebar = () => {
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        // Obtenemos el contador actual del localStorage.
        let currentCount = localStorage.getItem('polilibroVisitCounter');

        if (currentCount === null) {
            // SI NO HAY NADA GUARDADO (es la primera visita):
            // ¡AQUÍ ESTÁ EL CAMBIO! Iniciamos en 0.
            currentCount = 0;
        } else {
            // Si ya ha visitado, lo convertimos a número.
            currentCount = parseInt(currentCount, 10);
        }

        // Incrementamos el contador para la visita ACTUAL.
        const newCount = currentCount + 1;

        // Guardamos el nuevo valor para la próxima visita.
        localStorage.setItem('polilibroVisitCounter', newCount.toString());

        // Actualizamos el estado para mostrar el nuevo número en pantalla.
        setVisits(newCount);

    }, []);

    // Formatear el número para que siempre tenga 6 dígitos.
    const formattedVisits = String(visits).padStart(6, '0').split('');

    return (
        <aside className="w-64 space-y-6 flex-shrink-0">
            <div className="border p-4 rounded-md bg-white shadow-sm">
                <h3 className="font-bold text-gray-700 border-b pb-2 mb-2">Contador de Visitas</h3>
                <div className="text-center">
                    <div className="bg-gray-800 text-white text-3xl font-mono inline-flex p-2 rounded-md shadow-inner">
                        {visits > 0 ? (
                            formattedVisits.map((digit, index) => (
                                <span key={index} className="px-1">{digit}</span>
                            ))
                        ) : (
                            // Este es un estado inicial antes de que useEffect se ejecute
                            <span className="px-1">000000</span>
                        )}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Iniciado en 27 de agosto de 2024</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;