import "../Global.css";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>;
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"> </link>;

const Footer = () => {
    return (
        <footer className="bg-gray-50 overflow-hidden ">
            <div className="py-12 bg-body rounded-b-7xl"></div>
            <div className="py-8">
                {/* Iconos de redes sociales */}
                <div className="flex justify-center mt-8">
                    <div className="flex space-x-6">
                        <a href="https://www.slack.com" target="_blank" rel="noopener noreferrer">
                            <img src="src/Images/slack-svgrepo-com.svg" className="w-10 h-10" alt="Facebook" />
                        </a>
                        <a href="mailto:Alexix.Orostegui@ibm.com" target="_blank" rel="noopener noreferrer">
                            <img src="src/Images/ms-outlook-svgrepo-com.svg" className="w-10 h-10" alt="Outlook" />
                        </a>

                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                            <img src="src/Images/github-142-svgrepo-com.svg" className="w-10 h-10" alt="Twitter/X" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="src/Images/linkedin-svgrepo-com.svg" className="w-10 h-10" alt="Instagram" />
                        </a>
                    </div>
                </div>

                {/* Menú de navegación */}
                <div className="mt-6 text-center">
                    <ul className="flex justify-center space-x-8 text-black  font-semibold">
                        <li className="hover:text-blueI"><a href="#">Contactanos</a></li>
                        <li className="hover:text-blueI"><a href="#">Sobre Nosotros</a></li>
                        <li className="hover:text-blueI"><a href="#">Semanal</a></li>
                        <li className="hover:text-blueI"><a href="#">Inicio</a></li>
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
