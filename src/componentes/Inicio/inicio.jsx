import React from "react";
import { Link } from "react-router-dom";
import "./inicio.css"

function Inicio(){
    return(
    <section>
        <div className=" posicion"><h2 > Hola!</h2>
        <h3 className="escrito"> Bienvenid@ a
             <Link to="/listado" id="titulo" className="navbar-brand mb-0 h1 hvr-grow ">
              CurlyQueens
            </Link></h3> 
           <p className="p1"> Aqui encontras todo lo necesario para el cuidado de tu cabello y mas. <br /> Da click <strong><Link className="hvr-grow link" to="/listado"> Aqui </Link></strong>  para conocer todos nuestros productos </p>
           
            </div> 
            <div><img className="img2" src="/assets/productoFoto/Asunto(3).png" alt="yo" /></div>
    </section>
        
)}
export default Inicio;