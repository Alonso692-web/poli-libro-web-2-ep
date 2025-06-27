// src/components/Header.js
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-[#003972] text-white">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div>
                    <p className="text-sm font-semibold">Recursos didácticos abiertos</p>
                    <p className="text-xs">Campus Virtual UPIIZ IPN</p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-lg">
                        <a href="#" aria-label="Facebook" className="hover:text-gray-300"><FaFacebookF /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-gray-300"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram" className="hover:text-gray-300"><FaInstagram /></a>
                    </div>
                    <button className="bg-white text-[#003972] font-bold py-1 px-4 rounded hover:bg-gray-200">
                        Ingresar
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;