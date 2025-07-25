"use client";

import { useState, useEffect } from 'react';

let hasIncremented = false;

const Sidebar = () => {
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        if (!hasIncremented) {

            let currentCount = localStorage.getItem('polilibroVisitCounterTemp');

            if (currentCount === null) {
                currentCount = 0;
            } else {
                currentCount = parseInt(currentCount, 10);
            }

            // Incrementar y guardar en localStorage
            const newCount = currentCount + 1;
            localStorage.setItem('polilibroVisitCounterTemp', newCount.toString());

            // Actualizar el estado con el nuevo valor
            setVisits(newCount);

            // Marcar que ya se ha incrementado en esta sesión
            hasIncremented = true;
        } else {
            // Si ya se ha incrementado, leer el valor actual y actualizar el estado
            const currentCount = localStorage.getItem('polilibroVisitCounterTemp');
            const count = currentCount ? parseInt(currentCount, 10) : 0;
            setVisits(count);
        }
    }, []);


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
                            <span className="px-1">000000</span>
                        )}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Iniciado en 11 de junio de 2025</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;