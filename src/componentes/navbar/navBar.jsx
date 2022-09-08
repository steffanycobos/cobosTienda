import React from 'react'
import "./navBar.css"


function Navbar() {
    return (
        <div className="Navbar">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<nav class="navbar navbar-light bg-light ">
  <span id= "titulo" class="navbar-brand mb-0 h1">Cobos Tienda</span>
</nav>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Productos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">¿Quienes Somos?</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contacto</a>
      </li>
      

    </ul>
  </div>
</nav>

        </div>
    )
}
export default Navbar