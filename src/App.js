
import './App.css';
import ItemListContainer from "./componentes/componentes/productos/ItemListContainer";
import Header from "./componentes/Header/Header";
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from 'bootstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
      <ItemDetailContainer/>
       {/* <ItemListContainer/>*/}
      </header>
     
       
    
    </div>
  );
}

export default App;
