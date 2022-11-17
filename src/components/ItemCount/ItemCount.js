import {useState} from 'react'

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
      <p>
        {contador}
      </p>
      <div>
      <button className='btn btn-primary' onClick={less}>Quitar</button>
        <button className='btn btn-primary' onClick={add}>Agregar</button>
      </div>
    </div>
  )
};

export default ItemCount;