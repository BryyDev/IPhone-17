import { useState } from "react";

// para começar no react tem que criar uma function com o nome doq c vai fz

function NavBar (){ //dentro da function e codigo js
    const [isOpen, setIsOpen] = useState(false);

    return ( //dentro do returno e o "codigo HTML"
            <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
                <div className="relative max-w-6xl mx-auto px-6 py-4">
                    <button
                        type="button"
                        aria-label="Abrir menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                        className="ml-auto block rounded-md p-2 hover:bg-white/10 md:hidden"
                    >
                        <span className="block h-0.5 w-6 bg-white"></span>
                        <span className="my-1.5 block h-0.5 w-6 bg-white"></span>
                        <span className="block h-0.5 w-6 bg-white"></span>
                    </button>

                    <div className={`${isOpen ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col items-center gap-4 bg-black/95 px-6 py-5 md:static md:flex md:w-auto md:flex-row md:justify-center md:gap-8 md:bg-transparent md:p-0`}>
                        <a href="#design" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Design</a>
                        <a href="#performance" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Performance</a>
                        <a href="#camera" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Camera</a>
                        <a href="#colors" onClick={() => setIsOpen(false)} className="hover:text-gray-500">Cores</a>

                        <button className="rounded-full bg-blue-600 px-6 py-2 hover:bg-blue-700">
                            Comprar
                        </button>
                    </div>
                </div>
            </nav>



    )
}

export default NavBar;
