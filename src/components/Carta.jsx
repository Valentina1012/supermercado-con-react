/* eslint-disable react/prop-types */
import '../styles/carta.css'

export function Carta(props) {
    return (
      <div className="carta">
         <img src={props.urlImage} alt={`imagen de ${props.name}`}/>
         <div className="product-name">{props.name}</div>
         <div className="product-price">{`$ ${props.price}`}</div>
         <form className="add-cart" onSubmit={props.click}>
        <input id="cantidad" type="number" placeholder='0'/>
        <button type="submit" className="carta-carrito" id={props.id}>Añadir</button>
       </form>
       </div>
    )
}