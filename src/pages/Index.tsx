import "../Global.css";
import Animacionlottie from "../components/Animacionlottie";// Asegúrate de que la ruta sea correcta


const Index = () => {
  return (
    <>
      <div className="relative pt-20 z-10 lg:pt-28">
        <div className="relative z-10 container px-4 mx-auto">
          <div className="relative mb-24 text-center md:max-w-4xl mx-auto"><img className="absolute top-44 -left-36" src="src/images/star2.svg" alt="" /><img className="absolute top-10 -right-36" src="src/Images/star2.svg" alt="" /><span className="inline-block mb-2.5 text-sm text-blueI font-medium tracking-tighter">Inicio</span>
            <h1 className="font-heading mb-10 text-7xl lg:text-8xl xl:text-10xl text-white tracking-tighter">Descarga tu archivo semanal aqui</h1>
            <div className="flex justify-center">
              <button className="px-8 py-4 tracking-tighter flex items-center bg-greenE hover:bg-green-900 text-black focus:ring-4 focus:ring-blueI focus:ring-opacity-40 rounded-full transition duration-300 font-medium">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Descargar</span>
              </button>
            </div>
          </div>
          <div className="relative max-w-max mx-auto"><img src="src/Images/freepik__background__64688 1.svg" alt=""/>
          <img className="absolute top-7 -right-64" src="src/Images/star.svg" alt="" /></div>
        </div>
        <img className="absolute bottom-0  right-0" src="src/Images/lines2.svg" alt="" />
      </div><img className="absolute top-0 left-48 z-0 " src="src/Images/layer-blur.svg" alt="" />
      <section className="pt-20 pb-24 bg-blueGray-950">
        <div className="container px-4 mx-auto">
          <div className="text-center"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Recientes</span>
            <h2 className="font-heading mb-6 text-7xl lg:text-8xl text-white tracking-8xl md:max-w-md mx-auto">Los reportes mas recientes</h2>
            <p className="mb-20 text-gray-300 md:max-w-md mx-auto">Aqui se generaran los reportes mas recientes, solo Lunes y viernes.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="relative mb-8 overflow-hidden rounded-5xl"><img className="w-full transform hover:scale-125 transition duration-1000" src="src/Images/Group 2.svg" alt="" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-card p-8"> <a className="group inline-block max-w-sm" href="#">
                  <h3 className="mb-4 text-3xl text-white tracking-3xl hover:underline">Reporte semanal reciente</h3></a>                  <a className="group inline-flex items-center" href="#"><span className="mr-3.5 text-white font-medium">Leer mas</span>
                    <svg className="transform group-hover:rotate-90 transition duration-300" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 0.75L1 11.25" stroke="white" strokeWidth="1.43182" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M11.5 10.3781V0.75H1.87187" stroke="white" strokeWidth="1.43182" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg></a></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="relative mb-8 overflow-hidden rounded-5xl"><img className="w-full transform hover:scale-125 transition duration-1000" src="src/Images/Group 2.svg" alt="" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-card p-8"> <a className="group inline-block max-w-sm" href="#">
                  <h3 className="mb-4 text-3xl text-white tracking-3xl hover:underline">Reporte semanal reciente</h3></a>                  <a className="group inline-flex items-center" href="#"><span className="mr-3.5 text-white font-medium">Leer mas</span>
                    <svg className="transform group-hover:rotate-90 transition duration-300" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 0.75L1 11.25" stroke="white" strokeWidth="1.43182" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M11.5 10.3781V0.75H1.87187" stroke="white" strokeWidth="1.43182" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg></a></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="relative mb-8 overflow-hidden rounded-5xl"><img className="w-full transform hover:scale-125 transition duration-1000" src="src/Images/Group 2.svg" alt="" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-card p-8"> <a className="group inline-block max-w-sm" href="#">
                  <h3 className="mb-4 text-3xl text-white tracking-3xl hover:underline">Reporte semanal reciente</h3></a>                  <a className="group inline-flex items-center" href="#"><span className="mr-3.5 text-white font-medium">Leer mas</span>
                    <svg className="transform group-hover:rotate-90 transition duration-300" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 0.75L1 11.25" stroke="white" strokeWidth="1.43182" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M11.5 10.3781V0.75H1.87187" stroke="white" strokeWidth="1.43182" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Index;