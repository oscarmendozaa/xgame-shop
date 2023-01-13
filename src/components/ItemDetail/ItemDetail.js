import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import { useCartContext } from '../context/CartContext';
import React, {useState} from "react"

const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext()

  const onAdd = (quantity) => {
      setGoToCart(true);
      addProduct(data, quantity);
  }
  
  return (
    <div className="cardProductDetail">

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='imgCss' src={`/imagenes/productos/${data.imageId}`} alt={data.name}/>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text>
        Precio: ${data.price}
        </Card.Text>
        {goToCart}
        {/* <Link to={`/item/${productSelected.id}`}><button variant="primary" className="btn btn-primary justify-center">Comprar</button></Link> */}
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      </Card.Body>
    </Card>




</div>

  )
}

export default ItemDetail