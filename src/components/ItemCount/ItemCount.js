import {useState, useEffect} from 'react'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {
const [contador, setContador] = useState(parseInt(initial));

    const add = ()=>{
      setContador(contador + 1)
    }

    const less = ()=>{
      setContador(contador - 1)
    }

    useEffect(() => {
      setContador(parseInt(initial));
  }, [initial])

  return (
    <div>
      <div className='divCount'>
        <button disabled={contador <= 1} className='btn btn-primary' onClick={less}>-</button>
        <p className='countStyles'>
        {contador}
      </p>
        <button disabled={contador >= stock} className='btn btn-primary' onClick={add}>+</button>
      </div>
      <div className='divAdd'>
          <button disabled={stock <=0} className='btn btn-primary' onClick={()=> onAdd(contador)}>Agregar al carrito</button>
      </div>
    </div>
  )
};

export default ItemCount;