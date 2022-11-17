
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Consolas from './pages/Consolas'
import Juegos from './pages/Juegos'
import MisPedidos from './pages/MisPedidos' 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">


    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='MisPedidos' element={ <MisPedidos/>} />
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
