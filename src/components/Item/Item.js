import './Item.css'
import { Link } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({producto}) => {
  return (
   <>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/imagenes/productos/${producto.img}`} alt={producto.name}/>
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
          {producto.description}
        </Card.Text>
        <Card.Text>
        Precio: ${producto.price}
        </Card.Text>
        <Link to={`/item/${producto.id}`}><button variant="primary" className="btn btn-primary justify-center">Comprar</button></Link>
      </Card.Body>
    </Card>

   </>
  )
}

export default Item