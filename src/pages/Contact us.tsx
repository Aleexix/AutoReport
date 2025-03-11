

const ContactUs = () => {
    return (
        <>
      <section className="py-20 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="md:max-w-4xl text-center mx-auto"><span className="inline-block mb-4 text-sm text-blueI font-medium tracking-tighter">Envianos un mensaje</span>
            <h2 className="font-heading mb-8 text-7xl lg:text-8xl text-white tracking-7xl lg:tracking-8xl">Envíanos un mensaje y nuestro equipo te responderá</h2>
            <p className="mb-20 text-gray-300">AutoReport es un software creado para automatizar el reporte semanal.</p>
            <div className="flex flex-wrap -m-2 mb-10">
              <div className="w-full md:w-1/2 p-2">
                <div className="mb-2 border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                  <input className="pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent" type="text" placeholder="Nombre"/>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-2">
                <div className="mb-2 border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                  <input className="pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent" type="text" placeholder="Apellido"/>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-2">
                <div className="mb-2 border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                  <input className="pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent" type="text" placeholder="E-mail"/>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-2">
                <div className="mb-2 border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                  <input className="pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent" type="text" placeholder="Unidad"/>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-2">
                <div className="relative mb-2 border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                  <select className="appearance-none pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent">
                    <option hidden>Locacion</option>
                    <option>Colombia</option>
                    <option>Venezuela</option>
                    <option>LCR</option>
                  </select>
                  <svg className="absolute right-8 top-1/2 transform -translate-y-1/2" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6004 1.4585L9.16706 6.89183C8.52539 7.5335 7.47539 7.5335 6.83372 6.89183L1.40039 1.4585" stroke="white" stroke-width="1.66667" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center max-w-xs mx-auto mb-6">
              <div className="w-full"><a className="block px-14 py-4 text-center font-medium tracking-2xl border-2 border-blueI bg-blueI hover:bg-blueI text-black focus:ring-4 focus:ring-blueI focus:ring-opacity-40 rounded-full transition duration-300" href="#">Enviar</a></div>
            </div>
            <p className="text-sm text-gray-300 max-w-xs mx-auto">Su información será utilizada de acuerdo con nuestra Política de privacidad. Usted puede opf fuera en cualquier momento</p>
          </div>
        </div>
      </section>
        </>
    );

}

export default ContactUs ;