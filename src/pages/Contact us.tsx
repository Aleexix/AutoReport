import { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";


const ContactUs = () => {
  const themeContext = useContext(ThemeContext);
    
    if (!themeContext) {
      throw new Error("Weekly debe estar dentro de un ThemeProvider");
    }
  
    const {darkMode} = themeContext;
  
    return (
        <>
      <section className={`py-20 overflow-hidden ${darkMode ? 'bg-body' : 'bg-white'}`}>
        <div className="container px-4 mx-auto">
          <div className="md:max-w-4xl text-center mx-auto"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Envianos un mensaje</span>
            <h2 className={` mb-8 text-7xl lg:text-8xl tracking-7xl lg:tracking-8xl ${darkMode ? 'text-white':'text-black'}`}>Envíanos un mensaje y nuestro equipo te responderá</h2>
            <p className={`mb-20 ${darkMode ? 'text-gray-300':'text-gray-700'}`}>AutoReport es un software creado para automatizar el reporte semanal.</p>
            <div className="flex flex-wrap -m-2 mb-10">
              <div className="w-full md:w-1/2 p-2">
                <div className= {`mb-2 border  overflow-hidden rounded-3xl ${darkMode ? 'border-white focus-within:border-blueI':'border-black focus-within:border-blueI'}`}>
                  <input className="pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-400 outline-none bg-transparent" type="text" placeholder="Nombre"/>
                </div><img className="absolute top-0 left-48 z-0 " src={`${darkMode ? 'src/Images/layer-blur.svg':''}`} alt="" />
              </div>
              <div className="w-full md:w-1/2 p-2">
              <div className= {`mb-2 border  overflow-hidden rounded-3xl ${darkMode ? 'border-white focus-within:border-blueI':'border-black focus-within:border-blueI'}`}>
                  <input className="pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-400 outline-none bg-transparent" type="text" placeholder="Apellido"/>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-2">
              <div className= {`mb-2 border  overflow-hidden rounded-3xl ${darkMode ? 'border-white focus-within:border-blueI':'border-black focus-within:border-blueI'}`}>
                  <input className="pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-400 outline-none bg-transparent" type="text" placeholder="Correo"/>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-2">
              <div className= {`mb-2 border  overflow-hidden rounded-3xl ${darkMode ? 'border-white focus-within:border-blueI':'border-black focus-within:border-blueI'}`}>
                  <input className="pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-400 outline-none bg-transparent" type="text" placeholder="Unidad"/>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-2">
                <div className={`relative mb-2 border overflow-hidden rounded-3xl ${darkMode ? ' border-white focus-within:border-blueI':' border-black focus-within:border-blueI'}`}>
                  <select className="appearance-none pl-6 pr-16 py-4 text-gray-400 w-full placeholder-gray-400 outline-none bg-transparent">
                    <option hidden>Locacion</option>
                    <option className="text-gray-700">Colombia</option>
                    <option className="text-gray-700">Venezuela</option>
                    <option className="text-gray-700">LCR</option>
                  </select>
                  <svg className="absolute right-8 top-1/2 transform -translate-y-1/2" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.6004 1.4585L9.16706 6.89183C8.52539 7.5335 7.47539 7.5335 6.83372 6.89183L1.40039 1.4585" stroke="#1063FF" strokeWidth="1.66667" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>

                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center max-w-xs mx-auto mb-6">
              <div className="w-full"><a className="block px-14 py-4 text-center font-medium tracking-2xl border-2 border-blueI bg-blueI hover:bg-blueI text-black focus:ring-4 focus:ring-blueI focus:ring-opacity-40 rounded-full transition-transform duration-300 transform hover:scale-105" href="#">Enviar</a></div>
            </div>
            <p className= {`text-sm max-w-xs mx-auto ${darkMode ? 'text-gray-300':'text-gray-700'}`}>Su información será utilizada de acuerdo con nuestra Política de privacidad. Usted se puede comunicar en cualquier momento</p>
          </div>
        </div>
      </section>
        </>
    );

}

export default ContactUs ;