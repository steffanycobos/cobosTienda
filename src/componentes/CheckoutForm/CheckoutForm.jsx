import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createBuyOrder } from "../../services/firestore";
import Swal from "sweetalert2";
import "./CheckoutForm.css";

function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: " ",
    phone: "",
    email: "",
    city: "",
    cp: "",
  });

  const navigate = useNavigate();
  const context = useContext(cartContext);
  const { cart, getItemPrice, emptyCart} = context;

  function handleCheckout(event) {
    event.preventDefault();
    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: getItemPrice(),
    };
    

    createBuyOrder(orderData).then((orderid) => {
      navigate(`/checkout/${orderid}`);
      Swal.fire({
        icon: "success",
        title:
          "<strong> Gracias " +
         (orderData.buyer.name) + 
          " por tu compra👌</strong>",
        html: "Tu ID de compra es <strong> " + orderid + " </strong>",
        footer: new Date(),
        color: "#716add",
        background: "#fff url(/assets/productoFoto/fondoAlert.png)",
        backdrop: `rgba(116,73, 106, 0.4)`,
      });
    })
    
  const form= document.getElementById("form")
form.reset()

}
  

  function inputChangeHandler(event) {
    let inputname = event.target.name;
    let value = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputname] = value;
    setDataForm(newDataForm);
  }
  
  return (
    <>
        <form onSubmit={handleCheckout} id="form">
       
          

          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {" "}
                <strong>Datos Personales</strong>{" "}
              </h3>
            </div>
          </div>

          <div>
            <label htmlFor="first-name">Nombre y Apellido</label> <br />
            <input
              value={dataForm.name}
              onChange={inputChangeHandler}
              name="name"
              type="text"
              placeholder="Nombre y Apellido"
              required-id="first-name"
              autoComplete="given-name"
              required
            />
          </div><br />

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="last-name">Teléfono</label><br />
            <input
              value={dataForm.phone}
              onChange={inputChangeHandler}
              name="phone"
              type="text"
              placeholder="Telefono"
              required
            />
          </div> <br />

          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="email-address">Email</label><br />
            <input
              value={dataForm.email}
              onChange={inputChangeHandler}
              name="email"
              type="text"
              placeholder="Email"
              required
            />
          </div> <br />
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="city">Dirección</label><br />
            <input
              value={dataForm.city}
              onChange={inputChangeHandler}
              name="city"
              type="text"
              placeholder="Dirección"
              required
            />
          </div><br />
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="cp">Código Postal</label> <br />
            <input
              value={dataForm.cp}
              onChange={inputChangeHandler}
              name="cp"
              type="text"
              placeholder="CP"
              required
          
            />
          </div> <br />

          <div>
            <button onClick={emptyCart}  type="submit">Enviar Datos</button>
          </div>
          
        </form>
  
    </>
    

  );

}

export default CheckoutForm;
