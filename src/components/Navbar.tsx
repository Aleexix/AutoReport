import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from '../context/Themecontext';

const Navbar: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Navbar debe estar dentro de un ThemeProvider");
  }

  const { darkMode, toggleTheme } = themeContext;

  return (
    <div className={`${darkMode ? 'bg-body' : 'bg-white'}`}>
      <p className={`py-4 ${darkMode ? 'bg-blueO' : 'bg-blueO'} text-white text-center`}>
        ¿Quieres ahorrar tiempo con reportes automáticos? Sin duda!
      </p>
      <section className="relative overflow-visible">
        <div className="px-2">
          <div className="flex items-center justify-between pt-6 -m-2">
            <div className="w-auto p-2 ml-12">
              <a className="relative z-10 inline-block ml-10" href="#">
                <img src={darkMode ? "/Frame 1 (5).svg" : "/Frame 1 (6).svg"} alt="Logo" />

              </a>
            </div>
            <div className="p-2 z-20">
              <div className="flex flex-wrap items-center">
                <nav className="w-auto hidden lg:block">
                  <ul className="flex items-center mr-12">
                    <li className={`mr-12 ${darkMode ? 'text-white' : 'text-black'} font-medium hover:text-opacity-90 tracking-tighter`}>
                      <Link to="/sobre nosotros">Nosotros</Link>
                    </li>
                    <li className={`mr-12 ${darkMode ? 'text-white' : 'text-black'} font-medium hover:text-opacity-90 tracking-tighter`}>
                      <Link to="/contactanos">Ayuda</Link>
                    </li>
                    <li className={`font-medium hover:text-opacity-90 tracking-tighter ${darkMode ? 'text-white' : 'text-black'}`}>
                      <Link to="/semanal">Historico</Link>
                    </li>
                  </ul>
                </nav>
                <div className="w-auto hidden lg:block">
                  <div className="flex items-center">
                    <Link
                      className={`inline-block px-8 py-4 ${darkMode ? 'text-white' : 'text-black'} hover:text-black tracking-tighter hover:bg-blueI border-2 border-blueI focus:border-blueI focus:border-opacity-40 hover:border-blueI focus:ring-4 focus:ring-blueI focus:ring-opacity-40 rounded-full transition duration-300`}
                      to="/"
                    >
                      Tu reporte
                    </Link>
                    <div className="flex items-center justify-center">
                      <button
                        onClick={toggleTheme}
                        className="ml-36 mr-8 p-2 text-white border-blueI focus:ring-blueI focus:border-blueI bg-blueI hover:bg-blue rounded-full transition-transform transform duration-300 hover:scale-110"
                        aria-label="Cambiar tema"
                      >
                        {darkMode ? (
                          // Ícono de sol (Modo oscuro activado)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                          </svg>
                        ) : (
                          // Ícono de luna (Modo claro activado)
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                          </svg>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
