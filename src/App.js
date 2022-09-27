import "./App.css";
import ItemListContainer from "./componentes/componentes/productos/ItemListContainer";
import Header from "./componentes/Header/Header";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import * as bootstrap from "bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:cat" element={<ItemListContainer />}/>
          <Route path="/detalles/:id" element={<ItemDetailContainer />} />
          <Route
            path="*"
            element={
              <h1>
                404: Por aca no es! <br></br>{" "}
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
      </BrowserRouter>
    </div>
  );
}

export default App;
