// src/components/InfoTabs.js
"use client";

import { useState } from 'react';

const InfoTabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activeTabData = tabs.find(tab => tab.id === activeTab);

    return (
        <div>
            <div className="flex items-center border-b-2 mb-4 space-x-8">
                {tabs.map(tab => {
                    const isActive = tab.id === activeTab;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-2 px-4 text-2xl transition-colors duration-200 ${isActive
                                    ? 'text-pink-600 border-b-2 border-pink-600'
                                    : 'text-gray-500 hover:text-gray-800'
                                }`}
                            title={tab.title}
                        >
                            {/* ---- ¡AQUÍ ESTÁ LA CORRECCIÓN! ---- */}
                            {/* Renderizamos el icono directamente, porque ya es JSX */}
                            {tab.icon}
                        </button>
                    );
                })}
            </div>

            <div className="p-4 min-h-[300px]">
                {activeTabData ? activeTabData.content : <p>Selecciona una sección.</p>}
            </div>
        </div>
    );
};

export default InfoTabs;