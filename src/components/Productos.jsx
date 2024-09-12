/* eslint-disable react/prop-types */
import { Carta } from './Carta'
import '../styles/productos.css'

export function Productos({ list, handleCarrito }) {
    return (
        <ul className='products-list'>
          {
            list.map((prod) => (
              <Carta key={prod.id} urlImage={prod.urlImg} name={prod.name} price={prod.price} click={handleCarrito} id={prod.id}/>
            ))
          }
        </ul>
        
    )
}