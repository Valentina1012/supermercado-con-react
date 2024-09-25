/* eslint-disable react/prop-types */
import { toast } from 'sonner'

export function Carta(props) {
  return (
    <div className="w-56 flex flex-col items-center border-2 border-gray-400 rounded-lg relative">
      <section className='group w-full relative h-64'>
        <img className="relative w-full h-full object-cover rounded-t-lg cursor-pointer" src={props.urlImage} alt={`imagen de ${props.name}`} />
        <button className='hidden absolute top-2/4 left-14 group-hover:block bg-gray-400 text-black border-none'>Ver Producto</button>
      </section>
      
      <section className='flex flex-col justify-end items-start w-full h-48 md:w-56'>
        <div className="relative w-full border-t-2 border-gray-400 p-4 text-lg">{props.name}</div>
        <div className="flex-1 py-1 pl-4">{`$ ${props.price}`}</div>
        <form className="flex items-center p-5" onSubmit={props.click}>
          <input className="w-24 h-7 mr-3 outline-none bg-gray-200 rounded-md px-2" id="cantidad" type="number" placeholder='0' />
          <button type="submit" className="flex items-center hover:bg-lime-600 bg-emerald-700 text-white border-none w-16" id={props.id} onClick={() => toast.success('Producto agregado al carrito')}>
            Añadir
          </button>
        </form>
      </section>
    </div>
  )
}