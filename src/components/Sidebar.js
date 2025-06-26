// src/components/Sidebar.js
const Sidebar = () => {
    return (
        <aside className="w-64 space-y-6 flex-shrink-0">
            <div className="border p-4 rounded-md bg-white shadow-sm">
                <h3 className="font-bold text-gray-700 border-b pb-2 mb-2">Contador de Visitas</h3>
                <div className="text-center">
                    <div className="bg-gray-800 text-white text-2xl font-mono inline-flex p-2 rounded-md">
                        <span>0</span><span>0</span><span>0</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Iniciado en 11 de junio del 2025</p>
                </div>
            </div>
            {/* Puedes agregar más elementos de la barra lateral aquí */}
        </aside>
    );
};

export default Sidebar;