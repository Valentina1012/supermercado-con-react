/* eslint-disable react/prop-types */
import { useState } from 'react'
import '../styles/header.css'
import { Carrito } from './Carrito.jsx'

export function Header({ filterSearch, optionsMenu, allProducts, cart, totalCart, cleanCart}) {
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
                    <input type="text" onChange={filterSearch} placeholder='Buscar'/>
                    <div className="actions">
                        <button><span className="material-symbols-outlined">mic</span></button>
                    </div>
                </div>
                <Carrito cart={cart} totalCart={totalCart} cleanTotal={cleanCart}/>
             </section>

            <section className={activeMenu} onClick={handleMenu} >
                <div className="menu_container" >Menu</div>
                <ul className='list-items'>
                    <li className={activeItem} onClick={allProducts}>Todos los productos <span className="material-symbols-outlined">arrow_forward_ios</span> </li>
                    
                    <li className={activeItem} id="bebida" onClick={optionsMenu}><span className="material-symbols-outlined">wine_bar</span>Bebidas <span className="material-symbols-outlined" >arrow_forward_ios</span> </li>
                    
                    <li className={activeItem} id="lacteo" onClick={optionsMenu}><span className="material-symbols-outlined">grocery</span>Lacteos <span className="material-symbols-outlined">arrow_forward_ios</span> </li>
                    
                    <li className={activeItem} id="frutas-verduras" onClick={optionsMenu}><span className="material-symbols-outlined">nutrition</span>Frutas y verduras <span className="material-symbols-outlined">arrow_forward_ios</span> </li>
                    
                    <li className={activeItem} id="almacen" onClick={optionsMenu}><span className="material-symbols-outlined">cookie</span>Almacen <span className="material-symbols-outlined">arrow_forward_ios</span> </li>
                </ul> 
            </section>
        </div>
    )
}