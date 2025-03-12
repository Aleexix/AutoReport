import "../Global.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>;
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"> </link>;

const Footer = () => {
    return (
        <footer className="bg-gray-50 overflow-hidden ">
            <div className="py-12 bg-body rounded-b-7xl"></div>
            <div className="py-8">

                {/* Menú de navegación */}
                <div className="mt-6 text-center">
                    <ul className="flex justify-center space-x-8 text-black  font-semibold">
                        <li className="hover:text-blueI"><a href="#">Ayuda</a></li>
                        <li className="hover:text-blueI"><a href="#">Nosotros</a></li>
                        <li className="hover:text-blueI"><a href="#">Historico</a></li>
                        <li className="hover:text-blueI"><a href="#">Tu reporte</a></li>
                    </ul>
                </div>
                {/* Derechos de autor */}
                <div className="mt-6 text-center text-gray-600">
                    AutoReport Copyright © 2025 AutoReport - Todos los derechos reservados || Diseñado por: Alexix.O
                </div>
            </div>
        </footer>
    );
};

export default Footer;
