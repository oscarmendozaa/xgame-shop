import React from 'react'
import logo from '../../imagenes/carro.png'
import './CartWidget.css'
import { useCartContext } from '../../components/context/CartContext';


const CartWidget = () => {
   const {totalProducts} = useCartContext();
   return (
     <div className='menu_navbar__logo'>
         <img className='menu-navbar__img' src={logo} alt="cart widget"/>
         <span className="indicator-item">{totalProducts() || ''}</span>
     </div>
  )
}

export default CartWidget