/* eslint-disable react/prop-types */
import '../styles/carritoDetalles.css'

export function DetallesCarrito({ cantidad, name, price }) {
    return (
        <li className='font-lighter flex gap-2 pt-4 px-4 w-ful relative z-40 justify-start'>
            <span className="cantidad">{cantidad}</span>
            <span className="flex-2">{name}</span>
            <span className="flex px-1"><b>${price * cantidad}</b></span>
        </li>
    )
}