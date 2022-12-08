import {useState} from 'react'
import './ItemCount.css'

const ItemCount = () => {

const [contador, setContador] = useState(0);

    const add = ()=>{
      setContador(contador + 1)
    }

    const less = ()=>{
      setContador(contador - 1)
    }

  return (
    <div>
      <div className='divCount'>
        <button disabled={contador <= 1} className='btn btn-primary' onClick={less}>-</button>
        <p className='countStyles'>
        {contador}
      </p>
        <button className='btn btn-primary' onClick={add}>+</button>
      </div>
      <div className='divAdd'>
          <button className='btn btn-primary' onClick={add}>Agregar al carrito</button>
      </div>
    </div>
  )
};

export default ItemCount;