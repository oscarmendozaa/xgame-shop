import {useState} from 'react'
import './ItemCount.css'

const ItemCount = () => {

const [contador, setContador] = useState(0);

    const add = ()=>{
      setContador(contador + 1)
      if(contador === 0){
        return
      }
    }

    const less = ()=>{
      setContador(contador - 1)
    }

  return (
    <div>
      <p className='countStyles'>
        {contador}
      </p>
      <div className='divCount'>
        <button className='btn btn-primary' onClick={less}>Quitar</button>
        <button className='btn btn-primary' onClick={add}>Agregar al carrito</button>
      </div>
    </div>
  )
};

export default ItemCount;