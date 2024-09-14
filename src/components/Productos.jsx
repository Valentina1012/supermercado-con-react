/* eslint-disable react/prop-types */
import { Carta } from './Carta'
import '../styles/productos.css'

export function Productos({ list, handleCart }) {
    return (
        <ul className='products-list'>
          {
            list.map((prod) => (
              <Carta key={prod.id} urlImage={prod.urlImg} name={prod.name} price={prod.price} click={handleCart} id={prod.id}/>
            ))
          }
        </ul>
        
    )
}