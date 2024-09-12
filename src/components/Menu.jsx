import bebidas from '../imagenes/bebidas.jpg'
import frutasYverduras from '../imagenes/frutas-verduras.jpg'
import lacteos from '../imagenes/lacteos.jpg'
import almacen from '../imagenes/almacen.jpg'
import '../styles/categorias.css'

export function Menu() {
  return (
    <section className='seccion-menu'>
      <h2 className='h2-categorias'>Nuestros productos</h2>
      <div className="menu-categorias">
        <div className='cat'>
          <img className="cat-img" src={bebidas} alt="imagen de bebidas" />
          <p className='cat-texto'>Bebidas</p>
        </div>
        <div className="cat">
          <img className="cat-img" src={frutasYverduras} alt="imagen de frutas y verduras" />
          <p className="cat-texto">Frutas y verduras</p>
        </div>
        <div className="cat">
          <img className="cat-img" src={almacen} alt="imagen de articulos de almacen" />
          <p className="cat-texto">Almacen</p>
        </div>
        <div className="cat">
          <img className="cat-img" src={lacteos} alt="imagen de lacteos" />
          <p className="cat-texto">Lacteos</p>
        </div>
      </div>
    </section>
  )
}