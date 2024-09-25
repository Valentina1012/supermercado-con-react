/* eslint-disable react/prop-types */
import '../styles/carrito.css'
import { DetallesCarrito } from './DetallesCarrito.jsx'
import { desplegable } from '../logic/desplegable.js'

export function Carrito({ cart, totalCart, cleanTotal }) {

    return (
        <aside className="w-full h-full flex top-20 lg:pl-5 lg:w-52 fixed z-50 left-full ">
                <ul className='absolute flex w-80 h-20 z-30 top-0 left-0 pl-5 text-lime-300 translate-x-[-20rem] justify-end ' data-parent>
                    <li className='grid grid-rows-[max-content_0fr] overflow-hidden transition-[grid-template-rows] cursor-pointer gap-4 data-[toggle]:grid-rows-[max-content_1fr] py-3 px-3 justify-items-end absolute rounded-lg w-44 h-fit'>
                        <div className='flex items-center bg-lime-300 rounded-lg pl-3' data-dropdown onClick={(e) => desplegable(e)}>
                            <p className='lg:block text-black'>Mi Carrito</p><span className="material-symbols-outlined rounded-xl p-1 mx-2 bg-emerald-700 border-2 border-white">shopping_cart</span>
                        </div>
                        <ul className='overflow-auto ml-4 bg-emerald-900 rounded-lg text-lime-200 w-full'>
                            {cart.length == 0 && <li className='pt-4 pl-4'>¡El carrito está vacio!</li>}
                            
                            {
                                cart.map((prod) => {
                                    return <DetallesCarrito key={prod.id} cantidad={prod.cantidad} name={prod.name} price={prod.price} />
                                })
                            }
                            <div className="flex pl-3 gap-2 z-20 h-20 items-end justify-center pb-4">
                                <button className='rounded-xl max-w-40 min-w-20 h-8 bg-lime-600 border-0'>{`Total: ${totalCart}`}</button>
                                <button className='rounded-xl max-w-40 h-8 p-1 bg-lime-600 border-0 hover:bg-emerald-600' onClick={cleanTotal}>Limpiar</button>
                            </div>
                        </ul>

                    </li>
                </ul>
        </aside>
    )
}