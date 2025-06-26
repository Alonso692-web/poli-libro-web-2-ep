// src/components/Footer.js
const Footer = () => {
    return (
        <footer className="bg-[#003972] text-white text-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <p>Al usar este sitio, aceptas el <a href="#" className="underline">aviso legal</a>, los <a href="#" className="underline">términos de uso</a> y el <a href="#" className="underline">aviso de privacidad</a>.</p>
                <a href="#" className="underline">Resumen de retención de datos</a>
            </div>
        </footer>
    );
};

export default Footer;