import './Item.css'
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';

const Item = ({info}) => {
  return (
   <>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/imagenes/productos/${info.img}`} alt={info.name}/>
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text>
          {info.description}
        </Card.Text>
        <Card.Text>
        Precio: ${info.price}
        </Card.Text>
        <Link to={`/item/${info.id}`}><button variant="primary" className="btn btn-primary justify-center">Comprar</button></Link>
      </Card.Body>
    </Card>

   </>
  )
}

export default Item