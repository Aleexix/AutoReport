import { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";

const About = () => {
const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Index debe estar dentro de un ThemeProvider");
  }

  const { darkMode} = themeContext;

    return (
        <>
            <section className= {`pt-10 overflow-hidden ${darkMode ? 'bg-body':'bg-white'}`}>
                
                <div className="container px-4 mx-auto">
                <img className="absolute top-52 right-24 z-10 " src="src/Images/star.svg" alt="" /><img className="absolute top-56 right-32 z-10" src="src/Images/star2.svg" alt="" />
                    <div className="md:max-w-xl text-center mx-auto mb-50 mt-8 "><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Sobre nosotros</span>
                        <h2 className={`text-7xl  tracking-tighter-xl ${darkMode ? 'text-white':'text-black'}`}>Nuestra visión, tecnología y equipo.</h2>
                    </div>
                    <img className="absolute bottom-0   right-0" src={` ${darkMode ?'src/Images/lines2.svg':'src/Images/Group 1.svg'}`} alt="" />
                    <img className="absolute top-133 right-12 z-10" src="src/Images/star.svg" alt="" />
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap lg:items-center -m-8 lg:-m-12">
                            <div className="w-full md:w-1/2 p-8 lg:p-12">
                                <div className="max-w-max mx-auto"><img className="rounded-3xl" src="src/Images/freepik__background__77229.png" alt="" /></div>
                            </div>
                            <div className="w-full md:w-1/2 p-8 mt-60  lg:p-12"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Sobre Nosotros</span>
                                <h2 className= {`mb-6 text-6xl md:text-7xl tracking-tighter ${darkMode ? 'text-white':'text-black'}`}>Practicantes con un objetivo claro</h2>
                                <p className= {`mb-10  text-opacity-60 w-96 ${darkMode ? 'text-white':'text-gray-900'}`}>Hola! nosotros somos practicantes de IBm en la unidad de ventas en el año 2025, este proyecto sale de una necesidad de automatizacion de la unidad...</p>
                                <a className="inline-block px-8 py-4 text-black  font-medium bg-blueI tracking-tighter hover:bg-blueI border-2 border-blueI focus:border-blueI focus:border-opacity-40 hover:borderblueI focus:ring-4 focus:ring-blueI focus:ring-opacity-40 rounded-full transition-transform duration-300 transform hover:scale-105" href="#">Leer mas</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className= {`py-20 pl-80px overflow-hidden ${darkMode ? 'bg-body':'bg-white'}`}>
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="md:max-w-md"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Documentacion</span>
                                <h2 className= {`mb-8 text-6xl md:text-7xl tracking-tighter-xl ${darkMode ? 'text-white':'text-black'}`}>tecnologias y como se hizo</h2>
                                <p className= {`mb-8 text-lg  ${darkMode ? 'text-gray-300':'text-gray-700'}`}>En este proyecto se utilizaron estas tecnologias + IMB RPA, por el lado del FrontEnd se utilzo el framework de react+vite haciendo que el software fuera un poco mas rapido y para el BackEnd se utilizo python y para la automatizacion IBM RPA... </p><a className= {`inline-block hover:text-opacity-80 font-medium underline transition duration-500 ${darkMode ?' text-white':'text-black'}`} href="#">Leer mas</a>
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
            <section className={`relative py-24 overflow-hidden ${darkMode ? 'bg-body':'bg-white'}`}>
                <div className="container px-4 mx-auto">
                    <div className="mb-20 md:max-w-xl text-center mx-auto"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">nuestro equipo</span>
                        <h2 className={`text-7xl lg:text-8xl  ${darkMode ? ' text-white':'text-black'} `}>Detalles</h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center text-center -m-8">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                            <div className="text-center">
                                <img className="mb-9 mx-auto" src="src/Images/user-svgrepo-com.svg" alt="Imagen de alexix CEO de el software" />
                                <span className={`inline-block mb-2 ${darkMode ? 'text-gray-300':'text-gray-600' }`}>FullStack and CEO at AutoReport</span>
                                <h3 className={`text-3xl ${darkMode ? 'text-white':'text-black'}`}>Alexix Orostegui</h3>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                            <div className="text-center">
                                <img className="mb-9 mx-auto" src="src/Images/user-svgrepo-com.svg" alt="Imagen de Jhon" />
                                <span className={`inline-block mb-2 ${darkMode ? 'text-gray-300':'text-gray-600' }`}>FullStack</span>
                                <h3 className={`text-3xl ${darkMode ? 'text-white':'text-black'}`}>Jhon Cufiño</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default About;