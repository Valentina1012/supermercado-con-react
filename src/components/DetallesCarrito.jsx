/* eslint-disable react/prop-types */
import '../styles/carritoDetalles.css'

export function DetallesCarrito({ cantidad, name, price }) {
    return (
        <li className='cart-detail'>
            <span className="cantidad">{cantidad}</span>
            <span className="title">{name}</span>
            <span className="precio"><b>${price * cantidad}</b></span>
        </li>
    )
}