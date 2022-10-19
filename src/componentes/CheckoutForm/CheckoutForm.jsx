import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createBuyOrder } from "../../services/firestore";
import Swal from 'sweetalert2'
import "./CheckoutForm.css";

function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    city:"",
    cp:""
  });

  const navigate = useNavigate();
  const context = useContext(cartContext);
  const { cart, getItemPrice } = context;

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
    });
    Swal.fire({
        icon: 'success',
        title: 'Gracias ' + JSON.stringify(orderData.buyer.name) +'por tu compra.'
    })
   
  }

  function inputChangeHandler(event) {
    let inputName = event.target.name;
    let value = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }


  return (
    <>
      <section>
        <form  onSubmit={handleCheckout}>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900"> <strong>Datos Personales</strong> </h3>
            </div>
          </div>

          <div>
            <label
              htmlFor="first-name"
             
            >
              Nombre y Apellido
            </label>
            <input
              value={dataForm.name}
              onChange={inputChangeHandler}
              name="name"
              type="text"
              placeholder="Nombre y Apellido"
              required-id="first-name"
              autoComplete="given-name"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="last-name"
           
            >
              Teléfono
            </label>
            <input
              value={dataForm.phone}
              onChange={inputChangeHandler}
              name="phone"
              type="text"
              placeholder="Telefono"
              required
             
            />
          </div>

          <div className="col-span-6 sm:col-span-4">
            <label
              htmlFor="email-address"
            
            >
              Email
            </label>
            <input
              value={dataForm.email}
              onChange={inputChangeHandler}
              name="email"
              type="text"
              placeholder="Email"
              required
             
            />
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label
              htmlFor="city"
            >
              Dirección
            </label>
            <input
              value={dataForm.city}
              onChange={inputChangeHandler}
              name="city"
              type="text"
              placeholder="Dirección"
              required
             
            />
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label
              htmlFor="cp"
            >
                Código Postal
            </label>
            <input
              value={dataForm.cp}
              onChange={inputChangeHandler}
              name="cp"
              type="text"
              placeholder="CP"
              required
             
            />
          </div>

          <div>
            <button type="submit" >Guardar</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default CheckoutForm;
