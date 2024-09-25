/* eslint-disable react/prop-types */
import { toast } from 'sonner'

export function Carta(props) {
  return (
    <div className="w-44 flex flex-col items-center border-2 border-gray-400 rounded-lg relative mb-5 sm:w-56">
      <section className='group w-full relative h-64'>
        <img className="relative w-full h-full object-cover rounded-t-lg cursor-pointer" src={props.urlImage} alt={`imagen de ${props.name}`} />
        <button className='hidden absolute top-2/4 left-8 group-hover:block bg-gray-400 text-black border-none sm:left-14'>Ver Producto</button>
      </section>
      
      <section className='flex flex-col justify-end items-start w-full h-48 md:w-56'>
        <div className="relative w-full border-t-2 border-gray-400 p-4 text-lg">{props.name}</div>
        <div className="flex-1 py-1 pl-4">{`$ ${props.price}`}</div>
        <form className="flex items-center py-5 px-2 sm:p-5" onSubmit={props.click}>
          <input className="w-20 h-7 mr-3 outline-none bg-gray-200 rounded-md px-2 sm:w-24" id="cantidad" type="number" placeholder='0' />
          <button type="submit" className="flex items-center hover:bg-lime-600 bg-emerald-700 text-white border-none w-16" id={props.id} onClick={() => toast.success('Producto agregado al carrito')}>
            Añadir
          </button>
        </form>
      </section>
    </div>
  )
}