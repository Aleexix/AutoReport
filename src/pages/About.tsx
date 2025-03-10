
const About = () => {
    return (
        <>
            <section className="py-20 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="md:max-w-xl text-center mx-auto mb-20"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Sobre nosotros</span>
                        <h2 className="font-heading text-7xl text-white tracking-tighter-xl">Nuestra visión, tecnología y equipo.</h2>
                    </div>
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-wrap lg:items-center -m-8 lg:-m-12">
                            <div className="w-full md:w-1/2 p-8 lg:p-12">
                                <div className="max-w-max mx-auto"><img className="rounded-3xl" src="src/Images/freepik__background__77229.png" alt="" /></div>
                            </div>
                            <div className="w-full md:w-1/2 p-8 lg:p-12"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Sobre Nosotros</span>
                                <h2 className="mb-6 text-6xl md:text-7xl text-white tracking-tighter">Practicantes con un objetivo claro</h2>
                                <p className="mb-10 text-white text-opacity-60 md:max-w-xs">Hola! nosotros somos practicantes de IBm en la unidad de ventas en el año 2025, este proyecto sale de una necesidad de automatizacion de la unidad...</p><a className="inline-block px-8 py-4 text-white hover:text-black font-medium tracking-tighter hover:bg-blueI border-2 border-blueI focus:border-blueIfocus:border-opacity-40 hover:borderblueI focus:ring-4 focus:ring-blueI focus:ring-opacity-40 rounded-full transition duration-300" href="#">Leer mas</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="md:max-w-md"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Documentacion</span>
                                <h2 className="font-heading mb-8 text-6xl md:text-7xl text-white tracking-tighter-xl">tecnologias y como se hizo</h2>
                                <p className="mb-8 text-lg text-gray-300">En este proyecto se utilizaron estas tecnologias + IMB RPA, por el lado del FrontEnd se utilzo el framework de react+vite haciendo que el software fuera un poco mas rapido y para el BackEnd se utilizo python y para la automatizacion IBM RPA... </p><a className="inline-block text-white hover:text-opacity-80 font-medium underline transition duration-500" href="#">Leer mas</a>
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
            <section className="relative py-24 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="mb-20 md:max-w-xl text-center mx-auto"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">nuestro equipo</span>
                        <h2 className="font-heading text-7xl lg:text-8xl text-white tracking-7xl lg:tracking-8xl">Detalles de nuestro equipo</h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center text-center -m-8">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                            <div className="text-center">
                                <img className="mb-9 mx-auto" src="src/Images/user-svgrepo-com.svg" alt="" />
                                <span className="inline-block mb-2 text-gray-300">FullStack and CEO at AutoReport</span>
                                <h3 className="text-3xl text-white">Alexix Orostegui</h3>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                            <div className="text-center">
                                <img className="mb-9 mx-auto" src="src/Images/user-svgrepo-com.svg" alt="" />
                                <span className="inline-block mb-2 text-gray-300">FullStack</span>
                                <h3 className="text-3xl text-white">Jhon Cufiño</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default About;