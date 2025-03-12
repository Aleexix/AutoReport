import "../Global.css";

const Maintenance = () => {
    return (
<>
<section className="py-2">
        <div className="container px-4 mx-auto ">
          <div className="relative pt-20 px-4 bg-gray-900 bg-opacity-20 overflow-hidden rounded-6xl">
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