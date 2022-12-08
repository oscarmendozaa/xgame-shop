import './ItemListContainer.css'
import Swal from 'sweetalert2'
import ItemList from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react'
import { data } from '../../data/data'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


//  const ItemListContainer = () => {
//   const {categoriaId} = useParams();
//   const [productList, setProductList] = useState([]);


// const getProducts = new Promise ((resolve, rejects)=>{
//   setTimeout(()=>{
//     resolve(data)
//   }, 1000)
// })


// useEffect(()=>{
//   getProducts.then((respuesta)=>{
//     if(categoriaId){
//   setProductList(respuesta.filter((data) => data.category === categoriaId ))
//     } else {
//       setProductList(respuesta)
//     }
//   });
//   setTimeout(()=>{
//   }, 1000)
// }, [categoriaId]);

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect (() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'data');
      if (categoriaId) {          
          const queryFilter = query(queryCollection, where('category', '==', categoriaId));
          getDocs(queryFilter)
              .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
      } else {
          getDocs(queryCollection)
              .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
      }
  }, [categoriaId])


  return (
   <>
   <div className='cardProduct'>

   <ItemList data={data}/>

   </div>
   </>
  )
 }



    // Swal.fire({
    //   title: 'Bienvenido al portal',
    //   text: 'Xgame-shop',
    //   imageUrl: 'https:img.unocero.com/2020/12/colaboracion-xbox-playstation-nintendo-seguridad-1-1-1024x512.jpg',
    //   imageWidth: 400,
    //   imageHeight: 200,
    //   imageAlt: 'Custom image',
    // })

 

 export default ItemListContainer