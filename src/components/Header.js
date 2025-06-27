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
                        <a href="https://www.facebook.com/IPNZacatecas"
                            aria-label="Facebook"
                            className="hover:text-gray-300"
                            target="_blank"
                            rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/ipn_zacatecas?igsh=OTYzcGI1aWptMW0w"
                            aria-label="Instagram"
                            className="hover:text-gray-300"
                            target="_blank"
                            rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                    <a
                        href="https://virtual.upiiz.ipn.mx/"
                        className="bg-white text-[#003972] font-bold py-1 px-4 rounded hover:bg-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ingresar
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;