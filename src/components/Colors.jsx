import { useState } from "react";

function Colors () {
    const colors = [
  { id: 'blue', name: 'Titânio Azul', image: `${import.meta.env.BASE_URL}img/iphone-blue.jpg`, colorClass: 'bg-blue-500' },
  { id: 'silver', name: 'Titânio Natural', image: `${import.meta.env.BASE_URL}img/iphone-silver.jpg`, colorClass: 'bg-gray-300' },
  { id: 'orange', name: 'Titânio Laranja', image: `${import.meta.env.BASE_URL}img/iphone-orange.jpg`, colorClass: 'bg-orange-500' }
];

    const models = [
  { name: 'Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', battery: '33h de vídeo', weight: '221g' },
  { name: 'Pro', screen: '6.3 polegadas', storage: '128GB, 256GB ou 512GB', battery: '29h de vídeo', weight: '199g' }
];

    const [selectedColor, setSelectedColor] = useState('orange')
    return (
        <section id="colors" className="bg-black py-20 px-8"> 
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-5xl mb:text-6xl font-bold mb-4">Escolha sua cor</h2>
                <p className="text-xl text-gray-400">Quatro acabamentos em titanio lindos</p>
            </div>

            <div className="flex justify-center mb-12 ">
                <div className="relative w-full max-w-6xl mx-auto">
                    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
                        <div className="relative">
                            <img
                                src={colors.find(color => color.id === selectedColor).image}
                                alt={colors.find(color => color.id === selectedColor).name}
                                className="max-w-full max-h-[500px] object-contain"
                            />

                            <div className="absolute bottom-0 left-0 right-0 flex translate-y-1/2 justify-center">
                                <div className="px-4 py-2 rounded-full backdrop-blur-md bg-black/40">
                                    <h3 className="text-1xl font-semibold">
                                        {colors.find(color => color.id === selectedColor).name}
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-8 mt-8">
                            {colors.map(color => (
                                <button key={color.id} onClick={() => setSelectedColor(color.id)} className="relative transition-all duration-300">
                                    <div className={`w-16 h-16 rounded-full border-4 ${color.colorClass} 
                                    ${selectedColor === color.id ? 'border-white' : 'border-gray-500'}`}>

                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-12 w-full">
                        {models.map( (model, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 border-gray-800">
                                <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
                                <p className="text-gray-400 mb-4">{model.screen}</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>{model.storage}</li>
                                    <li>{model.battery}</li>
                                    <li>{model.weight}</li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16 ">
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4  rounded-full text-lg font-medium transition-all duration-300 mb-8 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">
                            Compre agora á partir de R$ 9.950,00
                        </button>
                        <p>Ou em ate 12x de R$ 974,92 sem juros</p>
                    </div>

                </div>
            </div>

            </div>
        </section>
    )
}

export default Colors