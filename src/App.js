
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Swal from 'sweetalert2'
import {useEffect} from 'react'

function App() {
  return (
    <div className="App">
      
    <ItemListContainer/>  
    <NavBar/>
    
   
    </div>
  );
}

export default App;
