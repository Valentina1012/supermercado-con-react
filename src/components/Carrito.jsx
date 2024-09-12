/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../styles/carrito.css'
import { DetallesCarrito } from './DetallesCarrito.jsx'

export function Carrito({ cart }) {
    const [isActive, setIsActive] = useState(false)

    const activeList = isActive ? 'cart-list active': 'cart-list'
    const activeCart = isActive ? 'cart active': 'cart'

    const handleListCart = () => {
        setIsActive(!isActive)
    }

    return (
        <aside className="shop-cart">
            <h3 className={activeCart} onClick={handleListCart}>Mi Carrito<span className="material-symbols-outlined">shopping_cart</span></h3>
            <div className="detail">
                <ul className={activeList}>
                    {
                        cart.map((prod) => {
                            return <DetallesCarrito key={prod.id} cantidad={prod.cantidad} name={prod.name} price={prod.price}/>
                        })
                    }
                </ul>
            </div>
            {/* <div className="total">

            </div> */}
        </aside>
    )
}