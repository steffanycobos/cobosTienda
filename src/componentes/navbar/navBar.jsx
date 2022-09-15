import React from 'react'
import "./navBar.css"
import CartWidget from '../Header/CartWidget'


function Navbar() {
    return (
        <div className="Navbar">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<nav className="navbar navbar-light bg-light ">
  <span id= "titulo" class="navbar-brand mb-0 h1 hvr-grow " >CurlyQueens</span>
</nav>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Productos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">¿Quienes Somos?</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contacto</a>
      </li>

<CartWidget />
      

    </ul>
  </div>
</nav>
        </div>
    )
}
export default Navbar