import { useContext } from "react";
import "../Global.css";
import { ThemeContext } from "../context/Themecontext";

const Maintenance = () => {
   const themeContext = useContext(ThemeContext);
  
    if (!themeContext) {
      throw new Error("Navbar debe estar dentro de un ThemeProvider");
    }
  
    const { darkMode} = themeContext;
  
    return (
<>
<section className={`py-2 ${ darkMode ? 'bg-body' : 'bg-white'}`}>
        <div className="container px-4 mx-auto ">
          <div className={`relative pt-20 px-4 overflow-hidden rounded-3xl ${darkMode ? ' bg-gray-900 bg-opacity-20' : 'bg-gray-900'}`}>
            <div className="text-center md:max-w-xl mx-auto removed pb-20"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Redes de comunicacion</span>
              <h2 className="font-heading mb-6 text-7xl text-white tracking-8xl">¿Necesitas Ayuda?</h2>
              <div>
                <p  className="mb-8 text-gray-300 relative z-10">Estos son los canales por los cuales te puedes comunicar para solicitar soporte o ayuda.</p>
              </div>
              <div className="flex justify-center mt-8">
                    <div className="flex space-x-6 z-20">
                        <a href="https://www.slack.com" target="_blank" rel="noopener noreferrer">
                            <img src="src/Images/slack-svgrepo-com.svg" className="w-10 h-10" alt="Facebook" />
                        </a>
                        <a href="mailto:Alexix.Orostegui@ibm.com" target="_blank" rel="noopener noreferrer">
                            <img src="src/Images/ms-outlook-svgrepo-com.svg" className="w-10 h-10" alt="Outlook" />
                        </a>

                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                            <img src="src/Images/github-svgrepo-com.svg" className="w-10 h-10" alt="Twitter/X" />
                        </a>
                       
                    </div>
                </div><img className="absolute -bottom-24 right-0 z-0" src="src/Images/lines2.png" alt=""/>
            </div>
          </div>
        </div>
      </section>
</>
    );

}
export default Maintenance;