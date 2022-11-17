import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

const ItemDetail = ({productSelected}) => {

  
  return (
    <div className="cardProductDetail">

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/imagenes/productos/${productSelected.img}`} alt={productSelected.name}/>
      <Card.Body>
        <Card.Title>{productSelected.name}</Card.Title>
        <Card.Text>
          {productSelected.description}
        </Card.Text>
        <Card.Text>
        Precio: ${productSelected.price}
        </Card.Text>
        <Link to={`/item/${productSelected.id}`}><button variant="primary" className="btn btn-primary justify-center">Comprar</button></Link>
      </Card.Body>
    </Card>

</div>

  )
}

export default ItemDetail