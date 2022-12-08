import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { data } from "../../data/data";

const ItemDetailContainer = () => {

  // const [productSelected, setProductSelected] = useState();
  // const {id} = useParams();

  // const getProduct = () =>{
  //   const productFilter = data.filter((producto)=>{
  //     return producto.id == id
  //   })
  //   setProductSelected(...productFilter)
  // }

  // useEffect(()=>{
  //   getProduct();
  // }, [id])

  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'data', detalleId);
      getDoc(queryDoc)
          .then(res => setData({ id: res.id, ...res.data() }))
  }, [detalleId]);

  return (
    // <>
    // {productSelected &&
    //   <ItemDetail productSelected={productSelected}/>
    // }
    // </>
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer