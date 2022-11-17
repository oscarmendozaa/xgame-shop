import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { data } from "../../data/data";

const ItemDetailContainer = () => {

  const [productSelected, setProductSelected] = useState();
  const {id} = useParams();

  const getProduct = () =>{
    const productFilter = data.filter((producto)=>{
      return producto.id == id
    })
    setProductSelected(...productFilter)
  }

  useEffect(()=>{
    getProduct();
  }, [id])

  return (
    <>
    {productSelected &&
      <ItemDetail productSelected={productSelected}/>
    }
    </>
  )
}

export default ItemDetailContainer