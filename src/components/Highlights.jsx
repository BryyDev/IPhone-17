function Highlights () {

    const specs = [
  { value: '48MP"', title: 'Principal', label: 'Sensor quad-pixel com foco automatico', color: 'text-blue-600' },
  { value: '12MP',title: 'Ultra Wide', label: 'Campo de visão de 120° com modo noturno', color: 'text-orange-500' },
  { value: '12MP',title: 'Telefoto 5x', label: 'Zoom optico de 5x com estabilização', color: 'text-blue-600' },
];

    return(
        <section id="design" className="bg-black py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 ">
                    <h2 className="text-5xl font-bold mb-4">Design revolucionário </h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiencia</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16 ">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src={`${import.meta.env.BASE_URL}img/titanium-design.jpg`} alt="" />
                        <h3 className="font-bold mb-2 text-3xl"> Titanio Premium</h3>
                        <p className="text-gray-300">Estrutura em titanio de grau aeroespacial. O smartphone msi forte e leve.</p>
                    </div>
                    
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src={`${import.meta.env.BASE_URL}img/ios-features.jpg`} alt="" />
                        <h3 className="font-bold mb-2 text-3xl"> iOS 26</h3>
                        <p className="text-gray-300">Sistema operacional mais avançado do mundo com IA integrada.</p>
                    </div>
                </div>

                <div id="performance" className="bg-gray-900 rounded-3xl p-12 mb-16">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className=" text-gray-300 mb-6">O chip mais poderoso em um smartphone</p>
                    <img className="w-full roundend-2xl mb-4" src={`${import.meta.env.BASE_URL}img/chip-a18-pro.jpg`} alt="" />
                    <ul className="space-y-3 text-gray-300">
                        <li>CPU 20% mais rapida</li>
                        <li>GPU 25% mais eficiente</li>
                        <li>Neural engine com 16 nucleos</li>
                        <li>Ray tracing acelerado por hardware</li>
                    </ul>
                </div>
{/* Map - mapeia um array (pega item por item) */}
                <div id="camera" className="text-center">
                    <h3 className="text-4xl font-bold mb-10">Sistema de cameras avançado</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    {specs.map( (spec, index) => (
                        <div key={index} className=" text-center cursor-pointer bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                            <h4 className={`text-4xl font-bold mb-5 ${spec.color}`}>{spec.value}</h4>
                            <p className=" text-xl font-semibold ">{spec.title}</p>
                            <p className="text-gray-400 ">{spec.label}</p>
                        </div>
                    ))}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Highlights