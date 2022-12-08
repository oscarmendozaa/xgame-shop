import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

const ItemDetail = ({data}) => {

  
  return (
    <div className="cardProductDetail">

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='imgCss' src={`/imagenes/productos/${data.img}`} alt={data.name}/>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Text>
        Precio: ${data.price}
        </Card.Text>
        {/* <Link to={`/item/${productSelected.id}`}><button variant="primary" className="btn btn-primary justify-center">Comprar</button></Link> */}
        <ItemCount/>
      </Card.Body>
    </Card>




</div>

  )
}

export default ItemDetail