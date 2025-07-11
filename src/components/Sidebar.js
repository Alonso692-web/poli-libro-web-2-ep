"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

const Sidebar = () => {
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        const incrementVisit = async () => {
            try {
                await axios.post('/api/visitCounter');
            } catch (error) {
                console.error("Error incrementing visit: ", error);
            }
        };

        const getVisitCount = async () => {
            try {
                const response = await axios.get('/api/visitCounter');
                setVisits(response.data.count);
            } catch (error) {
                console.error("Error fetching visit count: ", error);
            }
        };

        incrementVisit();
        getVisitCount();
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
