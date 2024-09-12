/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../styles/header.css'
import { Carrito } from './Carrito.jsx'

export function Header({ filter, handle, cart }) {
    const [isActive, setIsActive] = useState(false)

    const activeItem = isActive ? "list active" : "list"
    const activeMenu = isActive ? "menu_navigation open" : "menu_navigation"

    const handleMenu = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="nav_superior">
            <section className="nav_utilities">
                <div className="search_bar">
                    <input type="text" onChange={filter} placeholder='Buscar'/>
                    <div className="actions">
                        <button><span className="material-symbols-outlined">mic</span></button>
                    </div>
                </div>
                <Carrito cart={cart}/>
             </section>

            <section className={activeMenu} onClick={handleMenu} >
                <div className="menu_container" >Menu</div>
                <ul className='list-items'>
                    <li className={activeItem} id="bebida" onClick={handle}><span className="material-symbols-outlined">wine_bar</span>Bebidas</li>
                    <li className={activeItem} id="lacteo" onClick={handle}><span className="material-symbols-outlined">grocery</span>Lacteos</li>
                    <li className={activeItem} id="frutas-verduras" onClick={handle}><span className="material-symbols-outlined">nutrition</span>Frutas y verduras</li>
                    <li className={activeItem} id="almacen" onClick={handle}><span className="material-symbols-outlined">cookie</span>Almacen</li>
                </ul> 
            </section>
        </div>
    )
}