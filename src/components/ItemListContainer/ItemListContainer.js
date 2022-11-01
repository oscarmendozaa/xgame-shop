import React from 'react'
import './ItemListContainer.css'
import Swal from 'sweetalert2'

//CSS JS

// const ItemListContainer = () => {
//     console.log(props)
//   return (
//     <div className='message-greeting-container'>
//         <h2 className='message'>{props.name}</h2>
//     </div>
//   )
// }

// export default ItemListContainer

//SWEETALERT

const ItemListContainer = () => {

  Swal.fire({
    title: 'Bienvenido al portal',
    text: 'Xgame-shop',
    imageUrl: 'https://img.unocero.com/2020/12/colaboracion-xbox-playstation-nintendo-seguridad-1-1-1024x512.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })

}

export default ItemListContainer