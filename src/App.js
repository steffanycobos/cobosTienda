import "./App.css";
import ItemListContainer from "./componentes/componentes/productos/ItemListContainer";
import Header from "./componentes/Header/Header";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Inicio from "./componentes/Inicio/inicio"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import * as bootstrap from "bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProvider from "./context/cartContext";
import CartView from "./componentes/CartView/CartView";
import Checkout from "./componentes/Checkout/Checkout";



function App() {
 
  return (
    <div className="App" >
      <BrowserRouter>
      <MyProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/listado" element={<ItemListContainer/>} />
          <Route path="/categoria/:cat" element={<ItemListContainer />}/>
          <Route path="/detalles/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView/>} />
          <Route path="/checkout/:orderid" element={<Checkout />} />
          <Route
            path="*"
            element={
              <h1>
                404:No encontramos lo que estas buscando. <br></br>{" "}
                <iframe
                  src="https://giphy.com/embed/1EmBoG0IL50VIJLWTs"
                  width="480"
                  height="270"
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>{" "}
              </h1>
            }
          />
        </Routes>
        </MyProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
