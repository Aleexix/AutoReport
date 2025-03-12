import  {Link}   from "react-router-dom" ;
import "../Global.css";

const Navbar = () => {
  return (
    <div className="bg-body">
      <p className="py-4 bg-blueO text-white text-center">
        ¿Quieres ahorrar tiempo con reportes automáticos? Sin duda!
      </p>
      <section className="relative overflow-visible">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between pt-6 -m-2">
            <div className="w-auto p-2">
              <a className="relative z-10 inline-block" href="#">
                <img src="/Frame 1 (5).svg" alt="Logo" />
              </a>
            </div>
            <div className="w-auto p-2 z-20">
              <div className="flex flex-wrap items-center">
                <nav className="w-auto hidden lg:block">
                  <ul className="flex items-center mr-12">
                    <li className="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter">
                    <Link to="/sobre nosotros">Nosotros</Link>
                    </li>
                    <li className="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter">
                    <Link to="/contactanos">Ayuda</Link>
                    </li>
                    <li className="text-white font-medium hover:text-opacity-90 tracking-tighter">
                    <Link to="/semanal">Historico</Link>
                    </li>
                  </ul>
                </nav>
                <div className="w-auto hidden lg:block">
                  <Link
                    className="inline-block px-8 py-4 text-white hover:text-black tracking-tighter hover:bg-blueI border-2 border-blueI focus:border-blueI focus:border-opacity-40 hover:border-blueI focus:ring-4 focus:ring-blueI focus:ring-opacity-40 rounded-full transition duration-300"
                    to="/"
                  >
                    Tu reporte
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar
