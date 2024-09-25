/* eslint-disable react/prop-types */
import '../styles/header.css'
import { Carrito } from './Carrito.jsx'
import { desplegable } from '../logic/desplegable.js'

export function Header({ filterSearch, optionsMenu, allProducts, cart, totalCart, cleanCart }) {
    
    return (
        <div className="lg:w-full">
            <section className="w-48 absolute flex justify-center top-3 left-0 bg-emerald-900 z-20 text-white rounded-md xl:left-1/4 lg:left-20 lg:top-0" >
                <ul className='absolute flex flex-col items-start justify-start gap-6 w-full top-2 left-0 rounded-b-lg z-10' data-id="menu" onClick={(e) => desplegable(e)}>
                    <li className="list-parent w-24 h-12">
                        <div className="flex items-start pb-3" data-dropdown>
                            <span className="absolute translate-y-[-0.15rem] bg-white h-0.5 w-8 left-14 ml-1" data-firstline></span>
                            <p className='hover:text-lime-300'>Menu</p>
                            <span className="absolute translate-y-3.5 bg-white h-0.5 w-8 left-14 shadow-iconMenuOpen ml-1" data-lastline></span>
                        </div>
                        
                        <ul className='link-child'>
                            <li className="flex items-center gap-2 text-white w-36 hover:text-lime-300 cursor-pointer lg:w-40 pb-4" onClick={allProducts}><p className='flex-1'>Todos los productos</p> <span className="material-symbols-outlined">arrow_forward_ios</span> </li>

                            <li className="flex items-center gap-2 text-white w-36  hover:text-lime-300 cursor-pointer lg:w-40 pb-2" id="bebida" onClick={optionsMenu}><span className="material-symbols-outlined">wine_bar</span><p className='flex-1'>Bebidas</p> <span className="material-symbols-outlined" >arrow_forward_ios</span> </li>

                            <li className="flex items-center gap-2 text-white w-36  hover:text-lime-300 cursor-pointer lg:w-40 pb-2" id="lacteo" onClick={optionsMenu}><span className="material-symbols-outlined">grocery</span><p className='flex-1'>Lacteos</p> <span className="material-symbols-outlined">arrow_forward_ios</span> </li>

                            <li className="flex items-center gap-2 text-white w-36  hover:text-lime-300 cursor-pointer lg:w-40 pb-2" id="frutas-verduras" onClick={optionsMenu}><span className="material-symbols-outlined">nutrition</span><p className='flex-1'>Frutas y Verduras</p><span className="material-symbols-outlined">arrow_forward_ios</span> </li>

                            <li className="flex items-center gap-2 text-white w-36  hover:text-lime-300 cursor-pointer lg:w-40" id="almacen" onClick={optionsMenu}><span className="material-symbols-outlined">cookie</span><p className='flex-1'>Almacen</p> <span className="material-symbols-outlined">arrow_forward_ios</span> </li>
                        </ul>
                    </li>

                </ul>
            </section>

            <section className="w-full bg-emerald-900 h-22 flex justify-end items-center gap-2 py-6 text-white font-medium relative lg:rounded-lg lg:h-14">
                <div className="flex items-center bg-white rounded-2xl relative top-0 mr-10 ">
                    <input className="border-none bg-transparent py-1 px-3 w-40 flex-1 outline-none text-md text-black font-normal lg:w-60 sm:w-52" type="text" onChange={filterSearch} placeholder='Buscar' />
                    <div className="actions">
                        <button className="text-sky-600 border-none outline-none bg-transparent py-1 px-3"><span className="material-symbols-outlined">mic</span></button>
                    </div>
                </div>
                <Carrito cart={cart} totalCart={totalCart} cleanTotal={cleanCart} />
            </section>
        </div>
    )
}