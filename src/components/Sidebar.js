"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = () => {
    const [visits, setVisits] = useState(null);

    useEffect(() => {
        const cargarContador = async () => {
            try {
                const counted = sessionStorage.getItem("visit-counted");

                if (!counted) {
                    const res = await axios.get("/api/visit-counter");
                    setVisits(res.data.count);

                    sessionStorage.setItem("visit-counted", "true");
                } else {
                    const res = await axios.get("/api/get-counter");
                    setVisits(res.data.count);
                }
            } catch (e) {
                console.error("❌ Error contador:", e);
            }
        };

        cargarContador();
    }, []);

    const formattedVisits =
        visits !== null
            ? String(visits).padStart(6, "0").split("")
            : "000000".split("");

    return (
        <aside className="w-64 space-y-6 flex-shrink-0">
            <div className="border p-4 rounded-md bg-white shadow-sm">
                <h3 className="font-bold text-gray-700 border-b pb-2 mb-2">
                    Contador de Visitas
                </h3>

                <div className="text-center">
                    <div className="bg-gray-800 text-white text-3xl font-mono inline-flex p-2 rounded-md shadow-inner">
                        {formattedVisits.map((digit, index) => (
                            <span key={index} className="px-1">
                                {digit}
                            </span>
                        ))}
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                        Iniciado en 11 de junio de 2025
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;