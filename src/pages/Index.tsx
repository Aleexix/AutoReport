import { Link } from "react-router-dom";
import "../Global.css";
import React, { useContext } from "react";
import { ThemeContext } from '../context/Themecontext';
import { LanguageContext } from "../context/LanguageProvider";



const Index: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);

  if (!themeContext) {
    throw new Error("Index debe estar dentro de un ThemeProvider");
  }
  if (!languageContext) {
    throw new Error("MyComponent debe estar dentro de un LanguageProvider");
  }

  const { darkMode } = themeContext;

  const { language } = languageContext;

  return (
    <>
      <div className={` relative pt-20 pb-20 ${darkMode ? 'bg-body' : 'bg-white'}`}>
        <div className="relative z-10 container px-4 mx-auto">

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap lg:items-center -m-8 lg:-m-12">
              <img className="absolute top-4 -right-16 " src="src/Images/star.svg" alt="" /><img className="absolute top-10 -right-24" src="src/Images/star2.svg" alt="" />
              <div className="w-full md:w-1/2 p-8 lg:p-1">
                <div className=" mx-auto"><img className="rounded-3xl" src="src/Images/freepik__adjust__61457.png" alt="" />
                </div>
              </div>

              <div className="w-full  md:w-1/2 p-8 lg:p-12">
                <h2 className={`mb-6 text-6xl md:text-7xl tracking-tighter  ${darkMode ? 'text-white' : 'text-black'}`}>{language === 'es' ? 'Descarga hoy tu reporte semanal' : 'Download your weekly report today'}</h2>
                <Link to={"#"}>
                  <button className="flex items-center px-8 py-4 text-black font-medium tracking-tighter bg-blueI hover:bg-blue-700 border-2 border-blueI focus:border-blueI focus:ring-4 focus:ring-blueI focus:ring-opacity-40 rounded-full transition-transform duration-300 transform hover:scale-105">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>{language === 'es' ? 'Descargar' : 'Download'}</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img className="absolute bottom-0  right-0" src={`${darkMode ? 'src/Images/lines2.svg' : 'src/Images/Group 1.svg'}  `} alt="" />
        <img className="absolute right-14 z-30" src="src/Images/star.svg" alt="" />
      </div><img className="absolute top-0 left-48 z-0 " src={`${darkMode ? 'src/Images/layer-blur.svg' : ''}`} alt="" />
      <section className={`pt-35 pb-24  ${darkMode ? 'bg-body' : 'bg-white'}`}>
        <div className="container px-4 mx-auto">
          <div className="text-center"><span className="inline-block mt-8 text-sm text-blueI font-medium tracking-tighter">{language === 'es' ? 'Recientes' : 'recent'}</span>
            <h2 className={`mb-6 text-7xl lg:text-8xl tracking-8xl mx-auto ${darkMode ? 'text-white ' : 'text-black'} `}>{language === 'es' ? 'Últimos reportes disponibles' : 'Latest available reports'} </h2>
            <p className={`mb-20 md:max-w-md mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-800'} `}>{language === 'es' ? 'Aqui se generaran los reportes mas recientes de los dias Lunes y viernes.' : 'Here are the most recent reports of Monday and Friday.'}</p>
          </div>

          <div className="flex justify-center gap-8 ">
            <div className={`relative flex flex-col rounded-[20px] max-w-[300px] h-72 bg-clip-border w-full !p-4 border border-black bg-white ${darkMode ? 'shadow-lg hover:shadow-gray-500  hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2' : 'shadow-lg hover:shadow-2xl hover:shadow-black transition-transform duration-300 hover:-translate-y-2'}`}>
              <div className="h-full w-full">
                <div className="relative w-full">
                  <img src="src/Images/opcion3.jpg" className="mb-3 h-auto w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                  <div className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-blueI p-1 text-brand-500">
                    <div className="flex h-full w-16 items-center justify-center rounded-full font-medium">
                      {language === 'es' ? 'Lunes' : 'Monday'}
                    </div>
                  </div>
                </div>
                <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                  <div className="mb-2">
                    <p className="text-lg font-bold text-black"> Forecast#1 </p>
                    <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> 10/03/2025 </p>
                  </div>
                  <div className="flex items-center justify-between md:items-center lg:justify-between ">
                    <button className="bg-greenE rounded-[20px] bg-brand-900 px-4 py-2 text-base text-white hover:bg-brand-800 active:bg-greenE transition-transform duration-300 transform hover:scale-105">
                      {language === 'es' ? 'Descargar' : 'Download'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`relative flex flex-col rounded-[20px] max-w-[300px] h-72 bg-clip-border w-full !p-4 border border-black bg-white ${darkMode ? 'shadow-lg hover:shadow-gray-500 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2' : 'shadow-lg hover:shadow-2xl hover:shadow-black transition-transform duration-300 hover:-translate-y-2'}`}>
              <div className="h-full w-full">
                <div className="relative w-full">
                  <img src="src/Images/opcion3.jpg" className="mb-3 h-auto w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                  <div className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-orange p-1 text-brand-500">
                    <div className="flex h-full w-16 items-center justify-center rounded-full font-medium">
                      {language === 'es' ? 'Viernes' : 'Friday'}
                    </div>
                  </div>
                </div>
                <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                  <div className="mb-2">
                    <p className="text-lg font-bold text-black"> Forecast#1 </p>
                    <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> 10/03/2025 </p>
                  </div>
                  <div className="flex items-center justify-between md:items-center lg:justify-between ">
                    <button className="bg-greenE rounded-[20px] bg-brand-900 px-4 py-2 text-base text-white hover:bg-brand-800 active:bg-greenE transition-transform duration-300 transform hover:scale-105">
                      {language === 'es' ? 'Descargar' : 'Download'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`relative flex flex-col rounded-[20px] max-w-[300px] h-72 bg-clip-border w-full !p-4 border border-black bg-white ${darkMode ? 'shadow-lg hover:shadow-gray-500 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2' : 'shadow-lg hover:shadow-2xl hover:shadow-black transition-transform duration-300 hover:-translate-y-2'}`}>
              <div className="h-full w-full">
                <div className="relative w-full">
                  <img src="src/Images/opcion3.jpg" className="mb-3 h-auto w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                  <div className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-blueI p-1 text-brand-500">
                    <div className="flex h-full w-16 items-center justify-center rounded-full font-medium">
                      {language === 'es' ? 'Lunes' : 'Monday'}
                    </div>
                  </div>
                </div>
                <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                  <div className="mb-2">
                    <p className="text-lg font-bold text-black"> Forecast#1 </p>
                    <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> 10/03/2025 </p>
                  </div>
                  <div className="flex items-center justify-between md:items-center lg:justify-between ">
                    <button className="bg-greenE rounded-[20px] bg-brand-900 px-4 py-2 text-base text-white hover:bg-brand-800 active:bg-greenE transition-transform duration-300 transform hover:scale-105">
                      {language === 'es' ? 'Descargar' : 'Download'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
export default Index;

