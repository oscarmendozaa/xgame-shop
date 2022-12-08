
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './components/context/CartContext';
import Cart from './components/Cart/Cart';




function App() {
  return (
    <div className="App">

    <BrowserRouter>
     <CartProvider>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
