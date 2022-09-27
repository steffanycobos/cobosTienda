import React from 'react';
import "./navBar.css";
import CartWidget from '../Header/CartWidget';
import { Link } from "react-router-dom";


function Navbar() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <nav className="navbar navbar-light bg-light ">
            <Link to="/" id="titulo" className="navbar-brand mb-0 h1 hvr-grow ">
              CurlyQueens
            </Link>
          </nav>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link to="/categoria/shampoo" className='nav-link'>Shampoos</Link>
              </li>
              <li className="nav-item">
              <Link to="/categoria/acondicionador" className='nav-link'>Acondicionadores</Link>
              </li>
              <li className="nav-item">
              <Link to="/categoria/cremas" className='nav-link'>Cremas Hidratantes</Link>
              </li>
              <li className="nav-item">
              <Link to="/categoria/accesorios" className='nav-link'>Accesorios</Link>
              </li>

              <CartWidget />
            </ul>
          </div>
        </nav>
      </div>
    );
}
export default Navbar