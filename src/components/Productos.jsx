/* eslint-disable react/prop-types */
import { Carta } from './Carta'

export function Productos({ list, handleCart }) {
  return (
    <ul className='grid grid-cols-2  auto-rows-auto justify-center justify-items-center pt-4 pb-4 mx-auto xl:grid-cols-4 lg:w-full md:grid-cols-3'>
      {
        list.map((prod) => (
          <Carta key={prod.id} urlImage={prod.urlImg} name={prod.name} price={prod.price} click={handleCart} id={prod.id} />
        ))
      }
    </ul>

  )
}