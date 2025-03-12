import { Link } from "react-router-dom";
import "../Global.css";



const Index = () => {


  return (
    <>
      <div className="relative pt-20  lg:pt-25">
        <div className="relative z-10 container px-4 mx-auto">

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap lg:items-center -m-8 lg:-m-12">
              <img className="absolute top-7 -right-10 " src="src/Images/star.svg" alt="" /><img className="absolute top-10 -right-26" src="src/Images/star2.svg" alt="" />
              <div className="w-full md:w-1/2 p-8 lg:p-1">
                <div className=" mx-auto"><img className="rounded-3xl" src="src/Images/freepik__adjust__61457.png" alt="" />
                </div>
              </div>

              <div className="w-full   md:w-1/2 p-8 lg:p-12">
                <h2 className="mb-6 text-6xl md:text-7xl text-white tracking-tighter">Descarga hoy tu reporte semanal</h2>
                <Link to={"#"}>
                  <button className="flex fill items-center px-8 py-4 text-black font-medium tracking-tighter bg-blueI hover:bg-blueI border-2 focus:border-blueI border-blueI focus:border-opacity-40 focus:ring-4 focus:ring-opacity-40 rounded-full transition duration-300">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Descargar</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img className="absolute bottom-0  right-0" src="src/Images/lines2.svg" alt="" />
        <img className="absolute right-15 z-30" src="src/Images/star.svg" alt="" />
      </div><img className="absolute top-0 left-48 z-0 " src="src/Images/layer-blur.svg" alt="" />
      <section className="pt-35 pb-24 bg-blueGray-950">
        <div className="container px-4 mx-auto">
          <div className="text-center"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Recientes</span>
            <h2 className=" mb-6 text-7xl lg:text-8xl text-white tracking-8xl  mx-auto">Últimos reportes disponibles </h2>
            <p className="mb-20 text-gray-300 md:max-w-md mx-auto">Aqui se generaran los reportes mas recientes de los dias Lunes y viernes.</p>
          </div>

      <div className="flex justify-center gap-8 "> 
      <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
  <img className="rounded-xl mx-auto block" src="src/Images/Group 2.svg" alt="" />
  <div className="flex justify-between items-center pt-3 ml-4">
    <div>
      <h1 className=" text-2xl">Forecast</h1>
      <p className="mt-2">10/02/2025</p>
    </div>
    <div>
      <button className="text-white text-md font-semibold bg-blueI py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">Lunes</button>
    </div>
  </div>
</div>
<div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
  <img className="rounded-xl mx-auto block" src="src/Images/Group 2.svg" alt="" />
  <div className="flex justify-between items-center pt-3 ml-4">
    <div>
      <h1 className=" text-2xl">Forecast</h1>
      <p className="mt-2">14/02/2025</p>
    </div>
    <div>
      <button className="text-white text-md font-semibold bg-greenE py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">Viernes</button>
    </div>
  </div>
</div>
<div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
  <img className="rounded-xl mx-auto block" src="src/Images/Group 2.svg" alt="" />
  <div className="flex justify-between items-center pt-3 ml-4">
    <div>
      <h1 className=" text-2xl">Forecast</h1>
      <p className="mt-2">17/02/2025</p>
    </div>
    <div>
      <button className="text-white text-md font-semibold bg-blueI py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">Lunes</button>
    </div>
  </div>
</div></div>
         



        </div>
      </section>
    </>
  );
}
export default Index;