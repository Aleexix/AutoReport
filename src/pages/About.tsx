import { useContext, useState } from "react";
import { ThemeContext } from "../context/Themecontext";
import { LanguageContext } from "../context/LanguageProvider";

const About = () => {
    const themeContext = useContext(ThemeContext);
    const languageContext = useContext(LanguageContext);
    // Añadimos el estado para controlar la visibilidad del texto expandido
    const [isExpanded, setIsExpanded] = useState(false);

    if (!themeContext) {
        throw new Error("Index debe estar dentro de un ThemeProvider");
    }
    if (!languageContext) {
        throw new Error("MyComponent debe estar dentro de un LanguageProvider");
    }

    const { darkMode } = themeContext;
    const { language } = languageContext;

    // Función para alternar entre mostrar/ocultar el texto expandido
    const toggleReadMore = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <section className={`pt-10 overflow-hidden ${darkMode ? 'bg-body' : 'bg-white'}`}>
                <div className="container px-4 mx-auto">
                    <img className="absolute top-52 right-24 z-10" src="src/Images/star.svg" alt="" />
                    <img className="absolute top-56 right-32 z-10" src="src/Images/star2.svg" alt="" />
                    <div className="md:max-w-xl text-center mx-auto mb-50 mt-8 ">
                        <span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">
                            {language === 'es' ? 'Sobre Nosotros' : 'about us'}
                        </span>
                        <h2 className={`text-7xl tracking-tighter-xl ${darkMode ? 'text-white' : 'text-black'}`}>
                            {language === 'es' ? 'Nuestra visión, tecnología y equipo.' : 'Our vision, technology and equipment.'}
                        </h2>
                    </div>
                    <img className="absolute bottom-0 right-0" src={`${darkMode ? 'src/Images/lines2.svg' : 'src/Images/Group 1.svg'}`} alt="" />
                    <img className="absolute top-133 right-12 z-10" src="src/Images/star.svg" alt="" />
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap lg:items-center -m-8 lg:-m-12">
                            <div className="w-full md:w-1/2 p-8 lg:p-12">
                                <div className="max-w-max mx-auto">
                                    <img className="rounded-3xl" src="src/Images/freepik__background__77229.png" alt="" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-8 mt-60 lg:p-12">
                                <span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">
                                    {language === 'es' ? 'Practicas en IBM' : 'Internships at IBM'}
                                </span>
                                <h2 className={`mb-6 text-6xl md:text-7xl tracking-tighter ${darkMode ? 'text-white' : 'text-black'}`}>
                                    {language === 'es' ? 'Practicantes con un objetivo claro' : 'Practitioners with a clear goal'}
                                </h2>

                                <p className={`mb-8 text-opacity-60 w-96 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {language === 'es' ? 'Hola! nosotros somos practicantes de IBM en la unidad de ventas en el año 2025, este proyecto sale de una necesidad de automatizacion en la unidad, ' : 'Hello! we are IBM practitioners in the sales unit in the year 2025, this project comes from a need for automation of the unit,'}
                                </p>
                                {!isExpanded ? (
                                    <a
                                        className={`inline-block hover:text-opacity-80 font-medium underline transition duration-500 ${darkMode ? 'text-white' : 'text-black'}`}
                                        href="#"
                                        onClick={toggleReadMore}
                                    >
                                        {language === 'es' ? 'Leer mas' : 'Read the rest'}
                                    </a>
                                ) : (
                                    <>
                                        <p className={`mb-10 text-opacity-60 w-96 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {language === 'es' ? 'reduciendo tareas repetitivas y mejorando la eficiencia del equipo. Buscamos implementar soluciones tecnológicas que faciliten el trabajo diario y permitan un acceso más rápido y preciso a la información.' : 'Reducing repetitive tasks and improving team efficiency. We seek to implement technological solutions that facilitate daily work and allow faster and more accurate access to information.'}
                                            <br /> <br />
                                            {language === 'es' ? 'Nuestro objetivo es crear herramientas que simplifiquen la generación de reportes, asegurando mayor rapidez y precisión en la toma de decisiones. ¡Estamos emocionados por este reto y listos para innovar! 🚀' : 'Our goal is to create tools that simplify the generation of reports, ensuring faster and more accurate decision-making. ¡ We are excited about this challenge and ready to innovate! 🚀 '}
                                        </p>
                                        <a
                                            className={`inline-block hover:text-opacity-80 font-medium underline transition duration-500 ${darkMode ? 'text-white' : 'text-black'}`}
                                            href="#"
                                            onClick={toggleReadMore}
                                        >
                                            {language === 'es' ? 'Leer menos' : 'Read less'}
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                        <img className="absolute top-0 left-48 z-0" src={`${darkMode ? 'src/Images/layer-blur.svg' : ''}`} alt="" />
                    </div>
                </div>
            </section>

            <section className={`py-20 pl-80px overflow-hidden ${darkMode ? 'bg-body' : 'bg-white'}`}>
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="md:max-w-md">
                                <span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">
                                    {language === 'es' ? 'Documentacion' : 'Docs'}
                                </span>
                                <h2 className={`mb-8 text-6xl md:text-7xl tracking-tighter-xl ${darkMode ? 'text-white' : 'text-black'}`}>
                                    {language === 'es' ? 'tecnologias y como se hizo' : 'technologies and how they were'}
                                </h2>
                                <p className={`mb-8 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {language === 'es' ? 'En este proyecto se utilizaron estas tecnologias + IMB RPA, por el lado del FrontEnd se utilzo el framework de react+vite haciendo que el software fuera un poco mas rapido y para el BackEnd se utilizo python y para la automatizacion IBM RPA...' : 'In this project we used these technologies + IMB RPA, on the FrontEnd side we used the react+vite framework making the software a little faster and for the BackEnd python was used and for the automation IBM RPA'}
                                </p>

                                {!isExpanded ? (
                                    <a
                                        className={`inline-block hover:text-opacity-80 font-medium underline transition duration-500 ${darkMode ? 'text-white' : 'text-black'}`}
                                        href="#"
                                        onClick={toggleReadMore}
                                    >
                                        {language === 'es' ? 'Leer mas' : 'Read the rest'}
                                    </a>
                                ) : (
                                    <>
                                        <p className={`mb-8 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {language === 'es' ? 'Primero, se elaboró el cronograma y, con base en este, se inició el desarrollo del proyecto. Se establecieron los objetivos, alcance y requerimientos, seguidos de la creación de bocetos y maquetas de la interfaz. Luego, se implementó el frontend tomando en cuenta los diseños previos. Posteriormente, se definió la arquitectura del sistema y las APIs necesarias. Después, se desarrolló el bot en IBM RPA para la automatización. A continuación, se implementó el backend en Python, asegurando su correcto funcionamiento. Finalmente, se realizó la integración del bot RPA con el backend y este con el frontend, logrando la conexión completa del sistema.' : 'First, the timetable was drawn up and, on this basis, the development of the project began. Objectives, scope and requirements were established, followed by the creation of sketches and mock-ups of the interface. The frontend was then implemented taking into account previous designs. Subsequently, the system architecture and the necessary APIs were defined. Then, the bot was developed in IBM RPA for automation. Then, the backend was implemented in Python, ensuring its proper functioning. Finally, the RPA bot was integrated with the backend and this with the frontend, achieving the complete system connection.'}
                                        </p>
                                        <a
                                            className={`inline-block hover:text-opacity-80 font-medium underline transition duration-500 ${darkMode ? 'text-white' : 'text-black'}`}
                                            href="#"
                                            onClick={toggleReadMore}
                                        >
                                            {language === 'es' ? 'Leer menos' : 'Read less'}
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <div className="mx-auto max-w-lg md:mr-0">
                                <div className="flex flex-wrap -m-4">
                                    <div className="w-1/2 p-4">
                                        <div className="flex flex-wrap">
                                            <div className="mb-8 w-full"><img className="w-full" src="src/Images/react-javascript-js-framework-facebook-svgrepo-com.svg" alt="" /></div>
                                            <div className="w-full"><img className="w-full" src="src/Images/vite-svgrepo-com.svg" alt="" /></div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-4">
                                        <div className="flex flex-wrap mt-24">
                                            <div className="mb-8 w-full"><img className="w-full" src="src/Images/tailwind-svgrepo-com.svg" alt="" /></div>
                                            <div className="w-full"><img className="w-full" src="src/Images/python-svgrepo-com.svg" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`relative pb-24 overflow-hidden ${darkMode ? 'bg-body' : 'bg-white'}`}>
                <div className="container px-4 mx-auto">
                    <div className="mb-20 md:max-w-xl text-center mx-auto">
                        <span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">
                            {language === 'es' ? 'nuestro equipo' : 'our team'}
                        </span>
                        <h2 className={`text-7xl lg:text-8xl ${darkMode ? 'text-white' : 'text-black'}`}>
                            {language === 'es' ? 'Detalles' : 'details'}
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center text-center -m-8">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                            <div className="text-center">
                                <img className="mb-9 mx-auto" src="src/Images/user-svgrepo-com.svg" alt="Imagen de alexix CEO de el software" />
                                <span className={`inline-block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    FullStack and CEO at AutoReport
                                </span>
                                <h3 className={`text-3xl ${darkMode ? 'text-white' : 'text-black'}`}>
                                    Alexix Orostegui
                                </h3>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                            <div className="text-center">
                                <img className="mb-9 mx-auto" src="src/Images/user-svgrepo-com.svg" alt="Imagen de Jhon" />
                                <span className={`inline-block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    FullStack
                                </span>
                                <h3 className={`text-3xl ${darkMode ? 'text-white' : 'text-black'}`}>
                                    Jhon Cufiño
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;