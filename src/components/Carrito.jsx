/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../styles/carrito.css'
import { DetallesCarrito } from './DetallesCarrito.jsx'

export function Carrito({ cart, totalCart, cleanTotal}) {
    const [isActive, setIsActive] = useState(false)

    const activeCart = isActive ? 'cart active': 'cart'
    const activeDetails = isActive ? 'cart-details active' : 'cart-details'
    
    const handleListCart = () => {
        setIsActive(!isActive)
    }

    return (
        <aside className="shop-cart">
            <div className={activeCart} onClick={handleListCart}>Mi Carrito<span className="material-symbols-outlined">shopping_cart</span>
               
            </div>
            <div className={activeDetails}>
                <ul className='cart-list'>
                    {
                        cart.map((prod) => {
                            return <DetallesCarrito key={prod.id} cantidad={prod.cantidad} name={prod.name} price={prod.price}/>
                        })
                    }
                </ul>
                <div className="btns-actions">
                    <button className='btn-total'>{`Total: ${totalCart}`}</button>
                    <button className="btn-clear" onClick={cleanTotal}>Limpiar</button>
                </div>
            </div>
        </aside>
    )
}