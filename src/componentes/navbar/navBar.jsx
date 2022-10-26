import React from 'react';
import "./navBar.css";
import CartWidget from '../Header/CartWidget';
import { Link } from "react-router-dom";


function Navbar() {
    return (
      <div  className="text-left Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-pink-400 ">
         
            <Link to="/" id="titulo" className="navbar-brand mb-0 h1 hvr-grow ">
              CurlyQueens
            </Link>
            <button className="navbar-toggler btn btn-outline-dark " type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon  "></span>
          </button>
       
          <div className="collapse navbar-collapse " id="navbarNav">
          
            <ul className="navbar-nav"/>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav ">
                  <li className="nav-item ">
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
              
                </ul>
                <CartWidget/>
              </div>
</div>
        </nav>
      </div>
    );
}
export default Navbar