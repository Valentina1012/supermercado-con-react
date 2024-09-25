import bebidas from '../images/bebidas.webp'
import frutasYverduras from '../images/frutas-verduras.webp'
import lacteos from '../images/lacteos.webp'
import almacen from '../images/almacen.webp'

export function Menu() {
  return (
    <section className='pt-16 px-5 mx-auto md:pt-14 lg:w-full '>
      <h2 className='pt-o pb-8 px-14 text-2xl font-medium'>Nuestros productos</h2>
      <div className="md:w-3/5 h-96 grid grid-cols-3 auto-rows-fr my-0 mx-auto gap-3 pb-14 px-5">
        <div className='relative col-span-2 row-span-1'>
          <img className="rounded-xl object-cover w-full h-40 md:hover:drop-shadow-3xl sm:hover:drop-shadow-none" src={bebidas} alt="imagen de bebidas" />
          <p className='absolute w-auto top-4 left-6 rounded-md bg-emerald-950 text-lime-300 p-1 font-medium'>Bebidas</p>
        </div>
        <div className="relative col-span-1 row-span-1">
          <img className="rounded-xl object-cover w-full h-40 md:hover:drop-shadow-3xl" src={frutasYverduras} alt="imagen de frutas y verduras" />
          <p className="absolute w-38 top-4 left-0 rounded-md bg-emerald-950 text-lime-300 p-1 font-medium lg:w-auto lg:left-6">Frutas y verduras</p>
        </div>
        <div className="relative col-span-1 w-full row-span-1">
          <img className="rounded-xl object-cover w-42 h-40 md:hover:drop-shadow-3xl" src={almacen} alt="imagen de articulos de almacen" />
          <p className="absolute w-auto top-4 left-6 rounded-md bg-emerald-950 text-lime-300 p-1 font-medium">Almacen</p>
        </div>
        <div className="relative col-span-2 w-full row-span-1">
          <img className="rounded-xl object-cover w-full h-40 md:hover:drop-shadow-3xl" src={lacteos} alt="imagen de lacteos" />
          <p className="absolute w-auto top-4 left-6 rounded-md bg-emerald-950 text-lime-300 p-1 font-medium">Lacteos</p>
        </div>
      </div>
    </section>
  )
}