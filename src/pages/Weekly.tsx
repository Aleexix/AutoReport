
import { useContext } from "react";
import "../Global.css";
import { ThemeContext } from "../context/Themecontext";

const Weekly = () => {
  const themeContext = useContext(ThemeContext);
  
  if (!themeContext) {
    throw new Error("Weekly debe estar dentro de un ThemeProvider");
  }

  const { darkMode} = themeContext;


  return (
    <>
      <section className={`py-24 overflow-hidden ${darkMode ? 'bg-body' : 'bg-white'}`}>  
        <div className="container px-4 mx-auto">
          <div className="mb-32 md:max-w-2xl text-center mx-auto"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Semanal</span>
            <h2 className={`text-7xl lg:text-8xl  ${darkMode ? 'text-white' : 'text-black'}`}>Reportes semanales</h2>
            <img className="absolute bottom-0  right-0" src={`${darkMode ? 'src/Images/lines2.svg' : 'src/Images/Group 1.svg'}  `} alt="" />
          </div><img className="absolute top-0 left-48 z-0 " src="src/Images/layer-blur.svg" alt="" />
          <div className="flex flex-wrap  justify-center gap-8">
            
          <div className= {`relative flex flex-col rounded-[20px] max-w-[300px] h-64 bg-clip-border  w-full !p-4 ${darkMode ? 'bg-white' : 'bg-body'} ` }>
                <div className="h-full w-full">
                    <div className="relative w-full">
                        <img src="src/Images/opcion1.jpg" className="mb-3 h-auto w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                        <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-blueI p-1 text-brand-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full font-medium">
                                Lunes
                            </div>
                        </button>
                    </div>
                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className={`text-lg font-bold ${darkMode ? 'text-black':'text-white '}`}> Forecast#1 </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> 10/03/2025 </p>
                        </div>
                        <div className="flex items-center justify-between md:items-center lg:justify-between ">
                        <button className=" bg-greenE rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white hover:bg-brand-800 active:bg-greenE transition-transform duration-300 transform hover:scale-105">Descargar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className= {`relative flex flex-col rounded-[20px] max-w-[300px] h-64 bg-clip-border  w-full !p-4 ${darkMode ? 'bg-white' : 'bg-body'} ` }>
                <div className="h-full w-full">
                    <div className="relative w-full">
                        <img src="src/Images/opcion1.jpg" className="mb-3 h-auto w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                        <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-orange p-1 text-brand-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full font-medium">
                                Viernes
                            </div>
                        </button>
                    </div>
                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className={`text-lg font-bold ${darkMode ? 'text-black':'text-white '}`}> Forecast#1 </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> 10/03/2025 </p>
                        </div>
                        <div className="flex items-center justify-between md:items-center lg:justify-between ">
                        <button className=" bg-greenE rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white hover:bg-brand-800 active:bg-greenE transition-transform duration-300 transform hover:scale-105">Descargar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className= {`relative flex flex-col rounded-[20px] max-w-[300px] h-64 bg-clip-border  w-full !p-4 ${darkMode ? 'bg-white' : 'bg-body'} ` }>
                <div className="h-full w-full">
                    <div className="relative w-full">
                        <img src="src/Images/opcion1.jpg" className="mb-3 h-auto w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                        <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-blueI p-1 text-brand-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full font-medium">
                                Lunes
                            </div>
                        </button>
                    </div>
                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className={`text-lg font-bold ${darkMode ? 'text-black':'text-white '}`}> Forecast#1 </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> 10/03/2025 </p>
                        </div>
                        <div className="flex items-center justify-between md:items-center lg:justify-between ">
                        <button className=" bg-greenE rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white hover:bg-brand-800 active:bg-greenE transition-transform duration-300 transform hover:scale-105">Descargar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className= {`relative flex flex-col rounded-[20px] max-w-[300px] h-64 bg-clip-border  w-full !p-4 ${darkMode ? 'bg-white' : 'bg-body'} ` }>
                <div className="h-full w-full">
                    <div className="relative w-full">
                        <img src="src/Images/opcion1.jpg" className="mb-3 h-auto w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                        <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-orange p-1 text-brand-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full font-medium">
                                Viernes
                            </div>
                        </button>
                    </div>
                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className={`text-lg font-bold ${darkMode ? 'text-black':'text-white '}`}> Forecast#1 </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> 10/03/2025 </p>
                        </div>
                        <div className="flex items-center justify-between md:items-center lg:justify-between ">
                        <button className=" bg-greenE rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white hover:bg-brand-800 active:bg-greenE transition-transform duration-300 transform hover:scale-105">Descargar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className= {`relative flex flex-col rounded-[20px] max-w-[300px] h-64 bg-clip-border  w-full !p-4 ${darkMode ? 'bg-white' : 'bg-body'} ` }>
                <div className="h-full w-full">
                    <div className="relative w-full">
                        <img src="src/Images/opcion1.jpg" className="mb-3 h-auto w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                        <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-blueI p-1 text-brand-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full font-medium">
                                Lunes
                            </div>
                        </button>
                    </div>
                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className={`text-lg font-bold ${darkMode ? 'text-black':'text-white '}`}> Forecast#1 </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> 10/03/2025 </p>
                        </div>
                        <div className="flex items-center justify-between md:items-center lg:justify-between ">
                        <button className=" bg-greenE rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white hover:bg-brand-800 active:bg-greenE transition-transform duration-300 transform hover:scale-105">Descargar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className= {`relative flex flex-col rounded-[20px] max-w-[300px] h-64 bg-clip-border  w-full !p-4 ${darkMode ? 'bg-white' : 'bg-body'} ` }>
                <div className="h-full w-full">
                    <div className="relative w-full">
                        <img src="src/Images/opcion1.jpg" className="mb-3 h-auto w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                        <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-orage p-1 text-brand-500 hover:cursor-pointer">
                            <div className="flex h-full w-full items-center justify-center rounded-full font-medium">
                                viernes
                            </div>
                        </button>
                    </div>
                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className={`text-lg font-bold ${darkMode ? 'text-black':'text-white '}`}> Forecast#1 </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> 10/03/2025 </p>
                        </div>
                        <div className="flex items-center justify-between md:items-center lg:justify-between ">
                        <button className=" bg-greenE rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white hover:bg-brand-800 active:bg-greenE transition-transform duration-300 transform hover:scale-105">Descargar</button>
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
export default Weekly;