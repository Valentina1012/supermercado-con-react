import './App.css'
import { useState } from 'react'
import { Header } from './components/Header.jsx'
// import { Menu } from './components/Menu.jsx'
import { Productos } from './components/Productos.jsx'
import { Footer } from './components/Footer.jsx'
import productosJSON from './productos.json'
import { Menu } from './components/Menu.jsx'


function App() {
  const [productos, setProductos] = useState(productosJSON)
  const [prodToSearch, setProdToSearch] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [carrito, setCarrito] = useState([])

  function capitalizeText(str) {
    const strModified = str.toLowerCase()
    return strModified.charAt(0).toUpperCase() + strModified.slice(1)
  }

  const handleFilter = (e) => {
    setShowAll(false)
    setProdToSearch(e.target.value)
  }

  const handleMenu = (e) => {
    const prodFiltrados = productosJSON.filter(p => p.category === e.currentTarget.id)
    setProductos(prodFiltrados)
  }

  const handleProdCarrito = (e) => {
    e.preventDefault()
    const id = e.target.querySelector(".carta-carrito").id
    let cantidad = e.target.querySelector('#cantidad').value
    let productoBuscado = Object.create(productos.filter((prod) => prod.id == id)[0]);
    productoBuscado.cantidad = Number(cantidad)

    if (productoBuscado.cantidad == "" || productoBuscado.cantidad < 1) {
      productoBuscado.cantidad = 1;
    }

    if (carrito.find(p => p.id == productoBuscado.id)) {
      let productoCarrito = carrito.find(p => p.id == productoBuscado.id)
      productoCarrito.cantidad += productoBuscado.cantidad
      setCarrito([...carrito])
    } else {
      setCarrito([...carrito, productoBuscado])
    }
  }

  const productsToShow = showAll ? productos : productos.filter(p => p.name.includes(capitalizeText(prodToSearch)))
  return (
    <>
      <Header filter={handleFilter} handle={(e) => { handleMenu(e) }} cart={carrito} />
      <Menu />
      <Productos list={productsToShow} handleCarrito={(e) => { handleProdCarrito(e) }} />
      <Footer />
    </>
  )
}

export default App
