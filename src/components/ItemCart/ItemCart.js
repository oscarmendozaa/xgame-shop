import React from "react";
import { useCartContext } from '../context/CartContext';
import './ItemCart.css';
import Card from 'react-bootstrap/Card';


const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
<>
{/* <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={`/images/games/${product.img}`} alt={product.name}/></figure>
  <div className="card-body">
    <h2 className="card-title">Título: {product.name}</h2>
    <p>Cantidad: {product.quantity}</p>
      <p>Precio por unidad: ${product.price}</p>
      <p>Subtotal: ${product.quantity * product.price}</p>
      <p>Cantidad: {product.quantity}</p>
    <div className="card-actions justify-end">
    <button onClick={() => removeProduct(product.id)} className="btn btn-primary">Eliminar</button>
    </div>
  </div>
</div> */}
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/imagenes/productos/${product.imageId}`} alt={product.name}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
      <p>Cantidad: {product.quantity}</p>
      <p>Precio por unidad: ${product.price}</p>
      <p>Subtotal: ${product.quantity * product.price}</p>
      <p>Cantidad: {product.quantity}</p>
        </Card.Text>
        <button onClick={() => removeProduct(product.id)} variant="primary" className="btn btn-primary justify-center">Eliminar</button>
      </Card.Body>
    </Card>





</>
    )
}

export  default ItemCart;